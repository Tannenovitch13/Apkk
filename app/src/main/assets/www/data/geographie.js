/* Géographie : étude de cas et dissertation — cours de l'année sur la forêt */

STUDIUM.add({
  id: 'geographie',
  nom: 'Géographie',
  court: 'La forêt',
  icone: 'trees',
  description: 'Les forêts du monde et de la France : définitions, usages, acteurs, dynamiques et risques.',
  epreuves: ['Étude de cas', 'Dissertation'],
  methodes: ['etude-de-cas', 'dissertation', 'kholle'],
  avertissement: `
    Le **plan complet du cours sur la forêt** est dans les **documents du 10 septembre** sur le site Œcoumène (lien dans **Ressources**), avec les diaporamas mis à jour après chaque cours. Les fiches ci-dessous sont des **fiches de révision** : complète-les avec le plan du professeur dans l'onglet **Notes**.
  `,
  conseils: `
    ### Comment travailler la géographie
    - Pour chaque séance, récupère le **diaporama** sur Œcoumène et fais une fiche : notions, chiffres, exemples localisés.
    - Retiens des **chiffres clés** (avec leur source et leur date) : ils rendent une copie crédible.
    - Constitue un **stock d'études de cas** (Amazonie, Landes, forêt boréale, Bornéo, Guyane…) que tu pourras mobiliser en dissertation.
    - Entraîne-toi au **croquis** : légende organisée, figurés simples, nomenclature soignée.
  `,

  cours: [
    {
      id: 'definir',
      titre: 'La forêt : définir, mesurer, localiser',
      resume: 'Définitions, chiffres mondiaux, grands biomes',
      contenu: `
        ## Définir la forêt
        - **Définition de la FAO** : un terrain de plus de **0,5 hectare**, avec des arbres de plus de **5 mètres** et un **couvert arboré** de plus de **10 %**, qui n'est pas principalement à usage agricole ou urbain.
        - Une définition **statistique**, discutée : une plantation de palmiers à huile, une coupe rase destinée à repousser… sont-elles des forêts ?
        - Le mot vient du latin médiéval *forestis* (*silva*), un espace « en dehors » (*foris*), réservé au seigneur, souvent pour la chasse : la forêt est d'emblée un **espace juridique** et un **territoire de pouvoir**.

        :::def Vocabulaire
        - **Forêt primaire** : forêt d'essences locales où l'action humaine n'a pas laissé de traces visibles.
        - **Forêt plantée** : issue de plantations ou de semis volontaires.
        - **Sylviculture** : gestion et exploitation des forêts.
        - **Déforestation** : conversion de la forêt à un autre usage (agriculture, ville).
        - **Dégradation** : la forêt demeure mais s'appauvrit (coupes sélectives, incendies).
        - **Reboisement** / **afforestation** : replanter là où il y avait une forêt / boiser un espace qui n'en avait pas.
        :::

        ## Mesurer : la forêt mondiale en chiffres (FAO, *FRA 2020*)
        - Environ **4,06 milliards d'hectares**, soit **31 %** des terres émergées.
        - Plus de la **moitié** des forêts se trouve dans **cinq pays** : **Russie**, **Brésil**, **Canada**, **États-Unis**, **Chine**.
        - Répartition par domaine climatique : **tropical** (45 %), **boréal** (27 %), **tempéré** (16 %), **subtropical** (11 %).
        - Environ **1,1 milliard d'hectares** de forêts primaires ; environ **7 %** de forêts plantées.
        - La forêt abrite l'essentiel de la **biodiversité terrestre** : selon la FAO, 80 % des espèces d'amphibiens, 75 % des espèces d'oiseaux et 68 % des espèces de mammifères.

        ## Localiser : les grands ensembles forestiers
        - **La forêt boréale** (taïga) : Russie, Canada, Scandinavie ; conifères, faible biodiversité, immenses superficies ; menacée par les incendies et le dégel.
        - **Les forêts tempérées** : Europe, est des États-Unis, Chine ; feuillus et résineux ; forêts très **anthropisées** et souvent en **progression**.
        - **Les forêts tropicales humides** : Amazonie, bassin du Congo, Asie du Sud-Est ; biodiversité exceptionnelle ; principaux **fronts de déforestation**.
        - **Les forêts sèches et méditerranéennes** : formations ouvertes, adaptées à la sécheresse ; vulnérables aux incendies.

        :::retenir Une idée directrice
        La forêt n'est pas un milieu « naturel » à l'écart des sociétés : c'est un espace **approprié**, **aménagé**, **exploité** et **protégé** par des acteurs aux intérêts différents. C'est cela qui en fait un objet géographique.
        :::
      `
    },
    {
      id: 'ressource',
      titre: 'Une ressource convoitée : usages et acteurs',
      resume: 'Fonctions de la forêt, acteurs, conflits d\'usage',
      contenu: `
        ## Les fonctions de la forêt
        - **Économique** (production) :
          - **bois d'œuvre** (construction, meubles), **bois d'industrie** (papier, panneaux), **bois-énergie** (une grande part du bois récolté dans le monde sert de combustible, surtout dans les pays du Sud) ;
          - produits forestiers non ligneux : caoutchouc, fruits, liège, gibier, plantes médicinales.
        - **Environnementale** :
          - **biodiversité** ;
          - **puits de carbone** : la forêt stocke du carbone, mais en relâche quand elle brûle ou est défrichée ;
          - régulation de l'**eau** et protection des **sols** (contre l'érosion, les crues, les avalanches en montagne).
        - **Sociale et culturelle** : lieu de vie de peuples **autochtones**, loisirs, tourisme, patrimoine, imaginaire (la forêt des contes, la forêt sacrée).

        ## Les acteurs
        - **Les États** : propriétaires de vastes forêts publiques, ils légifèrent, protègent (parcs nationaux) ou encouragent la mise en valeur (fronts pionniers).
        - **Les collectivités locales** : forêts communales, aménagement, tourisme.
        - **Les propriétaires privés** : en France, la grande majorité de la forêt est privée.
        - **Les entreprises** : exploitants forestiers, industries du bois et du papier, agro-industrie (soja, élevage, palmier à huile), compagnies minières.
        - **Les peuples autochtones et communautés locales** : leurs droits sur les terres sont souvent un facteur de protection de la forêt.
        - **Les ONG** (WWF, Greenpeace…) et les **organisations internationales** (FAO, ONU avec le mécanisme **REDD+**).
        - **Les consommateurs** des pays importateurs, à travers la **déforestation importée** (soja, bœuf, huile de palme, cacao).

        ## Des conflits d'usage
        - **Produire ou protéger ?** Exploitation du bois contre conservation de la biodiversité.
        - **Défricher ou préserver ?** Agriculture et élevage contre maintien de la forêt.
        - **Habiter ou visiter ?** Peuples autochtones, populations rurales, touristes.
        - Des **outils de régulation** : aires protégées, certifications (**FSC**, 1993 ; **PEFC**, 1999), règlement européen contre la **déforestation importée** (adopté en 2023).
      `
    },
    {
      id: 'dynamiques',
      titre: 'Dynamiques : recul, retour et risques',
      resume: 'Déforestation, transition forestière, incendies, changement climatique',
      contenu: `
        ## La déforestation tropicale
        - Selon la FAO, environ **10 millions d'hectares** ont été déboisés chaque année entre 2015 et 2020 (contre 16 millions dans les années 1990). La **perte nette** (déforestation moins expansion) est d'environ **4,7 millions d'hectares par an** sur 2010-2020.
        - Les pertes nettes les plus fortes concernent l'**Afrique** et l'**Amérique du Sud** ; l'Asie enregistre un gain net (plantations en Chine, en Inde).
        - Les causes principales sont **agricoles** : élevage bovin et soja en Amazonie, palmier à huile en Indonésie et en Malaisie, cacao en Afrique de l'Ouest, agriculture vivrière et charbon de bois en Afrique centrale.
        - Elle s'organise en **fronts pionniers** le long des **routes** (l'« arc de déforestation » au sud de l'Amazonie brésilienne).

        ## La transition forestière
        - Modèle du géographe **Alexander Mather** (1992) : la forêt recule pendant la phase d'expansion agricole, atteint un **minimum**, puis **regagne** du terrain avec l'exode rural, l'intensification agricole, les politiques de reboisement.
        - Exemples : la **France** (la surface forestière a presque doublé depuis le milieu du XIXᵉ siècle), les États-Unis, la Chine (vastes programmes de boisement, « Grande Muraille verte » contre la désertification depuis 1978).
        - Limite : un pays peut regagner des forêts chez lui tout en **important** des produits issus de la déforestation ailleurs.

        ## Les forêts face aux risques
        - **Incendies** : mégafeux en Australie (2019-2020), au **Canada** (2023 : plus de 15 millions d'hectares brûlés, un record), en Méditerranée et dans les **Landes de Gascogne** (2022).
        - **Dépérissements** liés aux **sécheresses** et aux **ravageurs** (scolytes dans les forêts d'épicéas d'Europe).
        - **Tempêtes** : Lothar et Martin (décembre 1999), Klaus (janvier 2009) en France.
        - Le risque se définit comme la rencontre d'un **aléa** et d'une **vulnérabilité** : l'extension des habitations au contact des forêts (**interface habitat-forêt**) accroît la vulnérabilité.

        :::retenir Les forêts et le climat
        Les forêts sont à la fois **victimes** du changement climatique (sécheresses, feux, ravageurs) et **solutions** possibles (stockage du carbone). Mais une forêt qui brûle ou dépérit peut devenir une **source** de carbone.
        :::
      `
    },
    {
      id: 'france',
      titre: 'La forêt en France',
      resume: 'Une forêt en progression, surtout privée, très diverse',
      contenu: `
        ## Une forêt étendue et en progression
        - Environ **17 millions d'hectares** en métropole, soit **près d'un tiers** du territoire (données IGN) ; l'un des plus grands massifs de l'Union européenne.
        - La surface forestière a **presque doublé** depuis le milieu du XIXᵉ siècle : déprise agricole, exode rural, reboisements (restauration des terrains en montagne, Landes).
        - Une grande **diversité** d'essences (chênes, hêtres, pins, sapins, épicéas…), avec une majorité de **feuillus**.
        - Outre-mer : la **Guyane** est couverte à plus de 90 % par la forêt amazonienne (environ 8 millions d'hectares) ; le **Parc amazonien de Guyane** a été créé en 2007.

        ## Une forêt surtout privée
        - Environ **trois quarts** de la forêt métropolitaine est **privée**, partagée entre plusieurs millions de propriétaires, souvent de petites parcelles : cela complique la gestion.
        - Le quart **public** comprend les forêts **domaniales** (État) et **communales**, gérées par l'**Office national des forêts** (**ONF**, créé en 1964).

        ## Une forêt façonnée par l'histoire
        - L'**ordonnance de Colbert** (**1669**) organise la gestion des forêts royales, notamment pour fournir du bois à la marine (la forêt de **Tronçais**, dans l'Allier).
        - Le **Code forestier** (**1827**) encadre la protection et l'exploitation.
        - La **loi de 1857** sur l'assainissement des **Landes de Gascogne** conduit à la plantation de **pins maritimes** : le plus grand massif forestier cultivé d'Europe occidentale (environ un million d'hectares).
        - La **forêt de Fontainebleau** : première « réserve artistique » protégée (1861), à la demande des peintres de Barbizon.

        ## Des enjeux actuels
        - **Filière bois** : la France exporte du bois brut et importe des produits transformés (meubles, papier) : une filière à valoriser.
        - **Adaptation au changement climatique** : dépérissements, incendies, choix des essences de demain.
        - **Multifonctionnalité** : produire, protéger, accueillir le public.
      `
    },
    {
      id: 'notions',
      titre: 'Notions et outils du géographe',
      resume: 'Le vocabulaire indispensable',
      contenu: `
        ## Notions clés
        - **Espace** / **territoire** : le territoire est un espace **approprié** par un groupe (limites, pouvoir, identité).
        - **Échelle** : niveau d'analyse (locale, régionale, nationale, mondiale). Changer d'échelle est un réflexe indispensable.
        - **Acteur** : individu ou groupe qui agit sur l'espace (État, entreprise, ONG, habitants).
        - **Ressource** : ce qu'une société juge utile et exploitable à un moment donné ; ce n'est pas une donnée naturelle mais une **construction sociale**.
        - **Front pionnier** : espace de conquête et de mise en valeur de terres nouvelles.
        - **Marge** / **périphérie** : espace à l'écart, dominé ou peu intégré.
        - **Aménagement** : action volontaire d'organisation de l'espace.
        - **Risque** = **aléa** × **vulnérabilité**.
        - **Développement durable** (rapport Brundtland, 1987) : « un développement qui répond aux besoins du présent sans compromettre la capacité des générations futures à répondre aux leurs ».
        - **Patrimonialisation** : processus par lequel un espace devient un bien commun à transmettre (parcs, réserves, sites classés).

        ## Le croquis
        - Un **titre** qui reprend le sujet.
        - Une **légende organisée** en deux ou trois parties.
        - Des **figurés** :
          - **surfaciques** (aplats de couleur, hachures) pour les espaces ;
          - **ponctuels** (cercles, carrés) pour les lieux ;
          - **linéaires** (flèches, traits) pour les flux, les limites, les dynamiques.
        - Une **nomenclature** lisible (noms de lieux), écrite à l'horizontale.
      `
    }
  ],

  quiz: [
    {
      id: 'monde',
      titre: 'La forêt mondiale',
      questions: [
        { q: 'Quelle part des terres émergées les forêts couvrent-elles environ (FAO, 2020) ?', c: ['31 %', '10 %', '50 %', '70 %'], r: 0 },
        { q: 'Selon la FAO, une forêt doit avoir un couvert arboré d\'au moins…', c: ['10 %', '50 %', '30 %', '80 %'], r: 0 },
        { q: 'Quel pays possède la plus grande superficie forestière ?', c: ['la Russie', 'le Brésil', 'le Canada', 'les États-Unis'], r: 0 },
        { q: 'Quel domaine climatique concentre la plus grande part des forêts ?', c: ['tropical', 'boréal', 'tempéré', 'subtropical'], r: 0, e: 'Environ 45 % (FAO, FRA 2020).' },
        { q: 'Combien d\'hectares sont déboisés chaque année dans le monde (2015-2020, FAO) ?', c: ['environ 10 millions', 'environ 1 million', 'environ 100 millions', 'environ 500 000'], r: 0 },
        { q: 'La « transition forestière » désigne…', c: ['le retour de la forêt après une phase de recul', 'le passage du bois au charbon', 'la transformation des forêts en plantations', 'la migration des espèces vers le nord'], r: 0 },
        { q: 'Le modèle de la transition forestière est dû à…', c: ['Alexander Mather', 'Paul Vidal de La Blache', 'Fernand Braudel', 'Élisée Reclus'], r: 0 },
        { q: 'Le palmier à huile est l\'une des principales causes de déforestation…', c: ['en Indonésie et en Malaisie', 'au Canada', 'en Russie', 'en France'], r: 0 },
        { q: 'L\'« arc de déforestation » se situe…', c: ['au sud et à l\'est de l\'Amazonie brésilienne', 'au nord du Canada', 'en Sibérie', 'au cœur du bassin du Congo'], r: 0 },
        { q: 'La certification FSC garantit…', c: ['une gestion forestière responsable', 'l\'origine française du bois', 'l\'absence de bois tropical', 'un bois sans traitement chimique'], r: 0 }
      ]
    },
    {
      id: 'france',
      titre: 'La forêt française',
      questions: [
        { q: 'Quelle part du territoire métropolitain la forêt couvre-t-elle environ ?', c: ['près d\'un tiers', 'un dixième', 'la moitié', 'deux tiers'], r: 0 },
        { q: 'La forêt française métropolitaine est majoritairement…', c: ['privée', 'domaniale', 'communale', 'militaire'], r: 0, e: 'Environ trois quarts de la surface.' },
        { q: 'Quel organisme gère les forêts publiques ?', c: ['l\'ONF', 'l\'IGN', 'l\'INRAE', 'la SNCF'], r: 0 },
        { q: 'La forêt des Landes de Gascogne est principalement composée de…', c: ['pins maritimes', 'chênes', 'hêtres', 'épicéas'], r: 0 },
        { q: 'La loi sur l\'assainissement des Landes date de…', c: ['1857', '1669', '1964', '1827'], r: 0 },
        { q: 'L\'ordonnance de Colbert sur les forêts date de…', c: ['1669', '1789', '1857', '1610'], r: 0 },
        { q: 'Depuis le milieu du XIXᵉ siècle, la surface forestière française a…', c: ['presque doublé', 'diminué de moitié', 'stagné', 'triplé'], r: 0 },
        { q: 'En Guyane, la forêt couvre…', c: ['plus de 90 % du territoire', 'environ un tiers', 'la moitié', 'moins de 10 %'], r: 0 }
      ]
    },
    {
      id: 'notions',
      titre: 'Notions de géographie',
      questions: [
        { q: 'Le risque se définit comme…', c: ['la rencontre d\'un aléa et d\'une vulnérabilité', 'une catastrophe passée', 'un aléa naturel seul', 'la probabilité d\'un incendie'], r: 0 },
        { q: 'Un territoire est…', c: ['un espace approprié par un groupe', 'n\'importe quelle portion d\'espace', 'une unité naturelle', 'un synonyme de paysage'], r: 0 },
        { q: 'Une ressource est…', c: ['une construction sociale, liée aux besoins et techniques d\'une société', 'une donnée naturelle fixe', 'uniquement un minerai', 'un stock inépuisable'], r: 0 },
        { q: 'Le rapport Brundtland (1987) définit…', c: ['le développement durable', 'la mondialisation', 'la transition forestière', 'le front pionnier'], r: 0 },
        { q: 'Sur un croquis, une flèche est un figuré…', c: ['linéaire', 'ponctuel', 'surfacique', 'toponymique'], r: 0 },
        { q: 'La déforestation importée désigne…', c: ['la déforestation causée par la consommation de produits importés', 'l\'importation de bois tropical uniquement', 'la déforestation dans les ports', 'le transport de forêts'], r: 0 },
        { q: 'Un front pionnier est…', c: ['un espace de conquête de terres nouvelles', 'une frontière militaire', 'une limite climatique', 'une zone protégée'], r: 0 },
        { q: 'REDD+ est un mécanisme…', c: ['de réduction des émissions liées à la déforestation et à la dégradation', 'de certification du bois', 'de lutte contre les incendies', 'de recensement des arbres'], r: 0 }
      ]
    }
  ],

  cartes: [
    {
      id: 'notions',
      titre: 'Notions et chiffres clés',
      cartes: [
        ['Forêt (FAO)', '> 0,5 ha, arbres > 5 m, couvert > 10 %, sans usage agricole ou urbain dominant'],
        ['Forêt mondiale (FAO, 2020)', 'environ 4,06 milliards d\'ha, 31 % des terres émergées'],
        ['Cinq pays forestiers', 'Russie, Brésil, Canada, États-Unis, Chine : plus de la moitié des forêts'],
        ['Déforestation (2015-2020)', 'environ 10 millions d\'ha par an (FAO)'],
        ['Perte nette (2010-2020)', 'environ 4,7 millions d\'ha par an (FAO)'],
        ['Forêt primaire', 'forêt d\'essences locales sans trace visible d\'action humaine'],
        ['Déforestation / dégradation', 'conversion à un autre usage / appauvrissement de la forêt qui demeure'],
        ['Afforestation', 'boisement d\'un espace qui n\'était pas forestier'],
        ['Transition forestière', 'recul puis retour de la forêt (A. Mather, 1992)'],
        ['Front pionnier', 'espace de conquête de terres nouvelles'],
        ['Déforestation importée', 'déforestation causée par des produits consommés ailleurs (soja, bœuf, huile de palme, cacao)'],
        ['REDD+', 'mécanisme de l\'ONU pour réduire les émissions dues à la déforestation et à la dégradation'],
        ['FSC / PEFC', 'certifications de gestion forestière durable (1993 / 1999)'],
        ['Risque', 'aléa × vulnérabilité'],
        ['Interface habitat-forêt', 'zone de contact entre habitations et forêts, très exposée aux incendies'],
        ['Forêt française', 'environ 17 millions d\'ha, près d\'un tiers du territoire métropolitain'],
        ['Propriété forestière en France', 'environ 3/4 privée, 1/4 publique (ONF)'],
        ['ONF', 'Office national des forêts, créé en 1964'],
        ['1669', 'Ordonnance de Colbert sur les eaux et forêts'],
        ['1827', 'Code forestier'],
        ['1857', 'Loi d\'assainissement des Landes de Gascogne : plantation de pins maritimes'],
        ['Canada 2023', 'saison d\'incendies record : plus de 15 millions d\'ha brûlés'],
        ['Guyane', 'forêt amazonienne sur plus de 90 % du territoire ; Parc amazonien créé en 2007'],
        ['Puits de carbone', 'milieu qui absorbe plus de carbone qu\'il n\'en émet']
      ]
    }
  ],

  sujets: [
    {
      id: 'amazonie',
      type: 'etude-de-cas',
      titre: 'La déforestation en Amazonie brésilienne',
      enonce: 'Étude de cas : la déforestation en Amazonie brésilienne. Vous réaliserez un croquis.',
      pistes: `
        ### Localiser
        - L'Amazonie : la plus grande forêt tropicale du monde, partagée entre neuf pays ; environ **60 %** se trouve au **Brésil**.
        - L'« **Amazonie légale** » brésilienne regroupe neuf États fédérés.

        ### Acteurs et logiques
        - **État fédéral** : politique d'intégration et de colonisation (routes **Transamazonienne** dans les années 1970, **BR-163**), puis politiques de protection (surveillance satellitaire de l'**INPE**, aires protégées).
        - **Grands propriétaires** (*fazendeiros*) et **agro-industrie** : élevage bovin (principale cause du défrichement), soja.
        - **Accapareurs de terres** (*grileiros*), **orpailleurs** illégaux, exploitants forestiers.
        - **Peuples autochtones** : leurs **terres indigènes** sont parmi les espaces les mieux préservés.
        - **ONG**, **acteurs internationaux** (Fonds Amazonie, 2008), **consommateurs** (Europe, Chine) via la déforestation importée.

        ### Dynamiques
        - Un « **arc de déforestation** » au sud et à l'est, le long des routes : un **front pionnier** classique (route → défrichement → pâturage → soja).
        - Une évolution en dents de scie : un pic vers 2004 (près de 28 000 km² déboisés dans l'année), une forte baisse jusqu'au début des années 2010 (moratoire sur le soja, 2006 ; contrôles), une reprise entre 2019 et 2022, puis une nouvelle baisse depuis 2023.
        - Enjeux mondiaux : biodiversité, climat (risque de « point de bascule » vers la savane), COP30 à **Belém** (2025).

        ### Plan possible
        - **I. Une forêt immense, un front pionnier ancien** (localisation, routes, colonisation).
        - **II. Des acteurs aux intérêts opposés** (agro-industrie, État, peuples autochtones, ONG).
        - **III. Protéger l'Amazonie : quelles politiques, quelles limites ?** (surveillance, aires protégées, pression internationale ; poids économique de l'agro-exportation).

        ### Légende du croquis (exemple)
        1. **Un massif forestier sous pression** : forêt dense (aplat vert) ; espaces déboisés (aplat orange) ; terres indigènes et aires protégées (hachures).
        2. **Les moteurs de la déforestation** : routes (traits rouges), front pionnier (flèches), villes et ports d'exportation (points : Manaus, Belém, Santarém).
        3. **Des enjeux mondiaux** : flux d'exportation de soja et de viande (flèches vers l'Europe et la Chine).
      `
    },
    {
      id: 'landes',
      type: 'etude-de-cas',
      titre: 'La forêt des Landes de Gascogne, une forêt façonnée par l\'homme',
      enonce: 'Étude de cas : la forêt des Landes de Gascogne.',
      pistes: `
        ### Localiser
        - Un triangle entre la **Gironde**, les **Landes** et le **Lot-et-Garonne** ; environ **un million d'hectares**, l'un des plus grands massifs forestiers cultivés d'Europe occidentale.

        ### Une forêt artificielle
        - Avant le XIXᵉ siècle : des **landes** marécageuses et pauvres, pâturées par les moutons (les bergers sur échasses).
        - Fixation des **dunes** littorales (Brémontier, fin du XVIIIᵉ siècle) puis **loi du 19 juin 1857** : les communes doivent assainir et boiser leurs landes → plantation massive de **pins maritimes**.
        - Une économie : gemmage (résine) puis bois, papier, panneaux.

        ### Acteurs et enjeux
        - **Propriétaires privés** (majoritaires), sylviculteurs, industriels du bois et du papier, collectivités, **ONF** (forêts domaniales du littoral), tourisme littoral.
        - **Risques** : tempêtes **Martin** (1999) et **Klaus** (2009) ; **incendies de 2022** (Landiras, La Teste-de-Buch) ; monoculture vulnérable aux ravageurs.

        ### Plan possible
        - **I. Une forêt créée par l'aménagement** (XIXᵉ siècle).
        - **II. Une forêt de production intégrée à une filière** (industrie, emplois, exportations).
        - **III. Une forêt à adapter** (risques, diversification des essences, multifonctionnalité, tourisme).

        ### Monter en généralité
        La forêt landaise montre qu'une forêt peut être un **produit de l'aménagement** : elle illustre la **transition forestière** française et la vulnérabilité des monocultures face au changement climatique.
      `
    },
    {
      id: 'megafeux',
      type: 'etude-de-cas',
      titre: 'Les mégafeux de 2023 au Canada',
      enonce: 'Étude de cas : la saison des feux de 2023 au Canada.',
      pistes: `
        ### Localiser et définir
        - La **forêt boréale** canadienne, l'une des plus vastes du monde.
        - **Mégafeu** : incendie d'une ampleur et d'une intensité hors normes, que les moyens de lutte ne peuvent contenir.
        - En 2023, plus de **15 millions d'hectares** brûlés, un record historique ; fumées jusqu'à New York et en Europe.

        ### Acteurs
        - Gouvernement fédéral et provinces (Québec, Alberta, Colombie-Britannique…), pompiers et renforts internationaux (dont la France), **Premières Nations** (communautés évacuées), industrie forestière, scientifiques.

        ### Dynamiques
        - Un **aléa** renforcé par le changement climatique : chaleur, sécheresse, foudre.
        - Une **vulnérabilité** accrue : communautés isolées, interface habitat-forêt.
        - Conséquences : émissions massives de CO₂, qualité de l'air, évacuations, pertes économiques.

        ### Plan possible
        - **I. Une catastrophe d'une ampleur inédite** (localisation, chiffres, échelles).
        - **II. Des causes naturelles et humaines** (climat, gestion, peuplement).
        - **III. Vivre avec le feu ?** (prévention, gestion forestière, savoirs autochtones du brûlage dirigé, coopération internationale).

        ### Monter en généralité
        Le cas canadien montre que la forêt boréale, longtemps considérée comme un **puits de carbone**, peut devenir une **source** d'émissions.
      `
    },
    {
      id: 'bien-commun',
      type: 'dissertation',
      titre: 'La forêt est-elle un bien commun ?',
      enonce: 'La forêt est-elle un bien commun ?',
      pistes: `
        ### Analyse
        - **Bien commun** : ressource partagée, dont l'usage et la préservation concernent une communauté (Elinor Ostrom, prix Nobel d'économie 2009, sur la gestion des communs) ; au sens large, un patrimoine de l'humanité.
        - La forêt est **appropriée** (propriétaires privés, États), mais ses fonctions (climat, biodiversité, eau) **dépassent** les propriétaires.

        ### Problématique possible
        Comment concilier la propriété et l'exploitation des forêts avec le fait que leurs bienfaits concernent toute l'humanité ?

        ### Plan possible
        - **I. Une forêt appropriée et exploitée** : propriété privée et publique, ressource économique, fronts pionniers ; souveraineté des États (Brésil).
        - **II. Des bienfaits qui dépassent les frontières** : climat, biodiversité, déforestation importée : une question mondiale.
        - **III. Gérer la forêt comme un commun** : communs forestiers villageois, droits des peuples autochtones, régulations internationales (REDD+, règlement européen), patrimonialisation.

        ### Exemples
        Amazonie, forêt française (75 % privée), Landes, Guyane, communs forestiers des Alpes ou d'Inde, forêt boréale.
      `
    },
    {
      id: 'marges',
      type: 'dissertation',
      titre: 'Les forêts, des espaces en marge ?',
      enonce: 'Les forêts, des espaces en marge ?',
      pistes: `
        ### Analyse
        - **Marge** : espace à l'écart, peu peuplé, peu intégré ou dominé. Mais aussi un espace de liberté, de refuge, d'expérimentation.
        - Le point d'interrogation invite à **nuancer** l'image de la forêt « sauvage » et isolée.

        ### Plan possible
        - **I. Des espaces souvent perçus et vécus comme marginaux** : faibles densités, enclavement (forêt boréale, Amazonie), refuge historique (maquis, peuples isolés), imaginaire de la forêt sauvage.
        - **II. Des espaces pourtant intégrés à la mondialisation** : exportation de bois, de soja, de viande ; fronts pionniers ; firmes multinationales ; tourisme.
        - **III. Des espaces au cœur des enjeux contemporains** : climat, biodiversité, risques ; forêts périurbaines très fréquentées (Fontainebleau) ; forêts comme objets de politiques publiques et de débats mondiaux (COP).
      `
    }
  ]
});
