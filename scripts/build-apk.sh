#!/usr/bin/env bash
# Construit l'APK de Studium sans Android Studio ni Gradle.
#
# Outils nécessaires : Java 11+, curl, python3. Le reste est pris dans le SDK Android
# s'il est installé (ANDROID_HOME), sinon téléchargé une fois dans build/tools :
#   - android.jar (API 34)  : la plateforme Android contre laquelle on compile ;
#   - aapt2                 : compile les ressources et le manifeste (Linux uniquement sans SDK) ;
#   - dx                    : transforme le bytecode Java en bytecode Android (classes.dex) ;
#   - apksig                : signe l'APK (schéma v2, suffisant à partir d'Android 7.0).
#
# Usage : scripts/build-apk.sh [chemin/de/sortie.apk]   (par défaut : build/Studium.apk)
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
APP="$ROOT/app/src/main"
BUILD="$ROOT/build/manual"
TOOLS="$ROOT/build/tools"
OUT="${1:-$ROOT/build/Studium.apk}"

PACKAGE=fr.studium.hk
MIN_SDK=24
TARGET_SDK=34
VERSION_CODE=$(sed -n 's/^[[:space:]]*versionCode[[:space:]]\{1,\}\([0-9]\{1,\}\).*/\1/p' "$ROOT/app/build.gradle" | head -1)
VERSION_NAME=$(sed -n 's/^[[:space:]]*versionName[[:space:]]\{1,\}"\([^"]*\)".*/\1/p' "$ROOT/app/build.gradle" | head -1)

mkdir -p "$TOOLS"
fetch() {
  [ -s "$2" ] && return 0
  echo "Téléchargement de $(basename "$2")…"
  curl -fsSL --retry 4 --retry-delay 5 -o "$2.part" "$1"
  mv "$2.part" "$2"
}

SDK="${ANDROID_HOME:-${ANDROID_SDK_ROOT:-}}"
if [ -n "$SDK" ] && [ -f "$SDK/platforms/android-$TARGET_SDK/android.jar" ]; then
  ANDROID_JAR="$SDK/platforms/android-$TARGET_SDK/android.jar"
else
  ANDROID_JAR="$TOOLS/android-$TARGET_SDK.jar"
  fetch "https://raw.githubusercontent.com/Sable/android-platforms/master/android-$TARGET_SDK/android.jar" "$ANDROID_JAR"
fi

AAPT2=""
if [ -n "$SDK" ]; then
  AAPT2=$(ls "$SDK"/build-tools/*/aapt2 2>/dev/null | sort -V | tail -1 || true)
fi
if [ -z "$AAPT2" ]; then
  if [ "$(uname -s)" != Linux ]; then
    echo "aapt2 introuvable : installe le SDK Android et définis ANDROID_HOME, ou utilise Android Studio." >&2
    exit 1
  fi
  AAPT2="$TOOLS/aapt2"
  fetch "https://raw.githubusercontent.com/iBotPeaches/Apktool/master/brut.apktool/apktool-lib/src/main/resources/prebuilt/linux/aapt2" "$AAPT2"
  chmod +x "$AAPT2"
fi

DX="$TOOLS/dalvik-dx-16.0.1.jar"
fetch "https://repo1.maven.org/maven2/com/jakewharton/android/repackaged/dalvik-dx/16.0.1/dalvik-dx-16.0.1.jar" "$DX"
APKSIG="$TOOLS/apksig-2.3.0.jar"
fetch "https://repo1.maven.org/maven2/com/android/tools/build/apksig/2.3.0/apksig-2.3.0.jar" "$APKSIG"

rm -rf "$BUILD"
mkdir -p "$BUILD/classes" "$BUILD/gen" "$(dirname "$OUT")"

echo "1/4 Ressources et manifeste (version $VERSION_NAME, code $VERSION_CODE)"
# Sous Gradle, le nom du paquet vient de build.gradle (namespace) ; ici on l'ajoute au manifeste.
sed "s|<manifest |<manifest package=\"$PACKAGE\" |" "$APP/AndroidManifest.xml" > "$BUILD/AndroidManifest.xml"
"$AAPT2" compile --dir "$APP/res" -o "$BUILD/res.zip"
"$AAPT2" link -I "$ANDROID_JAR" --manifest "$BUILD/AndroidManifest.xml" \
  --min-sdk-version "$MIN_SDK" --target-sdk-version "$TARGET_SDK" \
  --version-code "$VERSION_CODE" --version-name "$VERSION_NAME" \
  -A "$APP/assets" --java "$BUILD/gen" -o "$BUILD/unsigned.apk" "$BUILD/res.zip"

echo "2/4 Compilation Java"
find "$APP/java" "$BUILD/gen" -name '*.java' > "$BUILD/sources.txt"
javac -nowarn -Xlint:-options -source 8 -target 8 -encoding UTF-8 \
  -bootclasspath "$ANDROID_JAR" -d "$BUILD/classes" @"$BUILD/sources.txt"

echo "3/4 Conversion en classes.dex"
java -cp "$DX" com.android.dx.command.Main --dex --min-sdk-version="$MIN_SDK" \
  --output="$BUILD/classes.dex" "$BUILD/classes"
# Ajoute classes.dex et aligne sur 4 octets les fichiers non compressés (comme zipalign),
# en notant l'alignement dans un champ « extra » 0xD935 que la signature conserve.
python3 - "$BUILD/unsigned.apk" "$BUILD/classes.dex" "$BUILD/aligned.apk" <<'EOF'
import struct, sys, zipfile
src_path, dex_path, out_path = sys.argv[1:]
with zipfile.ZipFile(src_path) as src, zipfile.ZipFile(out_path, 'w') as out:
    entries = [(i, src.read(i.filename)) for i in src.infolist()]
    dex = zipfile.ZipInfo('classes.dex', date_time=(1980, 1, 1, 0, 0, 0))
    dex.compress_type = zipfile.ZIP_DEFLATED
    entries.append((dex, open(dex_path, 'rb').read()))
    for info, data in entries:
        zi = zipfile.ZipInfo(info.filename, date_time=info.date_time)
        zi.compress_type = info.compress_type
        zi.external_attr = info.external_attr
        if zi.compress_type == zipfile.ZIP_STORED:
            start = out.fp.tell() + 30 + len(zi.filename.encode('utf-8')) + 6
            pad = -start % 4
            zi.extra = struct.pack('<HHH', 0xD935, 2 + pad, 4) + bytes(pad)
        out.writestr(zi, data)
EOF

echo "4/4 Signature"
# apksig 2.3.0 utilise des classes internes du JDK : on les rend accessibles.
java --add-exports java.base/sun.security.x509=ALL-UNNAMED \
  -cp "$APKSIG" "$ROOT/scripts/SignApk.java" "$BUILD/aligned.apk" "$OUT" \
  "$ROOT/app/debug.keystore" android androiddebugkey "$MIN_SDK"

echo "Signature v2 vérifiée."
echo "APK prêt : $OUT ($(du -h "$OUT" | cut -f1))"
