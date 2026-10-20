/* Studium — types d'épreuves : étapes guidées de l'atelier et grilles d'auto-évaluation */
window.TYPES = {
  dissertation: {
    label: 'Dissertation', icon: 'pen-line', duree: 240, methode: 'dissertation',
    etapes: [
      { id: 'analyse', titre: 'Analyse du sujet', aide: 'Définis chaque terme, repère la forme de la question (*peut-on*, *faut-il*, *est-ce*…), ses présupposés et les sens possibles des mots.' },
      { id: 'problematique', titre: 'Problématique', rows: 4, aide: 'Fais apparaître la tension ou le paradoxe que le sujet contient, en une ou deux questions. Une bonne problématique montre pourquoi la question se pose.' },
      { id: 'plan', titre: 'Plan détaillé', rows: 12, aide: 'Deux ou trois parties, deux ou trois sous-parties chacune. Une sous-partie = une idée + un argument + un exemple précis (auteur, œuvre, date). Le plan doit progresser, pas juxtaposer.' },
      { id: 'intro', titre: 'Introduction rédigée', rows: 10, aide: 'Accroche → présentation et analyse des termes → problématique → annonce du plan.' },
      { id: 'conclusion', titre: 'Conclusion', rows: 6, aide: 'Bilan du raisonnement, réponse nette à la problématique, ouverture éventuelle (sans nouvelle question gratuite).' }
    ],
    grille: [
      "J'ai défini tous les termes du sujet",
      'Ma problématique fait apparaître une vraie tension',
      'Mon plan progresse : il ne juxtapose pas des idées',
      'Chaque sous-partie contient un exemple précis',
      "J'ai mobilisé des références du cours",
      'Mes transitions relient les parties entre elles',
      'Ma conclusion répond à la problématique',
      "J'ai relu l'orthographe et la syntaxe"
    ]
  },

  'dissertation-citation': {
    label: 'Dissertation sur citation', icon: 'quote', duree: 240, methode: 'dissertation-histoire',
    etapes: [
      { id: 'citation', titre: 'Comprendre la citation', aide: 'Qui parle ? Quand, dans quel ouvrage, dans quel contexte ? Reformule la thèse de la citation avec tes propres mots.' },
      { id: 'termes', titre: 'Analyser les termes', aide: 'Isole les mots forts de la citation et définis-les historiquement. Délimite le sujet dans le temps et dans l\'espace.' },
      { id: 'problematique', titre: 'Problématique', rows: 4, aide: 'Dans quelle mesure la citation éclaire-t-elle la réalité historique ? Où atteint-elle ses limites ?' },
      { id: 'plan', titre: 'Plan détaillé', rows: 12, aide: 'Le plan discute la citation : la confirmer, la nuancer, la dépasser. Chaque argument repose sur des exemples datés, localisés, et sur l\'historiographie.' },
      { id: 'intro', titre: 'Introduction rédigée', rows: 10, aide: 'Citation et auteur → contexte → définition des termes → bornes → problématique → annonce du plan.' },
      { id: 'conclusion', titre: 'Conclusion', rows: 6, aide: 'Réponds à la problématique et reviens à la citation : que vaut-elle finalement ?' }
    ],
    grille: [
      "J'ai présenté l'auteur et le contexte de la citation",
      'Je discute la citation au lieu de la répéter',
      "J'ai défini les bornes chronologiques et spatiales",
      "J'utilise des exemples datés et localisés",
      "Je mentionne l'historiographie (historiens, débats)",
      "Je n'ai pas fait un simple récit chronologique",
      'Ma conclusion revient à la citation'
    ]
  },

  explication: {
    label: 'Explication de texte', icon: 'book-text', duree: 240, methode: 'explication',
    etapes: [
      { id: 'lecture', titre: 'Première lecture : thème et thèse', aide: 'De quoi parle le texte (thème) ? Que soutient l\'auteur (thèse) ? Contre quelle idée (thèse adverse) ?' },
      { id: 'structure', titre: 'Structure du texte', aide: 'Découpe le texte en mouvements (lignes ou vers) et donne un titre à chacun. Repère les connecteurs logiques.' },
      { id: 'probleme', titre: 'Problème, enjeu, projet de lecture', rows: 4, aide: 'Quelle question le texte affronte-t-il ? Qu\'est-ce qui est en jeu ? (En lettres : formule ton projet de lecture.)' },
      { id: 'analyse', titre: 'Explication détaillée (notes)', rows: 14, aide: 'Mouvement par mouvement : cite, analyse les mots et les procédés, explique le raisonnement. Expliquer, c\'est déplier ce qui est implicite, pas paraphraser.' },
      { id: 'intro', titre: 'Introduction rédigée', rows: 10, aide: 'Situer le texte → thème → thèse → problème ou projet de lecture → annonce des mouvements.' },
      { id: 'conclusion', titre: 'Conclusion', rows: 6, aide: 'Bilan : ce que le texte a établi, comment, et son intérêt. Ouverture éventuelle.' }
    ],
    grille: [
      "J'ai situé le texte (œuvre, contexte)",
      "J'ai formulé clairement la thèse ou le projet de lecture",
      "J'ai suivi l'ordre du texte, mouvement par mouvement",
      "J'ai cité précisément (lignes ou vers)",
      "J'ai analysé au lieu de paraphraser",
      "J'ai montré l'enjeu du texte",
      'Ma conclusion fait un bilan et ouvre'
    ]
  },

  commentaire: {
    label: 'Commentaire', icon: 'scroll-text', duree: 240, methode: 'commentaire',
    etapes: [
      { id: 'presentation', titre: 'Présentation du document', aide: 'Nature, auteur, date, destinataire, contexte. Pour un texte antique : genre, œuvre, place du passage.' },
      { id: 'idees', titre: 'Idées principales', rows: 8, aide: 'Relève les idées et informations du document, en citant précisément.' },
      { id: 'problematique', titre: 'Problématique', rows: 4, aide: 'Pose une question qui porte sur le document lui-même et sur ce qu\'il révèle.' },
      { id: 'plan', titre: 'Plan détaillé', rows: 12, aide: 'Plan thématique (pas linéaire) en deux ou trois parties. Chaque argument confronte le document et tes connaissances.' },
      { id: 'intro', titre: 'Introduction rédigée', rows: 10, aide: 'Présentation du document → contexte → problématique → annonce du plan.' },
      { id: 'conclusion', titre: 'Conclusion : portée du document', rows: 6, aide: 'Réponds à la problématique, puis dégage la portée du document : ce qu\'il nous apprend, ses limites, sa postérité.' }
    ],
    grille: [
      "J'ai présenté précisément le document",
      'Ma problématique porte sur le document, pas seulement sur le thème',
      'Mon plan est thématique, pas linéaire',
      'Je cite le document à l\'appui de chaque idée',
      "J'apporte des connaissances extérieures",
      "J'ai un regard critique (point de vue de l'auteur, limites)",
      "J'ai dégagé la portée du document"
    ]
  },

  'commentaire-anglais': {
    label: 'Press commentary', icon: 'newspaper', duree: 240, methode: 'commentary',
    etapes: [
      { id: 'presentation', titre: 'Presentation of the document', aide: 'Source, date, author, type of article (editorial, op-ed, report…). What is it about? *Write in English.*' },
      { id: 'ideas', titre: 'Main ideas & tone', rows: 8, aide: 'Sum up the key points, the author\'s stance and tone (critical, ironic, alarmist, balanced…).' },
      { id: 'issue', titre: 'Issue (problématique)', rows: 3, aide: 'Ask the real question raised by the article: *To what extent…? Why…? Can…?*' },
      { id: 'outline', titre: 'Outline', rows: 12, aide: 'Two or three parts. Each part: an idea, quotes with line numbers, and examples from your own knowledge (UK, US, the English-speaking world).' },
      { id: 'intro', titre: 'Introduction (written)', rows: 8, aide: 'Hook → presentation of the document → main idea → issue → outline.' },
      { id: 'conclusion', titre: 'Conclusion', rows: 6, aide: 'Answer the issue, then widen the perspective (opinion only if the instructions ask for it).' }
    ],
    grille: [
      'I presented the document (source, date, author, nature)',
      'My issue is a real question, not a summary',
      'I analysed the text instead of paraphrasing it',
      'I quoted the text with line numbers',
      'I used precise cultural references',
      'I used varied connectors and vocabulary',
      'I checked tenses, articles and agreements'
    ]
  },

  synthese: {
    label: 'Synthèse de corpus', icon: 'layers', duree: 240, methode: 'synthesis',
    etapes: [
      { id: 'docs', titre: 'Identify the documents', rows: 8, aide: 'For each document (A, B, C…): nature, source, date, main idea in one sentence.' },
      { id: 'theme', titre: 'Common theme & issue', rows: 4, aide: 'What links the documents? What question do they raise *together*?' },
      { id: 'grid', titre: 'Comparison grid', rows: 10, aide: 'Points of convergence and divergence: which documents agree, which disagree, and on what?' },
      { id: 'outline', titre: 'Outline', rows: 8, aide: 'A thematic plan, never document by document. Each paragraph combines several documents.' },
      { id: 'redaction', titre: 'Write your synthesis', rows: 18, aide: 'Neutral tone, no personal opinion, refer to the documents (Doc. A, Doc. B…). Give a title. Respect the word count.', compteur: true }
    ],
    grille: [
      'I gave my synthesis a title',
      'My introduction presents all the documents and the issue',
      'My plan is thematic and crosses the documents',
      'Each paragraph refers to several documents',
      'I stayed neutral (no personal opinion)',
      'I respected the word count',
      'I did not copy whole sentences from the documents'
    ]
  },

  version: {
    label: 'Version', icon: 'languages', duree: 180, methode: 'version',
    etapes: [
      { id: 'brouillon', titre: 'Brouillon : comprendre le texte', rows: 6, aide: 'Lis tout le texte deux fois. Qui parle ? Quels temps ? Quel registre ? Note les mots difficiles et déduis leur sens du contexte.' },
      { id: 'traduction', titre: 'Ma traduction', rows: 16, aide: 'Traduis phrase par phrase, puis relis ta traduction sans regarder l\'original : elle doit se lire comme un texte écrit en français.', compteur: true }
    ],
    grille: [
      "Je n'ai rien omis (aucun mot, aucune phrase)",
      "J'ai choisi des temps cohérents (passé simple / imparfait…)",
      'Mon français est correct et naturel',
      "J'ai respecté le registre du texte",
      "J'ai vérifié les faux amis",
      "J'ai relu l'orthographe et les accords"
    ]
  },

  'etude-de-cas': {
    label: 'Étude de cas', icon: 'earth', duree: 240, methode: 'etude-de-cas',
    etapes: [
      { id: 'localiser', titre: 'Localiser et définir', aide: 'Où ? À quelles échelles (locale, régionale, nationale, mondiale) ? Définis les notions clés du sujet.' },
      { id: 'acteurs', titre: 'Acteurs et enjeux', rows: 6, aide: 'Qui agit (États, collectivités, entreprises, ONG, habitants, peuples autochtones…) ? Quels intérêts s\'opposent ?' },
      { id: 'dynamiques', titre: 'Dynamiques et conflits', rows: 6, aide: 'Quelles évolutions (dates, chiffres) ? Quelles tensions ? Quelles réponses (lois, aménagements, protections) ?' },
      { id: 'plan', titre: 'Plan détaillé', rows: 10, aide: 'Deux ou trois parties qui partent du cas pour l\'expliquer : localisation → acteurs et logiques → limites et perspectives.' },
      { id: 'croquis', titre: 'Croquis ou schéma : la légende', rows: 8, aide: 'Écris la légende organisée de ton croquis : deux ou trois parties, avec les figurés (aplats, flèches, points, hachures).' },
      { id: 'generaliser', titre: 'Monter en généralité', rows: 4, aide: 'En quoi ce cas éclaire-t-il une question plus large ? Compare-le à un autre exemple.' }
    ],
    grille: [
      "J'ai localisé précisément et changé d'échelle",
      "J'ai identifié les acteurs et leurs intérêts",
      "J'ai donné des chiffres et des dates fiables",
      'Mon croquis a une légende organisée',
      'Je suis monté en généralité',
      "J'ai employé le vocabulaire géographique (territoire, acteur, échelle…)"
    ]
  },

  'analyse-filmique': {
    label: 'Analyse filmique', icon: 'clapperboard', duree: 60, methode: 'analyse-filmique',
    etapes: [
      { id: 'contexte', titre: 'Situer la séquence', aide: 'Film, cinéaste, année, place de la séquence dans le film : ce qui précède, ce qui suit.' },
      { id: 'decoupage', titre: 'Découpage', rows: 10, aide: 'Plan par plan (ou par moments) : échelle, angle, mouvement, durée, son, raccords.' },
      { id: 'analyse', titre: 'Analyse : effets et sens', rows: 10, aide: 'Que produisent ces choix de mise en scène sur le spectateur ? Quel sens construisent-ils ?' },
      { id: 'problematique', titre: 'Problématique', rows: 3, aide: 'Une question qui porte sur la mise en scène et ce qu\'elle signifie.' },
      { id: 'plan', titre: 'Plan de l\'analyse', rows: 8, aide: 'Deux ou trois axes d\'interprétation, chacun appuyé sur des plans précis.' },
      { id: 'intro', titre: 'Introduction rédigée', rows: 8, aide: 'Film et cinéaste → situation de la séquence → brève description → problématique → plan.' }
    ],
    grille: [
      "J'ai situé la séquence dans le film",
      "J'ai utilisé un vocabulaire technique précis",
      "J'ai relié chaque observation à un effet ou à un sens",
      "J'ai pris en compte le son et la musique",
      'Ma problématique porte sur la mise en scène',
      "J'ai évité de raconter l'histoire"
    ]
  },

  phrases: {
    label: 'Exercice de langue', icon: 'whole-word', duree: 0, methode: 'version-ancienne', etapes: [], grille: []
  }
};
