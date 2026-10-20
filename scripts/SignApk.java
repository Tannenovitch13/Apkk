import com.android.apksig.ApkSigner;
import com.android.apksig.ApkVerifier;

import java.io.File;
import java.io.FileInputStream;
import java.security.KeyStore;
import java.security.PrivateKey;
import java.security.cert.Certificate;
import java.security.cert.X509Certificate;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

/**
 * Signe (schéma v2) puis vérifie un APK avec la bibliothèque apksig.
 * Le schéma v1 (JAR) n'est utile qu'avant Android 7.0 : l'appli demande au moins Android 7.0 (API 24).
 * Usage : java -cp apksig.jar SignApk.java <entrée.apk> <sortie.apk> <keystore> <mot de passe> <alias> <minSdk>
 * L'alignement des fichiers non compressés, fait avant (voir build-apk.sh), est conservé.
 */
public class SignApk {
    public static void main(String[] args) throws Exception {
        File in = new File(args[0]), out = new File(args[1]);
        char[] pass = args[3].toCharArray();
        int minSdk = Integer.parseInt(args[5]);

        KeyStore ks = KeyStore.getInstance(KeyStore.getDefaultType());
        try (FileInputStream f = new FileInputStream(args[2])) {
            ks.load(f, pass);
        }
        PrivateKey key = (PrivateKey) ks.getKey(args[4], pass);
        List<X509Certificate> certs = new ArrayList<>();
        for (Certificate c : ks.getCertificateChain(args[4])) certs.add((X509Certificate) c);

        ApkSigner.SignerConfig signer = new ApkSigner.SignerConfig.Builder("CERT", key, certs).build();
        new ApkSigner.Builder(Collections.singletonList(signer))
                .setInputApk(in)
                .setOutputApk(out)
                .setMinSdkVersion(minSdk)
                .setV1SigningEnabled(false)
                .setV2SigningEnabled(true)
                .build()
                .sign();

        ApkVerifier.Result r = new ApkVerifier.Builder(out).build().verify();
        if (!r.isVerified()) {
            System.err.println("Signature invalide : " + r.getErrors());
            System.exit(1);
        }
    }
}
