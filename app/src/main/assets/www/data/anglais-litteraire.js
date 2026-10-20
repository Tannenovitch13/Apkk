/* Anglais littéraire : la version */

STUDIUM.add({
  id: 'anglais-litteraire',
  nom: 'Anglais littéraire',
  court: 'Version',
  icone: 'book-text',
  description: 'Traduire des textes littéraires anglais en bon français : méthode, temps, pièges, entraînement.',
  epreuves: ['Version'],
  methodes: ['version', 'organisation'],
  conseils: `
    ### Comment progresser en version
    - **Lis de la littérature anglaise** (même quelques pages par jour) : l'oreille s'habitue aux tournures.
    - **Lis de la littérature française** : c'est ton français qui fera la différence. Note les tournures élégantes.
    - Révise la **conjugaison du passé simple** : c'est le temps du récit en version.
    - Tiens un carnet de **traductions réussies** : les solutions trouvées une fois resservent souvent.
    - Fais les exercices de phrases régulièrement : ils entraînent les réflexes (chassé-croisé, temps, faux amis).
  `,

  cours: [
    {
      id: 'temps',
      titre: 'Traduire les temps anglais',
      resume: 'Preterit, present perfect, would, be + -ing',
      contenu: `
        ## Le preterit
        Dans un récit, le preterit se traduit le plus souvent par :
        - le **passé simple** pour une action ponctuelle, de premier plan : *He **opened** the door* → Il **ouvrit** la porte ;
        - l'**imparfait** pour une description, un état, une habitude : *The house **stood** on a hill* → La maison **se dressait** sur une colline ;
        - le **passé composé** dans un dialogue ou un récit au présent : *"I **saw** him yesterday"* → « Je l'**ai vu** hier ».

        :::retenir Le choix du temps
        Choisis d'abord le **temps de base** du récit (passé simple + imparfait, ou passé composé), puis reste **cohérent** dans tout le texte.
        :::

        ## Le present perfect
        - Avec *for* / *since* : **présent** en français → *She **has been living** here for ten years* → Elle **vit** ici depuis dix ans.
        - Sinon, souvent **passé composé** : *I **have finished*** → J'ai fini.

        ## Le pluperfect
        - *had + participe* → **plus-que-parfait** : *He **had left** when she arrived* → Il **était parti** quand elle arriva.
        - Avec *for* : **imparfait** → *They **had been waiting** for hours* → Ils **attendaient** depuis des heures.

        ## *Would* et *used to*
        - ***Would*** fréquentatif (habitude dans le passé) → **imparfait** : *Every evening he **would sit** by the fire* → Chaque soir, il **s'asseyait** près du feu.
        - ***Used to*** → imparfait, éventuellement « avoir l'habitude de » : *She **used to** sing* → Elle chantait (autrefois).
        - ***Would*** dans le discours indirect → **conditionnel** : *He said he **would come*** → Il dit qu'il **viendrait**.

        ## La forme *be + -ing*
        - Elle insiste sur le **déroulement** : souvent un **imparfait**, ou « être en train de » (avec modération).
        - *He **was reading** when the phone rang* → Il **lisait** quand le téléphone sonna.

        ## Les modaux
        - *must have + participe* → « il a dû » : *He **must have forgotten*** → Il **a dû** oublier.
        - *could have* → « aurait pu » ; *should have* → « aurait dû ».
        - *I wish I had known* → **Si seulement** j'avais su.
      `
    },
    {
      id: 'pieges',
      titre: 'Les pièges classiques',
      resume: 'Chassé-croisé, possessifs, -ing, ponctuation',
      contenu: `
        ## Le chassé-croisé
        L'anglais exprime la **manière** par le verbe et le **déplacement** par une particule ; le français fait l'inverse.
        - *He **swam across** the river* → Il **traversa** la rivière **à la nage**.
        - *She **tiptoed out** of the room* → Elle **sortit** de la pièce **sur la pointe des pieds**.
        - *The car **roared past*** → La voiture **passa** **dans un rugissement**.
        - *The door **creaked open*** → La porte **s'ouvrit** **en grinçant**.

        ## Les possessifs et le corps
        - L'anglais emploie le possessif, le français l'**article défini** : *He put **his** hand in **his** pocket* → Il mit **la** main dans **sa** poche. *She shook **her** head* → Elle secoua **la** tête.

        ## Les formes en *-ing*
        - Gérondif sujet → nom ou infinitif : ***Swimming** is good for you* → **La natation** / **Nager** fait du bien.
        - Participe → proposition relative ou gérondif français : *a man **walking** his dog* → un homme **qui promenait** son chien.

        ## L'étoffement
        Le français a souvent besoin d'un verbe ou d'un nom là où l'anglais se contente d'une préposition :
        - *the man **at** the window* → l'homme **qui se tenait** à la fenêtre ;
        - *a letter **from** my mother* → une lettre **envoyée par** ma mère / **de** ma mère.

        ## Les noms et l'ordre
        - Les groupes nominaux anglais se lisent **de droite à gauche** : *a **stone** garden **wall*** → un mur de jardin en pierre.
        - Les adjectifs composés : *a **blue-eyed** girl* → une fille **aux yeux bleus**.

        ## La ponctuation du dialogue
        - Guillemets français **« »**, tiret pour le changement d'interlocuteur.
        - Incise : *"Come in," she said* → « Entrez », dit-elle.

        ## Noms propres et culture
        - On garde les noms propres ; on traduit les titres (*Mr* → M., *Mrs* → Mme).
        - Les mesures : on peut les garder (*a mile*) ou les convertir si c'est naturel ; la monnaie se garde (*a pound* → une livre).
      `
    },
    {
      id: 'faux-amis',
      titre: 'Les faux amis',
      resume: 'Les mots qui trompent',
      contenu: `
        | Anglais | Sens réel | À ne pas confondre avec |
        |---|---|---|
        | actually | en fait, en réalité | actuellement (= currently) |
        | eventually | finalement, à la longue | éventuellement (= possibly) |
        | library | bibliothèque | librairie (= bookshop) |
        | sensible | raisonnable, sensé | sensible (= sensitive) |
        | deception | tromperie | déception (= disappointment) |
        | to pretend | faire semblant | prétendre (= to claim) |
        | to resume | reprendre | résumer (= to sum up) |
        | to attend | assister à | attendre (= to wait) |
        | to assist | aider | assister à (= to attend) |
        | lecture | conférence, cours magistral | lecture (= reading) |
        | journey | trajet, voyage | journée (= day) |
        | issue | question, problème ; numéro | issue (= outcome, exit) |
        | to achieve | accomplir, réussir | achever (= to finish) |
        | to demand | exiger | demander (= to ask) |
        | delay | retard | délai (= time limit) |
        | gentle | doux | gentil (= kind) |
        | grief | chagrin | grief (= grievance) |
        | to ignore | ne pas tenir compte de | ignorer (= not to know) |
        | injury | blessure | injure (= insult) |
        | fabric | tissu | fabrique (= factory) |
        | chance | hasard, occasion | chance (= luck) |
        | location | emplacement | location (= rental) |
        | to rest | se reposer | rester (= to stay) |
        | sympathetic | compatissant | sympathique (= nice) |
        | to realise | se rendre compte | réaliser (= to carry out) |
      `
    }
  ],

  quiz: [
    {
      id: 'faux-amis',
      titre: 'Faux amis',
      questions: [
        { q: '*Eventually, he agreed.*', c: ['Il finit par accepter.', 'Éventuellement, il accepta.', 'Il accepta peut-être.', 'Il accepta aussitôt.'], r: 0 },
        { q: '*She is a very sensible girl.*', c: ['C\'est une fille très raisonnable.', 'C\'est une fille très sensible.', 'C\'est une fille très sensuelle.', 'C\'est une fille très sentimentale.'], r: 0 },
        { q: '*He pretended to sleep.*', c: ['Il fit semblant de dormir.', 'Il prétendit dormir.', 'Il préféra dormir.', 'Il essaya de dormir.'], r: 0 },
        { q: '*I attended the lecture.*', c: ['J\'ai assisté à la conférence.', 'J\'ai attendu la lecture.', 'J\'ai aidé à la lecture.', 'J\'ai écouté la lecture.'], r: 0 },
        { q: '*They resumed work.*', c: ['Ils reprirent le travail.', 'Ils résumèrent le travail.', 'Ils terminèrent le travail.', 'Ils refusèrent le travail.'], r: 0 },
        { q: '*The journey was long.*', c: ['Le trajet fut long.', 'La journée fut longue.', 'Le journal était long.', 'La jonction fut longue.'], r: 0 },
        { q: '*Her grief was immense.*', c: ['Son chagrin était immense.', 'Son grief était immense.', 'Sa colère était immense.', 'Sa grâce était immense.'], r: 0 },
        { q: '*She went to the library.*', c: ['Elle alla à la bibliothèque.', 'Elle alla à la librairie.', 'Elle alla au libraire.', 'Elle alla à la liberté.'], r: 0 },
        { q: '*He suddenly realised he was late.*', c: ['Il se rendit compte soudain qu\'il était en retard.', 'Il réalisa soudain son retard.', 'Il accomplit soudain son retard.', 'Il comprit soudain le délai.'], r: 0 },
        { q: '*The delay annoyed them.*', c: ['Le retard les agaça.', 'Le délai les agaça.', 'La délégation les agaça.', 'Le départ les agaça.'], r: 0 },
        { q: '*He was very sympathetic.*', c: ['Il se montra très compatissant.', 'Il fut très sympathique.', 'Il fut très symbolique.', 'Il fut très synthétique.'], r: 0 },
        { q: '*Actually, I don\'t know.*', c: ['En fait, je ne sais pas.', 'Actuellement, je ne sais pas.', 'Activement, je ne sais pas.', 'En effet, je sais.'], r: 0 }
      ]
    },
    {
      id: 'temps',
      titre: 'Temps et aspects',
      questions: [
        { q: '*She has been living in London for ten years.*', c: ['Elle vit à Londres depuis dix ans.', 'Elle a vécu à Londres pendant dix ans.', 'Elle vivait à Londres depuis dix ans.', 'Elle vécut à Londres dix ans.'], r: 0 },
        { q: '*Every evening he would sit by the fire.*', c: ['Chaque soir, il s\'asseyait près du feu.', 'Chaque soir, il s\'assiérait près du feu.', 'Chaque soir, il voulait s\'asseoir près du feu.', 'Chaque soir, il s\'assit près du feu.'], r: 0, e: '*Would* fréquentatif → imparfait.' },
        { q: '*He must have forgotten.*', c: ['Il a dû oublier.', 'Il doit oublier.', 'Il devait oublier.', 'Il aurait dû oublier.'], r: 0 },
        { q: '*They had been waiting for hours.*', c: ['Ils attendaient depuis des heures.', 'Ils avaient attendu des heures.', 'Ils attendirent des heures.', 'Ils ont attendu des heures.'], r: 0 },
        { q: '*I wish I had known.*', c: ['Si seulement j\'avais su.', 'Je souhaite avoir su.', 'J\'aurais voulu savoir hier.', 'Je voudrais savoir.'], r: 0 },
        { q: '*He said he would come.*', c: ['Il dit qu\'il viendrait.', 'Il dit qu\'il venait.', 'Il dit qu\'il voulait venir.', 'Il dit qu\'il vint.'], r: 0 },
        { q: '*He was reading when the phone rang.*', c: ['Il lisait quand le téléphone sonna.', 'Il lut quand le téléphone sonnait.', 'Il était lisant quand le téléphone sonna.', 'Il a lu quand le téléphone a sonné.'], r: 0 },
        { q: '*It was the first time I had seen her.*', c: ['C\'était la première fois que je la voyais.', 'C\'était la première fois que je l\'avais vue.', 'Ce fut la première fois que je la vis.', 'C\'est la première fois que je la vois.'], r: 0 },
        { q: 'Dans un récit littéraire au passé, une action ponctuelle se traduit généralement au…', c: ['passé simple', 'présent', 'plus-que-parfait', 'futur'], r: 0 },
        { q: '*She used to sing.*', c: ['Elle chantait autrefois.', 'Elle chanta.', 'Elle a chanté.', 'Elle allait chanter.'], r: 0 }
      ]
    },
    {
      id: 'chasse-croise',
      titre: 'Chassé-croisé et étoffement',
      questions: [
        { q: '*He swam across the river.*', c: ['Il traversa la rivière à la nage.', 'Il nagea à travers la rivière.', 'Il nagea la rivière.', 'Il traversa en nageant la rivière vite.'], r: 0 },
        { q: '*She tiptoed out of the room.*', c: ['Elle sortit de la pièce sur la pointe des pieds.', 'Elle marcha sur ses orteils hors de la pièce.', 'Elle tiptoa hors de la pièce.', 'Elle sortit en courant.'], r: 0 },
        { q: '*The door creaked open.*', c: ['La porte s\'ouvrit en grinçant.', 'La porte grinça ouverte.', 'La porte ouverte grinçait.', 'La porte grinçante s\'ouvrit.'], r: 0 },
        { q: '*He put his hand in his pocket.*', c: ['Il mit la main dans sa poche.', 'Il mit sa main dans sa poche.', 'Il mit sa main dans la poche de lui.', 'Il mit la main dans la poche.'], r: 0, e: 'Partie du corps : article défini en français.' },
        { q: '*The man at the window was watching us.*', c: ['L\'homme qui se tenait à la fenêtre nous observait.', 'L\'homme à la fenêtre nous observa.', 'L\'homme de la fenêtre nous observant.', 'La fenêtre de l\'homme nous observait.'], r: 0 },
        { q: '*A blue-eyed girl*', c: ['une jeune fille aux yeux bleus', 'une fille bleue des yeux', 'une fille aux yeux bleutés de nature', 'une fille bleue'], r: 0 }
      ]
    }
  ],

  cartes: [
    {
      id: 'faux-amis',
      titre: 'Faux amis',
      cartes: [
        ['actually', 'en fait, en réalité', '≠ actuellement (currently)'],
        ['eventually', 'finalement, à la longue', '≠ éventuellement (possibly)'],
        ['library', 'bibliothèque', '≠ librairie (bookshop)'],
        ['sensible', 'raisonnable, sensé', '≠ sensible (sensitive)'],
        ['deception', 'tromperie', '≠ déception (disappointment)'],
        ['to pretend', 'faire semblant', '≠ prétendre (to claim)'],
        ['to resume', 'reprendre', '≠ résumer (to sum up)'],
        ['to attend', 'assister à', '≠ attendre (to wait)'],
        ['lecture', 'conférence, cours magistral', '≠ lecture (reading)'],
        ['journey', 'trajet, voyage', '≠ journée (day)'],
        ['to achieve', 'accomplir, réussir', '≠ achever (to finish)'],
        ['to demand', 'exiger', '≠ demander (to ask)'],
        ['delay', 'retard', '≠ délai (time limit)'],
        ['gentle', 'doux', '≠ gentil (kind)'],
        ['grief', 'chagrin', '≠ grief (grievance)'],
        ['to ignore', 'ne pas tenir compte de', '≠ ignorer (not to know)'],
        ['injury', 'blessure', '≠ injure (insult)'],
        ['fabric', 'tissu', '≠ fabrique (factory)'],
        ['location', 'emplacement', '≠ location (rental)'],
        ['to rest', 'se reposer', '≠ rester (to stay)'],
        ['sympathetic', 'compatissant', '≠ sympathique (nice)'],
        ['to realise', 'se rendre compte', '≠ réaliser (to carry out)'],
        ['issue', 'question, problème ; numéro d\'un journal', '≠ issue (outcome)'],
        ['chance', 'hasard, occasion', '≠ chance (luck)']
      ]
    },
    {
      id: 'mouvement',
      titre: 'Verbes de mouvement et de manière',
      cartes: [
        ['to stride', 'marcher à grandes enjambées'],
        ['to stroll', 'flâner, se promener'],
        ['to limp', 'boiter'],
        ['to stagger', 'tituber'],
        ['to tiptoe', 'marcher sur la pointe des pieds'],
        ['to creep', 'avancer furtivement, ramper'],
        ['to rush', 'se précipiter'],
        ['to wander', 'errer'],
        ['to stumble', 'trébucher'],
        ['to dart', 'filer comme une flèche'],
        ['to glance', 'jeter un coup d\'œil'],
        ['to stare', 'regarder fixement'],
        ['to glare', 'lancer un regard furieux'],
        ['to whisper', 'chuchoter'],
        ['to mutter', 'marmonner']
      ]
    }
  ],

  sujets: [
    {
      id: 'phrases',
      type: 'phrases',
      titre: 'Dix phrases pièges',
      enonce: 'Traduis chaque phrase en français correct et naturel.',
      items: [
        { q: 'He swam across the river.', r: 'Il traversa la rivière à la nage.', e: 'Chassé-croisé : la manière (*swam*) devient un complément.' },
        { q: 'She has been living in London for ten years.', r: 'Elle vit à Londres depuis dix ans.', e: 'Present perfect + *for* → présent + « depuis ».' },
        { q: 'Every evening he would sit by the fire for hours.', r: 'Chaque soir, il restait assis des heures près du feu.', e: '*Would* fréquentatif → imparfait.' },
        { q: 'They eventually agreed.', r: 'Ils finirent par tomber d\'accord.', e: '*Eventually* = finalement (faux ami).' },
        { q: 'I wish I had known.', r: 'Si seulement j\'avais su.', e: '*I wish* + pluperfect : un regret.' },
        { q: 'She tiptoed out of the room.', r: 'Elle sortit de la pièce sur la pointe des pieds.', e: 'Chassé-croisé.' },
        { q: 'He put his hand in his pocket.', r: 'Il mit la main dans sa poche.', e: 'Partie du corps : article défini.' },
        { q: 'It was the first time I had seen her.', r: 'C\'était la première fois que je la voyais.', e: 'Le français emploie l\'imparfait après « la première fois que ».' },
        { q: 'The door creaked open.', r: 'La porte s\'ouvrit en grinçant.', e: 'Chassé-croisé avec un verbe de bruit.' },
        { q: 'He must have forgotten.', r: 'Il a dû oublier.', e: '*Must have* + participe : supposition sur le passé.' }
      ]
    },
    {
      id: 'austen',
      type: 'version',
      titre: 'Jane Austen, *Pride and Prejudice* (1813), incipit',
      enonce: 'Traduis l\'ouverture du roman.',
      duree: 40,
      texte: `
        It is a truth universally acknowledged, that a single man in possession of a good fortune,
        must be in want of a wife.
        However little known the feelings or views of such a man may be on his first entering a neighbourhood,
        this truth is so well fixed in the minds of the surrounding families,
        that he is considered the rightful property of some one or other of their daughters.
      `,
      source: 'Jane Austen, *Pride and Prejudice*, chapitre 1 (1813).',
      corrige: `
        C'est une vérité universellement reconnue qu'un célibataire pourvu d'une belle fortune doit être en quête d'une épouse.
        Si peu que l'on connaisse les sentiments ou les vues d'un tel homme lorsqu'il s'installe pour la première fois dans une région, cette vérité est si bien ancrée dans l'esprit des familles du voisinage qu'on le considère comme la propriété légitime de l'une ou l'autre de leurs filles.
      `,
      pistes: `
        ### Points de difficulté
        - **L'ironie** : la « vérité universelle » est en fait le point de vue des mères qui cherchent un mari pour leurs filles. Ta traduction doit garder le ton solennel et faussement sentencieux.
        - *single man* : un célibataire ; *in possession of a good fortune* : pourvu d'une belle fortune (garder le registre soutenu).
        - *must be in want of* : double sens de *want* (manquer de / désirer) — « doit être en quête de » garde l'ambiguïté.
        - *However little known… may be* : concession → « si peu que… », « aussi peu connus que soient… ».
        - *on his first entering a neighbourhood* : gérondif → « lorsqu'il arrive pour la première fois dans… ».
        - *rightful property* : « propriété légitime » : la métaphore juridique est au cœur de l'ironie.
      `
    },
    {
      id: 'dickens',
      type: 'version',
      titre: 'Charles Dickens, *A Tale of Two Cities* (1859), incipit',
      enonce: 'Traduis cette célèbre ouverture.',
      duree: 40,
      texte: `
        It was the best of times, it was the worst of times, it was the age of wisdom,
        it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity,
        it was the season of Light, it was the season of Darkness, it was the spring of hope,
        it was the winter of despair, we had everything before us, we had nothing before us,
        we were all going direct to Heaven, we were all going direct the other way.
      `,
      source: 'Charles Dickens, *A Tale of Two Cities*, livre I, chapitre 1 (1859).',
      corrige: `
        C'était le meilleur des temps, c'était le pire des temps ; c'était l'âge de la sagesse, c'était l'âge de la folie ; c'était l'époque de la foi, c'était l'époque de l'incrédulité ; c'était la saison de la Lumière, c'était la saison des Ténèbres ; c'était le printemps de l'espoir, c'était l'hiver du désespoir ; nous avions tout devant nous, nous n'avions rien devant nous ; nous allions tous droit au Ciel, nous allions tous droit dans l'autre direction.
      `,
      pistes: `
        ### Points de difficulté
        - Le texte repose sur l'**anaphore** (*it was…*) et l'**antithèse** systématique : garde-les absolument, c'est le sens même du passage.
        - **Temps** : description d'une époque → **imparfait** (« c'était »).
        - *the age / the epoch / the season* : varie les termes comme Dickens (« l'âge », « l'époque », « la saison »).
        - Les **majuscules** (*Light*, *Darkness*, *Heaven*) donnent une dimension presque religieuse : on peut les garder.
        - *the other way* : un euphémisme pour l'Enfer, à garder tel quel (« dans l'autre direction », « tout droit dans l'autre sens »).
        - La ponctuation : Dickens n'a que des virgules ; le point-virgule entre les paires peut aider la lecture en français.
      `
    },
    {
      id: 'woolf',
      type: 'version',
      titre: 'Virginia Woolf, *Mrs Dalloway* (1925), incipit',
      enonce: 'Traduis l\'ouverture du roman.',
      duree: 40,
      texte: `
        Mrs Dalloway said she would buy the flowers herself.
        For Lucy had her work cut out for her. The doors would be taken off their hinges;
        Rumpelmayer's men were coming in. And then, thought Clarissa Dalloway, what a morning —
        fresh as if issued to children on a beach.
      `,
      source: 'Virginia Woolf, *Mrs Dalloway* (1925). *Rumpelmayer\'s* : une maison de traiteurs et de pâtissiers.',
      corrige: `
        Mrs Dalloway dit qu'elle achèterait les fleurs elle-même.
        Car Lucy avait du pain sur la planche. On allait enlever les portes de leurs gonds ; les hommes de chez Rumpelmayer allaient venir. Et puis, pensa Clarissa Dalloway, quelle matinée — fraîche comme si on l'avait distribuée à des enfants sur une plage.
      `,
      pistes: `
        ### Points de difficulté
        - *said she would buy* : discours indirect → **conditionnel** (« achèterait »).
        - *had her work cut out for her* : expression idiomatique (« avoir du pain sur la planche », « avoir fort à faire »).
        - *would be taken off* : futur dans le passé, ici dans la pensée du personnage → « on allait enlever ».
        - Le **discours indirect libre** et le **flux de conscience** : on passe sans transition du récit aux pensées de Clarissa (« quelle matinée »). Garde cette fluidité.
        - *fresh as if issued to children* : image surprenante ; *issued* = distribué, fourni (comme un objet neuf). Reste fidèle à l'étrangeté de l'image.
        - On garde **Mrs** (ou on écrit Mme Dalloway), mais reste cohérent.
      `
    },
    {
      id: 'gatsby',
      type: 'version',
      titre: 'F. Scott Fitzgerald, *The Great Gatsby* (1925), excipit',
      enonce: 'Traduis la fin du roman.',
      duree: 40,
      texte: `
        Gatsby believed in the green light, the orgastic future that year by year recedes before us.
        It eluded us then, but that's no matter — tomorrow we will run faster, stretch out our arms farther…
        And one fine morning ——

        So we beat on, boats against the current, borne back ceaselessly into the past.
      `,
      source: 'F. Scott Fitzgerald, *The Great Gatsby*, chapitre IX (1925). *The green light* : la lumière verte au bout du ponton de Daisy.',
      corrige: `
        Gatsby croyait en la lumière verte, en cet avenir orgiaque qui, d'année en année, recule devant nous. Il nous a échappé alors, mais peu importe : demain, nous courrons plus vite, nous tendrons les bras plus loin… Et un beau matin —

        C'est ainsi que nous avançons, barques à contre-courant, sans cesse ramenés vers le passé.
      `,
      pistes: `
        ### Points de difficulté
        - *believed in* : imparfait (croyance durable) → « croyait en ».
        - *orgastic* : mot rare et audacieux (souvent rendu par « orgiaque ») ; ne l'affadis pas.
        - *recedes before us* : présent de vérité générale → présent.
        - *It eluded us then* : un passé composé ou un passé simple ; *that's no matter* : « peu importe ».
        - La phrase interrompue (*And one fine morning ——*) : garde la suspension.
        - La dernière phrase, très célèbre : *beat on* (lutter, avancer en luttant), *boats against the current* (apposition), *borne back* (participe passif de *bear*) ; le rythme et les allitérations (*beat… boats… borne back*) sont essentiels. Plusieurs traductions sont possibles : vise la musique de la phrase.
      `
    }
  ]
});
