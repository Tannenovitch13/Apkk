/* Cinéma : dissertation (DS) et analyse filmique (khôlles) */

STUDIUM.add({
  id: 'cinema',
  nom: 'Cinéma',
  court: 'Langage, histoire, analyse',
  icone: 'clapperboard',
  description: 'Le langage cinématographique, les grands repères de l\'histoire du cinéma et les théories pour la dissertation.',
  epreuves: ['DS : dissertation', 'Khôlle : analyse filmique'],
  methodes: ['analyse-filmique', 'dissertation', 'kholle'],
  avertissement: `
    Le site de la professeure (lien dans **Ressources**, en haut de l'accueil) contient des informations utiles sur les films étudiés. Ajoute tes fiches de films dans l'onglet **Notes**.
  `,
  conseils: `
    ### Comment travailler le cinéma
    - Pour chaque film vu : une **fiche** avec le cinéaste, l'année, le pays, le résumé en trois lignes, **deux séquences clés** décrites précisément (plans, son), et une citation de critique.
    - Revois les séquences importantes **plusieurs fois**, en coupant le son puis en écoutant sans l'image.
    - Apprends le **vocabulaire technique** avec les cartes : il fait toute la différence en khôlle.
    - Pour la dissertation, constitue un **répertoire de citations** de cinéastes et de critiques (Bazin, Godard, Bresson, Truffaut…).
  `,

  cours: [
    {
      id: 'langage',
      titre: 'Le langage cinématographique',
      resume: 'Plans, angles, mouvements, montage, son',
      contenu: `
        ## Le plan
        Le **plan** est une portion de film tournée sans interruption (entre deux coupes). Une **séquence** est un ensemble de plans formant une unité narrative.

        ### Les échelles de plans
        | Échelle | Ce que l'on voit | Effet fréquent |
        |---|---|---|
        | Plan général / d'ensemble | un paysage, un décor entier | situer, écraser le personnage |
        | Plan moyen | le personnage en pied | l'action, le corps |
        | Plan américain | à mi-cuisses | hérité du western (l'arme à la ceinture) |
        | Plan rapproché | à la taille ou à la poitrine | le dialogue |
        | Gros plan | le visage | l'émotion, l'intériorité |
        | Très gros plan / insert | un détail (des yeux, un objet) | insister, créer du suspense |

        ### Les angles de prise de vue
        - **Plongée** : la caméra regarde d'en haut : le personnage paraît faible, écrasé.
        - **Contre-plongée** : d'en bas : il paraît puissant, menaçant.
        - **Plan subjectif** : on voit ce que voit le personnage.

        ### Les mouvements de caméra
        - **Panoramique** : la caméra pivote sur son axe (horizontal ou vertical).
        - **Travelling** : la caméra se déplace (sur des rails, en voiture…) : avant, arrière, latéral.
        - **Zoom** : on change la focale sans déplacer la caméra (effet plus artificiel qu'un travelling).
        - **Caméra portée**, **Steadicam** : mobilité, sensation de réel ou de fluidité.
        - **Plan-séquence** : une séquence entière en un seul plan (l'ouverture de *La Soif du mal*, Orson Welles, 1958).

        ## Le cadre et l'image
        - **Champ** / **hors-champ** : ce que l'on voit / ce qui existe sans être montré (un son, un regard hors cadre).
        - **Profondeur de champ** : la netteté sur plusieurs plans de l'image (*Citizen Kane*, Orson Welles, 1941, avec le chef opérateur Gregg Toland).
        - **Composition**, **lignes de force**, **couleurs**, **lumière** (clair-obscur de l'expressionnisme, lumière naturelle de la Nouvelle Vague).

        ## Le montage
        - **Raccords** : le passage d'un plan à l'autre semble continu (raccord regard, mouvement, dans l'axe).
        - **Champ-contrechamp** : alternance de plans sur deux personnages qui se font face.
        - **Montage alterné** : deux actions simultanées en des lieux différents (Griffith).
        - **Ellipse**, **fondu enchaîné**, **fondu au noir**.
        - **Faux raccord** et **jump cut** : ruptures visibles (*À bout de souffle*, Godard, 1960).
        - **Effet Koulechov** : le même gros plan d'un acteur semble exprimer la faim, le chagrin ou le désir selon le plan qui le précède : le sens naît du **montage**.
        - **Montage des attractions** (Eisenstein) : le choc entre les plans produit une idée.

        ## Le son
        - **Son diégétique** (qui appartient au monde du film : une radio, un dialogue) / **extradiégétique** (la musique de film que les personnages n'entendent pas).
        - Son **in** (source visible), **hors-champ** (source dans la scène mais invisible), **off** (voix du narrateur).
        - Le **silence** est aussi un choix de mise en scène.

        :::retenir La règle d'or de l'analyse
        Chaque choix technique doit être relié à un **effet** ou à un **sens**. Jean-Luc Godard reprenait une formule de Luc Moullet : « le travelling est affaire de morale » — filmer, c'est toujours prendre position.
        :::
      `
    },
    {
      id: 'histoire',
      titre: 'Repères d\'histoire du cinéma',
      resume: 'Des Lumière à aujourd\'hui',
      contenu: `
        ## Les débuts
        - **28 décembre 1895** : première projection publique et payante du **Cinématographe Lumière**, au Salon indien du Grand Café, à Paris. *L'Arrivée d'un train en gare de La Ciotat* est tourné à la même époque.
        - **Georges Méliès** invente le spectacle et les trucages : *Le Voyage dans la Lune* (1902).
        - **D. W. Griffith** codifie le langage narratif (montage alterné, gros plans) : *Naissance d'une nation* (1915).

        ## Le muet (années 1910-1920)
        - **Burlesque** américain : **Chaplin**, **Buster Keaton**.
        - **Expressionnisme allemand** : décors déformés, ombres : *Le Cabinet du docteur Caligari* (Wiene, 1920), *Nosferatu* (Murnau, 1922), *Metropolis* (Lang, 1927).
        - **Cinéma soviétique** : le montage comme pensée : **Eisenstein** (*Le Cuirassé Potemkine*, 1925, et la séquence de l'escalier d'Odessa), **Dziga Vertov** (*L'Homme à la caméra*, 1929).

        ## Le parlant et l'âge classique
        - **1927** : *Le Chanteur de jazz*, premier grand succès du cinéma parlant.
        - **Hollywood** et le système des studios et des **genres** (western, comédie musicale, film noir) : Ford, Hawks, Hitchcock.
        - En France, le **réalisme poétique** : **Jean Renoir** (*La Grande Illusion*, 1937 ; *La Règle du jeu*, 1939), **Marcel Carné** (*Le Quai des brumes*, 1938).
        - **Orson Welles**, *Citizen Kane* (1941) : profondeur de champ, récit éclaté.

        ## Après la guerre : les modernités
        - **Néoréalisme italien** : tournage en extérieurs, acteurs non professionnels : **Rossellini** (*Rome, ville ouverte*, 1945), **De Sica** (*Le Voleur de bicyclette*, 1948).
        - **Nouvelle Vague** française, issue des *Cahiers du cinéma* : **Truffaut** (*Les Quatre Cents Coups*, 1959), **Godard** (*À bout de souffle*, 1960 ; *Le Mépris*, 1963), **Agnès Varda** (*Cléo de 5 à 7*, 1962), **Rohmer**, **Rivette**, **Chabrol**. Petits budgets, caméras légères, liberté du récit.
        - Les grands **auteurs** : Bergman, Fellini, Antonioni, Kurosawa, Ozu, Bresson, Tarkovski.
        - Le **Nouvel Hollywood** (fin des années 1960-1970) : Coppola, Scorsese, Spielberg.

        ## Aujourd'hui
        - Le **numérique** transforme le tournage, la diffusion (plateformes) et les effets spéciaux.
        - Le cinéma comme **art mondial** : cinémas d'Asie (Corée du Sud, Chine, Japon), d'Iran, d'Afrique.

        :::astuce Pense local
        Le Festival d'Avignon est consacré au théâtre, mais le **Festival de Cannes** (créé en 1946) et les **cinémas Utopia** d'Avignon sont des lieux de cinéphilie à fréquenter.
        :::
      `
    },
    {
      id: 'theories',
      titre: 'Penser le cinéma : théories et notions',
      resume: 'Bazin, Astruc, Truffaut, Deleuze, Bresson',
      contenu: `
        ## Le cinéma et le réel
        - **André Bazin** (*Qu'est-ce que le cinéma ?*, 1958-1962) : l'image photographique est une **empreinte** du réel ; il défend la **profondeur de champ** et le **plan-séquence** (Welles, Renoir, le néoréalisme) contre le montage qui découpe et manipule.
        - **Siegfried Kracauer** : le cinéma comme « rédemption de la réalité physique ».
        - Godard, dans *Le Petit Soldat* (1960) : « La photographie, c'est la vérité. Et le cinéma, c'est vingt-quatre fois la vérité par seconde. »

        ## Le cinéma comme langage et comme art
        - **Eisenstein** : le sens naît du **montage**, du conflit entre les plans.
        - **Alexandre Astruc**, « Naissance d'une nouvelle avant-garde : la **caméra-stylo** » (1948) : le cinéma devient un moyen d'expression aussi souple que l'écriture.
        - **François Truffaut**, « Une certaine tendance du cinéma français » (*Cahiers du cinéma*, 1954) et la **politique des auteurs** : le vrai auteur d'un film est le **réalisateur**, qui y imprime son style (Hitchcock, Hawks).
        - **Robert Bresson**, *Notes sur le cinématographe* (1975) : distinguer le « cinématographe » (écriture avec des images et des sons) du « cinéma » (théâtre filmé) ; ses acteurs sont des « modèles ».

        ## Le cinéma et la pensée
        - **Gilles Deleuze**, *L'Image-mouvement* (1983) et *L'Image-temps* (1985) : le cinéma classique enchaîne les actions ; le cinéma moderne (après 1945) montre des **situations** où le temps lui-même apparaît.
        - **Jacques Rivette**, « De l'abjection » (*Cahiers du cinéma*, 1961) : un travelling esthétisant sur une mort dans un camp (*Kapò*, Pontecorvo) est moralement inacceptable. La **mise en scène** engage une **éthique**.

        ## Notions clés pour la dissertation
        - **Mise en scène** : l'ensemble des choix du cinéaste (cadre, lumière, jeu, rythme).
        - **Auteur** / **genre** : le film comme œuvre personnelle ou comme production codifiée.
        - **Spectateur** : identification, immersion, distance critique.
        - **Réalisme** / **illusion** / **artifice**.
        - **Cinéphilie** : l'amour du cinéma comme culture partagée et transmise (ciné-clubs, Cinémathèque).
      `
    },
    {
      id: 'mepris',
      titre: 'Étude : *Le Mépris* (Godard, 1963)',
      resume: 'Un film sur le cinéma et sur l\'*Odyssée*',
      contenu: `
        Ce film fait le lien avec le cours d'**histoire** sur Homère : on y tourne une adaptation de l'*Odyssée*.

        ## Fiche
        - **Réalisation** : Jean-Luc Godard (1963), d'après le roman d'Alberto Moravia *Le Mépris* (*Il disprezzo*, 1954).
        - **Interprètes** : Brigitte Bardot (Camille), Michel Piccoli (Paul Javal), Jack Palance (Jeremy Prokosch, le producteur), **Fritz Lang** (dans son propre rôle).
        - **Image** : Raoul Coutard, en couleur et en **Cinémascope** ; **musique** de Georges Delerue.
        - **Lieux** : les studios de Cinecittà à Rome, puis Capri et la **villa Malaparte**.

        ## Résumé
        Paul, scénariste, est engagé par un producteur américain pour réécrire le scénario d'une *Odyssée* que tourne Fritz Lang. Sa femme Camille, qui se croit utilisée par lui auprès du producteur, se met à le **mépriser**. Le couple se défait, comme celui d'Ulysse et Pénélope que les personnages réinterprètent.

        ## Pistes d'analyse
        - **Un film sur le cinéma** : le générique est **dit** et non écrit ; dans le plan d'ouverture, une caméra avance vers nous en travelling puis se tourne vers le spectateur. Le film montre le conflit entre l'**art** (Lang) et l'**argent** (Prokosch).
        - L'épigraphe : « Le cinéma, disait André Bazin, substitue à notre regard un monde qui s'accorde à nos désirs. *Le Mépris* est l'histoire de ce monde. » (La phrase viendrait en fait du critique Michel Mourlet.)
        - **Homère** : les statues des dieux filmées frontalement, la mer, le bleu ; une réflexion sur la façon de transmettre une épopée antique au XXᵉ siècle.
        - **Le couple** : la longue séquence de l'appartement, filmée en continu, où la dispute naît des gestes et des silences.
      `
    }
  ],

  quiz: [
    {
      id: 'technique',
      titre: 'Plans, angles et mouvements',
      questions: [
        { q: 'Un plan qui montre le personnage à mi-cuisses est un…', c: ['plan américain', 'plan moyen', 'plan rapproché', 'gros plan'], r: 0 },
        { q: 'Une caméra qui filme d\'en haut réalise une…', c: ['plongée', 'contre-plongée', 'panoramique', 'travelling'], r: 0 },
        { q: 'La caméra se déplace sur des rails : c\'est un…', c: ['travelling', 'panoramique', 'zoom', 'raccord'], r: 0 },
        { q: 'La caméra pivote sur son axe sans se déplacer : c\'est un…', c: ['panoramique', 'travelling', 'plan-séquence', 'zoom'], r: 0 },
        { q: 'Une musique que les personnages n\'entendent pas est…', c: ['extradiégétique', 'diégétique', 'in', 'hors-champ'], r: 0 },
        { q: 'Ce qui existe dans la scène sans être montré dans le cadre est…', c: ['le hors-champ', 'le contrechamp', 'le surcadrage', 'l\'insert'], r: 0 },
        { q: 'L\'effet Koulechov montre que…', c: ['le sens d\'un plan dépend du plan qui l\'entoure', 'la couleur modifie les émotions', 'le son précède l\'image', 'le gros plan est indispensable'], r: 0 },
        { q: 'Une rupture visible dans la continuité d\'un plan (*À bout de souffle*) s\'appelle…', c: ['un jump cut', 'un fondu', 'un raccord regard', 'un champ-contrechamp'], r: 0 },
        { q: 'Une séquence entière filmée sans coupe est…', c: ['un plan-séquence', 'un plan d\'ensemble', 'un montage alterné', 'un insert'], r: 0 },
        { q: 'La profondeur de champ de *Citizen Kane* est due au chef opérateur…', c: ['Gregg Toland', 'Raoul Coutard', 'Sven Nykvist', 'Henri Alekan'], r: 0 }
      ]
    },
    {
      id: 'histoire',
      titre: 'Histoire du cinéma',
      questions: [
        { q: 'La première projection publique payante du Cinématographe Lumière a lieu le…', c: ['28 décembre 1895', '1ᵉʳ janvier 1900', '14 juillet 1889', '28 décembre 1905'], r: 0 },
        { q: '*Le Voyage dans la Lune* (1902) est de…', c: ['Georges Méliès', 'Louis Lumière', 'Charles Pathé', 'Abel Gance'], r: 0 },
        { q: '*Le Cuirassé Potemkine* (1925) est de…', c: ['Eisenstein', 'Vertov', 'Koulechov', 'Poudovkine'], r: 0 },
        { q: '*Nosferatu* (1922) appartient à…', c: ['l\'expressionnisme allemand', 'le néoréalisme', 'la Nouvelle Vague', 'le réalisme poétique'], r: 0 },
        { q: 'Le premier grand succès du parlant (1927) est…', c: ['*Le Chanteur de jazz*', '*Metropolis*', '*Les Temps modernes*', '*Citizen Kane*'], r: 0 },
        { q: '*Le Voleur de bicyclette* (1948) est un film…', c: ['néoréaliste italien', 'de la Nouvelle Vague', 'expressionniste', 'du Nouvel Hollywood'], r: 0 },
        { q: '*Les Quatre Cents Coups* (1959) est de…', c: ['François Truffaut', 'Jean-Luc Godard', 'Éric Rohmer', 'Claude Chabrol'], r: 0 },
        { q: '*Cléo de 5 à 7* (1962) est d\'…', c: ['Agnès Varda', 'Chantal Akerman', 'Claire Denis', 'Marguerite Duras'], r: 0 },
        { q: 'La « politique des auteurs » est défendue par…', c: ['les critiques des *Cahiers du cinéma*', 'les studios hollywoodiens', 'les cinéastes soviétiques', 'les surréalistes'], r: 0 },
        { q: 'Quel cinéaste joue son propre rôle dans *Le Mépris* ?', c: ['Fritz Lang', 'Jean Renoir', 'Alfred Hitchcock', 'Roberto Rossellini'], r: 0 }
      ]
    }
  ],

  cartes: [
    {
      id: 'vocab',
      titre: 'Vocabulaire technique',
      cartes: [
        ['Plan', 'Portion de film entre deux coupes'],
        ['Séquence', 'Ensemble de plans formant une unité narrative'],
        ['Plan d\'ensemble', 'Montre un décor entier ; situe l\'action'],
        ['Plan américain', 'Personnage cadré à mi-cuisses'],
        ['Gros plan', 'Le visage ; l\'émotion'],
        ['Insert', 'Très gros plan sur un détail, un objet'],
        ['Plongée / contre-plongée', 'Caméra au-dessus / au-dessous du sujet'],
        ['Panoramique', 'La caméra pivote sur son axe'],
        ['Travelling', 'La caméra se déplace'],
        ['Plan-séquence', 'Une séquence en un seul plan'],
        ['Hors-champ', 'Ce qui existe dans la scène sans être montré'],
        ['Profondeur de champ', 'Netteté sur plusieurs plans de l\'image'],
        ['Champ-contrechamp', 'Alternance de plans sur deux interlocuteurs'],
        ['Raccord', 'Continuité entre deux plans (regard, mouvement, axe)'],
        ['Faux raccord', 'Discontinuité visible entre deux plans'],
        ['Montage alterné', 'Deux actions simultanées montrées alternativement'],
        ['Ellipse', 'Saut dans le temps'],
        ['Fondu enchaîné', 'Une image se substitue progressivement à une autre'],
        ['Son diégétique', 'Son qui appartient au monde du film'],
        ['Son off', 'Voix d\'un narrateur hors de la scène'],
        ['Diégèse', 'Le monde fictionnel du film'],
        ['Effet Koulechov', 'Le sens d\'un plan dépend de ceux qui l\'entourent'],
        ['Mise en scène', 'L\'ensemble des choix du cinéaste : cadre, lumière, jeu, rythme'],
        ['Surcadrage', 'Un cadre dans le cadre (porte, fenêtre, miroir)']
      ]
    },
    {
      id: 'films',
      titre: 'Films et cinéastes',
      cartes: [
        ['Frères Lumière', 'Cinématographe, 1895 ; *L\'Arrivée d\'un train en gare de La Ciotat*'],
        ['Georges Méliès', '*Le Voyage dans la Lune* (1902) : trucages, féerie'],
        ['D. W. Griffith', '*Naissance d\'une nation* (1915) : montage alterné'],
        ['Sergueï Eisenstein', '*Le Cuirassé Potemkine* (1925) : montage des attractions'],
        ['F. W. Murnau', '*Nosferatu* (1922) ; *L\'Aurore* (1927)'],
        ['Fritz Lang', '*Metropolis* (1927) ; *M le maudit* (1931)'],
        ['Charlie Chaplin', '*Les Temps modernes* (1936)'],
        ['Jean Renoir', '*La Grande Illusion* (1937) ; *La Règle du jeu* (1939)'],
        ['Orson Welles', '*Citizen Kane* (1941) : profondeur de champ'],
        ['Roberto Rossellini', '*Rome, ville ouverte* (1945) : néoréalisme'],
        ['Vittorio De Sica', '*Le Voleur de bicyclette* (1948)'],
        ['Alfred Hitchcock', '*Fenêtre sur cour* (1954) ; *Sueurs froides* (1958) ; *Psychose* (1960)'],
        ['François Truffaut', '*Les Quatre Cents Coups* (1959) ; la politique des auteurs'],
        ['Jean-Luc Godard', '*À bout de souffle* (1960) ; *Le Mépris* (1963)'],
        ['Agnès Varda', '*Cléo de 5 à 7* (1962) ; *Sans toit ni loi* (1985)'],
        ['Robert Bresson', '*Pickpocket* (1959) ; *Notes sur le cinématographe*'],
        ['Federico Fellini', '*La dolce vita* (1960) ; *Huit et demi* (1963)'],
        ['Stanley Kubrick', '*2001, l\'Odyssée de l\'espace* (1968)']
      ]
    }
  ],

  sujets: [
    {
      id: 'verite',
      type: 'dissertation',
      titre: '« Le cinéma, c\'est vingt-quatre fois la vérité par seconde » (Godard)',
      enonce: '« La photographie, c\'est la vérité. Et le cinéma, c\'est vingt-quatre fois la vérité par seconde. » (Jean-Luc Godard, *Le Petit Soldat*, 1960). Discutez.',
      pistes: `
        ### Analyse
        - La phrase est dite par un **personnage**, photographe, dans un film de Godard : elle est à la fois sérieuse et provocatrice.
        - *Vingt-quatre images par seconde* : la cadence de défilement du film argentique. Le cinéma multiplie la **vérité** de la photographie (empreinte du réel, Bazin).
        - Mais le cinéma est aussi **montage**, fiction, mise en scène : peut-il être « vérité » ?

        ### Problématique possible
        Le cinéma tient-il sa force de sa capacité à enregistrer le réel, ou de sa capacité à le construire, voire à le falsifier ?

        ### Plan possible
        - **I. Le cinéma, enregistrement du réel**
          - Les Lumière filment la sortie d'usine, l'arrivée d'un train ; Bazin et l'ontologie de l'image ; le néoréalisme.
        - **II. Mais l'image ment aussi**
          - Montage (effet Koulechov), cadrage, propagande (Eisenstein, Leni Riefenstahl), trucages (Méliès), illusion hollywoodienne.
        - **III. Une vérité d'un autre ordre**
          - La fiction peut dire une vérité sur le monde ou sur l'homme ; la vérité comme exigence **morale** de la mise en scène (Rivette, « De l'abjection » ; « le travelling est affaire de morale »).
      `
    },
    {
      id: 'desirs',
      type: 'dissertation',
      titre: '« Le cinéma substitue à notre regard un monde qui s\'accorde à nos désirs »',
      enonce: '« Le cinéma substitue à notre regard un monde qui s\'accorde à nos désirs. » (citation placée en exergue du *Mépris* de Jean-Luc Godard, 1963). Discutez.',
      pistes: `
        ### Analyse
        - *Substitue* : le cinéma **remplace** notre regard, il ne se contente pas de le guider.
        - *Un monde qui s'accorde à nos désirs* : le cinéma comme **rêve**, divertissement, illusion ; mais aussi comme **idéal**.
        - Dans *Le Mépris*, la phrase introduit un film où ce monde idéal se défait.

        ### Problématique possible
        Le cinéma est-il un art de l'illusion qui comble nos désirs, ou un art qui nous apprend à voir le réel autrement ?

        ### Plan possible
        - **I. Le cinéma, usine à rêves** : Hollywood, les genres, les stars, le happy end ; Méliès et la féerie.
        - **II. Un regard qui nous est imposé** : manipulation, propagande, standardisation du désir.
        - **III. Un cinéma qui déjoue nos désirs** : la modernité (Godard, Bresson, Antonioni) et le refus de l'illusion ; le cinéma comme expérience de vérité.
      `
    },
    {
      id: 'camera-stylo',
      type: 'dissertation',
      titre: 'Le cinéma, une écriture ? (Astruc et la caméra-stylo)',
      enonce: '« Le cinéma est en train tout simplement de devenir un moyen d\'expression, ce qu\'ont été tous les autres arts avant lui, ce qu\'ont été en particulier la peinture et le roman. » (Alexandre Astruc, « Naissance d\'une nouvelle avant-garde : la caméra-stylo », 1948). Discutez.',
      pistes: `
        ### Analyse
        - En 1948, Astruc veut que le cinéma soit un **langage** aussi souple que l'écriture : l'auteur « écrit » avec sa caméra.
        - Cela annonce la **politique des auteurs** et la Nouvelle Vague.

        ### Problématique possible
        Le cinéma peut-il être l'expression personnelle d'un auteur au même titre que la littérature, malgré sa dimension collective et industrielle ?

        ### Plan possible
        - **I. Le cinéma, art d'auteur** : style reconnaissable (Hitchcock, Bresson, Varda), caméras légères, Nouvelle Vague.
        - **II. Un art collectif et industriel** : studios, producteurs (*Le Mépris* : Prokosch contre Lang), genres, contraintes économiques.
        - **III. Une écriture propre** : le cinéma n'imite ni la peinture ni le roman ; il invente un langage d'images et de sons (Bresson, le « cinématographe »).
      `
    },
    {
      id: 'ouverture-mepris',
      type: 'analyse-filmique',
      kholle: true,
      titre: 'L\'ouverture du *Mépris* (Godard, 1963)',
      enonce: 'Analysez la séquence d\'ouverture du *Mépris* : le générique dit sur fond de tournage.',
      consigne: 'Revois la séquence (environ 3 minutes) avant de commencer.',
      pistes: `
        ### Description
        - Un **plan unique** sur un plateau de Cinecittà : une actrice (Francesca) marche vers nous en lisant, suivie par une équipe de tournage et une caméra montée sur un **travelling**.
        - Le **générique est dit** en voix off (par Godard), au lieu d'être écrit.
        - À la fin, la caméra filmée pivote et **se tourne vers nous**, objectif braqué sur le spectateur, tandis que la voix cite la phrase attribuée à Bazin.

        ### Problématique possible
        Comment cette ouverture fait-elle du *Mépris* un film qui réfléchit sur le cinéma et sur le regard du spectateur ?

        ### Plan possible
        - **I. Montrer la fabrication** : le dispositif dévoilé (rails, caméra, équipe), le générique parlé : le cinéma se montre en train de se faire.
        - **II. Un regard retourné vers le spectateur** : la caméra qui nous fixe ; nous sommes regardés autant que nous regardons.
        - **III. Une annonce du film** : la citation sur le cinéma et le désir ; la couleur, le Cinémascope, la musique de Delerue qui donne une gravité tragique.
      `
    },
    {
      id: 'la-ciotat',
      type: 'analyse-filmique',
      kholle: true,
      titre: '*L\'Arrivée d\'un train en gare de La Ciotat* (Lumière)',
      enonce: 'Analysez cette vue Lumière (environ 50 secondes, 1895-1897).',
      pistes: `
        ### Description
        - Un **plan fixe** unique sur un quai de gare ; un train arrive du fond de l'image en **diagonale** et s'approche de la caméra ; des voyageurs descendent et montent.

        ### Problématique possible
        Comment ce plan unique, sans montage, contient-il déjà une grande partie du langage cinématographique ?

        ### Plan possible
        - **I. Un enregistrement du réel** : la vie quotidienne, le mouvement, la foule ; la fascination pour la reproduction du réel.
        - **II. Une composition très pensée** : la diagonale qui crée la **profondeur**, le train qui passe du plan d'ensemble au plan rapproché, les personnages qui changent d'échelle sans que la caméra bouge.
        - **III. Un spectacle** : la légende des spectateurs effrayés (sans doute exagérée) ; la naissance du spectateur de cinéma ; un film qui ouvre l'histoire du cinéma.
      `
    },
    {
      id: 'grille',
      type: 'analyse-filmique',
      kholle: true,
      titre: 'Grille d\'analyse pour une séquence de ton choix',
      enonce: 'Choisis une séquence d\'un film étudié en cours et analyse-la avec la grille guidée.',
      consigne: 'Commence par noter le film, le cinéaste, l\'année et le minutage de la séquence.',
      pistes: `
        ### Questions à se poser
        - **Cadre** : que voit-on ? que cache-t-on (hors-champ) ? comment est composée l'image ?
        - **Caméra** : fixe ou mobile ? quels mouvements, pour quel effet ?
        - **Montage** : plans longs ou courts ? quels raccords ? quel rythme ?
        - **Son** : dialogues, bruits, musique (diégétique ou non), silences ?
        - **Acteurs** : gestes, regards, déplacements, voix.
        - **Lumière et couleurs** : quelle atmosphère ?
        - **Sens** : qu'apprend-on sur les personnages, sur le thème du film ? quelle place pour le spectateur ?
      `
    }
  ]
});
