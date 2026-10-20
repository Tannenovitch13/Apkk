/* Anglais presse : commentaire et synthèse de corpus */

STUDIUM.add({
  id: 'anglais-presse',
  nom: 'Anglais presse',
  court: 'Commentary, synthesis',
  icone: 'newspaper',
  description: 'Commenter un article de presse et rédiger une synthèse de documents, en anglais.',
  epreuves: ['Commentaire d\'article', 'Synthèse de corpus'],
  methodes: ['commentary', 'synthesis', 'kholle'],
  conseils: `
    ### How to improve
    - **Read the press every week**: *The Guardian*, *The Economist*, *The New York Times*, *BBC News*. Pick 3 to 5 articles and write down 10 new words each time.
    - Keep a **vocabulary notebook** organised by topic (politics, environment, technology, society).
    - Learn **useful phrases** for introductions, transitions and conclusions by heart.
    - **Listen** too: BBC Radio 4, podcasts. Understanding the context makes commentaries richer.
  `,

  cours: [
    {
      id: 'vocab-presse',
      titre: 'The language of the press',
      resume: 'Types of articles, headlines, reporting verbs',
      contenu: `
        ## Types of newspapers and articles
        - **Broadsheet** (quality paper: *The Times*, *The Guardian*) / **tabloid** (popular paper: *The Sun*, *Daily Mail*).
        - **Editorial** (*leader*): the opinion of the newspaper itself.
        - **Op-ed** / **column**: the opinion of a writer (*a columnist*).
        - **Report** / **news story**: factual account; **feature**: in-depth article.
        - **Headline**, **subheading**, **byline** (the author's name), **lead** (*chapô*, first paragraph).
        - **Circulation** (*tirage*), **readership** (*lectorat*), **paywall**, **fact-checking**, **fake news**, **clickbait**.

        :::astuce Headlinese
        Headlines use a special grammar: **present simple** for past events (*PM resigns*), **infinitive** for the future (*Queen to visit Paris*), **past participle** for the passive (*Two arrested after riot*), no articles.
        :::

        ## Reporting verbs (instead of *says*)
        | To present | To agree / criticise | To insist |
        |---|---|---|
        | state, explain, report | approve of, praise, support | stress, emphasise |
        | point out, note | criticise, condemn, denounce | underline, highlight |
        | claim, contend, argue | deplore, blame sb for sth | insist on, maintain |
        | suggest, imply | question, challenge | warn (against) |

        - **Constructions**: *He **accuses** the government **of** lying* ; *She **blames** the crisis **on** the banks* ; *They **warn** us **against**…*

        ## Describing the tone
        *critical, ironic, sarcastic, humorous, alarmist, pessimistic, optimistic, neutral, balanced, biased, indignant, nostalgic, militant, polemical.*
      `
    },
    {
      id: 'connecteurs',
      titre: 'Linking words and useful phrases',
      resume: 'Structure your ideas in English',
      contenu: `
        ## Linking words
        | Function | Linking words |
        |---|---|
        | Addition | moreover, furthermore, in addition, besides, what is more |
        | Contrast | however, yet, nevertheless, on the other hand, whereas, while |
        | Concession | although + clause, even though, despite / in spite of + noun or -ing, admittedly |
        | Cause | because, since, as, owing to, due to (+ noun) |
        | Consequence | therefore, thus, hence, consequently, as a result, so |
        | Example | for instance, for example, such as, namely |
        | Conclusion | to sum up, all in all, in the end, ultimately |

        :::attention Common traps
        - **Although** + clause : *Although it was late, …* — **despite** + noun / -ing : *Despite the rain…*, *Despite being tired…* (never *despite of*).
        - **Whereas** marks a contrast between two facts: *The UK left the EU, whereas Ireland stayed.*
        - **Actually** = en fait (not *actuellement* = currently).
        :::

        ## Useful phrases
        ### Introduction
        - *This article, published in* The Guardian *on 12 May 2025, deals with…*
        - *The journalist focuses on… / sheds light on…*
        - *This raises the question of whether…*
        - *We will first analyse…, then…, before wondering…*

        ### Analysis
        - *The author **seems to** suggest that…*
        - *This **is reminiscent of**… / This **echoes**…*
        - *It is **worth noting** that…*
        - *The use of figures **aims at** convincing the reader…*

        ### Conclusion
        - *All in all, the article shows that…*
        - *This issue is likely to remain at the heart of the debate…*
      `
    },
    {
      id: 'civilisation',
      titre: 'UK and US institutions',
      resume: 'Key facts for cultural references',
      contenu: `
        ## The United Kingdom
        - A **constitutional monarchy** with a **parliamentary** system and **no single written constitution**.
        - **King Charles III** (since 2022) is the head of state; the **Prime Minister** leads the government.
        - **Parliament** (Westminster):
          - the **House of Commons**: 650 elected **MPs**, chaired by the **Speaker**;
          - the **House of Lords**: appointed members, can delay but not block most laws.
        - Elections: **first-past-the-post** system (the candidate with the most votes wins the constituency).
        - Main parties: **Labour**, **the Conservatives** (Tories), the **Liberal Democrats**, the **SNP** (Scotland), **Reform UK**.
        - **Devolution** (1998-1999): Scotland, Wales and Northern Ireland have their own parliaments or assemblies.
        - **Brexit**: referendum on 23 June **2016**; the UK left the EU on 31 January **2020**.
        - The **NHS** (National Health Service, 1948): free healthcare, a national symbol.

        ## The United States
        - A **federal republic** of **50 states**, founded on the **Constitution** (1787) and the **Bill of Rights** (the first ten amendments, 1791).
        - **Separation of powers** and **checks and balances**:
          - **Congress** (legislative): the **House of Representatives** (435 members, elected every two years) and the **Senate** (100 senators, two per state, six-year terms);
          - the **President** (executive): elected for four years, two terms maximum, by the **Electoral College** (538 electors, 270 needed);
          - the **Supreme Court** (judicial): nine justices appointed for life.
        - **Midterms**: elections in the middle of the presidential term.
        - Key notions: **First Amendment** (freedom of speech, religion, press), **Second Amendment** (right to bear arms), **filibuster**, **gerrymandering**, **lobbying**.
        - Two main parties: **Democrats** and **Republicans** (the GOP).
      `
    },
    {
      id: 'grammaire',
      titre: 'Grammar: common mistakes',
      resume: 'Les erreurs des francophones à éviter',
      contenu: `
        ## Tenses
        - **Present perfect** for an action that started in the past and continues: *I **have lived** here **for** ten years* (j'habite ici depuis dix ans). Never *I live here since…*
        - **For** + duration (*for ten years*) / **since** + starting point (*since 2015*).
        - **Preterit** with a finished time marker: *He **left** yesterday / in 2019 / two days ago.*

        ## Articles
        - No article for general notions: ***Society** is changing, **Nature** is fragile, **Unemployment** is rising.*
        - **The** + specific reference: *the society of the 1950s*.
        - Countries: *France, Britain*, but ***the** United Kingdom, **the** United States, **the** Netherlands*.

        ## Uncountable nouns
        *information, advice, news, evidence, research, furniture, progress, knowledge* → no plural, no *a*: ***some** information*, ***a piece of** advice*, *the news **is** good*.

        ## Constructions
        - *It depends **on***, *to discuss **sth*** (no *about*), *to explain **sth to sb***, *to listen **to***, *to wait **for***.
        - *Although* + clause ; *despite* + noun.
        - *People **are***, *the police **are***.
        - *Make* vs *do*: *make a decision, make a mistake* / *do one's homework, do research*.
      `
    }
  ],

  quiz: [
    {
      id: 'vocab',
      titre: 'Press vocabulary',
      questions: [
        { q: 'An article expressing the opinion of the newspaper itself is…', c: ['an editorial', 'a feature', 'a report', 'a byline'], r: 0 },
        { q: 'The line giving the author\'s name is the…', c: ['byline', 'headline', 'lead', 'caption'], r: 0 },
        { q: '« Tirage » (number of copies sold) is…', c: ['circulation', 'readership', 'audience', 'printing'], r: 0 },
        { q: 'A popular newspaper with sensational stories is a…', c: ['tabloid', 'broadsheet', 'quality paper', 'weekly'], r: 0 },
        { q: 'In headlines, *Queen to visit Paris* refers to…', c: ['the future', 'the past', 'the present', 'an order'], r: 0 },
        { q: '*To point out* means…', c: ['souligner, faire remarquer', 'montrer du doigt seulement', 'critiquer', 'nier'], r: 0 },
        { q: '*She blames the crisis … the banks.*', c: ['on', 'to', 'for', 'at'], r: 0, e: '*Blame sth on sb* / *blame sb for sth*.' },
        { q: 'A biased article is…', c: ['partial, not objective', 'well-informed', 'long', 'ironic'], r: 0 },
        { q: 'An op-ed is written by…', c: ['an outside writer or columnist', 'the editor only', 'a reader', 'a press agency'], r: 0 },
        { q: '*He accuses the government … lying.*', c: ['of', 'for', 'about', 'to'], r: 0 }
      ]
    },
    {
      id: 'connecteurs',
      titre: 'Linking words',
      questions: [
        { q: '… the rain, the march went ahead.', c: ['Despite', 'Although', 'Despite of', 'However'], r: 0, e: '*Despite* + noun ; *although* + clause.' },
        { q: '… it was late, they kept on working.', c: ['Although', 'Despite', 'In spite of', 'Whereas'], r: 0 },
        { q: 'Which word expresses a consequence?', c: ['therefore', 'whereas', 'although', 'besides'], r: 0 },
        { q: '*Actually* means…', c: ['en fait', 'actuellement', 'activement', 'en effet, donc'], r: 0 },
        { q: 'The UK left the EU, … Ireland stayed.', c: ['whereas', 'therefore', 'moreover', 'thus'], r: 0 },
        { q: 'Which phrase introduces an example?', c: ['for instance', 'all in all', 'hence', 'yet'], r: 0 },
        { q: '*Furthermore* is used to…', c: ['add an idea', 'oppose two ideas', 'conclude', 'express a cause'], r: 0 },
        { q: '*Owing to* is followed by…', c: ['a noun', 'a clause with a verb', 'an infinitive', 'nothing'], r: 0 }
      ]
    },
    {
      id: 'institutions',
      titre: 'UK and US institutions',
      questions: [
        { q: 'How many members sit in the US Senate?', c: ['100', '435', '538', '50'], r: 0 },
        { q: 'How many justices sit on the US Supreme Court?', c: ['9', '7', '12', '15'], r: 0 },
        { q: 'How many electors are there in the Electoral College?', c: ['538', '435', '270', '100'], r: 0, e: '270 are needed to win.' },
        { q: 'The first ten amendments to the US Constitution are called…', c: ['the Bill of Rights', 'the Declaration of Independence', 'the Federalist Papers', 'the Magna Carta'], r: 0 },
        { q: 'The British MPs sit in…', c: ['the House of Commons', 'the House of Lords', 'the Senate', 'Congress'], r: 0 },
        { q: 'The Brexit referendum took place in…', c: ['2016', '2020', '2019', '2014'], r: 0 },
        { q: 'The UK left the EU on…', c: ['31 January 2020', '23 June 2016', '1 January 2019', '29 March 2019'], r: 0 },
        { q: 'The NHS was created in…', c: ['1948', '1918', '1968', '1997'], r: 0 },
        { q: 'Drawing electoral districts to favour a party is…', c: ['gerrymandering', 'filibustering', 'lobbying', 'canvassing'], r: 0 },
        { q: 'The British electoral system is called…', c: ['first-past-the-post', 'proportional representation', 'the Electoral College', 'the run-off system'], r: 0 }
      ]
    },
    {
      id: 'erreurs',
      titre: 'Common mistakes',
      questions: [
        { q: 'J\'habite ici depuis dix ans.', c: ['I have lived here for ten years.', 'I live here since ten years.', 'I am living here since ten years.', 'I lived here for ten years.'], r: 0 },
        { q: 'Choose the correct sentence.', c: ['The news is good.', 'The news are good.', 'The new is good.', 'A news is good.'], r: 0 },
        { q: 'Choose the correct sentence.', c: ['We discussed the issue.', 'We discussed about the issue.', 'We discussed of the issue.', 'We discussed on the issue.'], r: 0 },
        { q: 'Choose the correct sentence.', c: ['Unemployment is rising.', 'The unemployment is rising in general.', 'An unemployment is rising.', 'Unemployments are rising.'], r: 0 },
        { q: 'Choose the correct sentence.', c: ['She gave me some advice.', 'She gave me an advice.', 'She gave me advices.', 'She gave me a advice.'], r: 0 },
        { q: 'Choose the correct sentence.', c: ['It depends on the context.', 'It depends of the context.', 'It depends from the context.', 'It depends the context.'], r: 0 },
        { q: 'Choose the correct sentence.', c: ['The police are investigating.', 'The police is investigating.', 'The polices are investigating.', 'A police is investigating.'], r: 0 },
        { q: 'He … yesterday.', c: ['left', 'has left', 'has been leaving', 'leaves'], r: 0, e: 'Finished time marker → preterit.' },
        { q: 'Choose the correct sentence.', c: ['They made a decision.', 'They did a decision.', 'They took a decision of.', 'They made decision.'], r: 0 },
        { q: 'Choose the correct sentence.', c: ['I have known her since 2015.', 'I know her since 2015.', 'I have known her for 2015.', 'I knew her since 2015.'], r: 0 }
      ]
    }
  ],

  cartes: [
    {
      id: 'vocab',
      titre: 'Press and politics vocabulary',
      cartes: [
        ['headline', 'le gros titre'],
        ['byline', 'la signature de l\'article'],
        ['editorial / leader', 'l\'éditorial'],
        ['columnist', 'le chroniqueur'],
        ['circulation', 'le tirage'],
        ['readership', 'le lectorat'],
        ['paywall', 'l\'accès payant'],
        ['to break the news', 'annoncer la nouvelle'],
        ['a scoop', 'une exclusivité'],
        ['press freedom', 'la liberté de la presse'],
        ['a whistleblower', 'un lanceur d\'alerte'],
        ['a landslide victory', 'une victoire écrasante'],
        ['a swing state', 'un État pivot (US)'],
        ['a turnout', 'un taux de participation'],
        ['to run for office', 'se présenter à une élection'],
        ['a ballot', 'un bulletin de vote ; un scrutin'],
        ['a bill', 'un projet de loi'],
        ['to pass a law', 'voter une loi'],
        ['to repeal', 'abroger'],
        ['the welfare state', 'l\'État-providence'],
        ['unemployment', 'le chômage'],
        ['inequality', 'les inégalités'],
        ['a stakeholder', 'une partie prenante'],
        ['a trade-off', 'un compromis, un arbitrage'],
        ['a backlash', 'un retour de bâton, une réaction hostile'],
        ['to tackle an issue', 's\'attaquer à un problème'],
        ['a breakthrough', 'une avancée décisive'],
        ['a threat', 'une menace'],
        ['global warming', 'le réchauffement climatique'],
        ['to curb', 'freiner, limiter']
      ]
    },
    {
      id: 'verbes',
      titre: 'Reporting verbs',
      cartes: [
        ['to claim', 'affirmer, prétendre'],
        ['to contend', 'soutenir (une thèse)'],
        ['to point out', 'faire remarquer'],
        ['to stress / to emphasise', 'souligner, insister sur'],
        ['to highlight', 'mettre en lumière'],
        ['to deplore', 'déplorer'],
        ['to condemn', 'condamner'],
        ['to praise', 'faire l\'éloge de'],
        ['to warn against', 'mettre en garde contre'],
        ['to advocate', 'prôner, défendre'],
        ['to deny', 'nier'],
        ['to acknowledge', 'reconnaître, admettre'],
        ['to question', 'remettre en question'],
        ['to imply', 'sous-entendre'],
        ['to blame sb for sth', 'reprocher qqch à qqn']
      ]
    }
  ],

  sujets: [
    {
      id: 'phones',
      type: 'commentaire-anglais',
      titre: 'Should smartphones be banned from schools?',
      enonce: 'Comment on the following article.',
      consigne: 'Practice text written for this app (not a real newspaper article). About 600 words expected.',
      texte: `
        Walk into any secondary school at lunchtime and you will see the same scene: rows of teenagers,
        heads bowed, thumbs scrolling. For a growing number of governments, the image has become a symbol
        of everything that is wrong with childhood in the digital age. Across Europe, ministers have
        announced restrictions on mobile phones in classrooms, and some schools now lock devices away
        in pouches from the first bell to the last.

        Supporters of a ban argue that the case is overwhelming. Teachers report pupils who cannot
        concentrate for more than a few minutes, and parents worry about cyberbullying that follows
        children home. "We are not against technology," says one head teacher. "We are against
        the idea that a fourteen-year-old should be available to the whole world during a maths lesson."

        Yet critics warn that a ban is a simple answer to a complicated problem. Phones are also tools
        for learning, for staying in touch with families and, for some pupils, for staying safe.
        Others point out that what happens on screens outside school hours will not change because
        devices are switched off between nine and four. Banning, they claim, is easier than teaching
        young people how to live with technology.

        Perhaps the real question is not whether phones should be allowed, but who is responsible
        for the habits they create. Tech companies design apps to capture attention; schools are
        asked to repair the damage. Until that imbalance is addressed, pouches and padlocks may
        prove to be little more than a plaster on a much deeper wound.
      `,
      source: 'Texte d\'entraînement rédigé pour Studium, dans le style d\'un article d\'opinion.',
      pistes: `
        ### Presentation
        An **opinion piece** about the debate on banning smartphones in schools. The author presents both sides before suggesting that the responsibility lies largely with **tech companies**.

        ### Possible issue
        *Is banning smartphones from schools an effective answer to the problems raised by young people's use of technology, or does it hide deeper responsibilities?*

        ### Possible outline
        - **I. A growing concern about screens at school**: the opening scene (l. 1-3), the symbol of "childhood in the digital age", the measures taken in Europe.
        - **II. A divided debate**: arguments for (concentration, cyberbullying, the head teacher's quote) and against (learning tools, safety, education rather than prohibition).
        - **III. Shifting the responsibility**: the attention economy, the "imbalance" between companies and schools, the final metaphor of the "plaster on a much deeper wound".

        ### Cultural references
        - Jonathan Haidt, *The Anxious Generation* (2024): the debate on social media and teenagers' mental health.
        - Bans or restrictions in several countries (France banned phones in primary and middle schools in 2018; England issued guidance in 2024).
        - The **attention economy**, regulation of tech giants (the EU Digital Services Act).

        ### Useful vocabulary
        *to ban, a ban, a pouch, to scroll, cyberbullying, the attention economy, to regulate, screen time, wellbeing.*
      `
    },
    {
      id: 'tourism',
      type: 'commentaire-anglais',
      titre: 'Overtourism: when visitors become a problem',
      enonce: 'Comment on the following article.',
      consigne: 'Practice text written for this app (not a real newspaper article).',
      texte: `
        Every summer, the same headlines return. Residents of Barcelona spray tourists with water pistols;
        Venice charges day-trippers an entrance fee; Amsterdam asks noisy visitors to "stay away".
        The word "overtourism", almost unknown a decade ago, has entered the dictionary.

        The figures explain the frustration. Cheap flights, cruise ships and short-term rental platforms
        have made it possible for millions of people to visit the same few streets at the same time.
        In some historic centres, flats once rented by local families are now booked by the night,
        pushing rents beyond the reach of teachers, nurses and shopkeepers.

        And yet tourism is not an enemy. In many regions it pays for museums, restaurants and jobs;
        in southern Europe, it is one of the pillars of the economy. A Spanish waiter interviewed last
        summer summed up the dilemma: "Tourists are the reason I have a job, and the reason I cannot
        afford to live near it."

        Cities are now experimenting with taxes, quotas and limits on holiday lets. Whether these measures
        can restore a balance between visitors and residents remains to be seen. What is certain is that
        the age of unlimited travel is meeting its limits, not only on the planet, but on our doorsteps.
      `,
      source: 'Texte d\'entraînement rédigé pour Studium, dans le style d\'un article de presse.',
      pistes: `
        ### Possible issue
        *Can cities reconcile the economic benefits of mass tourism with the right of residents to live in them?*

        ### Possible outline
        - **I. A phenomenon that has become a political issue**: protests, new measures, the new word "overtourism".
        - **II. The causes and consequences**: cheap flights, cruises, short-term rentals; housing crisis for locals.
        - **III. An economic dilemma and the search for balance**: tourism as a pillar of the economy; the waiter's paradox; taxes, quotas; the final reflection on limits.

        ### Useful vocabulary
        *overtourism, a day-tripper, short-term rentals, holiday lets, to price out, gentrification, a quota, a tourist tax, sustainable tourism.*
      `
    },
    {
      id: 'synthese-ia',
      type: 'synthese',
      titre: 'Synthesis: Artificial intelligence and work',
      enonce: 'Write a synthesis of the following documents in English (about 450 words). Give it a title.',
      consigne: 'Documents d\'entraînement rédigés pour l\'appli.',
      docs: [
        {
          titre: 'Document A — An optimistic view (opinion column)',
          texte: `
            Every technological revolution has been greeted with the same fear: machines will steal our jobs.
            The steam engine, electricity and computers all destroyed some professions — and created many more.
            Artificial intelligence will be no different. By taking over repetitive tasks, it will free workers
            to focus on what humans do best: creativity, judgement and care for others.
          `
        },
        {
          titre: 'Document B — A union leader speaks (interview extract)',
          texte: `
            "Nobody is saying we should stop progress. But when a company replaces fifty people in its customer
            service with a chatbot, the profit goes to the shareholders, not to the workers who lose their jobs.
            We need rules: training for those whose jobs disappear, and a fair share of the gains."
          `
        },
        {
          titre: 'Document C — Description of a cartoon',
          texte: `
            A cartoon shows a robot sitting at an office desk, typing happily, while a man in a suit stands
            behind it holding a cardboard box with his belongings. On the wall, a poster reads:
            "Employee of the month". The robot says: "Don't worry, I'll train your replacement."
          `
        }
      ],
      pistes: `
        ### Common theme and issue
        All three documents deal with the **impact of artificial intelligence on employment**. Issue: *Is AI a threat to workers, or an opportunity that needs to be fairly managed?*

        ### Comparison
        - **Document A** is optimistic: AI follows previous revolutions; it will create jobs and free humans from repetitive tasks.
        - **Document B** accepts progress but insists on **regulation** and on the **sharing of profits**.
        - **Document C** is satirical and pessimistic: workers are replaced and humiliated.
        - Convergence: everyone agrees that AI **will change work deeply** (A, B, C). Divergence: on **who benefits** (A: everyone; B, C: companies and shareholders).

        ### Possible outline
        - **I. A transformation of work that seems inevitable** (A, B, C).
        - **II. Opportunity or threat? Opposed views of the consequences** (A versus B and C).
        - **III. The need to manage the transition** (B: training, fair share; A: new human-centred jobs).

        Remember: no personal opinion, refer to the documents, give a title and the word count.
      `
    }
  ]
});
