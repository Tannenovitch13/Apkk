/* Littérature : dissertation et explication de texte — ordre du cours : poésie, théâtre, roman */

STUDIUM.add({
  id: 'litterature',
  nom: 'Littérature',
  court: 'Poésie, théâtre, roman',
  icone: 'feather',
  description: 'Le cours suit l\'ordre choisi par la professeure : la poésie, puis le théâtre, et enfin le roman.',
  epreuves: ['DS : dissertation', 'DS : explication de texte'],
  methodes: ['explication', 'dissertation', 'kholle'],
  avertissement: `
    Attention : la professeure a **inversé l'ordre** habituel. On commence par la **poésie**, puis le **théâtre**, et on finit par le **roman**. Les fiches ci-dessous suivent cet ordre.
  `,
  conseils: `
    ### Comment progresser en littérature
    - Lis les **œuvres au programme** crayon en main, et note les **passages clés** (avec la page) : ce sont tes futurs exemples.
    - Apprends par cœur **quelques vers** et **quelques phrases** de chaque œuvre : une citation exacte vaut de l'or.
    - Maîtrise le **vocabulaire technique** (versification, figures, narration) : il rend l'analyse précise.
    - En explication, ne relève jamais un procédé sans dire **quel effet** il produit.
  `,

  cours: [
    {
      id: 'poesie-versification',
      titre: 'La poésie (1) — la versification',
      resume: 'Mètres, rimes, rythme, formes fixes',
      contenu: `
        ## Compter les syllabes
        - Le vers français se définit par son **nombre de syllabes** (le mètre) :
          - **alexandrin** : 12 syllabes, le vers noble (tragédie, grande poésie) ;
          - **décasyllabe** : 10 syllabes ;
          - **octosyllabe** : 8 syllabes, vers léger et chantant.
        - Le **e muet** (ou caduc) :
          - se prononce et compte **devant une consonne** : « Une-ter-re » ;
          - s'**élide** devant une voyelle ou un *h* muet : « Un(e) é-toi-le » ;
          - ne compte jamais **en fin de vers**.
        - **Diérèse** : on prononce en deux syllabes deux voyelles qui se suivent (« pass**i-on** ») ; elle met le mot en valeur. Le contraire est la **synérèse**.

        :::exemple Exemple d'alexandrin
        « Le / vier / ge, / le / vi / va / ce et / le / bel / au / jour / d'hui » (Mallarmé) : 12 syllabes. Le *e* de *vivace* s'élide devant *et*.
        :::

        ## Le rythme
        - La **césure** coupe l'alexandrin classique en deux **hémistiches** de 6 syllabes : « Je le vis, je rougis, // je pâlis à sa vue » (Racine).
        - Les **coupes** marquent les accents à l'intérieur des hémistiches (ici 3/3//3/3 : rythme régulier).
        - Le **trimètre** romantique (4/4/4) bouscule la césure classique.
        - **Enjambement** : la phrase déborde sur le vers suivant. Il crée un **rejet** (un mot court rejeté au début du vers suivant) ou un **contre-rejet** (un mot court annonçant au bout du vers ce qui suit).

        ## La rime
        - **Richesse** : **pauvre** (un seul son commun : *ami / joli*), **suffisante** (deux sons : *ami / parmi*), **riche** (trois sons ou plus : *table / stable*).
        - **Genre** : **féminine** si elle se termine par un *e* muet (*belle / nouvelle*), **masculine** sinon. La règle classique impose leur **alternance**.
        - **Disposition** :
          - **plates** (ou suivies) : AABB ;
          - **croisées** : ABAB ;
          - **embrassées** : ABBA.

        ## Les formes fixes
        - **Le sonnet** : 14 vers, **deux quatrains** (rimes embrassées, les mêmes dans les deux) et **deux tercets**. Venu d'Italie (Pétrarque), il s'impose en France au XVIᵉ siècle avec la Pléiade. Le dernier vers, la **chute** (ou pointe), est souvent mis en valeur.
        - **La ballade** (Villon, *Ballade des pendus*), le **rondeau**, l'**ode** (Ronsard).

        ## Les libérations modernes
        - Le **vers libéré** (Verlaine), puis le **vers libre** (sans mètre régulier ni rime obligée : Laforgue, Apollinaire).
        - Le **poème en prose** : Aloysius Bertrand (*Gaspard de la nuit*, 1842), Baudelaire (*Le Spleen de Paris*, 1869), Rimbaud (*Illuminations*).
        - Apollinaire supprime la **ponctuation** dans *Alcools* (1913).
      `
    },
    {
      id: 'poesie-histoire',
      titre: 'La poésie (2) — histoire et enjeux',
      resume: 'Du lyrisme orphique au surréalisme',
      contenu: `
        ## Qu'est-ce que la poésie ?
        - Le mot vient du grec ***poiein*** : **faire**, fabriquer. Le poète est un artisan du langage.
        - Le **lyrisme** vient de la **lyre** d'**Orphée** : expression des sentiments personnels, du chant.
        - Quelques définitions à citer :
          - « Le poème — cette hésitation prolongée entre le son et le sens » (**Valéry**, *Rhumbs*, 1926) ;
          - « Donner un sens plus pur aux mots de la tribu » (**Mallarmé**, *Le Tombeau d'Edgar Poe*) ;
          - « Je est un autre » (**Rimbaud**, lettre à Paul Demeny, 1871) ;
          - « Tu m'as donné ta boue et j'en ai fait de l'or » (**Baudelaire**, projet d'épilogue des *Fleurs du mal*).

        ## Les grands moments
        - **Moyen Âge** : poésie des troubadours, **Villon** (*Le Testament*, 1461).
        - **XVIᵉ siècle — la Pléiade** (d'abord appelée la **Brigade**) : **Du Bellay** (*Défense et illustration de la langue française*, 1549 ; *Les Regrets*, 1558), **Ronsard** (*Les Amours*). Il s'agit d'enrichir le français en imitant les Anciens et les Italiens.
        - **XVIIᵉ siècle — le classicisme** : **Malherbe** impose la clarté et la régularité ; **Boileau** (*L'Art poétique*, 1674) ; **La Fontaine** (*Fables*, 1668-1694).
        - **Le romantisme** : **Lamartine** (*Méditations poétiques*, 1820, avec *Le Lac*), **Hugo** (*Les Contemplations*, 1856), **Musset**, **Vigny**. Lyrisme du moi, nature, révolte. Hugo veut « mettre un bonnet rouge au vieux dictionnaire ».
        - **Le Parnasse** : **Gautier** (*Émaux et Camées*, 1852), **Leconte de Lisle** ; « l'art pour l'art », culte de la forme.
        - **Baudelaire**, *Les Fleurs du mal* (**1857**, condamnées pour outrage à la morale publique) : modernité, spleen et idéal, beauté du mal.
        - **Le symbolisme** : **Verlaine** (« De la musique avant toute chose », *Art poétique*), **Mallarmé**, **Rimbaud** ; suggérer plutôt que nommer.
        - **XXᵉ siècle** : **Apollinaire** (*Alcools*, 1913 ; *Calligrammes*, 1918) ; le **surréalisme** (**Breton**, *Manifeste*, 1924 ; écriture automatique ; **Éluard**, **Aragon**) ; **Ponge** (*Le Parti pris des choses*, 1942) ; **Char** ; **Bonnefoy**.

        :::retenir Les grandes questions de dissertation
        - La poésie est-elle **chant** (musique, lyrisme) ou **travail** du langage (forme, artisanat) ?
        - Exprime-t-elle le **moi** du poète, ou dépasse-t-elle l'individu (« Je est un autre ») ?
        - Doit-elle **s'engager** (Hugo, Aragon) ou ne servir que la beauté (l'art pour l'art) ?
        - Dit-elle le **monde** autrement, en renouvelant notre regard sur les choses (Ponge) ?
        :::
      `
    },
    {
      id: 'theatre',
      titre: 'Le théâtre',
      resume: 'Genres, règles, énonciation, mise en scène',
      contenu: `
        ## Un texte fait pour la scène
        - Le mot vient du grec ***theatron*** : le lieu d'où l'on **regarde**.
        - Le texte théâtral comprend le **dialogue** (répliques) et les **didascalies** (indications scéniques).
        - **Double énonciation** : les personnages se parlent entre eux, mais l'auteur s'adresse, à travers eux, au **public**. D'où l'**ironie dramatique** : le spectateur en sait plus que le personnage.

        ## Les formes de la parole
        - **Réplique** : ce que dit un personnage avant qu'un autre ne parle.
        - **Tirade** : longue réplique ; **monologue** : un personnage seul en scène (délibération, comme celui de Rodrigue, les « stances » du *Cid*).
        - **Stichomythie** : échange rapide de répliques d'un vers ou d'un demi-vers (affrontement).
        - **Aparté** : ce qu'un personnage dit pour lui seul, que le public entend.

        ## La structure
        - **Actes** (souvent 5 dans la tragédie classique) et **scènes** (une scène change à chaque entrée ou sortie).
        - **Exposition** (présenter les personnages et la situation), **nœud**, **péripéties**, **coup de théâtre**, **dénouement**.
        - Le **quiproquo** : un personnage en prend un autre pour un autre, ou comprend une chose pour une autre.

        ## Les genres
        - **La tragédie** : personnages illustres, destin, passions ; elle suscite la **terreur** et la **pitié** et opère une **catharsis** (Aristote, *Poétique*). **Corneille** (*Le Cid*, 1637), **Racine** (*Andromaque*, 1667 ; *Phèdre*, 1677). Racine : « Ce n'est point une nécessité qu'il y ait du sang et des morts dans une tragédie » (préface de *Bérénice*, 1670).
        - **La comédie** : personnages ordinaires, intrigues amoureuses, satire des mœurs. **Molière** : « le devoir de la comédie étant de corriger les hommes en les divertissant » (premier placet au roi sur *Tartuffe*, 1664).
        - **Le drame romantique** : mélange des genres (le sublime et le grotesque), liberté des règles. **Hugo**, *Préface de Cromwell* (1827), *Hernani* (1830, la « bataille d'*Hernani* »). **Musset**, *Lorenzaccio* (1834).
        - **Le théâtre de l'absurde** : **Ionesco** (*La Cantatrice chauve*, 1950), **Beckett** (*En attendant Godot*, 1953).

        ## Les règles classiques (XVIIᵉ siècle)
        - Les **trois unités** : « Qu'en un lieu, qu'en un jour, un seul fait accompli / Tienne jusqu'à la fin le théâtre rempli » (**Boileau**, *L'Art poétique*, 1674).
        - La **vraisemblance** : ce que le public peut croire.
        - La **bienséance** : ne pas choquer (pas de sang ni de mort sur scène : on les raconte, c'est le **récit**, comme celui de Théramène dans *Phèdre*).

        ## La mise en scène
        - Le **metteur en scène** au sens moderne apparaît à la fin du XIXᵉ siècle (André **Antoine**, Théâtre-Libre, 1887).
        - **Jean Vilar** fonde le **Festival d'Avignon** en **1947** et défend un « théâtre national populaire ». La Cour d'honneur du palais des Papes en est le lieu emblématique.
        - Un texte de théâtre est toujours à **interpréter** : chaque mise en scène en propose une lecture.

        :::retenir Les grandes questions de dissertation
        - Le théâtre est-il fait pour être **lu** ou pour être **vu** ?
        - Le théâtre doit-il **imiter** le réel ou le **transfigurer** ?
        - Le spectateur doit-il s'**identifier** aux personnages ou garder une **distance** critique (Brecht) ?
        - Rire et pleurer : la frontière entre comédie et tragédie est-elle si nette ?
        :::
      `
    },
    {
      id: 'roman',
      titre: 'Le roman',
      resume: 'Narration, point de vue, temps, histoire du genre',
      contenu: `
        ## Les outils de l'analyse narrative (Genette, *Figures III*, 1972)

        ### Qui raconte ?
        - **Auteur** (la personne réelle) ≠ **narrateur** (la voix qui raconte dans le texte).
        - Narrateur **interne** à l'histoire (il est personnage, récit à la 1ʳᵉ personne) ou **externe** (récit à la 3ᵉ personne).

        ### Qui voit ? La focalisation
        - **Zéro** (narrateur omniscient) : il sait tout, entre dans toutes les pensées (Balzac).
        - **Interne** : on voit à travers les yeux d'un personnage (Flaubert, Proust).
        - **Externe** : on ne voit que l'extérieur, comme une caméra (Hemingway, Camus au début de *L'Étranger*).

        ### Le temps du récit
        - **Ordre** : l'**analepse** (retour en arrière) et la **prolepse** (anticipation).
        - **Vitesse** :
          - **scène** (dialogue : temps du récit ≈ temps de l'histoire) ;
          - **sommaire** (des années en quelques lignes) ;
          - **ellipse** (un moment passé sous silence) ;
          - **pause** (description : l'histoire s'arrête).

        ### Les paroles des personnages
        - Discours **direct** : « Je partirai demain », dit-il.
        - Discours **indirect** : Il dit qu'il partirait le lendemain.
        - Discours **indirect libre** : Il partirait demain. Rien ne le retiendrait plus. (Mélange de la voix du narrateur et de celle du personnage : très fréquent chez **Flaubert**.)

        ## Histoire du genre
        - **Moyen Âge** : le « roman » est d'abord un récit en langue **romane** (et non en latin) : **Chrétien de Troyes** (XIIᵉ siècle), les romans de chevalerie.
        - **XVIᵉ siècle** : **Rabelais** (*Pantagruel*, 1532 ; *Gargantua*, 1534).
        - **XVIIᵉ siècle** : *La Princesse de Clèves* (**Mme de La Fayette**, 1678), roman d'analyse.
        - **XVIIIᵉ siècle** : roman épistolaire (*Les Lettres persanes*, Montesquieu, 1721 ; *Les Liaisons dangereuses*, Laclos, 1782), roman philosophique (Voltaire, *Candide*, 1759).
        - **Le réalisme** : **Balzac** (*La Comédie humaine* : « La Société française allait être l'historien, je ne devais être que le secrétaire », avant-propos, 1842), **Stendhal** (*Le Rouge et le Noir*, 1830), **Flaubert** (*Madame Bovary*, 1857).
        - **Le naturalisme** : **Zola** (*Les Rougon-Macquart*, 1871-1893), Maupassant. Pour Zola, l'œuvre d'art est « un coin de la création vu à travers un tempérament ».
        - **XXᵉ siècle** : **Proust** (*À la recherche du temps perdu*, 1913-1927), **Céline**, **Camus**, le **Nouveau Roman** (Robbe-Grillet, Nathalie Sarraute, *L'Ère du soupçon*, 1956), l'**autofiction**.

        :::retenir Les grandes questions de dissertation
        - Le roman doit-il être un **miroir** du réel (Stendhal), ou une **illusion** (« Les Réalistes de talent devraient s'appeler plutôt des Illusionnistes », Maupassant, préface de *Pierre et Jean*, 1888) ?
        - Le **personnage** est-il indispensable au roman ?
        - Le roman nous apprend-il **à vivre**, à **connaître** les autres et nous-mêmes ?
        :::
      `
    },
    {
      id: 'figures',
      titre: 'Les figures de style',
      resume: 'Les figures à reconnaître et à interpréter',
      contenu: `
        Une figure n'a d'intérêt que par son **effet** : identifie-la, puis explique ce qu'elle produit.

        ## Figures d'analogie
        - **Comparaison** : rapprochement avec un outil (*comme, tel, pareil à*) : « La Terre est bleue comme une orange » (Éluard).
        - **Métaphore** : rapprochement sans outil : « Ô temps, suspends ton vol ! » (Lamartine).
        - **Personnification** : un objet ou une idée traités comme une personne.
        - **Allégorie** : une idée abstraite représentée de façon concrète et développée (la Mort avec sa faux).

        ## Figures de substitution
        - **Métonymie** : un mot remplacé par un autre lié logiquement : « boire un verre » (le contenant pour le contenu).
        - **Synecdoque** : la partie pour le tout : « une voile » pour un navire.
        - **Périphrase** : une expression pour un mot : « la Ville Lumière » (Paris).
        - **Hypallage** : un adjectif attribué à un autre mot que celui qu'il qualifie logiquement : « Ils allaient obscurs sous la nuit solitaire » (Virgile, *Énéide*, VI).

        ## Figures d'opposition
        - **Antithèse** : deux termes opposés rapprochés : « Je vis, je meurs » (Louise Labé).
        - **Oxymore** : deux termes contradictoires réunis : « Cette obscure clarté qui tombe des étoiles » (Corneille, *Le Cid*).
        - **Chiasme** : structure croisée ABBA : « Il faut manger pour vivre et non pas vivre pour manger » (Molière, *L'Avare*).

        ## Figures d'atténuation et d'insistance
        - **Litote** : dire moins pour suggérer plus : « Va, je ne te hais point » (Corneille, *Le Cid*).
        - **Euphémisme** : adoucir une réalité pénible : « il nous a quittés ».
        - **Hyperbole** : exagération : « mourir de rire ».
        - **Gradation** : termes d'intensité croissante : « Va, cours, vole, et nous venge » (*Le Cid*).
        - **Anaphore** : répétition en tête de vers ou de phrase : « Rome, l'unique objet de mon ressentiment ! / Rome… » (Corneille, *Horace*).
        - **Prétérition** : dire qu'on ne dira pas ce qu'on dit pourtant.

        ## Figures de construction et de sonorité
        - **Zeugma** : un même mot relie deux termes de nature différente : « Vêtu de probité candide et de lin blanc » (Hugo, *Booz endormi*).
        - **Asyndète** : suppression des mots de liaison : « *Veni, vidi, vici* » (César).
        - **Anacoluthe** : rupture de construction : « Le nez de Cléopâtre : s'il eût été plus court, toute la face de la terre aurait changé » (Pascal).
        - **Allitération** (consonnes) : « Pour qui sont ces serpents qui sifflent sur vos têtes ? » (Racine, *Andromaque*).
        - **Assonance** (voyelles) : « Tout m'afflige et me nuit et conspire à me nuire » (Racine, *Phèdre*).
        - **Antanaclase** : un même mot dans deux sens différents : « Le cœur a ses raisons que la raison ne connaît point » (Pascal).
        - **Paronomase** : rapprochement de mots aux sons proches : « Qui se ressemble s'assemble ».
      `
    }
  ],

  quiz: [
    {
      id: 'versification',
      titre: 'Versification',
      questions: [
        { q: 'Combien de syllabes compte un alexandrin ?', c: ['12', '10', '8', '14'], r: 0 },
        { q: 'La pause au milieu de l\'alexandrin classique s\'appelle…', c: ['la césure', 'la coupe', 'l\'enjambement', 'la diérèse'], r: 0 },
        { q: 'Des rimes ABBA sont…', c: ['embrassées', 'croisées', 'plates', 'suivies'], r: 0 },
        { q: 'Une rime féminine se termine par…', c: ['un e muet', 'une voyelle', 'un nom féminin', 'une consonne sonore'], r: 0 },
        { q: '*Ami / parmi* forment une rime…', c: ['suffisante', 'pauvre', 'riche', 'féminine'], r: 0, e: 'Deux sons communs : [m] et [i]. *Ami / joli* serait pauvre (un seul son) ; *table / stable*, riche (trois sons).' },
        { q: 'Prononcer « pass-i-on » en trois syllabes, c\'est faire…', c: ['une diérèse', 'une synérèse', 'une élision', 'une césure'], r: 0 },
        { q: 'Un sonnet compte…', c: ['14 vers', '12 vers', '16 vers', '10 vers'], r: 0 },
        { q: 'Un mot court reporté au début du vers suivant par l\'enjambement forme…', c: ['un rejet', 'un contre-rejet', 'une chute', 'une coupe'], r: 0 },
        { q: 'Le e muet en fin de vers…', c: ['ne compte jamais', 'compte toujours', 'compte devant une consonne', 'compte dans un sonnet'], r: 0 },
        { q: 'Qui supprime la ponctuation dans *Alcools* (1913) ?', c: ['Apollinaire', 'Rimbaud', 'Breton', 'Mallarmé'], r: 0 }
      ]
    },
    {
      id: 'theatre',
      titre: 'Le théâtre',
      questions: [
        { q: 'Un échange rapide de répliques très courtes s\'appelle…', c: ['une stichomythie', 'une tirade', 'un aparté', 'une didascalie'], r: 0 },
        { q: 'Les indications scéniques s\'appellent…', c: ['des didascalies', 'des apartés', 'des répliques', 'des stances'], r: 0 },
        { q: 'La double énonciation signifie que…', c: ['les personnages parlent aussi, à travers eux, au public', 'deux personnages parlent en même temps', 'la pièce a deux auteurs', 'le texte est en vers et en prose'], r: 0 },
        { q: 'Qui fonde le Festival d\'Avignon en 1947 ?', c: ['Jean Vilar', 'Antoine Vitez', 'Ariane Mnouchkine', 'Louis Jouvet'], r: 0 },
        { q: 'Les trois unités classiques sont…', c: ['temps, lieu, action', 'temps, lieu, personnages', 'action, ton, style', 'lieu, décor, costume'], r: 0 },
        { q: 'La *Préface de Cromwell* (1827), manifeste du drame romantique, est de…', c: ['Victor Hugo', 'Alfred de Musset', 'Alexandre Dumas', 'Alfred de Vigny'], r: 0 },
        { q: 'Selon Aristote, la tragédie suscite terreur et pitié et opère…', c: ['une catharsis', 'une mimèsis', 'une hubris', 'une péripétie'], r: 0 },
        { q: '« Va, je ne te hais point » (Chimène, *Le Cid*) est…', c: ['une litote', 'une hyperbole', 'un oxymore', 'une antithèse'], r: 0 }
      ]
    },
    {
      id: 'roman',
      titre: 'Roman et narration',
      questions: [
        { q: 'Un narrateur qui sait tout et entre dans toutes les pensées adopte une focalisation…', c: ['zéro', 'interne', 'externe', 'multiple'], r: 0 },
        { q: 'Un retour en arrière dans le récit est…', c: ['une analepse', 'une prolepse', 'une ellipse', 'une pause'], r: 0 },
        { q: '« Il partirait demain. Rien ne le retiendrait plus. » est au discours…', c: ['indirect libre', 'direct', 'indirect', 'narrativisé'], r: 0 },
        { q: '« Un roman est un miroir qui se promène sur une grande route » est de…', c: ['Stendhal', 'Balzac', 'Zola', 'Flaubert'], r: 0, e: '*Le Rouge et le Noir* (1830).' },
        { q: '*La Princesse de Clèves* (1678) est de…', c: ['Mme de La Fayette', 'Mme de Sévigné', 'Mlle de Scudéry', 'George Sand'], r: 0 },
        { q: 'Le cycle des *Rougon-Macquart* est l\'œuvre de…', c: ['Zola', 'Balzac', 'Maupassant', 'Proust'], r: 0 },
        { q: 'Dans la préface de *Pierre et Jean*, Maupassant affirme que les réalistes devraient s\'appeler…', c: ['des illusionnistes', 'des photographes', 'des historiens', 'des peintres'], r: 0 },
        { q: 'Un passage sous silence d\'une partie de l\'histoire est…', c: ['une ellipse', 'un sommaire', 'une scène', 'une analepse'], r: 0 }
      ]
    },
    {
      id: 'figures',
      titre: 'Figures de style',
      questions: [
        { q: '« Cette obscure clarté qui tombe des étoiles » contient…', c: ['un oxymore', 'une litote', 'une métonymie', 'une anaphore'], r: 0 },
        { q: '« Il faut manger pour vivre et non pas vivre pour manger » est…', c: ['un chiasme', 'une antithèse simple', 'un zeugma', 'une gradation'], r: 0 },
        { q: '« Boire un verre » est…', c: ['une métonymie', 'une métaphore', 'une synecdoque', 'une hyperbole'], r: 0 },
        { q: '« Vêtu de probité candide et de lin blanc » est…', c: ['un zeugma', 'un chiasme', 'une hypallage', 'un oxymore'], r: 0 },
        { q: '« Pour qui sont ces serpents qui sifflent sur vos têtes ? » repose sur…', c: ['une allitération en s', 'une assonance en i', 'une anaphore', 'une paronomase'], r: 0 },
        { q: '« Va, cours, vole, et nous venge » est…', c: ['une gradation', 'une litote', 'une antithèse', 'une périphrase'], r: 0 },
        { q: '« Ils allaient obscurs sous la nuit solitaire » contient…', c: ['une hypallage', 'une métonymie', 'une litote', 'un chiasme'], r: 0, e: 'Ce sont les voyageurs qui sont seuls et la nuit qui est obscure.' },
        { q: '« La Ville Lumière » pour Paris est…', c: ['une périphrase', 'une métaphore filée', 'une allégorie', 'un euphémisme'], r: 0 },
        { q: '« Le cœur a ses raisons que la raison ne connaît point » joue sur…', c: ['une antanaclase', 'une anaphore', 'une hyperbole', 'un zeugma'], r: 0 },
        { q: '« Veni, vidi, vici » est un exemple d\'…', c: ['asyndète', 'anacoluthe', 'oxymore', 'euphémisme'], r: 0 }
      ]
    }
  ],

  cartes: [
    {
      id: 'figures',
      titre: 'Figures de style',
      cartes: [
        ['Anaphore', 'Répétition d\'un mot en tête de vers ou de phrase', '« Rome, l\'unique objet de mon ressentiment ! / Rome… » (Corneille)'],
        ['Chiasme', 'Structure croisée ABBA', '« Il faut manger pour vivre et non pas vivre pour manger »'],
        ['Oxymore', 'Deux termes contradictoires réunis', '« Cette obscure clarté » (Corneille)'],
        ['Antithèse', 'Deux termes opposés rapprochés', '« Je vis, je meurs » (Louise Labé)'],
        ['Hypallage', 'Adjectif rapporté à un autre mot que celui qu\'il qualifie', '« Ils allaient obscurs sous la nuit solitaire »'],
        ['Métonymie', 'Remplacer un mot par un autre lié logiquement', '« boire un verre »'],
        ['Synecdoque', 'La partie pour le tout', '« une voile » pour un navire'],
        ['Litote', 'Dire moins pour suggérer plus', '« Va, je ne te hais point »'],
        ['Euphémisme', 'Atténuer une réalité pénible', '« il nous a quittés »'],
        ['Hyperbole', 'Exagération', '« mourir de rire »'],
        ['Zeugma', 'Un mot relie deux termes de nature différente', '« Vêtu de probité candide et de lin blanc »'],
        ['Prétérition', 'Dire qu\'on ne dira pas ce qu\'on dit', '« Je ne vous parlerai pas de… »'],
        ['Gradation', 'Termes d\'intensité croissante ou décroissante', '« Va, cours, vole, et nous venge »'],
        ['Allitération', 'Répétition d\'une consonne', '« Pour qui sont ces serpents qui sifflent… »'],
        ['Assonance', 'Répétition d\'une voyelle', '« Tout m\'afflige et me nuit et conspire à me nuire »'],
        ['Asyndète', 'Suppression des mots de liaison', '« Veni, vidi, vici »'],
        ['Anacoluthe', 'Rupture de construction syntaxique', '« Le nez de Cléopâtre : s\'il eût été plus court… »'],
        ['Antanaclase', 'Un même mot dans deux sens', '« Le cœur a ses raisons que la raison ne connaît point »'],
        ['Paronomase', 'Rapprochement de mots aux sons proches', '« Qui se ressemble s\'assemble »'],
        ['Périphrase', 'Une expression à la place d\'un mot', '« la Ville Lumière »'],
        ['Allégorie', 'Une idée abstraite représentée concrètement', 'la Mort et sa faux'],
        ['Hypotypose', 'Description si vive qu\'elle semble se dérouler sous les yeux', 'le récit de Théramène (*Phèdre*)']
      ]
    },
    {
      id: 'vocabulaire',
      titre: 'Vocabulaire de l\'analyse',
      cartes: [
        ['Césure', 'Pause principale de l\'alexandrin classique, entre les deux hémistiches'],
        ['Hémistiche', 'Chacune des deux moitiés de l\'alexandrin (6 syllabes)'],
        ['Enjambement', 'La phrase déborde du vers sur le suivant'],
        ['Rejet / contre-rejet', 'Mot court rejeté au vers suivant / annoncé en fin de vers'],
        ['Diérèse', 'Prononcer en deux syllabes deux voyelles voisines (pass-i-on)'],
        ['Rime riche', 'Trois sons communs ou plus'],
        ['Sonnet', '14 vers : deux quatrains et deux tercets'],
        ['Double énonciation', 'Les personnages se parlent, l\'auteur parle au public'],
        ['Stichomythie', 'Échange rapide de répliques courtes'],
        ['Aparté', 'Réplique dite pour soi, entendue du public seul'],
        ['Didascalie', 'Indication scénique'],
        ['Catharsis', 'Purgation des passions par la tragédie (Aristote)'],
        ['Focalisation interne', 'Le récit adopte le point de vue d\'un personnage'],
        ['Analepse / prolepse', 'Retour en arrière / anticipation'],
        ['Discours indirect libre', 'Les paroles ou pensées d\'un personnage fondues dans la narration'],
        ['Incipit / excipit', 'Début / fin d\'un roman'],
        ['Registre lyrique', 'Expression des sentiments personnels'],
        ['Registre pathétique', 'Susciter la pitié, l\'émotion'],
        ['Registre épique', 'Amplifier, magnifier des exploits'],
        ['Registre satirique', 'Se moquer pour critiquer']
      ]
    }
  ],

  sujets: [
    {
      id: 'dubellay',
      type: 'explication',
      titre: 'Du Bellay, « Heureux qui, comme Ulysse… » (*Les Regrets*, 31)',
      enonce: 'Expliquez ce sonnet.',
      vers: true,
      texte: `
        Heureux qui, comme Ulysse, a fait un beau voyage,
        Ou comme cestuy-là qui conquit la toison,
        Et puis est retourné, plein d'usage et raison,
        Vivre entre ses parents le reste de son âge !

        Quand reverrai-je, hélas, de mon petit village
        Fumer la cheminée, et en quelle saison
        Reverrai-je le clos de ma pauvre maison,
        Qui m'est une province, et beaucoup davantage ?

        Plus me plaît le séjour qu'ont bâti mes aïeux,
        Que des palais Romains le front audacieux,
        Plus que le marbre dur me plaît l'ardoise fine :

        Plus mon Loire Gaulois, que le Tibre Latin,
        Plus mon petit Liré, que le mont Palatin,
        Et plus que l'air marin la douceur angevine.
      `,
      source: 'Joachim Du Bellay, *Les Regrets*, sonnet 31 (1558). *Cestuy-là* : celui-là (Jason, qui conquit la Toison d\'or) ; *usage* : expérience.',
      pistes: `
        ### Situation
        - Du Bellay, poète de la **Pléiade**, séjourne à **Rome** (1553-1557) comme secrétaire de son oncle cardinal. Déçu, il exprime dans *Les Regrets* sa **nostalgie** de l'Anjou.
        - Un **sonnet** en alexandrins : rimes embrassées dans les quatrains (ABBA ABBA), puis CCD EED.
        - Lien avec le cours d'histoire : Ulysse et le thème du **retour** (*nostos*).

        ### Projet de lecture possible
        Comment ce sonnet transforme-t-il la plainte de l'exilé en un **éloge** de la terre natale, qui renverse la hiérarchie entre Rome et l'Anjou ?

        ### Mouvements
        1. **Premier quatrain** : l'idéal du voyageur qui **revient** (Ulysse, Jason) — une sentence générale (« Heureux qui… »).
        2. **Second quatrain** : la **plainte** personnelle (« hélas », questions rhétoriques) ; le petit village devient « une province ».
        3. **Tercets** : une série de **comparaisons** qui préfèrent l'Anjou à Rome.

        ### Points d'analyse
        - Le paradoxe : Ulysse est heureux non pour son voyage mais pour son **retour** ; le poète, lui, n'est pas rentré.
        - Le **lexique de la petitesse** (« petit village », « pauvre maison », « petit Liré ») opposé à la **grandeur** romaine (« palais », « front audacieux », « mont Palatin »).
        - Les **antithèses** terme à terme : marbre dur / ardoise fine, Tibre Latin / Loire Gaulois (le Loire au masculin), air marin / douceur angevine.
        - L'**anaphore** de « Plus » et la **gradation** jusqu'à la **chute** : « la douceur angevine », sur un rythme apaisé.
        - Un enjeu de la Pléiade : montrer qu'on peut égaler les Anciens **en français** et célébrer la France face à Rome (*Défense et illustration de la langue française*, 1549).
      `
    },
    {
      id: 'phedre',
      type: 'explication',
      titre: 'Racine, *Phèdre*, I, 3 : l\'aveu',
      enonce: 'Expliquez cet extrait.',
      vers: true,
      texte: `
        Mon mal vient de plus loin. À peine au fils d'Égée
        Sous les lois de l'hymen je m'étais engagée,
        Mon repos, mon bonheur semblait s'être affermi ;
        Athènes me montra mon superbe ennemi.
        Je le vis, je rougis, je pâlis à sa vue ;
        Un trouble s'éleva dans mon âme éperdue ;
        Mes yeux ne voyaient plus, je ne pouvais parler ;
        Je sentis tout mon corps et transir et brûler.
        Je reconnus Vénus et ses feux redoutables,
        D'un sang qu'elle poursuit tourments inévitables.
      `,
      source: 'Jean Racine, *Phèdre*, acte I, scène 3 (1677). Phèdre, épouse de Thésée (« le fils d\'Égée »), avoue à sa nourrice Œnone son amour pour Hippolyte, fils de Thésée.',
      pistes: `
        ### Situation
        - Tragédie en cinq actes et en alexandrins, inspirée d'**Euripide** et de **Sénèque**.
        - Scène d'**exposition** : Phèdre, mourante, finit par avouer à Œnone la cause de son mal.

        ### Projet de lecture possible
        Comment Racine fait-il de cet aveu le récit d'une **passion fatale**, vécue comme une maladie du corps et une malédiction divine ?

        ### Mouvements
        1. **v. 1-4** : le **récit** d'un coup de foudre au moment même du mariage.
        2. **v. 5-8** : les **symptômes** physiques de la passion.
        3. **v. 9-10** : l'**interprétation** tragique : la vengeance de Vénus.

        ### Points d'analyse
        - « *Mon mal* » : la passion comme **maladie** (lexique médical et physiologique).
        - « *mon superbe ennemi* » : **oxymore** implicite (l'aimé est un ennemi ; *superbe* = orgueilleux).
        - Le vers 5 : rythme **ternaire** et **asyndète** (« Je le vis, je rougis, je pâlis »), passé simple de la soudaineté ; écho à Sappho et à Catulle.
        - Les **antithèses** du vers 8 : « transir et brûler » (le froid et le feu).
        - La **fatalité** : Vénus poursuit la lignée de Phèdre (fille de Pasiphaé) : Phèdre est **coupable et innocente** à la fois, ce qui fait d'elle une héroïne tragique selon Racine (préface).
        - L'**assonance** et les sonorités : rapprocher du célèbre « Tout m'afflige et me nuit et conspire à me nuire ».
      `
    },
    {
      id: 'correspondances',
      type: 'explication',
      titre: 'Baudelaire, « Correspondances » (*Les Fleurs du mal*)',
      enonce: 'Expliquez ce poème.',
      vers: true,
      texte: `
        La Nature est un temple où de vivants piliers
        Laissent parfois sortir de confuses paroles ;
        L'homme y passe à travers des forêts de symboles
        Qui l'observent avec des regards familiers.

        Comme de longs échos qui de loin se confondent
        Dans une ténébreuse et profonde unité,
        Vaste comme la nuit et comme la clarté,
        Les parfums, les couleurs et les sons se répondent.

        Il est des parfums frais comme des chairs d'enfants,
        Doux comme les hautbois, verts comme les prairies,
        — Et d'autres, corrompus, riches et triomphants,

        Ayant l'expansion des choses infinies,
        Comme l'ambre, le musc, le benjoin et l'encens,
        Qui chantent les transports de l'esprit et des sens.
      `,
      source: 'Charles Baudelaire, *Les Fleurs du mal*, « Spleen et Idéal », IV (1857).',
      pistes: `
        ### Situation
        - Un **sonnet** au cœur de la section « Spleen et Idéal », souvent lu comme un **art poétique** et une source du **symbolisme**.

        ### Projet de lecture possible
        Comment ce sonnet fait-il du monde un ensemble de **signes** que seul le poète sait déchiffrer, et de la poésie le langage des **correspondances** ?

        ### Mouvements
        1. **Premier quatrain** : la Nature comme **temple** : correspondances **verticales** entre le monde sensible et un monde spirituel.
        2. **Second quatrain** : les correspondances **horizontales** entre les sens (**synesthésies**).
        3. **Tercets** : une démonstration par l'exemple : deux sortes de parfums, purs et corrompus.

        ### Points d'analyse
        - La **métaphore** du temple et des « vivants piliers » (les arbres), les « forêts de symboles » : la nature parle, mais de façon « confuse ».
        - La **comparaison** des « longs échos » et l'**oxymore** implicite « la nuit et la clarté ».
        - La **synesthésie** : des parfums « doux comme les hautbois, verts comme les prairies ».
        - L'**opposition** des tercets : innocence (« chairs d'enfants ») et sensualité (« corrompus, riches et triomphants ») : l'idéal et le spleen.
        - La **chute** : « les transports de l'esprit et des sens » : la poésie réunit le spirituel et le sensuel.
      `
    },
    {
      id: 'valery',
      type: 'dissertation',
      titre: '« Le poème — cette hésitation prolongée entre le son et le sens » (Valéry)',
      enonce: '« Le poème — cette hésitation prolongée entre le son et le sens. » (Paul Valéry, *Rhumbs*, 1926). Vous discuterez cette définition de la poésie en vous appuyant sur des exemples précis.',
      pistes: `
        ### Analyse
        - *Hésitation* : ni le son ni le sens ne l'emportent ; un équilibre instable, une tension.
        - *Prolongée* : la poésie fait durer ce moment que la prose abolit (en prose, le son disparaît au profit du sens).
        - Valéry, héritier de Mallarmé, insiste sur le **travail** de la forme.

        ### Problématique possible
        La poésie se définit-elle par cet équilibre entre la musique des mots et leur signification, ou l'un des deux pôles finit-il par l'emporter ?

        ### Plan possible
        - **I. La poésie, art du son autant que du sens**
          - Vers, rimes, rythme, allitérations : le son porte le sens (Racine, Verlaine : « De la musique avant toute chose »).
        - **II. Mais certaines poésies privilégient l'un des pôles**
          - Le **son** : jeux sonores, lettrisme, poésie sonore ; Rimbaud et les voyelles.
          - Le **sens** : poésie engagée (Hugo, Aragon), poésie des choses (Ponge), où le message compte.
        - **III. L'hésitation comme définition de l'expérience poétique**
          - Le lecteur relit, dit le poème à voix haute : le sens naît du son, le son se charge de sens.
          - La poésie comme langage « autre » qui renouvelle notre rapport aux mots (Mallarmé : « donner un sens plus pur aux mots de la tribu »).
      `
    },
    {
      id: 'hugo-theatre',
      type: 'dissertation',
      titre: '« Le drame doit être un miroir de concentration » (Hugo)',
      enonce: 'Dans la *Préface de Cromwell* (1827), Victor Hugo affirme que le drame doit être « un miroir de concentration ». Vous discuterez cette conception du théâtre.',
      pistes: `
        ### Analyse
        - *Miroir* : le théâtre **imite** le réel (héritage de la *mimèsis* d'Aristote).
        - *De concentration* : pas un miroir plat, mais un miroir qui **rassemble**, intensifie, « fait d'une lueur une lumière ».
        - Contexte : manifeste du **drame romantique**, contre les règles classiques ; mélange du sublime et du grotesque.

        ### Problématique possible
        Le théâtre doit-il reproduire le réel ou le transfigurer pour en rendre la vérité plus intense ?

        ### Plan possible
        - **I. Le théâtre, miroir du monde** : imitation, vraisemblance, peinture des mœurs (Molière).
        - **II. Un miroir qui concentre** : les unités, la tension dramatique, la stylisation (Racine : « faire quelque chose de rien ») ; le drame romantique et ses contrastes.
        - **III. Au-delà du miroir** : le théâtre comme jeu, convention, distance (Brecht, l'absurde) ; la mise en scène comme lecture.
      `
    },
    {
      id: 'stendhal',
      type: 'dissertation',
      titre: '« Un roman est un miroir qui se promène sur une grande route » (Stendhal)',
      enonce: '« Un roman est un miroir qui se promène sur une grande route. » (Stendhal, *Le Rouge et le Noir*, 1830). Discutez cette affirmation.',
      pistes: `
        ### Analyse
        - Le narrateur se défend : si le miroir montre la boue du chemin, on ne doit pas accuser le miroir.
        - *Miroir* : reflet fidèle, objectivité. *Qui se promène* : mouvement, point de vue mobile, choix du parcours.

        ### Problématique possible
        Le roman peut-il se contenter de refléter le réel, ou toute représentation romanesque est-elle déjà une construction ?

        ### Plan possible
        - **I. Le roman comme miroir de la société** : réalisme (Balzac « secrétaire » de la société, Stendhal, Flaubert), naturalisme (Zola).
        - **II. Mais le miroir est tenu par quelqu'un** : point de vue, focalisation, sélection ; Maupassant : les réalistes sont des « illusionnistes ».
        - **III. Le roman, plus qu'un reflet** : il révèle ce que le réel cache (l'intériorité, Proust), il invente des mondes, il fait réfléchir le lecteur sur sa propre vie.
      `
    }
  ]
});
