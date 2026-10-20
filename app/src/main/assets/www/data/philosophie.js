/* Philosophie : dissertation et explication de texte */

STUDIUM.add({
  id: 'philosophie',
  nom: 'Philosophie',
  court: 'Dissertation, explication',
  icone: 'lightbulb',
  description: 'Notions, distinctions et grands auteurs pour réussir la dissertation et l\'explication de texte.',
  epreuves: ['DS : dissertation', 'DS : explication de texte'],
  methodes: ['dissertation', 'explication', 'kholle'],
  conseils: `
    ### Comment progresser en philosophie
    - **Lis les textes** plutôt que des résumés : un court passage bien compris (Descartes, Pascal, Rousseau…) nourrit dix copies.
    - Constitue un **carnet de références** : pour chaque auteur, deux ou trois thèses précises avec l'œuvre et, si possible, une citation exacte.
    - Travaille les **distinctions conceptuelles** : elles sont le moteur des problématiques.
    - Entraîne-toi régulièrement à **l'introduction seule** : 20 minutes, un sujet, une problématique.
  `,

  cours: [
    {
      id: 'reperes',
      titre: 'Repères et distinctions',
      resume: 'Les couples de notions qui font avancer une copie',
      contenu: `
        Les **distinctions conceptuelles** permettent d'analyser un sujet et de construire une problématique. Une bonne copie commence souvent par distinguer deux sens d'un mot.

        ## Distinctions fondamentales

        - **En fait / en droit**
          - *En fait* : ce qui est ; *en droit* : ce qui doit ou peut légitimement être.
          - « Peut-on… ? » appelle presque toujours les deux sens.
        - **Légal / légitime**
          - Légal : conforme à la loi en vigueur. Légitime : conforme à la justice, à ce qui est fondé en raison.
          - Antigone désobéit à la loi de Créon au nom d'une loi plus haute.
        - **Croire / savoir**
          - Croire : tenir pour vrai sans preuve suffisante. Savoir : connaissance justifiée.
          - Platon distingue l'**opinion** (*doxa*) et la **science** (*epistêmê*).
        - **Persuader / convaincre**
          - Persuader : agir sur les passions, l'imagination. Convaincre : s'adresser à la raison par des preuves.
          - C'est le débat de Platon contre les sophistes (*Gorgias*).
        - **Nécessaire / contingent / possible**
          - Nécessaire : ce qui ne peut pas ne pas être. Contingent : ce qui peut être ou ne pas être.
        - **Origine / fondement**
          - L'origine est un commencement dans le temps ; le fondement est ce qui justifie en droit.
          - Rousseau : chercher l'origine de l'inégalité ne revient pas à la justifier.
        - **Objectif / subjectif**
          - Objectif : valable pour tous, indépendant du point de vue. Subjectif : relatif à un sujet.
        - **Expliquer / comprendre**
          - Expliquer : rendre raison par des causes (sciences de la nature). Comprendre : saisir un sens, des intentions (sciences humaines, selon Dilthey).
        - **Obligation / contrainte**
          - La contrainte s'impose par la force ; l'obligation s'adresse à une liberté qui peut s'y soumettre ou non.
        - **Universel / général / particulier / singulier**
          - Universel : vaut pour tous sans exception, en droit. Général : vaut pour la plupart, en fait.
        - **En acte / en puissance** (Aristote)
          - La graine est un arbre *en puissance* ; l'arbre est cet être *en acte*.
        - **Immanent / transcendant**
          - Immanent : intérieur à un être ou au monde. Transcendant : extérieur et supérieur.
        - **Médiat / immédiat**
          - Immédiat : sans intermédiaire (l'intuition) ; médiat : par un intermédiaire (raisonnement, langage, outil).

        :::methode Utiliser une distinction dans une copie
        1. Repère le mot ambigu du sujet.
        2. Distingue deux sens à l'aide d'un couple de notions.
        3. Montre que la réponse change selon le sens retenu : tu tiens ta problématique.
        :::

        ## Quelques termes à manier avec précision
        - **Concept** : idée générale et abstraite qui définit une classe d'objets.
        - **Thèse** : position soutenue et argumentée.
        - **Paradoxe** : ce qui va contre l'opinion commune (*para-doxa*).
        - **Aporie** : difficulté sans issue apparente (fin de nombreux dialogues de Platon).
        - **Dialectique** : chez Platon, art du dialogue qui s'élève vers les Idées ; chez Hegel, mouvement de la pensée et du réel par contradictions et dépassements.
      `
    },
    {
      id: 'connaitre',
      titre: 'Connaître : vérité, raison, science',
      resume: 'Platon, Descartes, Hume, Kant, Bachelard, Popper',
      contenu: `
        ## Le problème
        Que pouvons-nous connaître, et comment ? La connaissance vient-elle de l'**expérience** ou de la **raison** ? A-t-elle des **limites** ?

        ## I. Platon : de l'opinion à la science
        - **L'allégorie de la caverne** (*République*, livre VII) : des prisonniers enchaînés ne voient que des ombres et les prennent pour la réalité. L'éducation est une **conversion du regard** vers la lumière, c'est-à-dire vers les **Idées** (l'Idée du Bien, comparée au soleil).
        - **Le *Ménon*** : un jeune esclave, interrogé par Socrate, retrouve seul une vérité de géométrie : connaître, c'est **se ressouvenir** (réminiscence). Le maître n'enseigne pas, il fait accoucher (**maïeutique**, *Théétète*).
        - L'**opinion** (*doxa*), même vraie, est instable ; la **science** (*epistêmê*) est fondée en raison.

        ## II. Descartes : le doute et l'évidence
        - *Discours de la méthode* (1637), *Méditations métaphysiques* (1641).
        - **Doute méthodique** et **hyperbolique** : rejeter tout ce qui est seulement douteux (sens trompeurs, rêve, hypothèse du malin génie).
        - Première certitude : « **Je pense, donc je suis** » (*Discours*, IV) ; « je suis, j'existe » (*Méditations*, II).
        - Règle de l'**évidence** : ne recevoir pour vrai que ce qui est **clair et distinct**.
        - L'analyse du **morceau de cire** (*Méditation* II) : ce n'est pas par les sens mais par l'**entendement** que je connais la cire.

        ## III. L'empirisme : Locke et Hume
        - Locke : l'esprit est une **table rase** ; toutes nos idées viennent de l'expérience (sensation et réflexion).
        - Hume (*Enquête sur l'entendement humain*, 1748) : la **causalité** n'est pas observée, elle naît de l'**habitude** de voir deux événements se succéder. Rien ne garantit que le soleil se lèvera demain : c'est une croyance, non une démonstration.

        ## IV. Kant : les conditions de la connaissance
        - *Critique de la raison pure* (1781) : « Si toute notre connaissance commence **avec** l'expérience, cela ne prouve pas qu'elle dérive toute **de** l'expérience. »
        - L'esprit impose ses **formes a priori** (l'espace, le temps, les catégories) à ce qu'il reçoit : c'est la **révolution copernicienne** en philosophie.
        - Nous connaissons les **phénomènes** (les choses telles qu'elles nous apparaissent), jamais les **choses en soi**. La métaphysique (Dieu, l'âme, la liberté) dépasse les limites de la connaissance possible.
        - *Qu'est-ce que les Lumières ?* (1784) : « *Sapere aude !* Aie le courage de te servir de ton propre entendement. »

        ## V. La science et ses méthodes
        - **Bachelard** (*La Formation de l'esprit scientifique*, 1938) : la connaissance scientifique se construit **contre** l'opinion et les **obstacles épistémologiques** ; « Rien ne va de soi. Rien n'est donné. Tout est construit. »
        - **Popper** (*Logique de la découverte scientifique*, 1934) : une théorie est scientifique si elle est **réfutable** (falsifiable). L'astrologie ou la psychanalyse, qui expliquent tout, ne le sont pas selon lui.

        :::retenir Pistes de problématiques
        - La vérité est-elle **découverte** ou **construite** ?
        - Peut-on **tout** connaître, ou certaines limites tiennent-elles à la nature de l'esprit ?
        - L'**expérience** suffit-elle à fonder la connaissance ?
        :::
      `
    },
    {
      id: 'sujet',
      titre: 'Le sujet : conscience, inconscient, liberté',
      resume: 'Descartes, Spinoza, Freud, Sartre, Kant',
      contenu: `
        ## La conscience
        - **Descartes** : le *cogito* fait de la conscience le fondement de toute certitude ; l'âme est une **chose qui pense** (*res cogitans*).
        - **Pascal** : « L'homme n'est qu'un roseau, le plus faible de la nature ; mais c'est un roseau pensant » : sa **dignité** est dans la pensée.
        - **Kant** (*Anthropologie*) : posséder le **je** élève l'homme au-dessus de tous les êtres vivants : c'est une **personne**.
        - **Husserl** : « toute conscience est conscience **de** quelque chose » (intentionnalité).

        ## L'inconscient
        - **Leibniz** : les **petites perceptions**, trop faibles pour être aperçues (le bruit de la mer est fait de mille petites vagues).
        - **Freud** : une part de notre vie psychique est **refoulée** et agit à notre insu (rêves, lapsus, actes manqués, symptômes). La psychanalyse inflige à l'homme une « blessure narcissique » : « le moi n'est pas maître dans sa propre maison » (*Une difficulté de la psychanalyse*, 1917).
        - Critique de **Sartre** : invoquer l'inconscient peut relever de la **mauvaise foi**.

        ## La liberté
        - **Libre arbitre** (Descartes) : la volonté est infinie ; la liberté d'indifférence est « le plus bas degré de la liberté ».
        - **Spinoza** : « les hommes se croient libres parce qu'ils sont conscients de leurs actions et ignorants des causes qui les déterminent » (*Éthique*, II, proposition 35, scolie). La liberté véritable est la **connaissance de la nécessité**.
        - **Rousseau** : « l'obéissance à la loi qu'on s'est prescrite est liberté » (*Du contrat social*, I, 8).
        - **Kant** : la liberté comme **autonomie** : se donner à soi-même la loi morale.
        - **Sartre** (*L'existentialisme est un humanisme*, 1946) : « l'existence précède l'essence » ; l'homme est « **condamné à être libre** » et responsable de ce qu'il fait de lui.

        :::retenir Une ligne de problématique
        La liberté est-elle l'**absence de contrainte**, le **pouvoir de choisir**, ou la **connaissance** de ce qui nous détermine ?
        :::
      `
    },
    {
      id: 'politique',
      titre: 'Politique et morale : justice, État, devoir',
      resume: 'Platon, Aristote, Hobbes, Rousseau, Kant, Mill',
      contenu: `
        ## La justice
        - **Platon** (*République*) : l'anneau de **Gygès** rend invisible : serait-on encore juste si l'on était sûr de l'impunité ? La justice est l'**harmonie** de l'âme et de la cité.
        - **Aristote** (*Éthique à Nicomaque*, V) :
          - justice **distributive** : à chacun selon son mérite (égalité proportionnelle) ;
          - justice **corrective** : réparer un tort (égalité arithmétique) ;
          - l'**équité** corrige la loi trop générale dans les cas particuliers.
        - **Rawls** (*Théorie de la justice*, 1971) : le **voile d'ignorance** ; les inégalités ne sont justes que si elles profitent aux plus défavorisés.

        ## L'État
        - **Aristote** (*Politique*, I) : « l'homme est par nature un **animal politique** » ; la cité existe en vue du **bien vivre**.
        - **Hobbes** (*Léviathan*, 1651) : à l'**état de nature**, c'est la « guerre de chacun contre chacun » ; les hommes renoncent à leur droit de tout faire au profit d'un souverain qui garantit la paix.
        - **Locke** : le pouvoir politique protège les **droits naturels** (vie, liberté, propriété) ; le peuple peut résister à un pouvoir tyrannique.
        - **Rousseau** (*Du contrat social*, 1762) : « L'homme est né libre, et partout il est dans les fers. » Le pacte fonde la **volonté générale**, qui vise l'intérêt commun.
        - **Weber** (*Le Savant et le Politique*, 1919) : l'État revendique le **monopole de la violence physique légitime**.
        - **Marx** : l'État sert les intérêts de la classe dominante.

        ## Le devoir et la morale
        - **Kant** (*Fondements de la métaphysique des mœurs*, 1785) :
          - agir **par devoir**, et non seulement **conformément** au devoir ;
          - l'**impératif catégorique** : « Agis uniquement d'après la maxime qui fait que tu peux vouloir en même temps qu'elle devienne une loi universelle » ;
          - traiter l'humanité « toujours en même temps comme une fin, et jamais simplement comme un moyen ».
        - **Utilitarisme** (Bentham, Mill) : est bonne l'action qui produit **le plus grand bonheur du plus grand nombre**.
        - **Épicure** (*Lettre à Ménécée*) : le bonheur est l'**ataraxie** (absence de trouble) ; « la mort n'est rien pour nous ».
        - **Stoïciens** (Épictète, *Manuel*) : distinguer ce qui **dépend de nous** et ce qui n'en dépend pas.
      `
    },
    {
      id: 'art',
      titre: 'L\'art, la technique, le travail',
      resume: 'Platon, Aristote, Kant, Hegel, Marx, Bergson',
      contenu: `
        ## L'art
        - **Platon** (*République*, X) : l'art est **imitation** (*mimêsis*) d'une imitation, éloignée de trois degrés de la vérité ; les poètes sont chassés de la cité idéale.
        - **Aristote** (*Poétique*) : l'imitation est naturelle à l'homme et source de **plaisir** et de connaissance ; la tragédie opère une **catharsis** (purgation) de la terreur et de la pitié.
        - **Kant** (*Critique de la faculté de juger*, 1790) : « est beau ce qui plaît universellement sans concept » ; le beau est **désintéressé** et présente une « finalité sans fin ».
        - **Hegel** : l'art est une manifestation sensible de l'**Esprit** ; le beau artistique est supérieur au beau naturel.
        - **Bergson** : l'artiste écarte le voile des habitudes et nous fait **voir** ce que nous ne percevions pas.

        ## La technique
        - Mythe de **Prométhée** (Platon, *Protagoras*) : l'homme, oublié dans la distribution des qualités, reçoit le feu et les arts.
        - **Descartes** (*Discours*, VI) : la science doit nous rendre « comme **maîtres et possesseurs de la nature** ».
        - **Bergson** : l'intelligence est d'abord la faculté de fabriquer des outils : *homo faber* plutôt qu'*homo sapiens*.
        - **Heidegger** et **Hans Jonas** (*Le Principe responsabilité*, 1979) : la technique moderne exige une éthique de la **responsabilité** envers les générations futures.

        ## Le travail
        - Étymologie souvent invoquée : *tripalium* (instrument de torture) — elle est discutée, mais rappelle la dimension de **peine**.
        - **Hegel** (*Phénoménologie de l'esprit*, 1807) : dans la dialectique du **maître et de l'esclave**, c'est l'esclave qui, par le travail, transforme la nature et se forme lui-même.
        - **Marx** : le travail devrait réaliser l'homme, mais dans le capitalisme il est **aliéné** : l'ouvrier est dépossédé du produit et du sens de son activité.
        - **Arendt** (*Condition de l'homme moderne*, 1958) : distinguer **travail** (cycle vital), **œuvre** (monde durable d'objets) et **action** (vie politique).
      `
    }
  ],

  quiz: [
    {
      id: 'auteurs',
      titre: 'Qui a dit… ?',
      questions: [
        { q: '« Je pense, donc je suis. »', c: ['Descartes', 'Pascal', 'Spinoza', 'Kant'], r: 0, e: '*Discours de la méthode*, IVᵉ partie (1637).' },
        { q: '« L\'homme est par nature un animal politique. »', c: ['Aristote', 'Platon', 'Hobbes', 'Rousseau'], r: 0, e: '*Politique*, livre I.' },
        { q: '« L\'homme est né libre, et partout il est dans les fers. »', c: ['Rousseau', 'Voltaire', 'Sartre', 'Montesquieu'], r: 0, e: '*Du contrat social*, I, 1 (1762).' },
        { q: '« L\'existence précède l\'essence. »', c: ['Sartre', 'Camus', 'Heidegger', 'Kierkegaard'], r: 0, e: '*L\'existentialisme est un humanisme* (1946).' },
        { q: '« L\'homme n\'est qu\'un roseau, le plus faible de la nature ; mais c\'est un roseau pensant. »', c: ['Pascal', 'Montaigne', 'Descartes', 'La Rochefoucauld'], r: 0, e: '*Pensées* (publication posthume, 1670).' },
        { q: '« Le moi n\'est pas maître dans sa propre maison. »', c: ['Freud', 'Nietzsche', 'Lacan', 'Spinoza'], r: 0, e: 'Freud, *Une difficulté de la psychanalyse* (1917).' },
        { q: '« Sapere aude ! Aie le courage de te servir de ton propre entendement. »', c: ['Kant', 'Hegel', 'Descartes', 'Rousseau'], r: 0, e: '*Qu\'est-ce que les Lumières ?* (1784), qui reprend Horace.' },
        { q: '« Les philosophes n\'ont fait qu\'interpréter le monde de différentes manières ; ce qui importe, c\'est de le transformer. »', c: ['Marx', 'Engels', 'Lénine', 'Hegel'], r: 0, e: '*Thèses sur Feuerbach*, XI (1845).' },
        { q: '« La mort n\'est rien pour nous. »', c: ['Épicure', 'Sénèque', 'Platon', 'Pascal'], r: 0, e: '*Lettre à Ménécée*.' },
        { q: '« Il faut imaginer Sisyphe heureux. »', c: ['Camus', 'Sartre', 'Nietzsche', 'Beauvoir'], r: 0, e: '*Le Mythe de Sisyphe* (1942).' },
        { q: '« On ne naît pas femme : on le devient. »', c: ['Simone de Beauvoir', 'Simone Weil', 'Hannah Arendt', 'George Sand'], r: 0, e: '*Le Deuxième Sexe* (1949).' },
        { q: '« Dieu est mort. »', c: ['Nietzsche', 'Feuerbach', 'Marx', 'Sartre'], r: 0, e: '*Le Gai Savoir*, § 125 (1882).' }
      ]
    },
    {
      id: 'notions',
      titre: 'Notions et distinctions',
      questions: [
        { q: 'Une loi peut être injuste : on oppose alors…', c: ['le légal et le légitime', 'le nécessaire et le contingent', 'l\'immanent et le transcendant', 'l\'abstrait et le concret'], r: 0 },
        { q: 'Chez Platon, la *doxa* désigne…', c: ['l\'opinion', 'la science', 'la vertu', 'la justice'], r: 0 },
        { q: 'Est **contingent** ce qui…', c: ['peut être ou ne pas être', 'ne peut pas ne pas être', 'est impossible', 'est éternel'], r: 0 },
        { q: '**Persuader**, par opposition à convaincre, c\'est…', c: ['agir sur les passions et l\'imagination', 'démontrer rigoureusement', 'prouver par l\'expérience', 'définir un concept'], r: 0 },
        { q: 'Pour Popper, une théorie est scientifique si elle est…', c: ['réfutable', 'vérifiée par l\'expérience', 'universellement admise', 'mathématique'], r: 0 },
        { q: 'Pour Hume, l\'idée de cause vient…', c: ['de l\'habitude', 'de la raison pure', 'de Dieu', 'de l\'innéité'], r: 0 },
        { q: 'Chez Kant, nous ne connaissons que…', c: ['les phénomènes', 'les choses en soi', 'les Idées', 'Dieu'], r: 0 },
        { q: 'La **catharsis**, chez Aristote, est…', c: ['la purgation des passions par la tragédie', 'l\'imitation de la nature', 'la réminiscence', 'le jugement de goût'], r: 0 },
        { q: 'L\'impératif **catégorique** commande…', c: ['sans condition', 'en vue d\'une fin particulière', 'selon l\'intérêt', 'selon la loi civile'], r: 0, e: 'L\'impératif hypothétique, lui, dit : *si tu veux X, fais Y*.' },
        { q: 'L\'**origine**, par opposition au **fondement**, désigne…', c: ['un commencement dans le temps', 'une justification en droit', 'une cause finale', 'une essence'], r: 0 }
      ]
    },
    {
      id: 'oeuvres',
      titre: 'Œuvres et dates',
      questions: [
        { q: 'L\'allégorie de la caverne se trouve dans…', c: ['la *République*, livre VII', 'le *Phèdre*', 'le *Banquet*', 'le *Gorgias*'], r: 0 },
        { q: 'Le *Discours de la méthode* paraît en…', c: ['1637', '1641', '1670', '1690'], r: 0 },
        { q: 'Le *Léviathan* est l\'œuvre de…', c: ['Hobbes', 'Locke', 'Machiavel', 'Spinoza'], r: 0, e: '1651.' },
        { q: 'La *Critique de la raison pure* paraît en…', c: ['1781', '1762', '1807', '1748'], r: 0 },
        { q: 'L\'*Éthique* de Spinoza est publiée…', c: ['en 1677, après sa mort', 'en 1637', 'en 1700', 'de son vivant, en 1665'], r: 0 },
        { q: 'La *Phénoménologie de l\'esprit* est de…', c: ['Hegel', 'Husserl', 'Kant', 'Fichte'], r: 0, e: '1807.' },
        { q: 'Les *Essais* sont de…', c: ['Montaigne', 'Pascal', 'La Boétie', 'Rabelais'], r: 0, e: 'Première édition en 1580.' },
        { q: 'Le *Ménon* illustre la théorie de…', c: ['la réminiscence', 'l\'état de nature', 'l\'impératif catégorique', 'la volonté générale'], r: 0 }
      ]
    }
  ],

  cartes: [
    {
      id: 'theses',
      titre: 'Auteurs et thèses',
      cartes: [
        ['Platon — la connaissance', 'Connaître, c\'est se ressouvenir (réminiscence) ; passer de l\'opinion aux Idées', '*Ménon*, *République* VII'],
        ['Platon — l\'art', 'L\'art imite des apparences : il est éloigné de trois degrés du vrai', '*République* X'],
        ['Aristote — la politique', 'L\'homme est un animal politique ; la cité vise le bien vivre', '*Politique* I'],
        ['Aristote — la justice', 'Justice distributive, corrective, et équité', '*Éthique à Nicomaque* V'],
        ['Épicure', 'Le bonheur est l\'ataraxie ; la mort n\'est rien pour nous', '*Lettre à Ménécée*'],
        ['Épictète', 'Distinguer ce qui dépend de nous et ce qui n\'en dépend pas', '*Manuel*'],
        ['Montaigne', 'Former le jugement : une tête bien faite plutôt que bien pleine', '*Essais* I, 26'],
        ['Descartes', 'Doute méthodique ; « Je pense, donc je suis » ; règle de l\'évidence', '*Discours de la méthode* (1637)'],
        ['Pascal', 'Grandeur et misère de l\'homme : un roseau pensant', '*Pensées*'],
        ['Spinoza', 'La liberté n\'est pas le libre arbitre mais la connaissance de la nécessité', '*Éthique* (1677)'],
        ['Hobbes', 'État de nature = guerre de chacun contre chacun ; contrat au profit d\'un souverain', '*Léviathan* (1651)'],
        ['Locke', 'L\'esprit est une table rase ; le pouvoir protège les droits naturels', '*Essai sur l\'entendement humain* (1690)'],
        ['Hume', 'La causalité vient de l\'habitude, non de la raison', '*Enquête sur l\'entendement humain* (1748)'],
        ['Rousseau', 'Volonté générale ; liberté = obéissance à la loi qu\'on s\'est prescrite', '*Du contrat social* (1762)'],
        ['Kant — connaissance', 'Formes a priori ; on ne connaît que les phénomènes', '*Critique de la raison pure* (1781)'],
        ['Kant — morale', 'Agir par devoir ; impératif catégorique ; la personne comme fin', '*Fondements de la métaphysique des mœurs* (1785)'],
        ['Kant — beau', 'Est beau ce qui plaît universellement sans concept', '*Critique de la faculté de juger* (1790)'],
        ['Hegel', 'Dialectique du maître et de l\'esclave ; « rien de grand ne s\'est fait sans passion »', '*Phénoménologie de l\'esprit* (1807) ; *Leçons sur la philosophie de l\'histoire*'],
        ['Marx', 'Travail aliéné ; les idées dominantes sont celles de la classe dominante', '*Manuscrits de 1844* ; *L\'Idéologie allemande*'],
        ['Nietzsche', 'Critique de la morale et de la vérité ; « Dieu est mort »', '*Le Gai Savoir* (1882)'],
        ['Freud', 'L\'inconscient ; le moi n\'est pas maître dans sa propre maison', '*Introduction à la psychanalyse*'],
        ['Bergson', 'L\'intuition de la durée ; l\'artiste dévoile la réalité ; homo faber', '*La Pensée et le Mouvant* ; *L\'Évolution créatrice*'],
        ['Bachelard', 'La science se construit contre les obstacles épistémologiques', '*La Formation de l\'esprit scientifique* (1938)'],
        ['Popper', 'Critère de réfutabilité', '*Logique de la découverte scientifique* (1934)'],
        ['Sartre', 'L\'existence précède l\'essence ; mauvaise foi ; condamné à être libre', '*L\'existentialisme est un humanisme* (1946)'],
        ['Arendt', 'Travail, œuvre, action ; la banalité du mal', '*Condition de l\'homme moderne* (1958)'],
        ['Weber', 'L\'État a le monopole de la violence physique légitime', '*Le Savant et le Politique* (1919)'],
        ['Rawls', 'Voile d\'ignorance ; principe de différence', '*Théorie de la justice* (1971)']
      ]
    }
  ],

  sujets: [
    {
      id: 'tout-connaitre',
      type: 'dissertation',
      titre: 'Peut-on tout connaître ?',
      enonce: 'Peut-on tout connaître ?',
      pistes: `
        ### Analyse
        - *Peut-on* : est-ce **possible** (en fait, nos facultés le permettent-elles ?) et est-ce **permis** (en droit : y a-t-il des choses qu'il ne faut pas chercher à connaître ?).
        - *Tout* : la totalité de ce qui est (le monde, soi, Dieu) ; ou chaque chose dans tous ses aspects.
        - *Connaître* : saisir la vérité d'un objet de façon justifiée, à distinguer de croire, sentir, comprendre.

        ### Problématique possible
        Les limites de la connaissance humaine sont-elles **provisoires** (elles reculent avec le progrès des sciences) ou tiennent-elles à la **nature même** de l'esprit et de certains objets ?

        ### Plan possible
        - **I. En droit, rien ne semble échapper à la connaissance**
          - A. La raison a une ambition universelle : Descartes, la méthode et la science qui rendrait l'homme « maître et possesseur de la nature ».
          - B. Le progrès des sciences fait reculer l'inconnu : ce qui semblait mystérieux (la foudre, les maladies) devient explicable.
        - **II. Mais la connaissance humaine rencontre des limites**
          - A. Limites de fait : nos sens, notre finitude, l'infini du réel (Pascal : l'homme entre deux infinis).
          - B. Limites de droit : Kant, nous ne connaissons que les phénomènes, non les choses en soi ; Dieu, l'âme, la liberté échappent à la connaissance.
          - C. Soi-même : la conscience n'est pas transparente (Freud).
        - **III. Reconnaître ces limites est une condition du savoir**
          - A. Le savoir de son ignorance comme point de départ (Socrate).
          - B. La science progresse par corrections (Bachelard, Popper) : la connaissance est une tâche infinie plutôt qu'une possession.
          - C. Ce qui échappe à la connaissance peut relever d'un autre rapport : croire, penser, agir (Kant : « limiter le savoir pour faire place à la foi »).

        ### Références utiles
        Platon (*Apologie*, *Ménon*), Descartes (*Discours*), Pascal (*Pensées*, les deux infinis), Kant (*Critique de la raison pure*), Freud, Bachelard, Popper.
      `
    },
    {
      id: 'transmettre',
      type: 'dissertation',
      titre: 'Transmettre, est-ce seulement répéter ?',
      enonce: 'Transmettre, est-ce seulement répéter ?',
      consigne: 'Sujet en lien avec le thème de culture antique « Connaître et transmettre ».',
      pistes: `
        ### Analyse
        - *Transmettre* (*trans-mittere*) : faire passer d'un lieu ou d'une personne à une autre (un savoir, un héritage, une tradition).
        - *Répéter* : redire à l'identique. *Seulement* indique que le sujet attend une **nuance** : la transmission implique-t-elle **plus** que la répétition ?
        - Présupposé : la transmission pourrait être purement mécanique.

        ### Problématique possible
        Transmettre, est-ce conserver à l'identique un contenu, ou est-ce nécessairement le **transformer** en le faisant vivre dans un autre esprit ?

        ### Plan possible
        - **I. La transmission repose sur la répétition**
          - A. Mémoire et apprentissage par cœur : la récitation des poèmes homériques, *repetitio mater studiorum*.
          - B. La tradition (*tradere*) conserve : le *mos maiorum* romain, la copie des manuscrits.
        - **II. Mais répéter n'est pas transmettre**
          - A. Un savoir répété sans être compris n'est pas un savoir : Platon, le mythe de Theuth (*Phèdre*), l'écriture qui donne « l'apparence du savoir ».
          - B. Le maître ne remplit pas un vase : maïeutique socratique, Montaigne (« une tête bien faite plutôt que bien pleine »).
        - **III. Transmettre, c'est rendre l'autre capable de continuer**
          - A. L'exemple plus que le précepte : Sénèque, *Lettre* 6 (« le chemin est long par les préceptes, court par les exemples »).
          - B. Toute transmission est une réappropriation, voire une trahison féconde (*traduttore, traditore*) : traduire, commenter, réinventer.

        ### Références utiles
        Platon (*Phèdre*, *Ménon*), Sénèque (*Lettres* 6 et 7), Montaigne (*Essais*, I, 26), Arendt (*La Crise de la culture*, 1961 : l'éducation transmet un monde ancien aux nouveaux venus).
      `
    },
    {
      id: 'liberte',
      type: 'dissertation',
      titre: 'La liberté est-elle une illusion ?',
      enonce: 'La liberté est-elle une illusion ?',
      pistes: `
        ### Analyse
        - *Illusion* : une erreur qui persiste même quand on la connaît, et qui répond souvent à un **désir** (Freud). À distinguer de la simple erreur.
        - *Liberté* : absence de contrainte ; libre arbitre (pouvoir de choisir) ; autonomie.

        ### Problématique possible
        Si nos actions sont déterminées par des causes que nous ignorons, le sentiment d'être libre n'est-il qu'une illusion — ou bien la liberté se conquiert-elle justement dans la connaissance de ce qui nous détermine ?

        ### Plan possible
        - **I. Le sentiment immédiat de la liberté**
          - A. L'expérience du choix : Descartes, la volonté infinie, la liberté comme évidence intérieure.
          - B. Sartre : l'homme est condamné à être libre ; nier sa liberté est de la mauvaise foi.
        - **II. Ce sentiment est peut-être une illusion**
          - A. Spinoza : les hommes se croient libres parce qu'ils ignorent les causes qui les déterminent.
          - B. Déterminismes biologiques, sociaux (Bourdieu), psychiques (Freud).
        - **III. La liberté comme conquête**
          - A. Connaître la nécessité pour s'en libérer (Spinoza).
          - B. L'autonomie : obéir à la loi qu'on se prescrit (Rousseau, Kant).
          - C. La liberté politique, garantie par des institutions.

        ### Références utiles
        Descartes (*Méditations*, IV), Spinoza (*Éthique*, III ; *Lettre à Schuller*), Rousseau, Kant, Sartre, Freud.
      `
    },
    {
      id: 'verite-bonheur',
      type: 'dissertation',
      titre: 'Faut-il préférer la vérité au bonheur ?',
      enonce: 'Faut-il préférer la vérité au bonheur ?',
      pistes: `
        ### Analyse
        - *Faut-il* : obligation morale ? nécessité ? intérêt bien compris ?
        - *Préférer* : suppose qu'on doive **choisir**, donc que vérité et bonheur puissent s'opposer. Est-ce le cas ?
        - *La vérité* : connaissance conforme au réel, ou franchise. *Le bonheur* : satisfaction durable et complète.

        ### Problématique possible
        La vérité, parfois douloureuse, doit-elle l'emporter sur un bonheur qui reposerait sur l'illusion, ou le vrai bonheur est-il inséparable de la vérité ?

        ### Plan possible
        - **I. Le bonheur semble parfois exiger l'illusion**
          - A. Les illusions consolent (Nietzsche : « nous avons l'art pour ne pas mourir de la vérité »).
          - B. Le divertissement pascalien : l'homme fuit la pensée de sa condition.
        - **II. Mais un bonheur fondé sur l'illusion est fragile et indigne**
          - A. La caverne de Platon : le prisonnier libéré ne voudrait plus revenir aux ombres.
          - B. Kant : le devoir de véracité ; un homme qui ment se dégrade.
        - **III. La vérité comme condition d'un bonheur supérieur**
          - A. Épicure : la connaissance de la nature délivre des craintes (les dieux, la mort).
          - B. Spinoza : la béatitude naît de la connaissance.

        ### Références utiles
        Platon (*République* VII), Pascal (*Pensées*, le divertissement), Épicure, Spinoza, Kant (*D'un prétendu droit de mentir par humanité*), Nietzsche.
      `
    },
    {
      id: 'bon-sens',
      type: 'explication',
      titre: 'Descartes, le bon sens (*Discours de la méthode*, I)',
      enonce: 'Expliquez le texte suivant.',
      texte: `
        Le bon sens est la chose du monde la mieux partagée : car chacun pense en être si bien pourvu,
        que ceux même qui sont les plus difficiles à contenter en toute autre chose,
        n'ont point coutume d'en désirer plus qu'ils en ont.
        En quoi il n'est pas vraisemblable que tous se trompent ;
        mais plutôt cela témoigne que la puissance de bien juger, et distinguer le vrai d'avec le faux,
        qui est proprement ce qu'on nomme le bon sens ou la raison,
        est naturellement égale en tous les hommes ;
        et ainsi que la diversité de nos opinions ne vient pas de ce que les uns sont plus raisonnables que les autres,
        mais seulement de ce que nous conduisons nos pensées par diverses voies,
        et ne considérons pas les mêmes choses.
        Car ce n'est pas assez d'avoir l'esprit bon, mais le principal est de l'appliquer bien.
      `,
      source: 'René Descartes, *Discours de la méthode*, première partie (1637).',
      pistes: `
        ### Thème, thèse, enjeu
        - **Thème** : le bon sens, c'est-à-dire la raison comme « puissance de bien juger ».
        - **Thèse** : la raison est **naturellement égale** en tous les hommes ; la diversité des opinions vient de la **méthode** (la manière de conduire ses pensées), non d'une inégalité d'intelligence.
        - **Enjeu** : fonder la nécessité d'une **méthode** (c'est tout l'objet du *Discours*) et affirmer l'**égalité** des esprits — un geste profondément moderne (Descartes écrit en français pour être lu de tous).

        ### Structure
        1. **« Le bon sens… qu'ils en ont »** : un constat ironique. Personne ne se plaint d'en manquer.
        2. **« En quoi… tous les hommes »** : retournement : ce constat n'est pas une illusion générale mais le **signe** d'une égalité réelle. Définition du bon sens.
        3. **« et ainsi… les mêmes choses »** : conséquence : la diversité des opinions vient des **chemins** suivis et des **objets** considérés.
        4. **Dernière phrase** : conclusion : avoir l'esprit bon ne suffit pas, il faut **l'appliquer bien**, d'où la méthode.

        ### Points à expliquer
        - L'**ironie** de la première phrase : on peut la lire comme une moquerie (chacun se croit assez intelligent)… que Descartes transforme en argument.
        - « *il n'est pas vraisemblable que tous se trompent* » : un argument de **probabilité**, prudent.
        - La **définition** : bon sens = raison = puissance de « distinguer le vrai d'avec le faux ».
        - La distinction entre la **faculté** (égale) et son **usage** (inégal).
        - La métaphore du **chemin** (« diverses voies ») : *méthode* vient du grec *meta-hodos*, le chemin.

        ### Discussion possible
        - L'égalité de la raison est-elle un **fait** ou un **principe** ? Kant reprendra l'idée : la paresse et la lâcheté, non l'incapacité, maintiennent les hommes en minorité (*Qu'est-ce que les Lumières ?*).
        - Limite : les conditions sociales (éducation, langue) influent sur l'usage de la raison.
      `
    },
    {
      id: 'roseau',
      type: 'explication',
      titre: 'Pascal, le roseau pensant (*Pensées*)',
      enonce: 'Expliquez le texte suivant.',
      texte: `
        L'homme n'est qu'un roseau, le plus faible de la nature ; mais c'est un roseau pensant.
        Il ne faut pas que l'univers entier s'arme pour l'écraser :
        une vapeur, une goutte d'eau, suffit pour le tuer.
        Mais, quand l'univers l'écraserait, l'homme serait encore plus noble que ce qui le tue,
        puisqu'il sait qu'il meurt, et l'avantage que l'univers a sur lui ;
        l'univers n'en sait rien.
        Toute notre dignité consiste donc en la pensée.
        C'est de là qu'il faut nous relever et non de l'espace et de la durée, que nous ne saurions remplir.
        Travaillons donc à bien penser : voilà le principe de la morale.
      `,
      source: 'Blaise Pascal, *Pensées* (publication posthume, 1670), fragment 347 (éd. Brunschvicg).',
      pistes: `
        ### Thème, thèse, enjeu
        - **Thème** : la place de l'homme dans l'univers, entre faiblesse et grandeur.
        - **Thèse** : la **dignité** de l'homme tient tout entière à la **pensée**, qui le rend supérieur à l'univers qui peut l'écraser.
        - **Enjeu** : renverser la mesure de la grandeur (non la force ou l'étendue, mais la conscience) et fonder une **morale** : « bien penser ».

        ### Structure
        1. **Phrase 1** : une définition paradoxale, construite sur l'opposition *mais* (faiblesse / pensée).
        2. **« Il ne faut pas… la tuer »** : développement de la **faiblesse** (hyperbole de l'univers armé, opposée à la « goutte d'eau »).
        3. **« Mais, quand l'univers… n'en sait rien »** : renversement : la **grandeur** de l'homme est de **savoir** qu'il meurt.
        4. **« Toute notre dignité… »** : conclusion morale.

        ### Points à expliquer
        - La métaphore du **roseau** (fragile, qui plie) — écho possible à la fable de La Fontaine *Le Chêne et le Roseau*.
        - « *plus noble que ce qui le tue* » : la noblesse n'est pas la force ; la conscience de sa misère fait la grandeur de l'homme (« la grandeur de l'homme est grande en ce qu'il se connaît misérable »).
        - « *l'espace et la durée, que nous ne saurions remplir* » : l'homme est perdu entre deux infinis ; il ne peut se grandir par la quantité.
        - « *bien penser* » : non pas penser beaucoup, mais penser **juste**, et notamment penser sa condition (contre le **divertissement**).

        ### Discussion possible
        - Comparer avec Descartes : la pensée comme essence de l'homme, mais Pascal y ajoute la conscience de la **misère**.
        - Dimension apologétique : la pensée conduit, chez Pascal, à reconnaître le besoin de Dieu.
      `
    },
    {
      id: 'propriete',
      type: 'explication',
      titre: 'Rousseau, l\'origine de la société civile',
      enonce: 'Expliquez le texte suivant.',
      texte: `
        Le premier qui, ayant enclos un terrain, s'avisa de dire : Ceci est à moi,
        et trouva des gens assez simples pour le croire, fut le vrai fondateur de la société civile.
        Que de crimes, de guerres, de meurtres, que de misères et d'horreurs
        n'eût point épargnés au genre humain celui qui, arrachant les pieux ou comblant le fossé,
        eût crié à ses semblables : Gardez-vous d'écouter cet imposteur ;
        vous êtes perdus, si vous oubliez que les fruits sont à tous, et que la terre n'est à personne.
      `,
      source: 'Jean-Jacques Rousseau, *Discours sur l\'origine et les fondements de l\'inégalité parmi les hommes*, seconde partie (1755).',
      pistes: `
        ### Thème, thèse, enjeu
        - **Thème** : l'origine de la propriété et de la société civile.
        - **Thèse** : la société civile naît d'un **acte d'appropriation** qui n'a d'autre fondement que la **parole** d'un homme et la **crédulité** des autres ; elle est la source des malheurs humains.
        - **Enjeu** : distinguer l'**origine** (un fait historique hypothétique) et le **fondement** (une justification en droit) de la propriété.

        ### Structure
        1. **Première phrase** : un récit fondateur, ironique (« s'avisa », « assez simples »).
        2. **Deuxième phrase** : une exclamation pathétique et une **uchronie** (ce qui aurait pu arriver) : le contre-discours du résistant.

        ### Points à expliquer
        - « *Ceci est à moi* » : la propriété comme **acte de langage** qui transforme un fait (enclore) en droit prétendu.
        - « *des gens assez simples pour le croire* » : la propriété repose sur une **croyance** collective.
        - L'**accumulation** (« crimes, guerres, meurtres… ») : la propriété engendre l'inégalité et la violence.
        - « *les fruits sont à tous, et la terre n'est à personne* » : un droit naturel commun, antérieur à l'appropriation.

        ### Discussion possible
        - Opposer **Locke**, pour qui la propriété est fondée sur le **travail** (*Second traité du gouvernement civil*).
        - Rousseau ne prône pas un retour à l'état de nature : le *Contrat social* cherchera un fondement **légitime** à l'ordre politique.
      `
    }
  ]
});
