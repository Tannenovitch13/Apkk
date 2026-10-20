/* Histoire : dissertation sur citation (DS) et commentaire (khôlles) */

STUDIUM.add({
  id: 'histoire',
  nom: 'Histoire',
  court: 'Le monde grec, d\'Homère à la cité',
  icone: 'hourglass',
  description: 'Le cours d\'histoire ancienne : le monde d\'Homère et la naissance de la Grèce.',
  epreuves: ['DS : dissertation sur citation', 'Khôlle : commentaire'],
  methodes: ['dissertation-histoire', 'commentaire', 'kholle'],
  avertissement: `
    Le **cours 1** reprend le plan distribué en classe, avec la bibliographie du professeur. Ajoute les cours suivants dans l'onglet **Notes** au fur et à mesure (bouton ci-dessous).
  `,
  conseils: `
    ### Comment travailler l'histoire
    - Pour chaque cours, fais une fiche avec : le **plan**, les **dates**, les **lieux**, les **notions** (en grec si possible), les **historiens** cités.
    - En DS, le sujet est **toujours une citation d'auteur** : entraîne-toi à identifier qui parle, quand, et ce que la phrase affirme.
    - En khôlle, tu commentes un **document** : apprends à le présenter précisément (nature, auteur, date, contexte).
    - Les **cartes** comptent : situe Troie, Mycènes, Ithaque, l'Égée, l'Asie Mineure.
  `,

  cours: [
    {
      id: 'homere',
      titre: 'Cours 1 — Le monde d\'Homère',
      resume: 'Homère et l\'histoire ; le monde homérique ; une œuvre universelle',
      contenu: `
        > Heureux qui, comme Ulysse, a fait un beau voyage…
        > — Joachim Du Bellay (1522-1560), *Les Regrets*, sonnet 31 (1558)

        > ==Le monde naît, Homère chante ; c'est l'oiseau de cette aurore.== (…) Homère est un des génies qui résolvent ce beau problème de l'art, le plus beau de tous peut-être, la peinture vraie de l'humanité obtenue par le grandissement de l'homme, c'est-à-dire la génération du réel dans l'idéal. Fable et histoire, hypothèse et tradition, chimère et science, composent Homère. Il est sans fond, et il est riant. Toutes les profondeurs des vieux âges se meuvent, radieusement éclairées, dans le vaste azur de cet esprit.
        > — ==Victor Hugo (1802-1885), éloge des génies, in *William Shakespeare*, 1864==

        :::note Notes prises en cours
        - « Les armes sont le certificat d'identité des héros. »
        - Homère : « celui qui réveille le monde à l'art par l'écriture ».
        - « L'Homme est au centre de l'œuvre d'Homère. »
        - Du Bellay appartient à la Brigade, devenue la Pléiade.
        :::

        ## Plan du cours

        I. Homère et l'histoire
          A. Homère : mythe ou réalité ?
          B. La guerre de Troie a-t-elle eu lieu ?
          C. Quelles réalités géographiques ?
        II. Le monde homérique : « une encyclopédie tribale »
          A. Des héros et des dieux
          B. L'*oikos*
          C. La naissance de la cité ?
        III. Une œuvre universelle
          A. Le poème comme « mémoire de civilisation »
          B. L'épopée comme mythe fondateur d'une identité nationale
          C. Les héritages homériques

        ---

        ## I. Homère et l'histoire

        ### A. Homère : mythe ou réalité ?
        - Les Anciens ne doutaient pas de l'existence d'Homère, mais ne savaient rien de sûr sur lui : sept cités se disputaient sa naissance (Smyrne, Chios…), et la tradition le représentait **aveugle**. Pour **Hérodote** (II, 53), Homère et Hésiode ont vécu « 400 ans avant moi, pas davantage », soit vers le IXᵉ siècle av. J.-C.
        - **La « question homérique »** :
          - **F. A. Wolf**, *Prolegomena ad Homerum* (**1795**) : les poèmes ne seraient pas l'œuvre d'un seul auteur, mais l'assemblage de chants transmis oralement ;
          - au XIXᵉ siècle, les **analystes** cherchent les différentes couches du texte, les **unitaristes** défendent un auteur unique.
        - **Milman Parry** (thèse de **1928**) puis Albert Lord montrent que l'épopée relève d'une **poésie orale formulaire** : les **épithètes** (« Achille aux pieds rapides », « l'Aurore aux doigts de rose ») et les scènes types aident l'**aède** à composer en chantant. Ils le vérifient auprès des chanteurs de Yougoslavie dans les années 1930.
        - **Consensus actuel** :
          - une longue tradition orale d'**aèdes** (dans l'*Odyssée* : Démodocos chez les Phéaciens, Phémios à Ithaque), puis de **rhapsodes** qui récitent ;
          - une composition monumentale au **VIIIᵉ siècle** (vers 750-700 pour l'*Iliade*, un peu plus tard pour l'*Odyssée*), au moment où l'**alphabet** grec se diffuse ;
          - une fixation du texte à **Athènes** au VIᵉ siècle (tradition d'une « recension » sous **Pisistrate**, pour la récitation aux **Panathénées**) ;
          - une édition savante à **Alexandrie** (Zénodote, Aristarque), qui divise chaque poème en **24 chants**.

        :::retenir À retenir
        « Homère » désigne moins un homme qu'une **tradition** : un ou plusieurs poètes ont donné leur forme à des récits transmis oralement pendant des siècles.
        :::

        ### B. La guerre de Troie a-t-elle eu lieu ?
        - Pour les Grecs, oui : **Ératosthène** la date de **1184/1183 av. J.-C.**, Hérodote et Thucydide la tiennent pour un événement historique.
        - **L'archéologie** :
          - **Heinrich Schliemann** fouille la colline d'**Hissarlik** (Turquie, près des Dardanelles) à partir de **1870** ; il croit trouver le « trésor de Priam » (**1873**), en réalité bien plus ancien (Troie II, vers 2500 av. J.-C.). À **Mycènes** (**1876**), le « masque d'Agamemnon » date du XVIᵉ siècle, trop tôt pour la guerre de Troie ;
          - **Carl Blegen** (années 1930) identifie la **Troie VIIa**, détruite vers **1180** ;
          - **Manfred Korfmann** (1988-2005) montre que la ville était bien plus vaste, avec une **ville basse** : une cité importante de l'âge du bronze.
        - **Les textes hittites** mentionnent **Wilusa** (Ilios ?), un roi **Alaksandu** (Alexandros, l'autre nom de Pâris ?) et le pays d'**Ahhiyawa** (les Achéens ?), en conflit pour cette région au XIIIᵉ siècle.
        - **Le débat** : **M. I. Finley** (*Le Monde d'Ulysse*, 1954) est sceptique : la société décrite par Homère serait plutôt celle des **siècles obscurs** (Xᵉ-IXᵉ siècles). La plupart des historiens parlent aujourd'hui d'une **mémoire recomposée** : des souvenirs mycéniens (le casque en dents de sanglier, Mycènes « riche en or »), mêlés à des réalités plus récentes (le fer, la crémation, l'hoplite naissant).

        ### C. Quelles réalités géographiques ?
        - Le **Catalogue des vaisseaux** (*Iliade*, II) énumère **29 contingents** et **1 186 navires** : il reflète en partie la géographie mycénienne (certains sites cités étaient abandonnés ensuite).
        - La **Troade** est décrite avec précision : l'Hellespont, le Scamandre, l'Ida.
        - La géographie de l'*Odyssée* mêle le **réel** (Ithaque, Pylos, Sparte, la Crète, l'Égypte) et l'**imaginaire** (les Cyclopes, Circé, les Sirènes). Les Anciens identifiaient déjà la Schérie des Phéaciens à Corcyre (Corfou).
        - Le géographe **Ératosthène** se moquait de ceux qui cherchaient l'itinéraire d'Ulysse : on le trouvera, disait-il, quand on aura trouvé le cordonnier qui a cousu l'outre des vents (rapporté par **Strabon**, I, 2, 15).
        - L'Ithaque homérique pose problème : elle ne correspond pas parfaitement à l'île actuelle d'Ithaki (hypothèses en faveur de Céphalonie).

        ---

        ## II. Le monde homérique : « une encyclopédie tribale »

        L'expression est de l'helléniste **Eric Havelock** (*Preface to Plato*, 1963) : dans une société sans écriture, les poèmes conservent et transmettent **tous les savoirs** utiles — techniques, rites, règles sociales, généalogies.

        ### A. Des héros et des dieux
        - Les **héros** sont des **aristocrates** (*basileis*, *aristoi*) qui recherchent :
          - l'***aretê*** : l'excellence, d'abord guerrière ;
          - la ***timê*** : l'honneur, la considération, matérialisés par la part d'honneur (*geras*) — la colère d'Achille naît de la perte de Briséis ;
          - le ***kleos*** : la gloire, ce que l'on dira de lui. Achille choisit une vie courte et une « gloire impérissable » (*kleos aphthiton*, *Iliade*, IX) plutôt qu'une vie longue et obscure.
        - Les **armes** disent l'identité du héros : le bouclier d'Achille forgé par Héphaïstos (*Iliade*, XVIII), Patrocle pris pour Achille parce qu'il porte ses armes, les armes d'Achille disputées entre Ajax et Ulysse.
        - Le combat héroïque : l'**aristie** (*aristeia*), moment de gloire d'un héros ; le duel ; le dépouillement de l'ennemi.
        - Les **dieux** sont **anthropomorphes**, passionnés et partiaux : Athéna protège Ulysse, Poséidon le poursuit. Ils interviennent sans cesse, mais Zeus lui-même s'incline devant le **destin** (*moira*).
        - Des rapports codifiés : **sacrifices** (l'**hécatombe**), prières, hospitalité placée sous la protection de **Zeus Xénios**.

        ### B. L'*oikos*
        - L'***oikos*** (la maisonnée) est la **cellule de base** de la société : la famille, les dépendants (serviteurs, esclaves), les terres, les troupeaux, le trésor gardé dans le *thalamos*.
        - Une économie fondée sur l'**autosuffisance** et sur l'**échange de dons** (Finley) : le don crée une obligation de contre-don.
        - L'***hospitalité*** (*xenia*) suit un rituel : accueil, bain, repas, puis seulement les questions sur l'identité de l'hôte, et des cadeaux au départ. Glaucos et Diomède, découvrant que leurs grands-pères étaient liés par l'hospitalité, renoncent à se battre et échangent leurs armes (*Iliade*, VI).
        - L'*Odyssée* est le poème de l'*oikos* menacé : les **prétendants** dévorent les biens d'Ulysse ; **Pénélope** préserve la maison par la ruse (la toile) ; **Télémaque** apprend à devenir un homme ; **Eumée** le porcher incarne la fidélité.
        - Le **retour** (*nostos*) d'Ulysse est la restauration de l'ordre de l'*oikos*.

        ### C. La naissance de la cité ?
        - On trouve dans les poèmes des **institutions** en germe :
          - le ***basileus*** n'est pas un roi absolu mais un **chef** parmi d'autres chefs ;
          - le **conseil** (*boulê*) des anciens et des chefs ;
          - l'**assemblée** (*agora*) : dans l'*Iliade* (II), Thersite y critique Agamemnon et se fait rosser par Ulysse ; dans l'*Odyssée* (II), Télémaque convoque l'assemblée d'Ithaque, la première depuis le départ d'Ulysse ;
          - la **justice** (*themis*, *dikê*) : sur le bouclier d'Achille, des anciens tranchent publiquement un litige sur le prix du sang (*Iliade*, XVIII).
        - **Contre-modèle** : les **Cyclopes**, qui n'ont « ni assemblées ni lois » et vivent chacun pour soi (*Odyssée*, IX).
        - **Modèle idéal** : la cité des **Phéaciens**, avec ses remparts, son port, son agora, ses temples (*Odyssée*, VI).
        - Ces traits reflètent le **VIIIᵉ siècle**, celui de la naissance de la ***polis*** : sanctuaires communs, premières colonies (Pithécusses vers 770), concours d'Olympie (776, date traditionnelle).

        ---

        ## III. Une œuvre universelle

        ### A. Le poème comme « mémoire de civilisation »
        - Homère est l'**éducateur de la Grèce** (Platon, *République*, X) : on apprend à lire avec lui, on le sait par cœur. Dans le *Banquet* de Xénophon (III, 5), Nicératos raconte que son père l'a obligé à apprendre toute l'*Iliade* et toute l'*Odyssée*.
        - **Alexandre** emporte l'*Iliade* en campagne et la garde, dit-on, sous son oreiller avec son poignard (Plutarque, *Vie d'Alexandre*).
        - La **transmission du texte** : rhapsodes, édition alexandrine, manuscrits byzantins (le *Venetus A*, Xᵉ siècle, avec ses commentaires ou **scholies**), première édition imprimée à **Florence** en **1488**.
        - Les poèmes transmettent des **valeurs** (honneur, hospitalité, piété), des **savoirs** (navigation, guerre, rites) et une **langue** commune.

        ### B. L'épopée comme mythe fondateur d'une identité nationale
        - Pour les Grecs, éparpillés en cités rivales, Homère est un **patrimoine commun** : la guerre de Troie est la première entreprise **panhellénique**. Hérodote ouvre son *Enquête* en y voyant l'origine du conflit entre Grecs et Barbares.
        - **Rome** se rattache à Troie : **Énée**, prince troyen, est l'ancêtre des Romains (Virgile, *Énéide*). Livius Andronicus traduit l'*Odyssée* en latin.
        - Au Moyen Âge, des peuples d'Europe s'inventent des ancêtres troyens : le **Roman de Troie** de Benoît de Sainte-Maure (vers 1165), le mythe de **Francus**, fils d'Hector, fondateur des Francs (Ronsard, *La Franciade*, 1572).

        ### C. Les héritages homériques
        - **En littérature** : Virgile, Du Bellay (*Les Regrets*, 1558), Fénelon (*Les Aventures de Télémaque*, 1699), James Joyce (*Ulysse*, 1922), Jean Giraudoux (*La guerre de Troie n'aura pas lieu*, 1935), Derek Walcott (*Omeros*, 1990).
        - **Au cinéma** : *Le Mépris* (Jean-Luc Godard, 1963), *O'Brother* (Joel et Ethan Coen, 2000), *Troie* (Wolfgang Petersen, 2004).
        - **Dans la langue** : une odyssée, un mentor, le talon d'Achille, le cheval de Troie, un travail de Pénélope, tomber de Charybde en Scylla, un rire homérique, une Cassandre.
        - Pour Victor Hugo, Homère est l'« oiseau de cette aurore » : le premier poète, celui avec qui le monde entre dans l'art.

        ---

        ## Bibliographie donnée en cours

        #### Des revues
        - *La Documentation photographique* n° 8013, *Homère : un héritage*, O. Touchefeu-Meynier.
        - *Le Magazine littéraire*, janvier 2004, *Les métamorphoses d'Ulysse*.
        - *Les Collections de L'Histoire* n° 24, juillet-septembre 2004, *La Méditerranée d'Homère, de la guerre de Troie à la mort d'Ulysse*.
        - *L'Histoire* n° 389, juillet-août 2013, *Grèce : des dieux et des hommes*.
        - *Les Collections de L'Histoire* n° 82, janvier 2019, *Homère, le nouveau visage du poète*.

        #### Des ouvrages
        - M. I. Finley, *Le Monde d'Ulysse*, 1954, rééd. Paris, Le Seuil, « Points Histoire », 2002.
        - B. Le Guen, M.-C. D'Ercole, J. Zurbach, *La Naissance de la Grèce, de Minos à Solon, 3200-510 av. J.-C.*, Belin, 2023.
        - J.-C. Poursat, *La Grèce préclassique, des origines à la fin du VIᵉ siècle*, Nouvelle histoire de l'Antiquité, tome 1, Paris, Points Histoire, 1995.
        - P. Vidal-Naquet, *Le Monde d'Homère*, Paris, Perrin, « Tempus », 2002.
      `
    },
    {
      id: 'reperes',
      titre: 'Repères : de Minos à Solon',
      resume: 'Chronologie de la Grèce, de l\'âge du bronze à l\'époque archaïque',
      contenu: `
        Ces repères complètent le cours : la bibliographie (*La Naissance de la Grèce, de Minos à Solon*) couvre cette période. Confronte-les toujours au cours de ton professeur.

        ## L'âge du bronze égéen

        | Période | Repères |
        |---|---|
        | vers 2000-1450 av. J.-C. | **Civilisation minoenne** (Crète) : palais de Cnossos, Phaistos, Malia ; écriture **linéaire A** (non déchiffrée) |
        | vers 1650-1200 | **Civilisation mycénienne** : Mycènes, Pylos, Tirynthe, Thèbes ; palais dirigés par un *wanax* |
        | 1952 | **Michael Ventris** déchiffre le **linéaire B** : c'est du **grec** (tablettes de comptabilité des palais) |
        | vers 1200 | **Effondrement** des palais mycéniens (causes discutées : crises, séismes, migrations, « peuples de la mer ») |

        ## Les « siècles obscurs » (vers 1200-800)
        - Disparition de l'écriture et des palais, baisse de la population.
        - Mais aussi des continuités et des innovations : diffusion du **fer**, migrations vers l'Asie Mineure (Ionie), riche tombe de **Lefkandi** (Eubée, vers 950).

        ## L'époque archaïque (VIIIᵉ siècle-480)

        | Date | Repère |
        |---|---|
        | VIIIᵉ s. | Adoption de l'**alphabet** ; composition des poèmes homériques ; naissance de la ***polis*** |
        | 776 | Premiers concours d'**Olympie** (date traditionnelle) |
        | vers 770 | **Pithécusses** (Ischia), premier établissement grec en Occident |
        | 733 | Fondation de **Syracuse** par Corinthe |
        | vers 700 | **Hésiode**, *Les Travaux et les Jours*, *Théogonie* |
        | VIIᵉ s. | **Phalange hoplitique** ; premières **tyrannies** (Corinthe) |
        | vers 621 | Lois de **Dracon** à Athènes |
        | vers 600 | Fondation de **Marseille** (*Massalia*) par les Phocéens |
        | 594 | **Solon**, archonte : abolition de la servitude pour dettes, réformes |
        | 561-527 | **Pisistrate**, tyran d'Athènes |
        | 508/507 | Réformes de **Clisthène** : naissance de la démocratie athénienne |
        | 490 / 480 | Guerres médiques : Marathon, Salamine |

        :::retenir Les mots à maîtriser
        - ***Polis*** : la cité, communauté de citoyens maîtresse d'un territoire, avec ses institutions et ses dieux.
        - ***Ethnos*** : peuple organisé sans cité centrale (Thessaliens, Étoliens).
        - **Colonie** (*apoikia*) : une cité nouvelle, indépendante de sa métropole.
        - **Hoplite** : fantassin lourdement armé, citoyen-soldat de la phalange.
        :::
      `
    }
  ],

  quiz: [
    {
      id: 'homere',
      titre: 'Le monde d\'Homère',
      questions: [
        { q: 'Qui fouille la colline d\'Hissarlik à partir de 1870 ?', c: ['Heinrich Schliemann', 'Arthur Evans', 'Carl Blegen', 'Michael Ventris'], r: 0 },
        { q: 'Les *Prolegomena ad Homerum* (1795), qui lancent la « question homérique », sont de…', c: ['F. A. Wolf', 'M. Parry', 'M. I. Finley', 'P. Vidal-Naquet'], r: 0 },
        { q: 'Milman Parry a montré que la poésie homérique était…', c: ['une poésie orale formulaire', 'une traduction du hittite', 'une œuvre écrite d\'un seul jet', 'une invention de l\'époque hellénistique'], r: 0 },
        { q: 'En combien de chants l\'*Iliade* est-elle divisée ?', c: ['24', '12', '10', '36'], r: 0, e: 'Division faite par les savants d\'Alexandrie.' },
        { q: 'Le *kleos* désigne…', c: ['la gloire', 'l\'honneur matériel', 'la maisonnée', 'le destin'], r: 0 },
        { q: 'L\'*oikos* est…', c: ['la maisonnée', 'l\'assemblée', 'la cité', 'le conseil'], r: 0 },
        { q: 'Qui convoque l\'assemblée d\'Ithaque au chant II de l\'*Odyssée* ?', c: ['Télémaque', 'Ulysse', 'Pénélope', 'Mentor'], r: 0 },
        { q: 'Dans l\'*Odyssée*, quel peuple n\'a « ni assemblées ni lois » ?', c: ['les Cyclopes', 'les Phéaciens', 'les Lotophages', 'les Lestrygons'], r: 0 },
        { q: 'L\'expression « encyclopédie tribale » est due à…', c: ['Eric Havelock', 'Moses Finley', 'Victor Hugo', 'Pierre Vidal-Naquet'], r: 0 },
        { q: 'Victor Hugo écrit « Le monde naît, Homère chante » dans…', c: ['*William Shakespeare* (1864)', '*Les Misérables* (1862)', '*La Légende des siècles*', '*Les Contemplations* (1856)'], r: 0 },
        { q: 'Dans les textes hittites, *Wilusa* est sans doute…', c: ['Ilios (Troie)', 'Mycènes', 'Ithaque', 'Athènes'], r: 0 },
        { q: 'Glaucos et Diomède renoncent à se battre parce que…', c: ['leurs familles sont liées par l\'hospitalité', 'Zeus le leur ordonne', 'ils sont frères', 'la nuit tombe'], r: 0, e: '*Iliade*, VI : ils échangent leurs armes.' }
      ]
    },
    {
      id: 'chrono',
      titre: 'De Minos à Solon',
      questions: [
        { q: 'Le linéaire B, déchiffré en 1952, note…', c: ['du grec', 'une langue inconnue', 'du phénicien', 'de l\'égyptien'], r: 0 },
        { q: 'Qui a déchiffré le linéaire B ?', c: ['Michael Ventris', 'Arthur Evans', 'Champollion', 'Schliemann'], r: 0 },
        { q: 'Vers quelle date s\'effondrent les palais mycéniens ?', c: ['vers 1200 av. J.-C.', 'vers 2000 av. J.-C.', 'vers 776 av. J.-C.', 'vers 500 av. J.-C.'], r: 0 },
        { q: 'La date traditionnelle des premiers concours d\'Olympie est…', c: ['776', '594', '1184', '508'], r: 0 },
        { q: 'Marseille est fondée vers 600 par…', c: ['les Phocéens', 'les Corinthiens', 'les Athéniens', 'les Spartiates'], r: 0 },
        { q: 'Solon est archonte à Athènes en…', c: ['594', '508', '776', '480'], r: 0 },
        { q: 'Le premier établissement grec en Occident est…', c: ['Pithécusses', 'Syracuse', 'Marseille', 'Cumes'], r: 0, e: 'Vers 770, sur l\'île d\'Ischia.' },
        { q: 'Les réformes de Clisthène datent de…', c: ['508/507', '621', '561', '490'], r: 0 }
      ]
    }
  ],

  cartes: [
    {
      id: 'notions',
      titre: 'Notions homériques',
      cartes: [
        ['ἀρετή (aretê)', 'l\'excellence, la valeur (d\'abord guerrière)'],
        ['τιμή (timê)', 'l\'honneur, la considération, et ses signes matériels'],
        ['κλέος (kleos)', 'la gloire, la renommée ; *kleos aphthiton* : gloire impérissable'],
        ['γέρας (geras)', 'la part d\'honneur (Briséis pour Achille)'],
        ['ξενία (xenia)', 'l\'hospitalité, lien sacré protégé par Zeus Xénios'],
        ['οἶκος (oikos)', 'la maisonnée : famille, dépendants, biens'],
        ['βασιλεύς (basileus)', 'le chef, le « roi » (pouvoir limité)'],
        ['ἀγορά (agora)', 'l\'assemblée ; la place où elle se tient'],
        ['βουλή (boulê)', 'le conseil des anciens et des chefs'],
        ['θέμις / δίκη (themis / dikê)', 'la règle coutumière / la justice, le jugement'],
        ['μοῖρα (moira)', 'le destin, la part assignée'],
        ['ἀριστεία (aristeia)', 'l\'exploit, le moment de gloire d\'un héros au combat'],
        ['νόστος (nostos)', 'le retour (de la guerre de Troie)'],
        ['μῆτις (mêtis)', 'l\'intelligence rusée (d\'Ulysse)'],
        ['ὕβρις (hubris)', 'la démesure'],
        ['ἀοιδός (aoidos)', 'l\'aède, poète qui chante en s\'accompagnant'],
        ['ῥαψῳδός (rhapsôidos)', 'le rhapsode, récitant des poèmes homériques'],
        ['ἑκατόμβη (hekatombê)', 'sacrifice solennel (à l\'origine de cent bœufs)'],
        ['Catalogue des vaisseaux', '*Iliade* II : 29 contingents, 1 186 navires'],
        ['Épithète homérique', 'formule fixe associée à un nom : « Achille aux pieds rapides »']
      ]
    },
    {
      id: 'dates',
      titre: 'Dates et noms clés',
      cartes: [
        ['1795', 'F. A. Wolf, *Prolegomena ad Homerum* : début de la question homérique'],
        ['1870-1873', 'Schliemann à Hissarlik ; le « trésor de Priam » (1873)'],
        ['1876', 'Schliemann à Mycènes : le « masque d\'Agamemnon »'],
        ['1928', 'Thèse de Milman Parry sur l\'épithète traditionnelle'],
        ['1952', 'Ventris déchiffre le linéaire B'],
        ['1954', 'M. I. Finley, *Le Monde d\'Ulysse*'],
        ['1963', 'E. Havelock, *Preface to Plato* (« encyclopédie tribale ») ; *Le Mépris* de Godard'],
        ['1988-2005', 'Fouilles de Manfred Korfmann à Troie'],
        ['1184/1183 av. J.-C.', 'Date de la chute de Troie selon Ératosthène'],
        ['vers 1180 av. J.-C.', 'Destruction de Troie VIIa'],
        ['VIIIᵉ s. av. J.-C.', 'Composition de l\'*Iliade* et de l\'*Odyssée* ; alphabet ; *polis*'],
        ['1864', 'Victor Hugo, *William Shakespeare*'],
        ['1558', 'Du Bellay, *Les Regrets*']
      ]
    }
  ],

  sujets: [
    {
      id: 'hugo',
      type: 'dissertation-citation',
      titre: '« Le monde naît, Homère chante » (V. Hugo)',
      enonce: '« Le monde naît, Homère chante ; c\'est l\'oiseau de cette aurore. » (Victor Hugo, *William Shakespeare*, 1864). Discutez cette affirmation.',
      pistes: `
        ### Comprendre la citation
        - Hugo, poète romantique, écrit en **1864** (en exil à Guernesey) un essai sur les **génies** de l'humanité. Homère y est le premier.
        - Thèse : Homère est le poète des **origines** ; avec lui, le monde grec (et l'art) naît.
        - Ce n'est pas un historien qui parle : l'image est **poétique** (l'oiseau, l'aurore).

        ### Problématique possible
        Les poèmes homériques sont-ils le chant d'un monde **naissant**, ou la **mémoire recomposée** d'un monde déjà ancien, au moment où naît la cité ?

        ### Plan possible
        - **I. Homère, chant d'une aurore : les poèmes aux origines de la Grèce**
          - A. Les premiers grands textes grecs, contemporains de l'alphabet (VIIIᵉ s.).
          - B. Un monde « naissant » : institutions en germe (agora, boulê, justice), naissance de la *polis*.
          - C. Une « encyclopédie tribale » (Havelock) qui fonde une culture commune.
        - **II. Mais un chant qui vient après : mémoire et reconstruction**
          - A. Une tradition orale séculaire (Parry), des aèdes avant Homère.
          - B. Un monde mycénien disparu, mêlé aux réalités des siècles obscurs (Finley) : une mémoire composite.
          - C. Troie : réalité archéologique (Troie VIIa, Wilusa) et légende.
        - **III. L'aurore d'une civilisation qui se reconnaît en Homère**
          - A. Homère, éducateur de la Grèce (Platon) : les poèmes créent une identité panhellénique.
          - B. Une œuvre universelle, sans cesse relue : Rome (Énée), Du Bellay, Joyce, Godard.
          - C. Hugo lui-même témoigne de cette réception : l'« aurore » est aussi une construction des modernes.

        ### Exemples à mobiliser
        Schliemann, Blegen, Korfmann ; le Catalogue des vaisseaux ; Thersite (*Il.* II) ; l'assemblée d'Ithaque (*Od.* II) ; les Cyclopes (*Od.* IX) ; le bouclier d'Achille (*Il.* XVIII).
      `
    },
    {
      id: 'havelock',
      type: 'dissertation-citation',
      titre: '« Une encyclopédie tribale » (E. Havelock)',
      enonce: 'L\'helléniste Eric Havelock qualifie les poèmes homériques d\'« encyclopédie tribale » (*Preface to Plato*, 1963). Discutez.',
      pistes: `
        ### Comprendre la citation
        - Havelock, spécialiste de l'**oralité**, explique pourquoi Platon s'en prend aux poètes : dans une culture sans écriture, Homère était la **mémoire** de tous les savoirs.
        - *Encyclopédie* : savoir total, organisé. *Tribale* : propre à un groupe, transmis oralement, non critique.

        ### Problématique possible
        Les poèmes homériques sont-ils le dépôt des savoirs d'une société orale, ou une œuvre poétique qui recompose librement le monde qu'elle décrit ?

        ### Plan possible
        - **I. Des poèmes qui conservent les savoirs d'une société**
          - Techniques (navigation, construction d'un radeau, armes), rites (sacrifices), règles (hospitalité), généalogies, géographie (Catalogue).
        - **II. Un miroir déformant**
          - Composition poétique, anachronismes, mélange d'époques ; dieux et merveilleux ; un monde aristocratique (les humbles, comme Thersite, sont ridiculisés).
        - **III. Une encyclopédie qui devient le socle d'une civilisation**
          - Éducation, récitations, références communes ; critique de Platon ; héritage universel.
      `
    },
    {
      id: 'cyclopes',
      type: 'commentaire',
      kholle: true,
      duree: 60,
      titre: 'Homère, *Odyssée*, IX : le pays des Cyclopes',
      enonce: 'Commentez ce document.',
      texte: `
        De là nous voguâmes plus loin, le cœur affligé.
        Nous arrivâmes au pays des Cyclopes, ces êtres orgueilleux et sans lois,
        qui, se fiant aux dieux immortels,
        ne plantent rien de leurs mains et ne labourent pas ;
        tout pousse pour eux sans semailles ni labour,
        le blé, l'orge, et les vignes qui portent un vin de belles grappes,
        que fait croître pour eux la pluie de Zeus.
        Ils n'ont ni assemblées où l'on délibère, ni lois ;
        ils habitent les sommets des hautes montagnes,
        dans des grottes creuses ; chacun dicte la loi
        à ses enfants et à ses femmes, et ils ne se soucient pas les uns des autres.
      `,
      vers: true,
      source: 'Homère, *Odyssée*, chant IX, v. 105-115 (VIIIᵉ siècle av. J.-C.). Ulysse fait le récit de ses aventures au roi des Phéaciens. Traduction de travail adaptée pour l\'entraînement.',
      pistes: `
        ### Présentation
        - Extrait de l'*Odyssée*, chant IX : **Ulysse lui-même** raconte ses errances aux Phéaciens (récit enchâssé).
        - Composition vers la fin du VIIIᵉ siècle, au moment de la naissance de la **polis** et de la **colonisation**.

        ### Problématique possible
        En décrivant les Cyclopes comme l'envers de la civilisation, que nous apprend ce passage sur l'idéal de la cité qui naît à l'époque d'Homère ?

        ### Plan possible
        - **I. Un monde d'abondance sans travail**
          - Âge d'or : la terre donne tout sans agriculture (blé, orge, vigne).
          - Mais l'absence de **travail agricole** est, pour un Grec, un signe de **sauvagerie** : la civilisation, c'est le labour, la vigne cultivée (Hésiode).
        - **II. Une société sans cité : l'anti-modèle politique**
          - « Ni assemblées (*agorai boulêphoroi*) ni lois (*themistes*) » : définition en creux de la **polis**.
          - Habitat dispersé dans les grottes, chacun maître de sa famille : l'**oikos** isolé, sans communauté.
          - Orgueil et indifférence : ni hospitalité (Polyphème dévorera les compagnons), ni piété réelle.
        - **III. Un document sur la mentalité grecque du VIIIᵉ siècle**
          - Le regard du **colonisateur** : juste après ce passage, Ulysse décrit une île voisine fertile, qu'on pourrait cultiver et doter d'un port.
          - Une **géographie imaginaire** (où situer les Cyclopes ?) mais des valeurs réelles.
          - Comparer avec la cité idéale des **Phéaciens** (*Od.* VI) et la cité en paix du **bouclier d'Achille**.

        ### Portée
        Le texte définit la civilisation par la **culture du sol**, la **délibération collective**, la **loi** et l'**hospitalité** : les fondements de la cité grecque.
      `
    },
    {
      id: 'bouclier',
      type: 'commentaire',
      kholle: true,
      duree: 60,
      titre: 'Homère, *Iliade*, XVIII : la cité en paix sur le bouclier d\'Achille',
      enonce: 'Commentez ce document.',
      texte: `
        Il y représenta deux belles cités des hommes.
        Dans l'une, ce sont des noces et des festins : à la lueur des torches,
        on conduit les épousées hors de leurs chambres à travers la ville, et le chant d'hyménée s'élève.
        Les gens sont rassemblés sur l'agora : une querelle s'y est élevée.
        Deux hommes se disputent au sujet du prix du sang d'un homme tué :
        l'un affirme avoir tout payé et l'expose au peuple, l'autre nie avoir rien reçu ;
        tous deux veulent s'en remettre à un arbitre pour trancher.
        Le peuple acclame l'un et l'autre, prenant parti pour chacun ; des hérauts contiennent la foule.
        Les anciens sont assis sur des pierres polies, dans le cercle sacré ;
        ils tiennent en main les sceptres des hérauts à la voix sonore ;
        avec eux, ils se lèvent et rendent tour à tour leur jugement.
        Au milieu sont posés deux talents d'or,
        pour celui d'entre eux qui prononcera la sentence la plus droite.
      `,
      vers: true,
      source: 'Homère, *Iliade*, chant XVIII, v. 490-508. Le dieu Héphaïstos forge un nouveau bouclier pour Achille, à la demande de Thétis. Traduction de travail adaptée pour l\'entraînement.',
      pistes: `
        ### Présentation
        - Une **ekphrasis** (description d'une œuvre d'art) : le bouclier forgé par Héphaïstos représente le monde entier (ciel, cités, campagnes, océan).
        - Les deux cités : l'une en **paix** (noces, procès), l'autre en **guerre** (assiégée).

        ### Problématique possible
        Que révèle cette scène de la cité en paix sur l'émergence d'institutions collectives et d'une justice publique à l'époque homérique ?

        ### Plan possible
        - **I. Une cité vivante et harmonieuse**
          - Rites collectifs : mariages, festins, chants : une communauté unie.
        - **II. La naissance d'une justice publique**
          - Un conflit privé (meurtre, **prix du sang** ou *poinê*) porté devant la communauté : on passe de la vengeance au **jugement**.
          - Les acteurs : le **peuple** (*laos*) sur l'agora, les **hérauts**, les **anciens** (*gerontes*) assis dans le cercle sacré, le **sceptre** qui donne la parole, l'**arbitre** (*histôr*).
          - La « sentence la plus droite » (*dikê ithuntatê*) : une justice qui se veut juste, récompensée publiquement.
        - **III. Un document sur la naissance de la *polis***
          - Agora, conseil, justice : les institutions en germe de la cité (VIIIᵉ siècle).
          - Limites : une image idéale, sur un objet divin ; on ne sait pas exactement comment le jugement est rendu.
          - Comparer avec les **Cyclopes** sans lois (*Od.* IX) et avec Hésiode, qui dénonce les rois « mangeurs de présents ».
      `
    },
    {
      id: 'herodote',
      type: 'commentaire',
      kholle: true,
      duree: 60,
      titre: 'Hérodote, le prologue de l\'*Enquête*',
      enonce: 'Commentez ce document.',
      texte: `
        Hérodote d'Halicarnasse présente ici les résultats de son enquête,
        afin que le temps n'abolisse pas le souvenir des actions des hommes,
        et que les grands et merveilleux exploits accomplis tant par les Grecs que par les Barbares
        ne cessent pas d'être renommés ;
        il expose en particulier la cause pour laquelle ils se firent la guerre.
      `,
      source: 'Hérodote, *Enquête* (*Histoires*), I, 1 (vers 430 av. J.-C.). Traduction de travail adaptée pour l\'entraînement.',
      pistes: `
        ### Présentation
        - Hérodote (vers 484-425), né à **Halicarnasse** (Asie Mineure), voyage dans tout le monde méditerranéen. Son œuvre porte sur les **guerres médiques** et leurs origines.
        - Le **prologue** (I, 1) : une déclaration d'intention.

        ### Problématique possible
        En quoi ce prologue fonde-t-il un nouveau rapport au passé, entre héritage épique et démarche d'enquête ?

        ### Plan possible
        - **I. Un auteur qui se nomme : la naissance de l'historien**
          - Contrairement à l'aède, qui invoque la Muse, Hérodote signe son œuvre et présente une ***historia***, une **enquête**.
        - **II. Lutter contre l'oubli : un héritage épique**
          - Préserver la mémoire des « grands exploits » : écho direct au ***kleos*** homérique.
          - Grecs **et** Barbares : une ouverture remarquable.
        - **III. Chercher les causes**
          - « La cause » (*aitiê*) de la guerre : une démarche explicative. Hérodote rapporte ensuite les explications mythiques (enlèvements d'Io, d'Europe, d'Hélène) avant de s'en détacher.
          - Portée : le « père de l'histoire » (Cicéron) ; comparer avec Thucydide, plus critique.
      `
    }
  ]
});
