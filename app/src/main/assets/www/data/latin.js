/* Latin : maîtrise de la langue ancienne et du français */

STUDIUM.add({
  id: 'latin',
  nom: 'Latin',
  court: 'Langue, version, français',
  icone: 'landmark',
  description: 'Maîtrise de la langue latine et du français : déclinaisons, conjugaisons, syntaxe, traduction.',
  epreuves: ['Exercices de langue', 'Version', 'Maîtrise du français'],
  methodes: ['version-ancienne', 'organisation'],
  conseils: `
    ### Comment progresser en latin
    - **Un peu chaque jour** : 15 minutes de déclinaisons ou de vocabulaire valent mieux qu'une heure le dimanche.
    - Apprends le vocabulaire avec **toutes ses formes** : *capio, is, ere, cepi, captum* — le parfait et le supin servent à reconnaître les formes.
    - Fais les **cartes mémoire** de l'appli : elles reviennent au bon moment.
    - Relis des **textes déjà traduits** en classe : c'est le meilleur moyen de prendre l'habitude des tournures.
    - Soigne ton **français** : une version juste mais mal écrite perd beaucoup de points.
  `,

  cours: [
    {
      id: 'declinaisons',
      titre: 'Les cas et les déclinaisons',
      resume: 'Les six cas, les cinq déclinaisons',
      contenu: `
        Le latin indique la **fonction** d'un mot par sa **terminaison** : c'est la **déclinaison**. L'ordre des mots est donc libre, et c'est la désinence qui compte.

        ## Les six cas et leurs fonctions

        | Cas | Fonctions principales | Exemple |
        |---|---|---|
        | Nominatif | sujet, attribut du sujet | *Rosa* pulchra est. |
        | Vocatif | apostrophe | *Domine*, veni ! |
        | Accusatif | COD ; lieu où l'on va (*ad*, *in* + acc.) ; durée | Video *rosam*. |
        | Génitif | complément du nom | Odor *rosae* |
        | Datif | COI, attribution, intérêt | Do *puellae* rosam. |
        | Ablatif | compléments circonstanciels (moyen, manière, cause, lieu où l'on est, temps) | *Gladio* pugnat. |

        :::retenir Trois réflexes
        - Au **neutre**, nominatif = vocatif = accusatif, et au pluriel ils se terminent en **-a**.
        - Au **pluriel**, datif = ablatif.
        - Une forme peut correspondre à plusieurs cas : c'est le **contexte** (le verbe, les accords) qui tranche.
        :::

        ## 1ʳᵉ déclinaison : *rosa, ae* (f.)

        | Cas | Singulier | Pluriel |
        |---|---|---|
        | Nominatif | ros**a** | ros**ae** |
        | Vocatif | ros**a** | ros**ae** |
        | Accusatif | ros**am** | ros**as** |
        | Génitif | ros**ae** | ros**arum** |
        | Datif | ros**ae** | ros**is** |
        | Ablatif | ros**ā** | ros**is** |

        - Presque tous les mots sont féminins. Exceptions masculines : *agricola* (paysan), *nauta* (marin), *poeta* (poète).

        ## 2ᵉ déclinaison : *dominus, i* (m.) et *templum, i* (n.)

        | Cas | Sing. masc. | Plur. masc. | Sing. neutre | Plur. neutre |
        |---|---|---|---|---|
        | Nominatif | domin**us** | domin**i** | templ**um** | templ**a** |
        | Vocatif | domin**e** | domin**i** | templ**um** | templ**a** |
        | Accusatif | domin**um** | domin**os** | templ**um** | templ**a** |
        | Génitif | domin**i** | domin**orum** | templ**i** | templ**orum** |
        | Datif | domin**o** | domin**is** | templ**o** | templ**is** |
        | Ablatif | domin**o** | domin**is** | templ**o** | templ**is** |

        - Variantes : *puer, pueri* (enfant) garde le *e* ; *ager, agri* (champ) le perd.

        ## 3ᵉ déclinaison : la plus importante

        On distingue les **imparisyllabiques** (plus de syllabes au génitif qu'au nominatif : *consul, consulis*) et les **parisyllabiques** (même nombre : *civis, civis*), qui ont un génitif pluriel en **-ium**.

        | Cas | *consul* sing. | plur. | *corpus* (n.) sing. | plur. |
        |---|---|---|---|---|
        | Nominatif | consul | consul**es** | corpus | corpor**a** |
        | Vocatif | consul | consul**es** | corpus | corpor**a** |
        | Accusatif | consul**em** | consul**es** | corpus | corpor**a** |
        | Génitif | consul**is** | consul**um** | corpor**is** | corpor**um** |
        | Datif | consul**i** | consul**ibus** | corpor**i** | corpor**ibus** |
        | Ablatif | consul**e** | consul**ibus** | corpor**e** | corpor**ibus** |

        - Parisyllabiques : *civis, is* → génitif pluriel *civ**ium***.
        - Neutres en *-e, -al, -ar* : *mare, maris* (la mer) → ablatif *mar**i***, pluriel *mar**ia***, génitif pluriel *mar**ium***.
        - Le radical se lit au **génitif** : *rex, reg-is* ; *iter, itiner-is* ; *corpus, corpor-is*. D'où l'importance d'apprendre le génitif avec le mot.

        ## 4ᵉ et 5ᵉ déclinaisons

        | Cas | *manus, us* (f.) sing. | plur. | *res, rei* (f.) sing. | plur. |
        |---|---|---|---|---|
        | Nominatif | man**us** | man**us** | r**es** | r**es** |
        | Accusatif | man**um** | man**us** | r**em** | r**es** |
        | Génitif | man**us** | man**uum** | r**ei** | r**erum** |
        | Datif | man**ui** | man**ibus** | r**ei** | r**ebus** |
        | Ablatif | man**u** | man**ibus** | r**e** | r**ebus** |

        - 4ᵉ : *senatus* (sénat), *exercitus* (armée), *domus* (maison, avec des formes de la 2ᵉ).
        - 5ᵉ : *res* (chose, affaire), *dies* (jour), *fides* (confiance). *Res publica* : la chose publique, l'État.

        ## Les adjectifs
        - **1ʳᵉ classe** : *bonus, bona, bonum* — se décline sur *dominus / rosa / templum*.
        - **2ᵉ classe** : *fortis, fortis, forte* — se décline sur la 3ᵉ déclinaison (ablatif en *-i*, génitif pluriel en *-ium*).
        - L'adjectif s'accorde en **genre, nombre et cas**, mais pas forcément en déclinaison : *poeta bonus* (un bon poète).
      `
    },
    {
      id: 'conjugaisons',
      titre: 'Les conjugaisons',
      resume: 'Indicatif, subjonctif, passif, sum et possum',
      contenu: `
        ## Les temps primitifs
        Un verbe latin s'apprend par ses **temps primitifs** : *amo, as, are, avi, atum*.
        - *amo* : 1ʳᵉ personne du présent ;
        - *amas* : 2ᵉ personne (elle indique la conjugaison) ;
        - *amare* : infinitif présent ;
        - *amavi* : parfait → radical du **perfectum** (*amav-*) ;
        - *amatum* : supin → radical du **participe parfait** (*amat-us*).

        | Conjugaison | Modèle | Sens |
        |---|---|---|
        | 1ʳᵉ | *amo, as, are, avi, atum* | aimer |
        | 2ᵉ | *moneo, es, ere, monui, monitum* | avertir |
        | 3ᵉ | *lego, is, ere, legi, lectum* | lire, choisir |
        | 3ᵉ mixte | *capio, is, ere, cepi, captum* | prendre |
        | 4ᵉ | *audio, is, ire, audivi, auditum* | entendre |

        ## Le système de l'infectum (radical du présent)

        ### Présent de l'indicatif actif
        | | 1ʳᵉ | 2ᵉ | 3ᵉ | 3ᵉ mixte | 4ᵉ |
        |---|---|---|---|---|---|
        | 1 sg | am**o** | mone**o** | leg**o** | capi**o** | audi**o** |
        | 2 sg | ama**s** | mone**s** | leg**is** | cap**is** | audi**s** |
        | 3 sg | ama**t** | mone**t** | leg**it** | cap**it** | audi**t** |
        | 1 pl | ama**mus** | mone**mus** | leg**imus** | cap**imus** | audi**mus** |
        | 2 pl | ama**tis** | mone**tis** | leg**itis** | cap**itis** | audi**tis** |
        | 3 pl | ama**nt** | mone**nt** | leg**unt** | capi**unt** | audi**unt** |

        ### Imparfait : suffixe **-ba-**
        - *ama**ba**m, ama**ba**s, ama**ba**t, ama**ba**mus, ama**ba**tis, ama**ba**nt*
        - *mone**ba**m*, *leg**eba**m*, *capi**eba**m*, *audi**eba**m*.

        ### Futur : deux types
        - 1ʳᵉ et 2ᵉ conjugaisons : **-bo, -bis, -bit, -bimus, -bitis, -bunt** → *ama**bo***, *mone**bo***.
        - 3ᵉ et 4ᵉ : **-am, -es, -et, -emus, -etis, -ent** → *leg**am**, leg**es**, leg**et***, *audi**am***.

        :::attention Piège classique
        *legit* = il lit (présent) ; *leget* = il lira (futur) ; *legunt* = ils lisent ; *legent* = ils liront. Une seule voyelle change tout.
        :::

        ## Le système du perfectum (radical du parfait)
        - **Parfait** : radical + *-i, -isti, -it, -imus, -istis, -erunt* → *amav**i**, amav**isti**, amav**it**, amav**imus**, amav**istis**, amav**erunt***.
        - **Plus-que-parfait** : radical + *-eram* → *amav**eram*** (j'avais aimé).
        - **Futur antérieur** : radical + *-ero* → *amav**ero*** (j'aurai aimé).

        ## Le subjonctif
        - **Présent** : 1ʳᵉ conjugaison en **-e-** (*am**e**m, am**e**s, am**e**t*) ; les autres en **-a-** (*mone**a**m, leg**a**m, capi**a**m, audi**a**m*).
        - **Imparfait** : infinitif présent + désinences → *amare**m***, *monere**m***, *legere**m***, *audire**m***.
        - **Parfait** : *amav**erim*** ; **plus-que-parfait** : *amav**issem***.

        ## Le passif
        - Désinences : **-or, -ris, -tur, -mur, -mini, -ntur** → *amor, amaris, amatur, amamur, amamini, amantur* (je suis aimé…).
        - Temps du perfectum : **participe parfait + sum** → *amatus sum* (j'ai été aimé), *amatus eram* (j'avais été aimé).
        - Les **déponents** ont une forme passive et un sens actif : *loquor* (je parle), *sequor* (je suis), *hortor* (j'exhorte).

        ## *Sum* et *possum*
        | | *sum* (présent) | *sum* (imparfait) | *sum* (parfait) | *possum* (présent) |
        |---|---|---|---|---|
        | 1 sg | sum | eram | fui | possum |
        | 2 sg | es | eras | fuisti | potes |
        | 3 sg | est | erat | fuit | potest |
        | 1 pl | sumus | eramus | fuimus | possumus |
        | 2 pl | estis | eratis | fuistis | potestis |
        | 3 pl | sunt | erant | fuerunt | possunt |

        - Futur de *sum* : *ero, eris, erit, erimus, eritis, erunt*.

        ## Infinitifs et participes
        - Infinitifs : présent *amare* (passif *amari* ; 3ᵉ conj. *legi*), parfait *amavisse*, futur *amaturum esse*.
        - Participes : présent *amans, amantis* (aimant) ; parfait passif *amatus, a, um* (aimé) ; futur *amaturus, a, um* (devant aimer).
      `
    },
    {
      id: 'syntaxe',
      titre: 'La syntaxe essentielle',
      resume: 'Infinitive, ablatif absolu, cum, ut, relatives',
      contenu: `
        ## La proposition infinitive
        Après un verbe de **parole**, de **pensée** ou de **perception**, le latin emploie une proposition dont le **sujet est à l'accusatif** et le **verbe à l'infinitif**.

        > Dico *puerum venire*.
        > — Je dis que l'enfant vient.

        - Infinitif **présent** = simultanéité : *Dixit puerum venire* → Il dit que l'enfant venait.
        - Infinitif **parfait** = antériorité : *Dixit puerum venisse* → Il dit que l'enfant était venu.
        - Infinitif **futur** = postériorité : *Dixit puerum venturum esse* → Il dit que l'enfant viendrait.
        - Pronom réfléchi : *se* renvoie au sujet du verbe principal → *Dicit se venire* : il dit qu'il (lui-même) vient.

        ## L'ablatif absolu
        Un **nom à l'ablatif** et un **participe** accordé, sans lien grammatical avec le reste de la phrase : il exprime une **circonstance** (temps, cause, concession…).

        > *Urbe capta*, hostes discesserunt.
        > — Une fois la ville prise, les ennemis se retirèrent.

        - Participe parfait = action **antérieure** : *Caesare interfecto* → après le meurtre de César.
        - Participe présent = action **simultanée** : *Caesare regnante* → sous le règne de César.
        - Variante sans participe : *Cicerone consule* → sous le consulat de Cicéron.

        ## *Cum* + subjonctif (*cum* historique)
        Dans un récit au passé, *cum* + subjonctif imparfait ou plus-que-parfait se traduit par **comme**, **alors que**, **après que**.

        > *Cum Caesar in Galliam venisset*, Helvetii legatos miserunt.
        > — Comme César était arrivé en Gaule, les Helvètes envoyèrent des ambassadeurs.

        ## *Ut* et *ne* + subjonctif
        - **But** : *ut* (pour que), *ne* (pour que… ne… pas). *Venit ut videat* → il vient pour voir.
        - **Conséquence** : annoncée par *ita, tam, tantus, sic*… → *Tam fortis erat **ut** omnes eum timerent* : il était si courageux que tous le craignaient.
        - **Complétive** après un verbe de volonté : *Impero tibi **ut** venias* → je t'ordonne de venir.
        - Avec l'**indicatif**, *ut* signifie **comme** : *ut dixi* → comme je l'ai dit.

        ## Les relatives

        | Cas | Masc. | Fém. | Neutre |
        |---|---|---|---|
        | Nom. sg | qui | quae | quod |
        | Acc. sg | quem | quam | quod |
        | Gén. sg | cuius | cuius | cuius |
        | Dat. sg | cui | cui | cui |
        | Abl. sg | quo | qua | quo |
        | Nom. pl | qui | quae | quae |
        | Acc. pl | quos | quas | quae |
        | Gén. pl | quorum | quarum | quorum |
        | Dat./Abl. pl | quibus | quibus | quibus |

        :::retenir La règle d'or
        Le relatif prend le **genre et le nombre** de son antécédent, mais son **cas** dépend de sa **fonction dans la relative**.
        *Puer **quem** vides* : l'enfant **que** tu vois (*quem* : masculin singulier comme *puer*, accusatif car COD de *vides*).
        :::

        ## La concordance des temps (au subjonctif)
        | Verbe principal | Simultanéité | Antériorité |
        |---|---|---|
        | présent ou futur | subjonctif **présent** | subjonctif **parfait** |
        | passé | subjonctif **imparfait** | subjonctif **plus-que-parfait** |

        ## Gérondif et adjectif verbal
        - **Gérondif** : nom verbal → *ars scribendi* (l'art d'écrire), *ad discendum* (pour apprendre).
        - **Adjectif verbal** (en *-ndus, a, um*) :
          - avec un nom : *ad pacem petendam* → pour demander la paix ;
          - avec *esse* : **obligation** → *Carthago delenda est* : Carthage doit être détruite.

        ## Les pronoms à connaître par cœur
        - *is, ea, id* : il, elle ; ce… (anaphorique).
        - *hic, haec, hoc* : celui-ci (proche) ; *ille, illa, illud* : celui-là (éloigné, souvent célèbre).
        - *ipse, ipsa, ipsum* : lui-même ; *se* : se, soi (réfléchi).
      `
    },
    {
      id: 'francais',
      titre: 'Maîtriser le français',
      resume: 'Passé simple, subjonctif, accords, propositions',
      contenu: `
        La version et la maîtrise de la langue sont aussi des **exercices de français**. Voici les points sur lesquels on perd le plus de points.

        ## Le passé simple
        Temps du **récit**, indispensable en version.

        | Type | Exemple | Terminaisons |
        |---|---|---|
        | en **-a** (verbes en -er) | il chant**a**, ils chant**èrent** | -ai, -as, -a, -âmes, -âtes, -èrent |
        | en **-i** | il fin**it**, il pr**it**, il f**it** | -is, -is, -it, -îmes, -îtes, -irent |
        | en **-u** | il cr**ut**, il conn**ut**, il v**écut** | -us, -us, -ut, -ûmes, -ûtes, -urent |
        | en **-in** | il v**int**, il t**int** | -ins, -ins, -int, -înmes, -întes, -inrent |

        :::attention Pièges
        - *Il **naquit*** (naître), *il **mourut*** (mourir), *il **vainquit*** (vaincre), *il **conclut*** (conclure).
        - Ne confonds pas le passé simple *il fit* et le subjonctif imparfait *qu'il **fît*** (accent circonflexe).
        :::

        ## Le subjonctif imparfait
        Il se forme sur le passé simple : *il fit* → *qu'il **fît*** ; *il vint* → *qu'il **vînt*** ; *il chanta* → *qu'il **chantât***. Il est employé à l'écrit soutenu après un verbe au passé : *Il fallait qu'il **vînt***.

        ## L'accord du participe passé
        - Avec **être** : accord avec le sujet → *Elles sont **parties***.
        - Avec **avoir** : accord avec le **COD placé avant** → *Les lettres que j'ai **écrites*** ; mais *J'ai **écrit** des lettres*.
        - Verbes **pronominaux** :
          - s'accordent avec le COD placé avant : *Elle s'est **lavée*** (*se* = COD) ;
          - mais pas si le COD est après : *Elle s'est **lavé** les mains* ;
          - ni si le pronom est COI : *Ils se sont **parlé*** (parler *à* quelqu'un), *Ils se sont **succédé***.
        - Avec un complément de **durée** ou de **prix** (pas un COD) : *les heures qu'il a **dormi***.

        ## Homophones et constructions délicates
        - **Quoique** (bien que) / **quoi que** (quelle que soit la chose que) : *Quoi qu'il dise, il a tort.*
        - **Quel que** + être / **quelque** + nom : *Quelles que soient tes raisons* ; *quelques raisons*.
        - **Après que** + **indicatif** : *Après qu'il **est** parti* (fait accompli) ; **avant que** + subjonctif.
        - **Bien que** + subjonctif : *bien qu'il **soit** tard*.
        - **Leur** devant un verbe est invariable : *je **leur** donne* ; devant un nom pluriel : *leurs livres*.

        ## Les propositions subordonnées
        - **Relative** : introduite par un pronom relatif, complète un nom (*l'homme **qui parle***).
        - **Complétive** : complète un verbe (*je pense **que tu as raison***).
        - **Circonstancielle** : temps, cause, conséquence, but, concession, condition, comparaison (*Comme il pleuvait, il resta*).
        - **Interrogative indirecte** : *je me demande **s'il viendra***.
      `
    }
  ],

  quiz: [
    {
      id: 'cas',
      titre: 'Reconnaître les cas',
      questions: [
        { q: '*rosarum* est un…', c: ['génitif pluriel', 'datif pluriel', 'accusatif pluriel', 'génitif singulier'], r: 0, e: '1ʳᵉ déclinaison : la terminaison **-arum** est celle du génitif pluriel.' },
        { q: '*consulibus* peut être…', c: ['un datif ou un ablatif pluriel', 'un accusatif pluriel', 'un génitif pluriel', 'un nominatif pluriel'], r: 0, e: 'Au pluriel, le datif et l\'ablatif sont toujours identiques : **-ibus** à la 3ᵉ déclinaison.' },
        { q: '*templa* peut être…', c: ['nominatif, vocatif ou accusatif pluriel', 'ablatif singulier', 'génitif singulier', 'nominatif singulier'], r: 0, e: 'Neutre : nominatif = vocatif = accusatif, en **-a** au pluriel.' },
        { q: '*rei* (de *res, rei*) peut être…', c: ['un génitif ou un datif singulier', 'un nominatif pluriel', 'un ablatif singulier', 'un accusatif singulier'], r: 0, e: '5ᵉ déclinaison : génitif et datif singuliers en **-ei**.' },
        { q: '*manu* (de *manus, us*) est un…', c: ['ablatif singulier', 'datif singulier', 'nominatif pluriel', 'accusatif singulier'], r: 0, e: '4ᵉ déclinaison : ablatif singulier en **-u** (datif : *manui*).' },
        { q: '*Domine !* est au…', c: ['vocatif', 'nominatif', 'ablatif', 'datif'], r: 0, e: 'Les noms en *-us* de la 2ᵉ déclinaison ont un vocatif en **-e**.' },
        { q: '*civium* est un génitif pluriel en *-ium* parce que *civis* est…', c: ['un parisyllabique', 'un imparisyllabique', 'un neutre', 'un mot de la 4ᵉ déclinaison'], r: 0, e: '*civis, civis* : même nombre de syllabes au nominatif et au génitif → génitif pluriel en **-ium**.' },
        { q: '*dominos* est un…', c: ['accusatif pluriel', 'génitif singulier', 'datif pluriel', 'ablatif singulier'], r: 0, e: '2ᵉ déclinaison : accusatif pluriel masculin en **-os**.' },
        { q: 'Dans *Gladio pugnat*, *gladio* exprime…', c: ['le moyen (ablatif)', 'l\'attribution (datif)', 'le sujet', 'le lieu où l\'on va'], r: 0, e: 'Ablatif de moyen : « il combat **avec** son glaive ».' },
        { q: 'Quel est le radical de *iter, itineris* (chemin) ?', c: ['itiner-', 'iter-', 'it-', 'itin-'], r: 0, e: 'Le radical se lit au génitif : *itiner-is*. D\'où l\'importance d\'apprendre le génitif.' }
      ]
    },
    {
      id: 'verbes',
      titre: 'Reconnaître les formes verbales',
      questions: [
        { q: '*amabant* est à…', c: ['l\'imparfait, 3ᵉ pers. du pluriel', 'au futur, 3ᵉ pers. du pluriel', 'au parfait, 3ᵉ pers. du pluriel', 'au présent, 3ᵉ pers. du pluriel'], r: 0, e: 'Le suffixe **-ba-** marque l\'imparfait : *ils aimaient*.' },
        { q: '*leget* (de *lego*, 3ᵉ conj.) signifie…', c: ['il lira', 'il lit', 'il lisait', 'qu\'il lise'], r: 0, e: 'Futur des 3ᵉ et 4ᵉ conjugaisons : *-am, -es, -et*. Le présent est *legit*.' },
        { q: '*monuerunt* est un…', c: ['parfait, 3ᵉ pers. du pluriel', 'imparfait', 'présent', 'plus-que-parfait'], r: 0, e: 'Radical du parfait *monu-* + *-erunt* : *ils avertirent / ils ont averti*.' },
        { q: '*capti sunt* signifie…', c: ['ils ont été pris', 'ils sont prenant', 'ils prennent', 'ils seront pris'], r: 0, e: 'Parfait passif : participe parfait + *sum*.' },
        { q: '*legeremus* est un…', c: ['subjonctif imparfait, 1ʳᵉ pers. du pluriel', 'futur, 1ʳᵉ pers. du pluriel', 'imparfait de l\'indicatif', 'subjonctif présent'], r: 0, e: 'Subjonctif imparfait = infinitif présent (*legere*) + désinences.' },
        { q: '*fuisset* est…', c: ['le subjonctif plus-que-parfait de *sum*', 'le parfait de *sum*', 'le futur de *sum*', 'le subjonctif présent de *sum*'], r: 0, e: '*fu-* (radical du parfait de *sum*) + *-isset* : *qu\'il eût été*.' },
        { q: '*potest* signifie…', c: ['il peut', 'il pouvait', 'il pourra', 'il a pu'], r: 0, e: '*possum, potes, potest* : présent de *possum*.' },
        { q: '*audiatur* est…', c: ['un subjonctif présent passif, 3ᵉ pers. du singulier', 'un indicatif présent actif', 'un futur actif', 'un infinitif passif'], r: 0, e: 'Subjonctif présent (*-a-*) + désinence passive *-tur* : *qu\'il soit entendu*.' },
        { q: '*loquitur* (déponent) signifie…', c: ['il parle', 'il est parlé', 'il parlera', 'il a parlé'], r: 0, e: 'Les déponents ont une forme passive mais un **sens actif**.' },
        { q: 'Quel est l\'infinitif parfait de *amo* ?', c: ['amavisse', 'amare', 'amari', 'amaturum esse'], r: 0, e: 'Infinitif parfait : radical du parfait + **-isse**.' }
      ]
    },
    {
      id: 'syntaxe',
      titre: 'Identifier les constructions',
      questions: [
        { q: 'Dans *Caesar, hostibus victis, in castra rediit*, *hostibus victis* est…', c: ['un ablatif absolu', 'un complément d\'attribution', 'une proposition infinitive', 'un génitif partitif'], r: 0, e: 'Nom + participe à l\'ablatif, sans lien avec le reste : « une fois les ennemis vaincus ».' },
        { q: '*Scio te venisse* se traduit par…', c: ['Je sais que tu es venu', 'Je sais que tu viens', 'Je sais que tu viendras', 'Je sais venir'], r: 0, e: 'Proposition infinitive ; infinitif **parfait** = antériorité.' },
        { q: 'Dans *Legatos misit ut pacem peterent*, *ut* introduit…', c: ['un but', 'une conséquence', 'une comparaison', 'un temps'], r: 0, e: '*ut* + subjonctif sans annonce (*ita, tam*…) après un verbe d\'action : but, « pour demander la paix ».' },
        { q: 'Dans *Tam fortis erat ut omnes eum timerent*, *ut* introduit…', c: ['une conséquence', 'un but', 'une cause', 'une concession'], r: 0, e: 'Annoncé par *tam* (si) : « si courageux **que** tous le craignaient ».' },
        { q: '*Carthago delenda est* signifie…', c: ['Carthage doit être détruite', 'Carthage a été détruite', 'Carthage sera détruite', 'Carthage détruit'], r: 0, e: 'Adjectif verbal + *esse* : idée d\'**obligation** (Caton l\'Ancien).' },
        { q: '*Cum Romam venisset, consulem salutavit* : *cum* + subjonctif plus-que-parfait se traduit par…', c: ['Comme il était arrivé à Rome', 'Avec Rome', 'Quand il arrive à Rome', 'Pour arriver à Rome'], r: 0, e: '*Cum* historique : « comme », « après que ».' },
        { q: 'Dans *Puer quem vides*, *quem* est à l\'accusatif parce que…', c: ['il est COD de *vides*', 'son antécédent est à l\'accusatif', 'il est sujet', 'il suit un verbe de mouvement'], r: 0, e: 'Le cas du relatif dépend de sa **fonction dans la relative**.' },
        { q: '*Dicit se venire* signifie…', c: ['Il dit qu\'il (lui-même) vient', 'Il dit qu\'un autre vient', 'Il se dit venir', 'Il dit de venir'], r: 0, e: '*se* réfléchi renvoie au sujet de la principale.' }
      ]
    },
    {
      id: 'francais',
      titre: 'Maîtrise du français',
      questions: [
        { q: 'Passé simple de « croire », 3ᵉ pers. du pluriel :', c: ['ils crurent', 'ils croyèrent', 'ils crûrent', 'ils croirent'], r: 0, e: 'Passé simple en **-u** : *je crus, ils crurent*.' },
        { q: 'Passé simple de « venir », 1ʳᵉ pers. du pluriel :', c: ['nous vînmes', 'nous venîmes', 'nous vinmes', 'nous vîmes'], r: 0, e: 'Type en **-in** : *nous vînmes, vous vîntes, ils vinrent*. (*Nous vîmes* : voir.)' },
        { q: '« Il fallait qu\'il … » (venir, subjonctif imparfait)', c: ['vînt', 'vint', 'vienne', 'venait'], r: 0, e: 'Subjonctif imparfait, avec accent circonflexe : *qu\'il vînt*.' },
        { q: '« Les lettres que j\'ai … »', c: ['écrites', 'écrit', 'écrits', 'écrite'], r: 0, e: 'Avec *avoir*, accord avec le COD placé avant (*que* = les lettres).' },
        { q: '« Elles se sont … les mains. »', c: ['lavé', 'lavées', 'lavés', 'lavée'], r: 0, e: 'Le COD (*les mains*) est placé **après** : pas d\'accord.' },
        { q: '« Ils se sont … » (succéder)', c: ['succédé', 'succédés', 'succédées', 'succédée'], r: 0, e: '*Succéder **à*** : *se* est COI, pas d\'accord.' },
        { q: '« Les trois heures qu\'il a … »', c: ['dormi', 'dormies', 'dormis', 'dormie'], r: 0, e: '*Que* est un complément de **durée**, pas un COD.' },
        { q: '« … soient tes raisons, tu dois venir. »', c: ['Quelles que', 'Quelques', 'Quel que', 'Quelle que'], r: 0, e: '*Quel que* + être, accordé avec le sujet (*raisons*, féminin pluriel).' },
        { q: '« Après qu\'il … parti, nous avons dîné. »', c: ['est', 'soit', 'fût', 'serait'], r: 0, e: '*Après que* + **indicatif** (le fait est accompli). C\'est *avant que* qui demande le subjonctif.' },
        { q: '« … il fasse, il échouera. » (= quelle que soit la chose qu\'il fasse)', c: ['Quoi qu\'', 'Quoiqu\'', 'Quoi que', 'Quoique'], r: 0, e: 'En deux mots : *quoi que* = quelle que soit la chose que. *Quoique* = bien que.' }
      ]
    },
    {
      id: 'etymologie',
      titre: 'Du latin au français',
      questions: [
        { q: '« Agricole » vient de…', c: ['*ager, agri* (champ)', '*agere* (agir)', '*acer* (vif)', '*augere* (augmenter)'], r: 0, e: '*Ager* (champ) + *colere* (cultiver).' },
        { q: '« Domestique » vient de…', c: ['*domus* (maison)', '*dominus* (maître)', '*domare* (dompter)', '*donum* (don)'], r: 0, e: '*Domus* : la maison. Le domestique est celui de la maison.' },
        { q: '« Vulnérable » vient de…', c: ['*vulnus, eris* (blessure)', '*vulgus* (foule)', '*volvere* (rouler)', '*vultus* (visage)'], r: 0, e: 'Vulnérable : qui peut être blessé.' },
        { q: '« Pédestre » vient de…', c: ['*pes, pedis* (pied)', '*paideia* (éducation)', '*pedagogus*', '*pendere* (peser)'], r: 0, e: '*Pes, pedis* : le pied (même famille : pédale, piéton).' },
        { q: '« Juridique » vient de…', c: ['*ius, iuris* (droit)', '*iurare* (jurer) seulement', '*iuvenis* (jeune)', '*iugum* (joug)'], r: 0, e: '*Ius, iuris* : le droit (juriste, juridiction).' },
        { q: '« Tradition » vient de *tradere*, qui signifie…', c: ['livrer, transmettre', 'tirer', 'traduire', 'trahir uniquement'], r: 0, e: '*Tradere* : remettre, transmettre… et livrer (d\'où *traditor*, le traître).' },
        { q: '« Insulaire » vient de…', c: ['*insula* (île)', '*insulsus* (fade)', '*insultare* (sauter sur)', '*insignis* (remarquable)'], r: 0, e: '*Insula* : l\'île (et à Rome, un immeuble).' },
        { q: '« Corporel » vient de…', c: ['*corpus, corporis*', '*cor, cordis*', '*cornu*', '*corvus*'], r: 0, e: '*Corpus, corporis* : le corps ; le radical *corpor-* se lit au génitif.' }
      ]
    }
  ],

  cartes: [
    {
      id: 'vocab',
      titre: 'Vocabulaire essentiel',
      cartes: [
        ['ager, agri (m.)', 'le champ, le territoire'],
        ['animus, i (m.)', 'l\'esprit, le cœur, le courage'],
        ['arma, orum (n. pl.)', 'les armes'],
        ['bellum, i (n.)', 'la guerre'],
        ['civis, is (m.)', 'le citoyen'],
        ['civitas, atis (f.)', 'la cité, l\'État ; le droit de cité'],
        ['consilium, ii (n.)', 'le conseil, le projet, la décision'],
        ['corpus, oris (n.)', 'le corps'],
        ['deus, i (m.)', 'le dieu'],
        ['dux, ducis (m.)', 'le chef, le guide'],
        ['exercitus, us (m.)', 'l\'armée'],
        ['fides, ei (f.)', 'la confiance, la foi, la parole donnée'],
        ['gens, gentis (f.)', 'la famille, le clan, le peuple'],
        ['homo, inis (m.)', 'l\'être humain'],
        ['hostis, is (m.)', 'l\'ennemi (public)'],
        ['iter, itineris (n.)', 'le chemin, la marche, le voyage'],
        ['ius, iuris (n.)', 'le droit'],
        ['lex, legis (f.)', 'la loi'],
        ['libertas, atis (f.)', 'la liberté'],
        ['manus, us (f.)', 'la main ; une troupe'],
        ['mos, moris (m.)', 'la coutume ; au pluriel : les mœurs'],
        ['nomen, inis (n.)', 'le nom'],
        ['opus, operis (n.)', 'l\'œuvre, le travail'],
        ['pax, pacis (f.)', 'la paix'],
        ['populus, i (m.)', 'le peuple'],
        ['res, rei (f.)', 'la chose, l\'affaire ; res publica : l\'État'],
        ['rex, regis (m.)', 'le roi'],
        ['tempus, oris (n.)', 'le temps, le moment'],
        ['urbs, urbis (f.)', 'la ville ; Rome'],
        ['verbum, i (n.)', 'le mot, la parole'],
        ['vir, viri (m.)', 'l\'homme (par opposition à la femme), le mari'],
        ['virtus, utis (f.)', 'le courage, le mérite, la vertu'],
        ['vita, ae (f.)', 'la vie'],
        ['vox, vocis (f.)', 'la voix, la parole'],
        ['ago, is, ere, egi, actum', 'faire, mener, agir'],
        ['capio, is, ere, cepi, captum', 'prendre'],
        ['cognosco, is, ere, cognovi, cognitum', 'apprendre à connaître ; au parfait : savoir'],
        ['dico, is, ere, dixi, dictum', 'dire'],
        ['disco, is, ere, didici', 'apprendre'],
        ['doceo, es, ere, docui, doctum', 'enseigner'],
        ['do, das, dare, dedi, datum', 'donner'],
        ['duco, is, ere, duxi, ductum', 'conduire ; considérer'],
        ['facio, is, ere, feci, factum', 'faire'],
        ['fero, fers, ferre, tuli, latum', 'porter, supporter, rapporter'],
        ['habeo, es, ere, habui, habitum', 'avoir ; considérer comme'],
        ['mitto, is, ere, misi, missum', 'envoyer'],
        ['pono, is, ere, posui, positum', 'poser, placer'],
        ['scio, is, ire, scivi, scitum', 'savoir'],
        ['trado, is, ere, tradidi, traditum', 'livrer, remettre, transmettre'],
        ['venio, is, ire, veni, ventum', 'venir'],
        ['video, es, ere, vidi, visum', 'voir'],
        ['vinco, is, ere, vici, victum', 'vaincre']
      ]
    },
    {
      id: 'outils',
      titre: 'Mots-outils et conjonctions',
      cartes: [
        ['autem', 'or, d\'autre part, quant à (2ᵉ place dans la phrase)'],
        ['enim', 'en effet (2ᵉ place)'],
        ['igitur', 'donc'],
        ['itaque', 'c\'est pourquoi'],
        ['nam', 'car'],
        ['sed', 'mais'],
        ['tamen', 'cependant'],
        ['etiam', 'aussi, même'],
        ['-que', 'et (accroché au second mot : *senatus populusque*)'],
        ['ne… quidem', 'pas même'],
        ['quia / quod + indicatif', 'parce que'],
        ['quamquam + indicatif', 'bien que'],
        ['cum + subjonctif', 'comme, alors que, après que'],
        ['ut + subjonctif', 'pour que (but) ; si bien que (conséquence)'],
        ['ut + indicatif', 'comme ; lorsque'],
        ['ne + subjonctif', 'pour que… ne… pas ; que… ne (après un verbe de crainte)'],
        ['dum', 'pendant que ; jusqu\'à ce que'],
        ['si / nisi', 'si / si… ne… pas, sauf si'],
        ['iam', 'déjà ; désormais'],
        ['nunc', 'maintenant'],
        ['saepe', 'souvent'],
        ['semper / numquam', 'toujours / jamais'],
        ['ita / sic', 'ainsi'],
        ['tam', 'si, tellement']
      ]
    }
  ],

  sujets: [
    {
      id: 'phrases1',
      type: 'phrases',
      titre: 'Traduire des phrases latines',
      enonce: 'Traduis chaque phrase en français correct. Repère d\'abord le verbe et le sujet.',
      items: [
        { q: 'Agricola rosas puellae dat.', r: 'Le paysan donne des roses à la jeune fille.', e: '*agricola* : nominatif (sujet) ; *rosas* : accusatif (COD) ; *puellae* : datif (COI).' },
        { q: 'Milites fortiter pugnaverunt.', r: 'Les soldats combattirent (ont combattu) courageusement.', e: '*pugnaverunt* : parfait, 3ᵉ pers. du pluriel.' },
        { q: 'Caesar, hostibus victis, in Galliam rediit.', r: 'Une fois les ennemis vaincus, César retourna en Gaule.', e: 'Ablatif absolu (*hostibus victis*) ; *in* + accusatif : lieu où l\'on va.' },
        { q: 'Dico te errare.', r: 'Je dis que tu te trompes.', e: 'Proposition infinitive : sujet à l\'accusatif (*te*), verbe à l\'infinitif.' },
        { q: 'Legatos misit ut pacem peterent.', r: 'Il envoya des ambassadeurs pour demander la paix.', e: '*ut* + subjonctif : but.' },
        { q: 'Cum Romam venisset, consulem salutavit.', r: 'Comme il était arrivé à Rome, il salua le consul.', e: '*Cum* historique + subjonctif plus-que-parfait. *Romam* : accusatif de direction sans préposition (nom de ville).' },
        { q: 'Urbe capta, hostes praedam inter se diviserunt.', r: 'Une fois la ville prise, les ennemis se partagèrent le butin.', e: 'Ablatif absolu ; *inter se* : entre eux.' },
        { q: 'Quis nescit Romam a Romulo conditam esse ?', r: 'Qui ignore que Rome a été fondée par Romulus ?', e: 'Infinitive au passif (infinitif parfait passif) ; *a Romulo* : complément d\'agent.' },
        { q: 'Historia magistra vitae est. (Cicéron)', r: 'L\'histoire est maîtresse de vie.', e: '*magistra* : attribut du sujet (nominatif).' },
        { q: 'Non vitae, sed scholae discimus. (Sénèque)', r: 'Ce n\'est pas pour la vie, mais pour l\'école que nous apprenons.', e: 'Datifs d\'intérêt. Sénèque le déplore ; on cite souvent la phrase à l\'envers : *Non scholae sed vitae discimus*.' }
      ]
    },
    {
      id: 'theme1',
      type: 'phrases',
      titre: 'Petit thème : du français au latin',
      enonce: 'Traduis en latin. Plusieurs réponses sont souvent possibles.',
      items: [
        { q: 'Les ennemis ont été vaincus.', r: 'Hostes victi sunt.', e: 'Parfait passif : participe parfait accordé (masculin pluriel) + *sunt*.' },
        { q: 'Le consul dit que la ville a été prise.', r: 'Consul dicit urbem captam esse.', e: 'Infinitive ; infinitif parfait passif accordé avec *urbem* (féminin, accusatif).' },
        { q: 'Nous apprenons pour enseigner.', r: 'Discimus ut doceamus.', e: '*ut* + subjonctif présent (concordance avec un présent).' },
        { q: 'Le roi envoya des soldats pour défendre la ville.', r: 'Rex milites misit ut urbem defenderent. (ou : ad urbem defendendam)', e: 'But : *ut* + subjonctif imparfait (verbe principal au passé), ou *ad* + adjectif verbal.' },
        { q: 'Une fois César tué, la guerre civile reprit.', r: 'Caesare interfecto, bellum civile renovatum est.', e: 'Ablatif absolu pour la circonstance antérieure.' }
      ]
    },
    {
      id: 'archias',
      type: 'version',
      titre: 'Cicéron, éloge des lettres (*Pro Archia*, 16)',
      enonce: 'Traduis ce passage célèbre où Cicéron défend le poète Archias et fait l\'éloge des études littéraires.',
      lang: 'la',
      duree: 45,
      texte: `
        Haec studia adulescentiam alunt, senectutem oblectant,
        secundas res ornant, adversis perfugium ac solacium praebent,
        delectant domi, non impediunt foris,
        pernoctant nobiscum, peregrinantur, rusticantur.
      `,
      source: 'Cicéron, *Pour le poète Archias*, VII, 16 (62 av. J.-C.). Vocabulaire : *alo* : nourrir ; *oblecto* : charmer ; *perfugium* : refuge ; *foris* : au dehors ; *pernocto* : passer la nuit ; *peregrinor* : voyager ; *rusticor* : séjourner à la campagne.',
      corrige: `
        Ces études nourrissent la jeunesse, charment la vieillesse, embellissent la prospérité, offrent dans l'adversité un refuge et une consolation ; elles nous font plaisir chez nous et ne nous gênent pas au dehors ; elles passent la nuit avec nous, nous accompagnent en voyage et à la campagne.
      `,
      pistes: `
        ### Points de difficulté
        - *Haec studia* : neutre pluriel, sujet de tous les verbes (*alunt, oblectant…*) ; les études **littéraires**.
        - *secundas res / adversis (rebus)* : les circonstances favorables / défavorables. *Adversis* est un **datif** (« aux circonstances adverses »), le nom *rebus* est sous-entendu.
        - Les trois derniers verbes sont des **déponents** à sens actif : *peregrinantur* (voyagent), *rusticantur* (séjournent à la campagne).
        - Le style : une **accumulation** de propositions juxtaposées (asyndète), avec des **antithèses** (jeunesse / vieillesse, chez soi / au dehors). Ta traduction doit garder ce rythme.

        ### Pour la culture antique
        Ce texte est un témoignage majeur sur la valeur accordée aux *studia humanitatis* : il rejoint directement le thème **« Connaître et transmettre »**.
      `
    },
    {
      id: 'lucilius',
      type: 'version',
      titre: 'Sénèque, *Lettres à Lucilius*, 1, 1',
      enonce: 'Traduis le début de la première lettre de Sénèque à son disciple Lucilius.',
      lang: 'la',
      duree: 45,
      texte: `
        Ita fac, mi Lucili : vindica te tibi,
        et tempus quod adhuc aut auferebatur aut subripiebatur aut excidebat
        collige et serva. Persuade tibi hoc sic esse ut scribo :
        quaedam tempora eripiuntur nobis, quaedam subducuntur, quaedam effluunt.
      `,
      source: 'Sénèque, *Lettres à Lucilius*, 1, 1 (vers 62-64 apr. J.-C.). Vocabulaire : *vindico* : revendiquer, réclamer ; *aufero* : emporter ; *subripio* : dérober ; *excido* : tomber, échapper ; *colligo* : recueillir ; *effluo* : s\'écouler.',
      corrige: `
        Agis ainsi, mon cher Lucilius : revendique tes droits sur toi-même, et le temps qui jusqu'à présent t'était soit enlevé, soit dérobé, soit t'échappait, recueille-le et conserve-le. Persuade-toi qu'il en est comme je te l'écris : certains moments nous sont arrachés, d'autres soustraits, d'autres s'écoulent.
      `,
      pistes: `
        ### Points de difficulté
        - *mi Lucili* : **vocatif** de *meus Lucilius* (« mon cher Lucilius »).
        - *vindica te tibi* : expression juridique, « revendique-toi pour toi-même » : reprends possession de toi.
        - *quod… auferebatur aut subripiebatur aut excidebat* : trois imparfaits, dont deux **passifs**, pour décrire une perte progressive. Garde la gradation.
        - *hoc sic esse* : proposition infinitive après *persuade tibi*.
        - *quaedam… quaedam… quaedam* : « certains… d'autres… d'autres ».

        ### Pour aller plus loin
        La lettre est un genre de **transmission** : le maître guide le disciple à distance. Rapproche ce texte de la *Lettre 6* (culture antique).
      `
    },
    {
      id: 'cesar',
      type: 'version',
      titre: 'César, *Guerre des Gaules*, I, 1',
      enonce: 'Traduis le début de la *Guerre des Gaules*.',
      lang: 'la',
      duree: 45,
      texte: `
        Gallia est omnis divisa in partes tres, quarum unam incolunt Belgae,
        aliam Aquitani, tertiam qui ipsorum lingua Celtae, nostra Galli appellantur.
        Hi omnes lingua, institutis, legibus inter se differunt.
      `,
      source: 'César, *La Guerre des Gaules*, I, 1 (vers 52 av. J.-C.). Vocabulaire : *incolo* : habiter ; *institutum, i* : institution, coutume ; *differo* : différer.',
      corrige: `
        La Gaule, dans son ensemble, est divisée en trois parties : l'une est habitée par les Belges, une autre par les Aquitains, la troisième par ceux qui, dans leur propre langue, se nomment Celtes, et dans la nôtre, Gaulois. Tous ces peuples diffèrent entre eux par la langue, les institutions et les lois.
      `,
      pistes: `
        ### Points de difficulté
        - *omnis* : « tout entière, dans son ensemble » (et non « toute Gaule »).
        - *quarum unam incolunt Belgae* : *quarum* (relatif au génitif pluriel, antécédent *partes*) ; *Belgae* est le **sujet** de *incolunt*. On peut tourner au passif en français : « l'une est habitée par les Belges ».
        - *qui ipsorum lingua Celtae, nostra Galli appellantur* : *ipsorum lingua* (dans leur propre langue) et *nostra (lingua)* (dans la nôtre) : ablatifs.
        - *lingua, institutis, legibus* : ablatifs de point de vue (« par la langue… »).
      `
    }
  ]
});
