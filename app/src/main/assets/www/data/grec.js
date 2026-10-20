/* Grec ancien : maîtrise de la langue et du français */

STUDIUM.add({
  id: 'grec',
  nom: 'Grec ancien',
  court: 'Alphabet, grammaire, version',
  icone: 'amphora',
  description: 'Maîtrise du grec ancien et du français : lecture, article, déclinaisons, verbe, premières versions.',
  epreuves: ['Exercices de langue', 'Version', 'Maîtrise du français'],
  methodes: ['version-ancienne', 'organisation'],
  conseils: `
    ### Comment progresser en grec
    - Lis du grec **à voix haute** chaque jour, même deux lignes : l'œil et l'oreille s'habituent à l'alphabet et aux accents.
    - Apprends l'**article** par cœur en premier : il indique le genre, le nombre et le cas du nom qui le suit.
    - Pour chaque verbe, note le **présent** et l'**aoriste** : *λύω → ἔλυσα*.
    - Cherche les **mots français** issus du grec : ils aident énormément à retenir le vocabulaire.
    - Fais les **cartes mémoire** un peu chaque jour.
  `,

  cours: [
    {
      id: 'alphabet',
      titre: 'Alphabet, esprits et accents',
      resume: 'Lire et translittérer',
      contenu: `
        ## L'alphabet

        | Majuscule | Minuscule | Nom | Transcription |
        |---|---|---|---|
        | Α | α | alpha | a |
        | Β | β | bêta | b |
        | Γ | γ | gamma | g (γγ, γκ = ng) |
        | Δ | δ | delta | d |
        | Ε | ε | epsilon | e (bref) |
        | Ζ | ζ | zêta | z (dz) |
        | Η | η | êta | ê (long) |
        | Θ | θ | thêta | th |
        | Ι | ι | iota | i |
        | Κ | κ | kappa | k |
        | Λ | λ | lambda | l |
        | Μ | μ | mu | m |
        | Ν | ν | nu | n |
        | Ξ | ξ | xi | x (ks) |
        | Ο | ο | omicron | o (bref) |
        | Π | π | pi | p |
        | Ρ | ρ | rhô | r (rh à l'initiale) |
        | Σ | σ, ς | sigma | s (ς en fin de mot) |
        | Τ | τ | tau | t |
        | Υ | υ | upsilon | u (y en français) |
        | Φ | φ | phi | ph |
        | Χ | χ | khi | kh (ch en français) |
        | Ψ | ψ | psi | ps |
        | Ω | ω | ôméga | ô (long) |

        :::retenir Les paires brèves / longues
        - **ε** (bref) / **η** (long) ; **ο** (bref) / **ω** (long).
        - *ο-μικρόν* : « petit o » ; *ὦ-μέγα* : « grand o ».
        :::

        ## Les esprits
        Toute voyelle (ou diphtongue) à l'initiale porte un **esprit** :
        - **esprit doux** (ἀ) : rien à prononcer → *ἀγορά*, agora ;
        - **esprit rude** (ἁ) : se prononce **h** → *ἱστορία*, historia ; *ἡ*, hê.
        - Le *ρ* initial porte toujours l'esprit rude : *ῥήτωρ*, rhêtôr (d'où « rhéteur »).

        ## Les accents
        - **Aigu** (ά), **grave** (ὰ), **circonflexe** (ᾶ). Ils marquaient une **hauteur** de voix (accent musical).
        - L'aigu sur la dernière syllabe devient **grave** devant un autre mot : *καλὸς ἀνήρ*.
        - Le **iota souscrit** (ᾳ, ῃ, ῳ) est un iota écrit sous la voyelle longue, qui ne se prononce pas : *τῷ λόγῳ*.

        ## La ponctuation
        - **;** = point d'interrogation : *τί λέγεις;* (que dis-tu ?)
        - **·** (point en haut) = point-virgule ou deux-points.

        :::exemple Entraîne-toi à translittérer
        - *φιλοσοφία* → philosophia
        - *ψυχή* → psukhê (psyché)
        - *θέατρον* → theatron
        - *ἄγγελος* → angelos (messager, d'où « ange »)
        :::
      `
    },
    {
      id: 'declinaisons',
      titre: 'L\'article et les déclinaisons',
      resume: 'Article, trois déclinaisons, adjectifs',
      contenu: `
        Le grec a **cinq cas** : nominatif, vocatif, accusatif, génitif, **datif** (qui recouvre aussi les emplois de l'ablatif latin : moyen, manière, lieu).

        ## L'article défini

        | Cas | Masc. sg | Fém. sg | Neutre sg | Masc. pl | Fém. pl | Neutre pl |
        |---|---|---|---|---|---|---|
        | Nominatif | ὁ | ἡ | τό | οἱ | αἱ | τά |
        | Accusatif | τόν | τήν | τό | τούς | τάς | τά |
        | Génitif | τοῦ | τῆς | τοῦ | τῶν | τῶν | τῶν |
        | Datif | τῷ | τῇ | τῷ | τοῖς | ταῖς | τοῖς |

        :::retenir L'article est ton meilleur allié
        Il indique le **genre**, le **nombre** et le **cas** du nom. Repère-le d'abord, le nom suivra.
        :::

        ## 1ʳᵉ déclinaison (surtout féminine)

        | Cas | ἡ τιμή (l'honneur) | ἡ χώρα (le pays) | ἡ θάλαττα (la mer) |
        |---|---|---|---|
        | Nom. sg | τιμή | χώρα | θάλαττα |
        | Acc. sg | τιμήν | χώραν | θάλατταν |
        | Gén. sg | τιμῆς | χώρας | θαλάττης |
        | Dat. sg | τιμῇ | χώρᾳ | θαλάττῃ |
        | Nom. pl | τιμαί | χῶραι | θάλατται |
        | Acc. pl | τιμάς | χώρας | θαλάττας |
        | Gén. pl | τιμῶν | χωρῶν | θαλαττῶν |
        | Dat. pl | τιμαῖς | χώραις | θαλάτταις |

        - Après **ε, ι, ρ**, l'*α* se maintient au singulier (*χώρα, χώρας*).
        - Masculins en **-ης / -ας** : *ὁ πολίτης* (le citoyen), génitif *τοῦ πολίτου*.

        ## 2ᵉ déclinaison (masculine et neutre)

        | Cas | ὁ λόγος (la parole) sg | pl | τὸ δῶρον (le don) sg | pl |
        |---|---|---|---|---|
        | Nominatif | λόγος | λόγοι | δῶρον | δῶρα |
        | Vocatif | λόγε | λόγοι | δῶρον | δῶρα |
        | Accusatif | λόγον | λόγους | δῶρον | δῶρα |
        | Génitif | λόγου | λόγων | δώρου | δώρων |
        | Datif | λόγῳ | λόγοις | δώρῳ | δώροις |

        - Comme en latin : au **neutre**, nominatif = accusatif, en **-α** au pluriel.
        - Particularité : un **sujet neutre pluriel** prend un verbe au **singulier** : *τὰ ζῷα τρέχει* (les animaux courent).

        ## 3ᵉ déclinaison
        Le radical apparaît au **génitif singulier** : on apprend toujours le nom avec son génitif.

        | Cas | ὁ φύλαξ, φύλακος (le gardien) | τὸ σῶμα, σώματος (le corps) | ἡ πόλις, πόλεως (la cité) |
        |---|---|---|---|
        | Nom. sg | φύλαξ | σῶμα | πόλις |
        | Acc. sg | φύλακα | σῶμα | πόλιν |
        | Gén. sg | φύλακος | σώματος | πόλεως |
        | Dat. sg | φύλακι | σώματι | πόλει |
        | Nom. pl | φύλακες | σώματα | πόλεις |
        | Acc. pl | φύλακας | σώματα | πόλεις |
        | Gén. pl | φυλάκων | σωμάτων | πόλεων |
        | Dat. pl | φύλαξι(ν) | σώμασι(ν) | πόλεσι(ν) |

        ## Les adjectifs
        - **ἀγαθός, ἀγαθή, ἀγαθόν** (bon) : se décline sur *λόγος / τιμή / δῶρον*.
        - **Position de l'adjectif** :
          - *ὁ ἀγαθὸς ἀνήρ* ou *ὁ ἀνὴρ ὁ ἀγαθός* : l'homme bon (épithète, entre article et nom) ;
          - *ἀγαθὸς ὁ ἀνήρ* : l'homme **est** bon (attribut, hors du groupe article-nom).
      `
    },
    {
      id: 'verbe',
      titre: 'Le verbe : λύω et εἰμί',
      resume: 'Présent, imparfait, futur, aoriste, être',
      contenu: `
        Le verbe modèle est **λύω** (délier, libérer). Le grec distingue des temps (passé, présent, futur) mais surtout des **aspects** :
        - le **présent** / **imparfait** : action vue dans sa **durée** ;
        - l'**aoriste** : action vue **globalement**, comme un point, sans considération de durée ;
        - le **parfait** : **résultat** présent d'une action passée.

        ## L'indicatif actif de λύω

        | Personne | Présent | Imparfait | Futur | Aoriste |
        |---|---|---|---|---|
        | 1 sg | λύω | ἔλυον | λύσω | ἔλυσα |
        | 2 sg | λύεις | ἔλυες | λύσεις | ἔλυσας |
        | 3 sg | λύει | ἔλυε(ν) | λύσει | ἔλυσε(ν) |
        | 1 pl | λύομεν | ἐλύομεν | λύσομεν | ἐλύσαμεν |
        | 2 pl | λύετε | ἐλύετε | λύσετε | ἐλύσατε |
        | 3 pl | λύουσι(ν) | ἔλυον | λύσουσι(ν) | ἔλυσαν |

        :::retenir L'augment
        Aux temps du **passé de l'indicatif** (imparfait, aoriste), le verbe prend un **augment** : *ἐ-* devant consonne (*ἔ-λυον*), allongement de la voyelle initiale devant voyelle (*ἄγω → ἦγον*). Pas d'augment hors de l'indicatif !
        :::

        - Le **futur** et l'**aoriste** sigmatique ajoutent un **σ** : *λύ-σ-ω*, *ἔ-λυ-σ-α*.
        - Le **parfait** redouble la consonne initiale : *λέ-λυκα* (j'ai délié).

        ## Le moyen-passif (présent)
        *λύομαι, λύῃ (λύει), λύεται, λυόμεθα, λύεσθε, λύονται*
        - Sens **passif** : je suis délié.
        - Sens **moyen** : je délie pour moi, dans mon intérêt (*λύομαι* : je rachète, je délivre contre rançon).

        ## Infinitifs et participes
        - Infinitifs actifs : *λύειν* (présent), *λύσειν* (futur), *λῦσαι* (aoriste), *λελυκέναι* (parfait).
        - Participe présent actif : *λύων, λύουσα, λῦον* (déliant).

        ## Le verbe être : εἰμί

        | Personne | Présent | Imparfait | Futur |
        |---|---|---|---|
        | 1 sg | εἰμί | ἦ (ἦν) | ἔσομαι |
        | 2 sg | εἶ | ἦσθα | ἔσῃ |
        | 3 sg | ἐστί(ν) | ἦν | ἔσται |
        | 1 pl | ἐσμέν | ἦμεν | ἐσόμεθα |
        | 2 pl | ἐστέ | ἦτε | ἔσεσθε |
        | 3 pl | εἰσί(ν) | ἦσαν | ἔσονται |

        - Infinitif : *εἶναι* ; participe : *ὤν, οὖσα, ὄν* (étant). D'où le français « ontologie ».

        ## Quelques outils de syntaxe
        - **μέν… δέ…** : d'un côté… de l'autre ; tantôt… tantôt. À traduire souvent par un simple contraste : *οἱ μὲν… οἱ δὲ…* : les uns… les autres.
        - **Négations** : *οὐ* (οὐκ, οὐχ) pour les faits ; *μή* pour l'ordre, la volonté, l'hypothèse.
        - **Génitif absolu** : équivalent de l'ablatif absolu latin → *τοῦ στρατηγοῦ λέγοντος* : pendant que le général parlait.
        - **Article + infinitif** = nom : *τὸ φιλοσοφεῖν* (le fait de philosopher).
      `
    }
  ],

  quiz: [
    {
      id: 'alphabet',
      titre: 'Alphabet et translittération',
      questions: [
        { q: 'Translittère *λόγος*.', c: ['logos', 'lagos', 'loros', 'logas'], r: 0 },
        { q: 'Quelle lettre note le **ê long** ?', c: ['η', 'ε', 'ι', 'υ'], r: 0, e: 'ε est le e bref (epsilon), η le ê long (êta).' },
        { q: 'Comment translittérer *ψυχή* ?', c: ['psukhê', 'phusikê', 'tukhê', 'psuchô'], r: 0, e: 'ψ = ps, υ = u, χ = kh, η = ê. En français : psyché.' },
        { q: 'Quand écrit-on **ς** plutôt que σ ?', c: ['en fin de mot', 'en début de mot', 'devant une voyelle', 'jamais en grec classique'], r: 0 },
        { q: 'L\'esprit rude (ἁ) se prononce…', c: ['h', 'rien', 'a long', 'r'], r: 0, e: '*ἱστορία* → historia.' },
        { q: '*θέατρον* se translittère…', c: ['theatron', 'teatron', 'phéatron', 'theatrôn'], r: 0 },
        { q: 'En grec, le signe **;** marque…', c: ['une question', 'un point-virgule', 'une pause', 'une citation'], r: 0 },
        { q: 'Dans *ἄγγελος*, le groupe **γγ** se prononce…', c: ['ng', 'gg', 'gu', 'j'], r: 0, e: 'Angelos : le messager, d\'où « ange ».' },
        { q: 'Le iota souscrit (ῳ)…', c: ['s\'écrit sous une voyelle longue et ne se prononce pas', 'marque une question', 'indique l\'accent', 'remplace l\'esprit doux'], r: 0 },
        { q: 'Quelle lettre se translittère **ph** ?', c: ['φ', 'π', 'ψ', 'θ'], r: 0 }
      ]
    },
    {
      id: 'declinaisons',
      titre: 'Article et déclinaisons',
      questions: [
        { q: '*τοῖς* est un…', c: ['datif pluriel masculin ou neutre', 'génitif singulier', 'accusatif pluriel', 'nominatif pluriel'], r: 0, grc: true },
        { q: '*τῆς* est un…', c: ['génitif singulier féminin', 'datif singulier féminin', 'nominatif pluriel', 'accusatif singulier'], r: 0 },
        { q: '*λόγου* est au…', c: ['génitif singulier', 'datif singulier', 'nominatif pluriel', 'accusatif pluriel'], r: 0 },
        { q: '*τὰ δῶρα* peut être…', c: ['nominatif ou accusatif pluriel', 'génitif pluriel', 'datif singulier', 'nominatif singulier'], r: 0, e: 'Neutre pluriel : nominatif = accusatif, en -α.' },
        { q: '*πόλεως* est…', c: ['le génitif singulier de πόλις', 'le nominatif pluriel', 'le datif singulier', 'un accusatif'], r: 0 },
        { q: '*σώματι* est au…', c: ['datif singulier', 'génitif singulier', 'accusatif pluriel', 'nominatif singulier'], r: 0 },
        { q: '*τῷ* est un…', c: ['datif singulier masculin ou neutre', 'génitif pluriel', 'accusatif singulier', 'nominatif pluriel'], r: 0 },
        { q: 'Comment dit-on « l\'homme **est** bon » ?', c: ['ἀγαθὸς ὁ ἀνήρ', 'ὁ ἀγαθὸς ἀνήρ', 'ὁ ἀνὴρ ὁ ἀγαθός', 'τοῦ ἀγαθοῦ ἀνδρός'], r: 0, e: 'Hors du groupe article-nom, l\'adjectif est **attribut**.' },
        { q: '*τὰ ζῷα τρέχει* : pourquoi le verbe est-il au singulier ?', c: ['un sujet neutre pluriel prend un verbe au singulier', 'c\'est une faute', 'le verbe est impersonnel', 'ζῷα est singulier'], r: 0 },
        { q: 'Quel cas grec remplit aussi les fonctions de l\'ablatif latin ?', c: ['le datif', 'le génitif', 'l\'accusatif', 'le vocatif'], r: 0 }
      ]
    },
    {
      id: 'verbe',
      titre: 'Le verbe',
      questions: [
        { q: '*ἔλυσαν* est…', c: ['un aoriste, 3ᵉ pers. du pluriel', 'un imparfait, 3ᵉ pers. du pluriel', 'un futur', 'un présent'], r: 0, e: 'Augment ἐ- + σ + désinence -αν.' },
        { q: '*λύσομεν* est…', c: ['un futur, 1ʳᵉ pers. du pluriel', 'un aoriste', 'un présent', 'un imparfait'], r: 0, e: 'Le σ sans augment : futur.' },
        { q: '*ἔλυον* peut être…', c: ['1ʳᵉ pers. du singulier ou 3ᵉ pers. du pluriel de l\'imparfait', 'seulement 3ᵉ pers. du pluriel', 'un aoriste', 'un participe'], r: 0 },
        { q: 'L\'augment marque…', c: ['le passé, à l\'indicatif seulement', 'le futur', 'le pluriel', 'le passif'], r: 0 },
        { q: 'L\'aoriste exprime d\'abord…', c: ['un aspect global, ponctuel', 'une action qui dure', 'un résultat présent', 'une habitude'], r: 0 },
        { q: '*ἐστί* signifie…', c: ['il est', 'ils sont', 'il était', 'tu es'], r: 0 },
        { q: '*ἦσαν* signifie…', c: ['ils étaient', 'ils sont', 'ils seront', 'qu\'ils soient'], r: 0 },
        { q: '*λῦσαι* est…', c: ['l\'infinitif aoriste actif', 'l\'infinitif présent', 'un impératif', 'un futur'], r: 0 },
        { q: 'Quelle négation emploie-t-on pour un ordre ou une hypothèse ?', c: ['μή', 'οὐ', 'οὐκ', 'οὐχ'], r: 0 },
        { q: 'Le génitif absolu correspond en latin à…', c: ['l\'ablatif absolu', 'la proposition infinitive', 'le gérondif', 'le cum historique'], r: 0 }
      ]
    },
    {
      id: 'mots',
      titre: 'Mots grecs dans le français',
      questions: [
        { q: '« Démocratie » vient de…', c: ['δῆμος (peuple) + κράτος (pouvoir)', 'δαίμων + κρίνω', 'δῶρον + κράτος', 'δέμας + ἀρχή'], r: 0 },
        { q: '« Bibliothèque » vient de…', c: ['βιβλίον (livre) + θήκη (coffre, dépôt)', 'βίος (vie) + θεός', 'βιβλίον + θέατρον', 'βία (force) + θήκη'], r: 0 },
        { q: '« École » vient du grec *σχολή*, qui signifie d\'abord…', c: ['le loisir', 'le travail', 'le maître', 'la discipline'], r: 0, e: 'L\'étude est l\'occupation de l\'homme libre, qui a du **loisir**.' },
        { q: '« Économie » vient de…', c: ['οἶκος (maison) + νόμος (règle)', 'οἶνος + νόμος', 'οἶκος + νοῦς', 'εἰκών + νόμος'], r: 0 },
        { q: '« Chronologie » vient de…', c: ['χρόνος (temps) + λόγος (discours)', 'χρῶμα + λόγος', 'χείρ + λόγος', 'χορός + λόγος'], r: 0 },
        { q: '« Théâtre » vient d\'un verbe qui signifie…', c: ['regarder', 'jouer', 'chanter', 'parler'], r: 0, e: '*θεάομαι* : contempler ; le théâtre est le lieu d\'où l\'on regarde.' },
        { q: '« Hippodrome » vient de…', c: ['ἵππος (cheval) + δρόμος (course)', 'ὕπνος + δρόμος', 'ἵππος + δῶμα', 'ὑπό + δρόμος'], r: 0 },
        { q: '« Pédagogue » : le *παιδαγωγός* était…', c: ['l\'esclave qui conduisait l\'enfant à l\'école', 'le maître d\'école', 'un philosophe', 'un médecin'], r: 0 },
        { q: '« Géographie » vient de…', c: ['γῆ (terre) + γράφω (écrire, dessiner)', 'γένος + γράφω', 'γῆ + γράμμα seulement', 'γέρων + γράφω'], r: 0 },
        { q: '« Mnémotechnique » contient…', c: ['μνήμη (mémoire) + τέχνη (art)', 'μῆνις + τέχνη', 'μόνος + τέχνη', 'μνῆμα + τόπος'], r: 0 }
      ]
    }
  ],

  cartes: [
    {
      id: 'vocab',
      titre: 'Vocabulaire essentiel',
      grc: true,
      cartes: [
        ['ὁ ἄνθρωπος', 'l\'être humain'],
        ['ὁ ἀνήρ, ἀνδρός', 'l\'homme (mâle), le mari'],
        ['ἡ γυνή, γυναικός', 'la femme, l\'épouse'],
        ['ὁ / ἡ παῖς, παιδός', 'l\'enfant'],
        ['ὁ θεός', 'le dieu'],
        ['ἡ πόλις, πόλεως', 'la cité'],
        ['ὁ δῆμος', 'le peuple ; le dème'],
        ['ὁ νόμος', 'la loi, l\'usage'],
        ['ὁ λόγος', 'la parole, le discours, la raison'],
        ['ἡ ψυχή', 'l\'âme, le souffle vital'],
        ['τὸ σῶμα, σώματος', 'le corps'],
        ['ὁ χρόνος', 'le temps'],
        ['ὁ βίος', 'la vie, le genre de vie'],
        ['ἡ ἀρετή', 'l\'excellence, la vertu'],
        ['ἡ δίκη', 'la justice ; le procès'],
        ['ἡ ἀλήθεια', 'la vérité'],
        ['ἡ δόξα', 'l\'opinion ; la gloire'],
        ['ἡ ἐπιστήμη', 'la science, le savoir'],
        ['ἡ τέχνη', 'l\'art, le savoir-faire'],
        ['ἡ σοφία', 'la sagesse, le savoir'],
        ['ἡ φύσις', 'la nature'],
        ['ὁ κόσμος', 'l\'ordre ; le monde ; la parure'],
        ['τὸ ἔργον', 'l\'œuvre, l\'action'],
        ['ὁ πόλεμος', 'la guerre'],
        ['ἡ εἰρήνη', 'la paix'],
        ['ὁ οἶκος', 'la maison, la maisonnée'],
        ['ὁ ξένος', 'l\'étranger ; l\'hôte'],
        ['ὁ βασιλεύς, βασιλέως', 'le roi'],
        ['τὸ κλέος', 'la gloire, la renommée'],
        ['ὁ μῦθος', 'la parole ; le récit, le mythe'],
        ['ἡ ἱστορία', 'l\'enquête ; le récit de l\'enquête'],
        ['ἡ παιδεία', 'l\'éducation, la culture'],
        ['ἡ μνήμη', 'la mémoire, le souvenir'],
        ['λέγω', 'dire'],
        ['γράφω', 'écrire, dessiner'],
        ['οἶδα', 'je sais (parfait à sens présent)'],
        ['γιγνώσκω', 'connaître, apprendre à connaître'],
        ['μανθάνω', 'apprendre (aor. ἔμαθον)'],
        ['διδάσκω', 'enseigner'],
        ['ὁράω', 'voir'],
        ['ἀκούω', 'entendre, écouter'],
        ['ἔχω', 'avoir, tenir'],
        ['ποιέω', 'faire, créer'],
        ['πράττω', 'agir, accomplir'],
        ['βούλομαι', 'vouloir'],
        ['δύναμαι', 'pouvoir'],
        ['καί', 'et ; aussi, même'],
        ['γάρ', 'car (2ᵉ place)'],
        ['οὖν', 'donc (2ᵉ place)'],
        ['ἀλλά', 'mais'],
        ['ὅτι', 'que ; parce que'],
        ['ὡς', 'comme ; que ; afin que']
      ]
    }
  ],

  sujets: [
    {
      id: 'maximes',
      type: 'phrases',
      lang: 'grc',
      titre: 'Maximes et phrases célèbres',
      enonce: 'Translittère puis traduis chaque phrase.',
      items: [
        { q: 'γνῶθι σεαυτόν.', r: '*gnôthi seauton* — Connais-toi toi-même.', e: 'Maxime inscrite au temple d\'Apollon à Delphes. *γνῶθι* : impératif aoriste de *γιγνώσκω*.' },
        { q: 'μηδὲν ἄγαν.', r: '*mêden agan* — Rien de trop.', e: 'Autre maxime de Delphes. *μηδέν* : rien (négation μή, car c\'est un conseil).' },
        { q: 'ὁ ἄνθρωπος φύσει πολιτικὸν ζῷον.', r: 'L\'homme est par nature un animal politique.', e: 'Aristote, *Politique*, I, 2. *φύσει* : datif de manière, « par nature ». Verbe *être* sous-entendu.' },
        { q: 'ἓν οἶδα ὅτι οὐδὲν οἶδα.', r: 'Je ne sais qu\'une chose, c\'est que je ne sais rien.', e: 'Formule traditionnellement attribuée à Socrate. *ἕν* : une seule chose.' },
        { q: 'Πάντες ἄνθρωποι τοῦ εἰδέναι ὀρέγονται φύσει.', r: 'Tous les hommes désirent naturellement savoir.', e: 'Aristote, *Métaphysique*, A, 1. *τοῦ εἰδέναι* : infinitif substantivé au génitif (complément de *ὀρέγονται*, « aspirer à »).' },
        { q: 'ὁ λόγος ἐστὶ καλός.', r: 'Le discours est beau.', e: 'Adjectif attribut : hors du groupe article-nom.' },
        { q: 'οἱ πολῖται τὸν νόμον φυλάττουσιν.', r: 'Les citoyens gardent (respectent) la loi.', e: '*τὸν νόμον* : accusatif, COD.' },
        { q: 'ὁ διδάσκαλος τοὺς παῖδας διδάσκει.', r: 'Le maître instruit les enfants.', e: '*τοὺς παῖδας* : accusatif pluriel de *ὁ παῖς*.' },
        { q: 'χαλεπὰ τὰ καλά.', r: 'Les belles choses sont difficiles.', e: 'Proverbe cité par Platon. Adjectif attribut placé en tête ; neutre pluriel.' },
        { q: 'πάθει μάθος.', r: 'Apprendre par l\'épreuve (la souffrance enseigne).', e: 'Eschyle, *Agamemnon*, 177. *πάθει* : datif de moyen.' }
      ]
    },
    {
      id: 'anabase',
      type: 'version',
      titre: 'Xénophon, *Anabase*, I, 1, 1',
      enonce: 'Traduis le début de l\'*Anabase*, le récit de l\'expédition des Dix Mille.',
      lang: 'grc',
      duree: 40,
      texte: `
        Δαρείου καὶ Παρυσάτιδος γίγνονται παῖδες δύο,
        πρεσβύτερος μὲν Ἀρταξέρξης, νεώτερος δὲ Κῦρος.
        ἐπεὶ δὲ ἠσθένει Δαρεῖος καὶ ὑπώπτευε τελευτὴν τοῦ βίου,
        ἐβούλετο τὼ παῖδε ἀμφοτέρω παρεῖναι.
      `,
      source: 'Xénophon, *Anabase*, I, 1, 1 (IVᵉ s. av. J.-C.). Vocabulaire : *γίγνομαι* : naître ; *πρεσβύτερος* : plus âgé ; *ἀσθενέω* : être malade ; *ὑποπτεύω* : soupçonner ; *ἡ τελευτή* : la fin ; *πάρειμι* : être présent. *τὼ παῖδε ἀμφοτέρω* est un **duel** (forme pour deux personnes).',
      corrige: `
        De Darius et de Parysatis naissent deux enfants : l'aîné, Artaxerxès, et le cadet, Cyrus. Comme Darius était malade et pressentait la fin de sa vie, il voulut avoir ses deux fils auprès de lui.
      `,
      pistes: `
        ### Points de difficulté
        - *Δαρείου καὶ Παρυσάτιδος* : génitifs d'origine (« de Darius et de Parysatis ») placés en tête.
        - *γίγνονται* : **présent de narration** ; on peut le garder en français (« naissent ») ou passer au passé simple.
        - *μὲν… δέ* : opposition entre l'aîné et le cadet.
        - *ἐπεὶ* + imparfaits : circonstance qui dure (« comme il était malade »).
        - *ἐβούλετο τὼ παῖδε ἀμφοτέρω παρεῖναι* : proposition infinitive ; *τὼ παῖδε ἀμφοτέρω* est un **duel** à l'accusatif (« ses deux enfants »).
      `
    },
    {
      id: 'renard',
      type: 'version',
      titre: 'Ésope, *Le Renard et les raisins*',
      enonce: 'Traduis cette fable d\'Ésope, que La Fontaine a reprise (*Le Renard et les Raisins*, III, 11).',
      lang: 'grc',
      duree: 45,
      texte: `
        Ἀλώπηξ λιμώττουσα, ὡς ἐθεάσατο ἀπό τινος ἀναδενδράδος βότρυας κρεμαμένους,
        ἠβουλήθη αὐτῶν περιγενέσθαι καὶ οὐκ ἠδύνατο.
        Ἀπαλλαττομένη δὲ πρὸς ἑαυτὴν εἶπεν· « Ὄμφακές εἰσιν. »
        Οὕτω καὶ τῶν ἀνθρώπων ἔνιοι τῶν πραγμάτων ἐφικέσθαι μὴ δυνάμενοι
        δι᾽ ἀσθένειαν τοὺς καιροὺς αἰτιῶνται.
      `,
      source: 'Ésope, *Fables*. Vocabulaire : *ἡ ἀλώπηξ* : la renarde ; *λιμώττω* : avoir faim ; *θεάομαι* : voir ; *ἡ ἀναδενδράς* : la vigne grimpante, la treille ; *ὁ βότρυς* : la grappe ; *κρέμαμαι* : être suspendu ; *περιγίγνομαι* + gén. : venir à bout de ; *ἀπαλλάττομαι* : s\'en aller ; *ὁ ὄμφαξ* : raisin vert ; *ἐφικνέομαι* + gén. : atteindre ; *ὁ καιρός* : la circonstance ; *αἰτιάομαι* : accuser.',
      corrige: `
        Une renarde affamée, voyant des grappes de raisin suspendues à une treille, voulut s'en emparer et n'y parvint pas. En s'éloignant, elle se dit à elle-même : « Ils sont trop verts. » De même, certains hommes, incapables par faiblesse de venir à bout de leurs affaires, en accusent les circonstances.
      `,
      pistes: `
        ### Points de difficulté
        - *λιμώττουσα* : participe présent féminin apposé au sujet (« affamée »).
        - *ὡς ἐθεάσατο* : *ὡς* + indicatif aoriste = « lorsque, comme » ; *βότρυας κρεμαμένους* : participe accordé à l'accusatif (« des grappes suspendues »).
        - *αὐτῶν περιγενέσθαι* : *περιγίγνομαι* se construit avec le **génitif**.
        - *Ἀπαλλαττομένη* : participe présent moyen, « en s'en allant ».
        - La **morale** commence par *Οὕτω καί* : « de même ». *μὴ δυνάμενοι* : participe à valeur causale ou concessive, d'où la négation *μή*.
        - Compare avec La Fontaine : « Ils sont trop verts, dit-il, et bons pour des goujats. »
      `
    }
  ]
});
