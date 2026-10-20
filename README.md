# Studium — l'appli de travail pour l'hypokhâgne

Application Android pour réviser ses cours d'hypokhâgne (lycée Frédéric-Mistral, Avignon) : des cours rédigés, des quiz, des cartes mémoire et un **atelier guidé** pour s'entraîner aux dissertations, explications de texte, commentaires, synthèses de corpus, versions, études de cas et analyses filmiques.

L'interface est blanche avec du rouge pour tout ce qui est interactif (boutons, roue crantée, onglets). Tout fonctionne **hors ligne** et les données restent sur le téléphone.

## Installer l'appli

1. Récupère le fichier **`apk/Studium.apk`** de ce dépôt (ou l'artefact *Studium-apk* de la dernière exécution de l'onglet **Actions**).
2. Ouvre-le sur le téléphone Android (Android 7.0 ou plus récent).
3. Si Android le demande, autorise l'installation d'applications depuis cette source (*Paramètres › Sécurité › Sources inconnues*, ou la fenêtre qui s'affiche).
4. L'appli **Studium** apparaît avec son icône de laurier rouge.

Les nouvelles versions s'installent par-dessus l'ancienne sans perdre la progression : elles sont toutes signées avec la même clé.

## Ce qu'il y a dedans

| Matière | Épreuves travaillées |
|---|---|
| Latin | exercices de langue, version, maîtrise du français |
| Grec ancien | alphabet, grammaire, version, maîtrise du français |
| Philosophie | dissertation, explication de texte |
| Culture antique (« Connaître et transmettre ») | commentaire |
| Histoire (cours 1 : *Le monde d'Homère*) | dissertation sur citation (DS), commentaire (khôlles) |
| Littérature (poésie → théâtre → roman) | dissertation, explication de texte |
| Cinéma | dissertation (DS), analyse filmique (khôlles) |
| Anglais presse | commentaire, synthèse de corpus |
| Anglais littéraire | version |
| Géographie (la forêt) | étude de cas, dissertation |

Pour chaque matière :

- **Cours** : fiches rédigées et bien hiérarchisées (plans en I. / A. / 1., tableaux de déclinaisons, encadrés « À retenir »).
- **Exercices** :
  - des **quiz** corrigés et expliqués ;
  - des **cartes mémoire** avec répétition espacée (elles reviennent après 1, 3, 7, 14 puis 30 jours) ;
  - des **sujets d'entraînement** : l'atelier guide étape par étape (analyse du sujet, problématique, plan, introduction…), enregistre tout automatiquement, débloque des **pistes de correction** une fois le travail fini et propose une **grille d'auto-évaluation**. On peut partager sa copie (mail, Drive…).
- **Méthode** : fiches méthode pour chaque type d'épreuve, la khôlle et l'organisation.
- **Notes** : pour recopier les plans et bibliographies donnés en cours (mise en forme simple : `#` titres, `-` listes, `**gras**`).

Et aussi : un **défi du jour** (une question par matière), une **citation latine ou grecque** quotidienne, un **chrono** (Pomodoro, DS de 4 h ou 6 h), le suivi du temps de travail et des jours d'affilée, une **recherche** dans tout le contenu, et les liens vers les sites des professeurs (onglet *Ressources*, icône marque-page de l'accueil).

> Les cours et corrigés sont des **fiches de révision** rédigées à partir du programme et des plans de cours ; ils ne remplacent pas les cours des professeurs, qui font foi. Les traductions de textes antiques sont des traductions de travail.

## Modifier ou ajouter du contenu

Tout le contenu est dans `app/src/main/assets/www/data/`, un fichier par matière (`latin.js`, `histoire.js`…). Chaque fichier décrit la matière ainsi :

```js
STUDIUM.add({
  id: 'histoire',
  nom: 'Histoire',
  cours: [ { id: 'homere', titre: 'Cours 1 — Le monde d\'Homère', contenu: `texte au format Markdown simplifié` } ],
  quiz: [ { id: 'homere', titre: '…', questions: [ { q: 'Question', c: ['bonne réponse', 'mauvaise', '…'], r: 0, e: 'explication' } ] } ],
  cartes: [ { id: 'notions', titre: '…', cartes: [ ['recto', 'verso', 'précision facultative'] ] } ],
  sujets: [ { id: 'hugo', type: 'dissertation-citation', titre: '…', enonce: '…', texte: '…', pistes: `…` } ]
});
```

- Dans les quiz, `r` est l'indice de la bonne réponse ; l'ordre des choix est mélangé à l'affichage.
- Types de sujets : `dissertation`, `dissertation-citation`, `explication`, `commentaire`, `commentaire-anglais`, `synthese`, `version`, `etude-de-cas`, `analyse-filmique`, `phrases` (voir `js/types.js`).
- Mise en forme des textes : `#`/`##`/`###` titres, `- ` puces, `I.` `A.` `1.` plans (indenter de 2 espaces pour imbriquer), `**gras**`, `*italique*`, `==surligné==`, `> citation`, tableaux `| a | b |`, encadrés `:::retenir Titre … :::` (aussi `def`, `attention`, `exemple`, `methode`, `note`, `astuce`).

Pour tester sans téléphone : `python3 -m http.server -d app/src/main/assets/www` puis ouvrir http://localhost:8000 dans un navigateur (en mode mobile).

## Construire l'APK

Trois possibilités :

1. **Android Studio** : ouvrir le dossier du projet, puis *Build › Build APK(s)*.
2. **Gradle** (avec le SDK Android installé) : `./gradlew assembleRelease` → `app/build/outputs/apk/release/app-release.apk`.
3. **Sans Android Studio** (Linux, Java 11+, Python 3) : `scripts/build-apk.sh` → `build/Studium.apk`. Le script télécharge les outils nécessaires (aapt2, android.jar, dx, apksig) s'il ne trouve pas de SDK Android.

À chaque envoi sur GitHub, le workflow **Build APK** (`.github/workflows/build-apk.yml`) compile l'APK et le met à disposition dans l'onglet *Actions* ; un tag `v*` publie aussi une *Release*.

Pense à augmenter `versionCode` et `versionName` dans `app/build.gradle` à chaque nouvelle version.

## Structure

```
app/src/main/
├── AndroidManifest.xml
├── java/fr/studium/hk/MainActivity.java   ← fenêtre Android (WebView) et fonctions natives
├── res/                                   ← icônes, thème, nom de l'appli
└── assets/www/
    ├── index.html
    ├── css/app.css                        ← le style (couleurs en haut du fichier)
    ├── js/core.js                         ← sauvegarde, outils, rendu des textes
    ├── js/types.js                        ← étapes et grilles de chaque type d'épreuve
    ├── js/app.js                          ← écrans : accueil, matières, quiz, cartes, atelier, chrono…
    └── data/                              ← le contenu de chaque matière, les méthodes, les citations
```

## Crédits

- Icônes : [Lucide](https://lucide.dev) (licence ISC).
- Police : [EB Garamond](https://github.com/octaviopardo/EBGaramond12) (licence SIL Open Font License, voir `fonts/OFL-EB-Garamond.txt`).
- La clé `app/debug.keystore` est une clé de débogage au mot de passe public (`android`) : elle suffit pour installer l'appli soi-même, pas pour la publier sur le Play Store.
