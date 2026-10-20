/* Studium — interface : routeur, écrans, quiz, cartes, atelier, chrono */
(() => {
  'use strict';

  const S = window.STUDIUM, T = window.TYPES, I = U.icon, E = U.esc;
  const app = document.getElementById('app');
  const tabbar = document.getElementById('tabbar');

  let cur = { actions: {}, leave: null, study: false };
  let modalEl = null, modalActs = {};
  let navStack = [location.hash || '#/'];
  let navDir = 'fwd', replacing = false;
  const scrollMem = {};

  /* ======================================================================
     Navigation
     ====================================================================== */
  const curHash = () => location.hash || '#/';

  function go(h) {
    const top = navStack.length - 1;
    const idx = navStack.lastIndexOf(h);
    if (idx >= 0 && idx < top) { history.go(idx - top); return; }
    if (curHash() === h) render(); else location.hash = h;
  }

  function replace(h) {
    if (curHash() === h) { render(); return; }
    replacing = true;
    location.replace(h);
  }

  function goBack() {
    if (closeModal()) return true;
    if (navStack.length > 1) { history.back(); return true; }
    if (parse().parts.length) { replace('#/'); return true; }
    return false;
  }
  window.studiumBack = goBack;

  window.addEventListener('hashchange', () => {
    const h = curHash();
    if (replacing) {
      navStack[navStack.length - 1] = h;
      replacing = false;
      navDir = 'replace';
    } else {
      const idx = navStack.lastIndexOf(h);
      if (idx >= 0 && idx < navStack.length - 1) { navStack.length = idx + 1; navDir = 'back'; }
      else if (navStack[navStack.length - 1] !== h) { navStack.push(h); navDir = 'fwd'; }
    }
    render();
  });

  function parse() {
    let h = curHash().replace(/^#\/?/, '');
    const q = {};
    const qi = h.indexOf('?');
    if (qi >= 0) {
      h.slice(qi + 1).split('&').forEach(p => {
        const kv = p.split('=');
        if (kv[0]) q[kv[0]] = decodeURIComponent(kv[1] || '');
      });
      h = h.slice(0, qi);
    }
    return { parts: h.split('/').filter(Boolean).map(decodeURIComponent), q };
  }

  /* ======================================================================
     Rendu principal
     ====================================================================== */
  function render() {
    if (cur.leave) { try { cur.leave(); } catch (e) { /* rien */ } }
    scrollMem[cur.hash] = window.scrollY;
    cur = { actions: {}, leave: null, study: false, hash: curHash() };
    closeModal();
    Native.keepAwake(false);

    if (!Store.data.profil.prenom) { setChrome(null, false); viewWelcome(); return; }

    const { parts, q } = parse();
    const [a, b, c, d] = parts;
    let r = null;
    try {
      if (!a) r = viewHome();
      else if (a === 'matieres') r = viewMatieres();
      else if (a === 'm' && b && S.matiere(b)) {
        const m = S.matiere(b);
        if (!c) r = viewMatiere(m, q.t || 'cours');
        else if (c === 'c') r = viewCours(m, d);
        else if (c === 'q') r = viewQuiz(m, d);
        else if (c === 'd') r = viewDeck(m, d);
        else if (c === 's') r = viewSujet(m, d);
        else if (c === 'n') r = viewNote(m, d);
      }
      else if (a === 'methode') r = viewMethode(b);
      else if (a === 'reviser') r = b === 'cartes' ? viewDeck(null, '_all') : viewReviser();
      else if (a === 'defi') r = viewQuiz(null, '_defi');
      else if (a === 'chrono') r = viewChrono();
      else if (a === 'reglages') r = viewReglages();
      else if (a === 'ressources') r = viewRessources();
      else if (a === 'recherche') r = viewRecherche(b || '');
    } catch (e) {
      console.error(e);
      r = viewMessage('Oups', 'Cette page a rencontré un problème : ' + E(e.message));
    }
    if (!r) r = viewMessage('Page introuvable', 'Ce contenu n\'existe pas ou plus.');
    if (r.skip) return;
    cur.study = !!r.study;
    setChrome(r.tab, r.tabbar !== false);
    const y = (navDir === 'back' && scrollMem[cur.hash]) || 0;
    window.scrollTo(0, y);
    onScroll();
    tickChrono();
  }

  function setChrome(tab, showTabbar) {
    document.body.classList.toggle('no-tabbar', !showTabbar);
    tabbar.querySelectorAll('a').forEach(a => a.classList.toggle('on', a.dataset.tab === tab));
    const due = countDue();
    const dot = tabbar.querySelector('[data-tab=reviser] .dot');
    if (dot) { dot.textContent = due > 99 ? '99+' : due; dot.hidden = !due; }
  }

  function onScroll() {
    const tb = app.querySelector('.topbar');
    if (tb) tb.classList.toggle('scrolled', window.scrollY > 4);
  }
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ======================================================================
     Événements délégués
     ====================================================================== */
  document.addEventListener('click', (e) => {
    const ext = e.target.closest('a[data-ext]');
    if (ext) { e.preventDefault(); Native.open(ext.getAttribute('href')); return; }
    const ma = e.target.closest('[data-mact]');
    if (ma && modalActs[ma.dataset.mact]) { e.preventDefault(); modalActs[ma.dataset.mact](ma, e); return; }
    const g = e.target.closest('[data-go]');
    if (g) { e.preventDefault(); go(g.dataset.go); return; }
    const act = e.target.closest('[data-act]');
    if (!act) return;
    if (act.dataset.act === 'back') { e.preventDefault(); goBack(); return; }
    if (cur.actions[act.dataset.act]) { e.preventDefault(); cur.actions[act.dataset.act](act, e); }
  });

  document.addEventListener('input', (e) => {
    const t = e.target.closest('[data-input]');
    if (t && cur.actions[t.dataset.input]) cur.actions[t.dataset.input](t, e);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Enter') return;
    const t = e.target.closest('[data-enter]');
    if (t && cur.actions[t.dataset.enter]) { e.preventDefault(); cur.actions[t.dataset.enter](t, e); }
  });

  /* ======================================================================
     Composants
     ====================================================================== */
  function topbar(title, o = {}) {
    return `<header class="topbar"><div class="topbar-in">
      ${o.back === false ? '<span style="width:6px"></span>' : `<button class="icon-btn" data-act="back" aria-label="Retour">${I('chevron-left')}</button>`}
      <div class="topbar-title">${title}${o.sub ? `<small>${E(o.sub)}</small>` : ''}</div>
      ${o.right || ''}
    </div></header>`;
  }

  const gearBtn = () => `<button class="icon-btn gear" data-go="#/reglages" aria-label="Réglages">${I('settings')}</button>`;

  function modal(html, acts) {
    closeModal();
    modalActs = acts || {};
    modalEl = document.createElement('div');
    modalEl.className = 'modal-bg';
    modalEl.innerHTML = `<div class="modal" role="dialog"><div class="grab"></div>${html}</div>`;
    modalEl.addEventListener('click', (e) => { if (e.target === modalEl) closeModal(); });
    document.body.appendChild(modalEl);
    return modalEl;
  }

  function closeModal() {
    if (!modalEl) return false;
    modalEl.remove();
    modalEl = null;
    modalActs = {};
    return true;
  }

  function confirmBox(titre, texte, ok, cb) {
    modal(`<h3>${E(titre)}</h3><p class="sub">${texte}</p>
      <div class="btn-row"><button class="btn line" data-mact="no">Annuler</button><button class="btn" data-mact="yes">${E(ok || 'Confirmer')}</button></div>`,
    { no: closeModal, yes: () => { closeModal(); cb(); } });
  }

  let toastT = null;
  function toast(msg) {
    const old = document.querySelector('.toast');
    if (old) old.remove();
    const t = document.createElement('div');
    t.className = 'toast';
    t.textContent = msg;
    document.body.appendChild(t);
    clearTimeout(toastT);
    toastT = setTimeout(() => t.remove(), 2400);
  }

  function ring(pct, label, sub, big) {
    const r = 70, c = 2 * Math.PI * r;
    return `<div class="ring ${big ? 'big' : ''}"><svg viewBox="0 0 160 160">
      <circle cx="80" cy="80" r="${r}" fill="none" stroke="var(--surface-3)" stroke-width="10"/>
      <circle class="ring-arc" cx="80" cy="80" r="${r}" fill="none" stroke="var(--red)" stroke-width="10" stroke-linecap="round"
        stroke-dasharray="${c}" stroke-dashoffset="${c * (1 - Math.max(0, Math.min(1, pct)))}" style="transition:stroke-dashoffset .5s"/>
      </svg><div class="lbl"><b>${label}</b><span>${sub || ''}</span></div></div>`;
  }

  function logoSVG() {
    let leaves = '';
    for (let i = 0; i < 8; i++) {
      const deg = 112 + i * 17;
      const th = deg * Math.PI / 180;
      const side = i % 2 ? 1 : -1;
      const x = 50 + 34 * Math.cos(th) + side * 4.2 * Math.cos(th);
      const y = 54 + 34 * Math.sin(th) + side * 4.2 * Math.sin(th);
      const rot = deg + 90 + side * 28;
      leaves += `<ellipse cx="${x.toFixed(2)}" cy="${y.toFixed(2)}" rx="7.6" ry="3.1" transform="rotate(${rot.toFixed(1)} ${x.toFixed(2)} ${y.toFixed(2)})"/>`;
    }
    const a0 = 106 * Math.PI / 180, a1 = 240 * Math.PI / 180;
    const stem = `<path d="M${(50 + 34 * Math.cos(a0)).toFixed(2)} ${(54 + 34 * Math.sin(a0)).toFixed(2)} A34 34 0 0 1 ${(50 + 34 * Math.cos(a1)).toFixed(2)} ${(54 + 34 * Math.sin(a1)).toFixed(2)}" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>`;
    const branch = `<g fill="currentColor">${stem}${leaves}</g>`;
    return `<svg viewBox="0 0 100 100" aria-hidden="true">${branch}<g transform="translate(100 0) scale(-1 1)">${branch}</g>
      <text x="50" y="68" text-anchor="middle" font-family="EB Garamond, Georgia, serif" font-size="44" font-weight="600" fill="currentColor">S</text></svg>`;
  }

  /* ======================================================================
     Calculs de progression
     ====================================================================== */
  const today = () => U.dayKey();

  function progres(m) {
    let tot = 0, done = 0;
    const D = Store.data;
    (m.cours || []).forEach(c => { tot++; if (D.cours[m.id + '/' + c.id]) done++; });
    (m.quiz || []).forEach(q => {
      tot++;
      const r = D.quiz[m.id + '/' + q.id];
      if (r) done += Math.min(1, r.best / q.questions.length / 0.8);
    });
    (m.cartes || []).forEach(d => {
      tot++;
      const st = D.cartes[m.id + '/' + d.id] || {};
      let k = 0;
      d.cartes.forEach((c, i) => { if (st[i] && st[i].b >= 2) k++; });
      done += k / d.cartes.length;
    });
    (m.sujets || []).forEach(s => { tot++; const r = D.sujets[m.id + '/' + s.id]; if (r && r.fini) done++; });
    return tot ? done / tot : 0;
  }

  function deckDue(m, d) {
    const st = Store.data.cartes[m.id + '/' + d.id] || {};
    const t = today();
    let due = 0, nouv = 0;
    d.cartes.forEach((c, i) => {
      if (!st[i]) nouv++;
      else if (st[i].due <= t) due++;
    });
    return { due, nouv };
  }

  function countDue() {
    let n = 0;
    S.matieres.forEach(m => (m.cartes || []).forEach(d => { n += deckDue(m, d).due; }));
    return n;
  }

  function setDernier(titre, m, type) {
    Store.data.dernier = { hash: curHash(), titre, matiere: m ? m.nom : '', type };
    Store.save();
  }

  function citationDuJour() {
    const list = S.citations;
    if (!list.length) return null;
    const p = today().split('-');
    const n = Math.floor(Date.UTC(+p[0], +p[1] - 1, +p[2]) / 86400000);
    return list[n % list.length];
  }

  const ENCOURAGEMENTS = [
    'Un peu chaque jour vaut mieux que beaucoup la veille du DS.',
    'Festina lente : hâte-toi lentement.',
    'Chaque fiche relue est une khôlle mieux préparée.',
    'Les khâgneux aussi ont commencé par l\'hypokhâgne.',
    'Une dissertation, c\'est d\'abord une question bien comprise.',
    'Gutta cavat lapidem : la goutte creuse la pierre.',
    'Dix minutes de cartes mémoire, et le vocabulaire s\'installe.',
    'Pense à faire des pauses : le cerveau retient mieux.',
    'Nulla dies sine linea : pas un jour sans une ligne.',
    'Tu n\'as pas besoin d\'être parfait, juste régulier.'
  ];

  /* ======================================================================
     Écran de bienvenue
     ====================================================================== */
  function viewWelcome() {
    let obj = 60;
    app.innerHTML = `<div class="welcome page">
      <div class="logo">${logoSVG()}</div>
      <h1>Studium</h1>
      <p class="tag">Ton compagnon de travail pour l'hypokhâgne.<br>Cours, exercices et méthodes, au même endroit.</p>
      <label class="field"><span>Comment t'appelles-tu ?</span>
        <input class="input" id="w-prenom" placeholder="Ton prénom" maxlength="30" autocomplete="given-name" data-enter="start"></label>
      <div class="field"><span>Ton objectif de travail quotidien dans l'appli</span>
        <div class="chips" id="w-obj">${[30, 60, 90, 120].map(v => `<button class="preset ${v === obj ? 'on' : ''}" data-act="obj" data-v="${v}">${U.fmtDuree(v)}</button>`).join('')}</div></div>
      <button class="btn block" style="margin-top:28px" data-act="start">Commencer ${I('arrow-right')}</button>
      <p class="footer-note">Tes données restent uniquement sur ton téléphone.</p>
    </div>`;
    cur.actions.obj = (el) => {
      obj = +el.dataset.v;
      app.querySelectorAll('#w-obj .preset').forEach(b => b.classList.toggle('on', b === el));
    };
    cur.actions.start = () => {
      const v = document.getElementById('w-prenom').value.trim();
      if (!v) { toast('Indique ton prénom pour commencer'); return; }
      Store.data.profil.prenom = v;
      Store.data.profil.objectif = obj;
      Store.save(true);
      replace('#/');
    };
  }

  /* ======================================================================
     Accueil
     ====================================================================== */
  function viewHome() {
    const D = Store.data, p = D.profil;
    const j = D.jours[today()] || { sec: 0, actions: 0 };
    const minToday = Math.round(j.sec / 60);
    const pct = Math.min(1, minToday / (p.objectif || 60));
    const cit = citationDuJour();
    const due = countDue();
    const last = D.dernier;
    const defi = D.defi[today()];
    const nDefi = defiQuestions().length;
    const date = new Date().toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' });
    const enc = ENCOURAGEMENTS[U.hash(today()) % ENCOURAGEMENTS.length];
    const serie = Store.serie();

    let h = `<header class="topbar"><div class="topbar-in">
      <div class="topbar-title" style="color:var(--red);font-style:italic;font-weight:400;font-size:1.45rem">Studium</div>
      <button class="icon-btn" data-go="#/ressources" aria-label="Ressources">${I('bookmark')}</button>${gearBtn()}
    </div></header><div class="page">
      <div class="eyebrow">${E(date)}</div>
      <h1 class="h-display">Salve, <span class="red">${E(p.prenom)}</span> !</h1>
      <p class="sub">${E(enc)}</p>
      <div class="search">${I('search')}<input class="input" type="search" placeholder="Rechercher une notion, un auteur…" data-enter="search" enterkeyhint="search"></div>`;

    if (cit) {
      h += `<div class="card quote-card" style="margin-top:16px"><span class="qmark">“</span>
        <div class="eyebrow" style="margin-bottom:8px">Citation du jour</div>
        <div class="q-orig ${cit.grc ? 'grc' : ''}">${E(cit.o)}</div>
        <div class="q-fr">${E(cit.fr)}</div>
        <div class="q-src">— ${E(cit.a)}</div></div>`;
    }

    h += `<div class="stats">
        <div class="stat"><div class="v">${I('flame')}${serie}</div><div class="l">jour${serie > 1 ? 's' : ''} d'affilée</div></div>
        <div class="stat"><div class="v">${Store.totalActions()}</div><div class="l">exercices et lectures</div></div>
        <div class="stat"><div class="v">${fmtMin(Store.semaineMin())}</div><div class="l">de travail cette semaine</div></div>
      </div>
      <div class="card goal">
        <div class="goal-row"><span><b>Objectif du jour</b></span><span>${minToday} / ${p.objectif} min</span></div>
        <div class="bar"><i style="width:${Math.round(pct * 100)}%"></i></div>
        ${pct >= 1 ? '<div class="sub" style="margin-top:8px;font-size:.85rem">Objectif atteint. <span class="red">Bene fecisti !</span></div>' : ''}
      </div>
      <div class="section-title">${I('sparkles')} Aujourd'hui</div>
      <div class="list">
        <button class="card cta-card press" data-go="#/defi">
          <span class="badge-ic">${I('target')}</span>
          <span><span class="t">Défi du jour</span><br><span class="d">${defi != null ? `Fait : ${defi}/${nDefi}. Tu peux le refaire pour t'améliorer.` : `${nDefi} questions tirées de toutes tes matières`}</span></span>
          <span class="go">${I('chevron-right')}</span></button>
        <button class="card cta-card press" data-go="#/reviser/cartes">
          <span class="badge-ic">${I('layers')}</span>
          <span><span class="t">Cartes à revoir</span><br><span class="d">${due ? `${due} carte${due > 1 ? 's' : ''} t'attend${due > 1 ? 'ent' : ''} aujourd'hui` : 'Rien à revoir : commence un paquet dans une matière'}</span></span>
          <span class="go">${I('chevron-right')}</span></button>`;
    if (last && last.hash) {
      h += `<button class="card cta-card press" data-go="${E(last.hash)}">
          <span class="badge-ic">${I('bookmark')}</span>
          <span><span class="t">Reprendre</span><br><span class="d">${E(last.titre)}${last.matiere ? ' · ' + E(last.matiere) : ''}</span></span>
          <span class="go">${I('chevron-right')}</span></button>`;
    }
    h += `</div>
      <div class="section-title">${I('graduation-cap')} Tes matières<a class="more" data-go="#/matieres">Tout voir</a></div>
      <div class="grid-m">${S.matieres.map(tileMatiere).join('')}</div>
      <p class="footer-note">Studium · Hypokhâgne · Lycée Frédéric-Mistral, Avignon</p>
    </div>`;
    app.innerHTML = h;
    cur.actions.search = (el) => { const v = el.value.trim(); if (v) go('#/recherche/' + encodeURIComponent(v)); };
    return { tab: 'home' };
  }

  function fmtMin(min) {
    if (min < 60) return min + '<small style="font-size:.55em;margin-left:2px">min</small>';
    return Math.floor(min / 60) + '<small style="font-size:.55em">h</small>' + U.pad(min % 60);
  }

  function tileMatiere(m) {
    const p = progres(m);
    return `<button class="card m-tile press" data-go="#/m/${m.id}" style="text-align:left">
      <span class="m-ic">${I(m.icone)}</span>
      <span class="n">${E(m.nom)}</span>
      <span class="e">${E(m.court || '')}</span>
      <span class="bar thin"><i style="width:${Math.round(p * 100)}%"></i></span></button>`;
  }

  /* ======================================================================
     Liste des matières
     ====================================================================== */
  function viewMatieres() {
    app.innerHTML = topbar('Matières', { back: false, right: gearBtn() }) + `<div class="page">
      <p class="sub" style="margin:4px 2px 14px">Choisis une matière pour lire tes cours, t'exercer et t'entraîner aux épreuves.</p>
      <div class="list">${S.matieres.map(m => {
        const p = Math.round(progres(m) * 100);
        return `<button class="card item press" data-go="#/m/${m.id}" style="text-align:left">
          <span class="m-ic">${I(m.icone)}</span>
          <span class="body"><span class="t serif" style="font-size:1.15rem">${E(m.nom)}</span>
            <span class="d" style="display:block">${E(m.court || '')}</span>
            <span class="bar thin" style="display:block;margin-top:8px"><i style="width:${p}%"></i></span></span>
          <span class="chev">${I('chevron-right')}</span></button>`;
      }).join('')}</div></div>`;
    return { tab: 'matieres' };
  }

  /* ======================================================================
     Page d'une matière
     ====================================================================== */
  function viewMatiere(m, tab) {
    const p = progres(m);
    const tabs = [['cours', 'Cours'], ['ex', 'Exercices'], ['meth', 'Méthode'], ['notes', 'Notes']];
    let h = topbar(E(m.nom), { right: gearBtn() }) + `<div class="page">
      <div class="hero"><span class="m-ic">${I(m.icone)}</span><div><h1>${E(m.nom)}</h1><p>${E(m.description || '')}</p></div></div>
      ${m.epreuves ? `<div class="chips epreuves">${m.epreuves.map(e => `<span class="chip red">${E(e)}</span>`).join('')}</div>` : ''}
      <div class="prog-line"><span>Progression</span><span class="bar"><i style="width:${Math.round(p * 100)}%"></i></span><b style="color:var(--text)">${Math.round(p * 100)} %</b></div>
      <div class="seg">${tabs.map(t => `<button class="${t[0] === tab ? 'on' : ''}" data-act="tab" data-t="${t[0]}">${t[1]}</button>`).join('')}</div>
      <div id="tab-body">`;

    if (tab === 'cours') h += tabCours(m);
    else if (tab === 'ex') h += tabExercices(m);
    else if (tab === 'meth') h += tabMethode(m);
    else h += tabNotes(m);

    h += '</div></div>';
    app.innerHTML = h;
    cur.actions.tab = (el) => replace(`#/m/${m.id}?t=${el.dataset.t}`);
    return { tab: 'matieres' };
  }

  function tabCours(m) {
    const D = Store.data;
    let h = '';
    if (m.avertissement) h += `<div class="callout callout-note" style="margin-top:0"><div class="callout-title">${I('info')}<span>À savoir</span></div><div class="callout-body prose" style="font-size:.92rem">${U.md(m.avertissement)}</div></div>`;
    h += '<div class="list">';
    (m.cours || []).forEach((c, i) => {
      const lu = D.cours[m.id + '/' + c.id];
      const min = Math.max(2, Math.round(U.words(c.contenu) / 200));
      h += `<button class="card item press" data-go="#/m/${m.id}/c/${c.id}" style="text-align:left">
        <span class="num ${lu ? 'done' : ''}">${lu ? I('check') : i + 1}</span>
        <span class="body"><span class="t">${E(c.titre)}</span><span class="d" style="display:block">${c.resume ? E(c.resume) + ' · ' : ''}${min} min de lecture</span></span>
        <span class="chev">${I('chevron-right')}</span></button>`;
    });
    h += '</div>';
    h += `<button class="card cta-card press" style="margin-top:12px;width:100%;text-align:left" data-go="#/m/${m.id}/n/new">
      <span class="badge-ic">${I('plus')}</span><span><span class="t">Ajouter un cours ou une fiche</span><br>
      <span class="d">Recopie le plan donné en classe : il apparaîtra dans l'onglet Notes.</span></span></button>`;
    return h;
  }

  function tabExercices(m) {
    const D = Store.data;
    let h = '';
    if ((m.quiz || []).length) {
      h += `<div class="group-title">${I('list-checks')} Vérifier mes connaissances</div><div class="list">`;
      m.quiz.forEach(q => {
        const r = D.quiz[m.id + '/' + q.id];
        h += `<button class="card item press" data-go="#/m/${m.id}/q/${q.id}" style="text-align:left">
          <span class="num">${I('list-checks')}</span>
          <span class="body"><span class="t">${E(q.titre)}</span><span class="d" style="display:block">${q.questions.length} questions${r ? ` · meilleur score ${r.best}/${q.questions.length}` : ''}</span></span>
          ${r && r.best === q.questions.length ? `<span class="chip green">${I('trophy', 'ic-xs')}</span>` : `<span class="chev">${I('chevron-right')}</span>`}</button>`;
      });
      if (m.quiz.length > 1) {
        h += `<button class="card item press" data-go="#/m/${m.id}/q/_mix" style="text-align:left">
          <span class="num">${I('shuffle')}</span><span class="body"><span class="t">Quiz mélangé</span><span class="d" style="display:block">10 questions au hasard dans toute la matière</span></span><span class="chev">${I('chevron-right')}</span></button>`;
      }
      h += '</div>';
    }
    if ((m.cartes || []).length) {
      h += `<div class="group-title">${I('layers')} Mémoriser</div><div class="list">`;
      m.cartes.forEach(d => {
        const s = deckDue(m, d);
        h += `<button class="card item press" data-go="#/m/${m.id}/d/${d.id}" style="text-align:left">
          <span class="num">${I('layers')}</span>
          <span class="body"><span class="t">${E(d.titre)}</span><span class="d" style="display:block">${d.cartes.length} cartes${s.due ? ` · <b class="red">${s.due} à revoir</b>` : ''}${s.nouv ? ` · ${s.nouv} nouvelles` : ''}</span></span>
          <span class="chev">${I('chevron-right')}</span></button>`;
      });
      h += '</div>';
    }
    if ((m.sujets || []).length) {
      h += `<div class="group-title">${I('pen-line')} S'entraîner à l'épreuve</div><div class="list">`;
      m.sujets.forEach(s => { h += itemSujet(m, s); });
      h += '</div>';
    }
    return h;
  }

  function itemSujet(m, s) {
    const ty = T[s.type] || T.dissertation;
    const st = Store.data.sujets[m.id + '/' + s.id];
    const started = st && (Object.keys(st.etapes || {}).some(k => st.etapes[k]) || Object.keys(st.items || {}).length);
    const etat = st && st.fini ? '<span class="chip green">Terminé</span>' : started ? '<span class="chip">En cours</span>' : '';
    const duree = s.duree != null ? s.duree : ty.duree;
    return `<button class="card item press" data-go="#/m/${m.id}/s/${s.id}" style="text-align:left;align-items:flex-start">
      <span class="num">${I(ty.icon)}</span>
      <span class="body"><span class="chips" style="margin-bottom:6px"><span class="chip red">${E(ty.label)}</span>${s.kholle ? '<span class="chip">Khôlle</span>' : ''}${duree ? `<span class="chip">${U.fmtDuree(duree)}</span>` : ''}${etat}</span>
        <span class="t" style="display:block">${U.inline(s.titre)}</span></span></button>`;
  }

  function tabMethode(m) {
    let h = '';
    if (m.conseils) h += `<div class="card prose">${U.md(m.conseils)}</div>`;
    const ids = m.methodes || [];
    if (ids.length) {
      h += `<div class="group-title">${I('list-checks')} Fiches méthode</div><div class="list">`;
      ids.forEach(id => {
        const me = S.methodes[id];
        if (!me) return;
        h += `<button class="card item press" data-go="#/methode/${id}" style="text-align:left">
          <span class="num">${I(me.icone || 'list-checks')}</span>
          <span class="body"><span class="t">${E(me.titre)}</span><span class="d" style="display:block">${E(me.resume || '')}</span></span>
          <span class="chev">${I('chevron-right')}</span></button>`;
      });
      h += '</div>';
    }
    return h;
  }

  function tabNotes(m) {
    const notes = Store.data.notes[m.id] || [];
    let h = `<button class="btn block" data-go="#/m/${m.id}/n/new">${I('plus')} Nouvelle note</button>`;
    if (!notes.length) {
      h += `<div class="empty">${I('sticky-note')}<p>Aucune note pour l'instant.<br>Ajoute ici les plans de cours, les bibliographies ou tes fiches personnelles.</p></div>`;
    } else {
      h += '<div class="list" style="margin-top:14px">';
      notes.forEach(n => {
        const extrait = (n.texte || '').replace(/[#*>|=_-]/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 110);
        h += `<button class="card item press" data-go="#/m/${m.id}/n/${n.id}" style="text-align:left">
          <span class="num">${I('sticky-note')}</span>
          <span class="body"><span class="t">${E(n.titre || 'Sans titre')}</span><span class="d" style="display:block">${E(extrait) || '<i>Vide</i>'}</span></span>
          <span class="chev">${I('chevron-right')}</span></button>`;
      });
      h += '</div>';
    }
    return h;
  }

  /* ======================================================================
     Lecture d'un cours
     ====================================================================== */
  function viewCours(m, cid) {
    const list = m.cours || [];
    const i = list.findIndex(c => c.id === cid);
    if (i < 0) return null;
    const c = list[i], key = m.id + '/' + c.id;
    const next = list[i + 1];
    setDernier(c.titre, m, 'cours');
    const draw = () => {
      const lu = Store.data.cours[key];
      app.innerHTML = topbar(E(c.titre), { sub: m.nom, right: `<button class="icon-btn" data-act="smaller" aria-label="Texte plus petit" style="font-weight:700;font-size:.85rem">A−</button><button class="icon-btn" data-act="bigger" aria-label="Texte plus grand" style="font-weight:700;font-size:1.05rem">A+</button>` }) +
        `<div class="page"><div class="eyebrow" style="margin-top:6px">${E(m.nom)} · cours ${i + 1}</div>
        <h1 class="h-display" style="font-size:1.9rem;margin-bottom:14px">${E(c.titre)}</h1>
        <article class="prose">${U.md(c.contenu)}</article>
        <div class="btn-row" style="margin-top:28px">
          <button class="btn ${lu ? 'line' : ''}" data-act="lu">${I(lu ? 'check-check' : 'check')} ${lu ? 'Lu' : 'Marquer comme lu'}</button>
        </div>
        <div class="btn-row">
          <button class="btn ghost" data-go="#/m/${m.id}?t=ex">${I('pen-line')} S'exercer</button>
          ${next ? `<button class="btn ghost" data-act="next">Suivant ${I('arrow-right')}</button>` : ''}
        </div></div>`;
    };
    draw();
    cur.actions.lu = () => {
      const was = Store.data.cours[key];
      if (was) delete Store.data.cours[key];
      else { Store.data.cours[key] = today(); Store.action(); toast('Cours marqué comme lu'); }
      Store.save();
      const y = window.scrollY; draw(); window.scrollTo(0, y);
    };
    cur.actions.next = () => replace(`#/m/${m.id}/c/${next.id}`);
    const size = (d) => {
      const p = Store.data.profil;
      p.taille = Math.max(85, Math.min(135, (p.taille || 100) + d));
      applyTaille();
      Store.save();
    };
    cur.actions.smaller = () => size(-5);
    cur.actions.bigger = () => size(5);
    return { tab: null, tabbar: false, study: true };
  }

  /* ======================================================================
     Quiz
     ====================================================================== */
  function seeded(seed) {
    let a = seed >>> 0;
    return () => {
      a |= 0; a = a + 0x6D2B79F5 | 0;
      let t = Math.imul(a ^ a >>> 15, 1 | a);
      t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
  }

  function defiQuestions() {
    const all = [];
    S.matieres.forEach(m => (m.quiz || []).forEach(q => q.questions.forEach(x => all.push(Object.assign({ m: m.nom }, x)))));
    const rnd = seeded(U.hash('defi' + today()));
    for (let i = all.length - 1; i > 0; i--) {
      const j = Math.floor(rnd() * (i + 1));
      const t = all[i]; all[i] = all[j]; all[j] = t;
    }
    // une question par matière au maximum, dans la limite de 7
    const seen = {}, out = [];
    all.forEach(x => { if (out.length < 7 && !seen[x.m]) { seen[x.m] = 1; out.push(x); } });
    return out;
  }

  function viewQuiz(m, qid) {
    let titre, questions, key = null;
    if (qid === '_defi') {
      titre = 'Défi du jour';
      questions = defiQuestions();
    } else if (qid === '_mix') {
      titre = 'Quiz mélangé';
      questions = [];
      (m.quiz || []).forEach(q => q.questions.forEach(x => questions.push(x)));
      questions = U.shuffle(questions).slice(0, 10);
    } else {
      const q = (m.quiz || []).find(x => x.id === qid);
      if (!q) return null;
      titre = q.titre;
      key = m.id + '/' + q.id;
      questions = U.shuffle(q.questions);
      setDernier(q.titre, m, 'quiz');
    }
    if (!questions.length) return viewMessage(titre, 'Pas encore de questions ici.');

    const Q = questions.map(x => {
      const ch = x.c.map((t, i) => ({ t, ok: i === x.r }));
      return Object.assign({}, x, { ch: x.fixe ? ch : U.shuffle(ch) });
    });
    let i = 0, score = 0, answered = false;
    const erreurs = [];

    const sub = m ? m.nom : 'Toutes les matières';
    const frame = (inner) => {
      app.innerHTML = topbar(E(titre), { sub }) + `<div class="page">${inner}</div>`;
    };

    const drawQ = () => {
      const x = Q[i];
      frame(`<div class="quiz-top"><span>${i + 1} / ${Q.length}</span><span class="bar"><i style="width:${(i / Q.length) * 100}%"></i></span><span>${I('star', 'ic-xs')} ${score}</span></div>
        ${x.m ? `<span class="chip red">${E(x.m)}</span>` : ''}
        <div class="q-text ${x.grc ? 'grc' : ''}">${U.inline(x.q)}</div>
        <div class="choices">${x.ch.map((c, k) => `<button class="choice" data-act="pick" data-k="${k}"><span class="k">${'ABCDEF'[k]}</span><span>${U.inline(c.t)}</span></button>`).join('')}</div>
        <div id="after"></div>`);
      answered = false;
    };

    const drawEnd = () => {
      const pct = score / Q.length;
      const msg = pct === 1 ? 'Optime ! Sans faute.' : pct >= 0.8 ? 'Très bien, c\'est solide.' : pct >= 0.5 ? 'Pas mal, encore un effort.' : 'Relis le cours et retente ta chance.';
      if (key) {
        const r = Store.data.quiz[key] || { best: 0, n: 0 };
        r.best = Math.max(r.best, score); r.last = score; r.n++; r.date = today();
        Store.data.quiz[key] = r;
      }
      if (qid === '_defi') Store.data.defi[today()] = Math.max(score, Store.data.defi[today()] || 0);
      Store.action();
      frame(`<div class="card result">${ring(pct, `${score}/${Q.length}`, 'bonnes réponses')}
          <div class="msg">${msg}</div><p class="sub">${erreurs.length ? `${erreurs.length} erreur${erreurs.length > 1 ? 's' : ''} à revoir ci-dessous.` : 'Rien à revoir.'}</p>
          <div class="btn-row"><button class="btn line" data-act="back">Terminer</button><button class="btn" data-act="again">${I('rotate-ccw')} Recommencer</button></div></div>
        ${erreurs.length ? `<div class="section-title">${I('circle-x')} À revoir</div>` + erreurs.map(x => `<div class="card"><div style="font-weight:620">${U.inline(x.q)}</div>
          <div style="margin-top:6px;color:var(--green)">${I('check', 'ic-xs')} ${U.inline(x.c[x.r])}</div>${x.e ? `<div class="muted" style="margin-top:6px;font-size:.92rem">${U.inline(x.e)}</div>` : ''}</div>`).join('') : ''}`);
    };

    cur.actions.pick = (el) => {
      if (answered) return;
      answered = true;
      const x = Q[i], k = +el.dataset.k, ok = x.ch[k].ok;
      if (ok) score++; else erreurs.push(x);
      app.querySelectorAll('.choice').forEach((b, n) => {
        b.disabled = true;
        if (x.ch[n].ok) b.classList.add('ok');
        else if (n === k) b.classList.add('ko');
      });
      if (!ok) Native.vibrate(60);
      document.getElementById('after').innerHTML = `<div class="explain">
        <div class="callout ${ok ? 'callout-exemple' : 'callout-attention'}" style="${ok ? 'background:var(--green-50);border-color:#cfe9da' : ''}">
          <div class="callout-title">${I(ok ? 'circle-check' : 'circle-x')}<span>${ok ? 'Bonne réponse' : 'Pas tout à fait'}</span></div>
          <div class="callout-body">${x.e ? U.inline(x.e) : (ok ? 'Bravo.' : 'La bonne réponse est en vert.')}</div></div>
        <button class="btn block" data-act="next">${i + 1 < Q.length ? 'Question suivante' : 'Voir mon score'} ${I('arrow-right')}</button></div>`;
      const after = document.getElementById('after');
      if (after.getBoundingClientRect().bottom > window.innerHeight) after.scrollIntoView({ behavior: 'smooth', block: 'end' });
    };
    cur.actions.next = () => {
      i++;
      if (i < Q.length) { drawQ(); window.scrollTo(0, 0); }
      else { drawEnd(); window.scrollTo(0, 0); }
    };
    cur.actions.again = () => render();
    drawQ();
    return { tabbar: false, study: true };
  }

  /* ======================================================================
     Cartes mémoire (système de Leitner)
     ====================================================================== */
  const INTERVALLES = [0, 1, 3, 7, 14, 30];

  function viewDeck(m, did) {
    const t = today();
    let titre, cards = [], decks = [];
    if (did === '_all') {
      titre = 'Cartes à revoir';
      S.matieres.forEach(mm => (mm.cartes || []).forEach(d => decks.push({ m: mm, d })));
    } else {
      const d = (m.cartes || []).find(x => x.id === did);
      if (!d) return null;
      titre = d.titre;
      decks.push({ m, d });
      setDernier(d.titre, m, 'cartes');
    }
    decks.forEach(({ m: mm, d }) => {
      const key = mm.id + '/' + d.id;
      const st = Store.data.cartes[key] || {};
      d.cartes.forEach((c, i) => cards.push({ key, i, r: c[0], v: c[1], x: c[2], m: mm.nom, st: st[i], grc: d.grc }));
    });

    const dues = U.shuffle(cards.filter(c => c.st && c.st.due <= t));
    const nouvelles = did === '_all' ? [] : cards.filter(c => !c.st);
    let queue = dues.concat(nouvelles.slice(0, Math.max(0, 20 - dues.length)));
    let libre = false, inverse = false, idx = 0, sus = 0, rev = 0, flipped = false;
    const retry = new Set();

    const sub = m ? m.nom : 'Toutes les matières';
    const right = `<button class="icon-btn" data-act="inv" aria-label="Inverser recto et verso">${I('refresh-cw') || I('shuffle')}</button>`;

    const frame = (inner) => { app.innerHTML = topbar(E(titre), { sub, right }) + `<div class="page">${inner}</div>`; };

    const drawEmpty = () => {
      frame(`<div class="card result">${ring(1, I('check-check', 'ic-lg'), 'à jour')}
        <div class="msg">Tout est révisé pour aujourd'hui.</div>
        <p class="sub">${did === '_all' ? 'Les cartes reviennent automatiquement quand il faut les revoir. Ouvre un paquet dans une matière pour en découvrir de nouvelles.' : 'Reviens demain, ou révise tout le paquet maintenant.'}</p>
        <div class="btn-row">${did === '_all' ? `<button class="btn" data-go="#/matieres">Choisir une matière</button>` : `<button class="btn" data-act="libre">${I('shuffle')} Réviser tout le paquet</button>`}</div></div>`);
    };

    const drawCard = () => {
      const c = queue[idx];
      const recto = inverse ? c.v : c.r, verso = inverse ? c.r : c.v;
      flipped = false;
      frame(`<div class="quiz-top"><span>${idx + 1} / ${queue.length}</span><span class="bar"><i style="width:${(idx / queue.length) * 100}%"></i></span><span>${libre ? 'libre' : ''}</span></div>
        <div class="flash-wrap"><div class="flash" data-act="flip">
          <div class="face front">${!c.st ? '<span class="chip red tag">Nouvelle</span>' : did === '_all' ? `<span class="chip tag">${E(c.m)}</span>` : ''}
            <div class="main ${c.grc && !inverse ? 'grc' : ''}">${U.inline(recto)}</div><div class="hint">Touche pour retourner</div></div>
          <div class="face back"><div class="recto-rappel ${c.grc && !inverse ? 'grc' : ''}">${U.inline(recto)}</div><div class="back-t ${c.grc && inverse ? 'grc main' : ''}">${U.inline(verso)}</div>${c.x ? `<div class="muted" style="margin-top:10px;font-size:.9rem">${U.inline(c.x)}</div>` : ''}</div>
        </div></div>
        <div id="deck-btns"><button class="btn block" data-act="flip">${I('refresh-cw')} Retourner</button></div>`);
    };

    const drawEnd = () => {
      Store.action();
      frame(`<div class="card result">${ring(rev ? sus / rev : 1, `${sus}/${rev}`, 'cartes sues')}
        <div class="msg">Séance terminée !</div>
        <p class="sub">Les cartes « à revoir » reviendront plus vite. Celles que tu sais s'espacent : 1, 3, 7, 14 puis 30 jours.</p>
        <div class="btn-row"><button class="btn line" data-act="back">Terminer</button><button class="btn" data-act="restart">${I('rotate-ccw')} Encore</button></div></div>`);
    };

    const save = (c, su) => {
      const all = Store.data.cartes[c.key] || (Store.data.cartes[c.key] = {});
      const prev = all[c.i] || { b: 0 };
      const b = su ? Math.min(5, (prev.b || 0) + 1) : 0;
      all[c.i] = { b, due: U.addDays(t, su ? INTERVALLES[b] : 0) };
      c.st = all[c.i];
      Store.save();
    };

    cur.actions.flip = () => {
      const f = app.querySelector('.flash');
      if (!f) return;
      flipped = !flipped;
      f.classList.toggle('flipped', flipped);
      if (flipped) {
        document.getElementById('deck-btns').innerHTML = `<div class="btn-row" style="margin-top:0">
          <button class="btn line" data-act="ko">${I('rotate-ccw')} À revoir</button>
          <button class="btn" data-act="ok">${I('check')} Je savais</button></div>`;
      }
    };
    const answer = (su) => {
      const c = queue[idx];
      if (!retry.has(c)) { rev++; if (su) sus++; }
      save(c, su);
      if (!su && !retry.has(c)) { retry.add(c); queue.push(c); }
      idx++;
      if (idx < queue.length) drawCard(); else drawEnd();
    };
    cur.actions.ok = () => answer(true);
    cur.actions.ko = () => answer(false);
    cur.actions.inv = () => { inverse = !inverse; toast(inverse ? 'Mode inversé : verso → recto' : 'Mode normal : recto → verso'); if (queue.length && idx < queue.length) drawCard(); };
    cur.actions.libre = () => { libre = true; queue = U.shuffle(cards); idx = 0; drawCard(); };
    cur.actions.restart = () => render();

    if (!queue.length) drawEmpty(); else drawCard();
    return { tab: did === '_all' ? 'reviser' : null, tabbar: false, study: true };
  }

  /* ======================================================================
     Atelier : entraînement aux épreuves
     ====================================================================== */
  function viewSujet(m, sid) {
    const s = (m.sujets || []).find(x => x.id === sid);
    if (!s) return null;
    const ty = T[s.type] || T.dissertation;
    const key = m.id + '/' + s.id;
    const st = Store.data.sujets[key] || (Store.data.sujets[key] = { etapes: {}, eval: {}, items: {}, fini: false });
    st.etapes = st.etapes || {}; st.eval = st.eval || {}; st.items = st.items || {};
    const duree = s.duree != null ? s.duree : ty.duree;
    const methodeId = s.methode || ty.methode;
    setDernier(U.norm(s.titre) ? s.titre.replace(/[*=]/g, '') : ty.label, m, 'sujet');

    const draw = () => {
      let h = topbar(E(ty.label), { sub: m.nom, right: duree ? `<button class="icon-btn" data-act="chrono" aria-label="Chrono">${I('timer')}</button>` : '' });
      h += `<div class="page">${miniChrono()}
        <div class="card subject-card pad-lg">
          <div class="chips"><span class="chip red">${I(ty.icon, 'ic-xs')} ${E(ty.label)}</span>${s.kholle ? '<span class="chip">Khôlle</span>' : ''}${duree ? `<span class="chip">${I('clock', 'ic-xs')} ${U.fmtDuree(duree)}</span>` : ''}${st.fini ? '<span class="chip green">Terminé</span>' : ''}</div>
          <div class="enonce">${U.inline(s.enonce || s.titre)}</div>
          ${s.consigne ? `<p class="muted" style="margin:10px 0 0;font-size:.92rem">${U.inline(s.consigne)}</p>` : ''}
          ${S.methodes[methodeId] ? `<button class="btn small ghost" style="margin-top:14px" data-go="#/methode/${methodeId}">${I('list-checks')} Revoir la méthode</button>` : ''}
        </div>`;
      if (s.texte) {
        h += `<div class="section-title">${I('scroll-text')} ${s.type === 'phrases' ? 'Énoncé' : 'Le texte'}</div>` + U.texte(s.texte, { vers: s.vers, lang: s.lang }) +
          (s.source ? `<div class="doc-src">${U.inline(s.source)}</div>` : '');
      }
      (s.docs || []).forEach(d => {
        h += `<div class="section-title" style="font-size:1.12rem">${I('newspaper')} ${E(d.titre)}</div>` + U.texte(d.texte) + (d.source ? `<div class="doc-src">${U.inline(d.source)}</div>` : '');
      });
      if (s.type === 'phrases') h += phrasesHTML(s, st);
      else {
        h += `<div class="section-title">${I('pen-line')} Ton travail</div><p class="sub" style="margin:-6px 2px 0;font-size:.88rem">Tout est enregistré automatiquement, tu peux reprendre plus tard.</p>`;
        let firstOpen = ty.etapes.findIndex(e => !(st.etapes[e.id] || '').trim());
        if (firstOpen < 0) firstOpen = -1;
        ty.etapes.forEach((e, n) => {
          const val = st.etapes[e.id] || '';
          h += `<div class="step ${val.trim() ? 'filled' : ''} ${n === firstOpen ? 'open' : ''}" data-step="${e.id}">
            <button class="step-h" data-act="toggleStep"><span class="n">${n + 1}</span><span class="t">${E(e.titre)}</span>${I('chevron-right', 'rot')}</button>
            <div class="step-b"><div class="hint-box">${U.md(e.aide)}</div>
              <textarea class="textarea" rows="${e.rows || 6}" data-input="stepInput" data-id="${e.id}" placeholder="Écris ici…">${E(val)}</textarea>
              <div class="count" data-count="${e.id}">${U.words(val)} mots</div></div></div>`;
        });
        h += pistesHTML(s, ty, st);
      }
      h += `<div class="btn-row" style="margin-top:22px"><button class="btn line" data-act="share">${I('share-2')} Partager ma copie</button></div>
        <div class="btn-row" style="margin-top:8px"><button class="btn line" style="color:var(--muted)" data-act="reset">${I('trash-2')} Tout effacer</button></div></div>`;
      app.innerHTML = h;
    };

    const redraw = () => { const y = window.scrollY; draw(); window.scrollTo(0, y); tickChrono(); };

    cur.actions.toggleStep = (el) => el.closest('.step').classList.toggle('open');
    cur.actions.stepInput = (el) => {
      st.etapes[el.dataset.id] = el.value;
      st.maj = Date.now();
      Store.save();
      const c = app.querySelector(`[data-count="${el.dataset.id}"]`);
      if (c) c.textContent = U.words(el.value) + ' mots';
      el.closest('.step').classList.toggle('filled', !!el.value.trim());
    };
    cur.actions.itemInput = (el) => {
      const it = st.items[el.dataset.i] || (st.items[el.dataset.i] = {});
      it.t = el.value;
      Store.save();
    };
    cur.actions.reveal = (el) => {
      const i = el.dataset.i;
      const it = st.items[i] || (st.items[i] = {});
      it.vu = true;
      Store.save();
      app.querySelector(`[data-ans="${i}"]`).innerHTML = answerHTML(s.items[i]);
    };
    const self = (el, ok) => {
      const i = el.dataset.i;
      const it = st.items[i] || (st.items[i] = {});
      it.ok = ok; it.vu = true;
      const fini = s.items.every((x, n) => st.items[n] && st.items[n].ok != null);
      if (fini && !st.fini) { st.fini = true; st.date = today(); Store.action(); }
      Store.save();
      redraw();
    };
    cur.actions.selfOk = (el) => self(el, true);
    cur.actions.selfKo = (el) => self(el, false);
    cur.actions.finir = () => {
      if (!st.fini) { st.fini = true; st.date = today(); Store.action(); toast('Bravo ! Exercice terminé.'); }
      st.voir = true;
      Store.save();
      redraw();
    };
    cur.actions.voir = () => { st.voir = true; Store.save(); redraw(); };
    cur.actions.evalc = (el) => {
      const i = el.dataset.i;
      st.eval[i] = !st.eval[i];
      Store.save();
      el.classList.toggle('on', st.eval[i]);
      const sc = document.getElementById('eval-score');
      if (sc) sc.innerHTML = evalScore(ty, st);
    };
    cur.actions.chrono = () => {
      const c = Store.data.chrono;
      if (c) { toast('Un chrono est déjà lancé'); go('#/chrono'); return; }
      modal(`<h3>Lancer le chrono</h3><p class="sub">Mets-toi en conditions réelles. Le chrono continue même si tu quittes l'appli.</p>
        <div class="presets" style="justify-content:flex-start">${[duree, 60, 120, 180, 240, 360].filter((v, k, a) => v && a.indexOf(v) === k).map(v => `<button class="preset ${v === duree ? 'on' : ''}" data-mact="start" data-v="${v}">${U.fmtDuree(v)}</button>`).join('')}</div>`,
      {
        start: (el) => {
          closeModal();
          startChrono(+el.dataset.v, s.titre.replace(/[*=]/g, '').slice(0, 80), curHash());
          toast('Chrono lancé : ' + U.fmtDuree(+el.dataset.v));
          tickChrono();
        }
      });
    };
    cur.actions.share = () => {
      let txt = `${s.titre.replace(/[*=]/g, '')}\n${m.nom} · ${ty.label}\n\n`;
      if (s.enonce) txt += s.enonce.replace(/[*=]/g, '') + '\n\n';
      if (s.type === 'phrases') {
        s.items.forEach((it, n) => { txt += `${n + 1}. ${it.q.replace(/[*=]/g, '')}\n→ ${(st.items[n] && st.items[n].t) || '…'}\n\n`; });
      } else {
        ty.etapes.forEach(e => { const v = (st.etapes[e.id] || '').trim(); if (v) txt += `■ ${e.titre}\n${v}\n\n`; });
      }
      if (!Native.share(s.titre.replace(/[*=]/g, ''), txt.trim())) {
        if (navigator.clipboard) navigator.clipboard.writeText(txt).then(() => toast('Copie copiée dans le presse-papiers'));
      }
    };
    cur.actions.reset = () => confirmBox('Tout effacer ?', 'Ton travail sur ce sujet sera supprimé.', 'Effacer', () => {
      Store.data.sujets[key] = { etapes: {}, eval: {}, items: {}, fini: false };
      Store.save(true);
      render();
    });

    draw();
    return { tabbar: false, study: true };
  }

  function answerHTML(it) {
    return `<div class="answer"><b>Correction :</b> ${U.inline(it.r)}${it.e ? `<div class="muted" style="margin-top:4px">${U.inline(it.e)}</div>` : ''}</div>`;
  }

  function phrasesHTML(s, st) {
    const n = s.items.length;
    const ok = s.items.filter((x, i) => st.items[i] && st.items[i].ok === true).length;
    const faits = s.items.filter((x, i) => st.items[i] && st.items[i].ok != null).length;
    let h = `<div class="section-title">${I('pen-line')} À toi de jouer</div>
      <p class="sub" style="margin:-6px 2px 0;font-size:.88rem">Écris ta réponse, regarde la correction, puis note-toi honnêtement ✓ ou ✗.</p>`;
    s.items.forEach((it, i) => {
      const r = st.items[i] || {};
      h += `<div class="pair"><div class="src ${s.lang === 'grc' ? 'grc' : ''}"><span class="n">${i + 1}.</span>${U.inline(it.q)}</div>
        <textarea class="textarea" rows="2" style="min-height:66px;margin-top:10px" data-input="itemInput" data-i="${i}" placeholder="Ta réponse…">${E(r.t || '')}</textarea>
        <div class="row"><button class="btn small ghost" data-act="reveal" data-i="${i}">${I('eye')} Correction</button>
          <div class="self"><button data-act="selfOk" data-i="${i}" class="${r.ok === true ? 'on-ok' : ''}" aria-label="Réussi">${I('check')}</button>
          <button data-act="selfKo" data-i="${i}" class="${r.ok === false ? 'on-ko' : ''}" aria-label="Raté">${I('x')}</button></div></div>
        <div data-ans="${i}">${r.vu ? answerHTML(it) : ''}</div></div>`;
    });
    h += `<div class="card" style="margin-top:14px;display:flex;align-items:center;gap:14px">
      <span class="m-ic">${I('trophy')}</span><div><b>Score : ${ok} / ${n}</b><div class="sub" style="font-size:.85rem">${faits < n ? `Encore ${n - faits} à corriger.` : ok === n ? 'Parfait !' : 'Refais les phrases ratées dans quelques jours.'}</div></div></div>`;
    if (s.pistes) h += `<div class="card prose" style="margin-top:12px">${U.md(s.pistes)}</div>`;
    return h;
  }

  function evalScore(ty, st) {
    const n = ty.grille.length, k = ty.grille.filter((g, i) => st.eval[i]).length;
    return `<span class="m-ic">${I('target')}</span><div><b>Auto-évaluation : ${k} / ${n}</b><div class="sub" style="font-size:.85rem">${k === n ? 'Excellent travail.' : k >= n * 0.6 ? 'Bonne copie : vise les points manquants la prochaine fois.' : 'Repère un ou deux points à travailler en priorité.'}</div></div>`;
  }

  function pistesHTML(s, ty, st) {
    let h = `<div class="section-title">${I('lightbulb')} ${s.corrige ? 'Corrigé' : 'Pistes de correction'}</div>`;
    if (!(st.fini || st.voir)) {
      return h + `<div class="card locked">${I('eye')}<p>Les pistes s'affichent quand tu as terminé.<br><span class="muted">Essaie d'abord seul : c'est comme ça qu'on progresse.</span></p>
        <button class="btn block" data-act="finir">${I('circle-check')} J'ai terminé</button>
        <button class="btn line block" style="margin-top:8px" data-act="voir">Je bloque : voir les pistes</button></div>`;
    }
    if (s.corrige) h += `<div class="card"><div class="eyebrow">Traduction proposée</div><div class="prose" style="margin-top:8px">${U.md(s.corrige)}</div></div>`;
    if (s.pistes) h += `<div class="card prose">${U.md(s.pistes)}</div>`;
    if (ty.grille.length) {
      h += `<div class="section-title">${I('list-checks')} Auto-évaluation</div><div class="checklist">` +
        ty.grille.map((g, i) => `<button class="check ${st.eval[i] ? 'on' : ''}" data-act="evalc" data-i="${i}"><span class="box">${I('check')}</span><span>${E(g)}</span></button>`).join('') +
        `</div><div class="card" id="eval-score" style="margin-top:12px;display:flex;align-items:center;gap:14px">${evalScore(ty, st)}</div>`;
    }
    if (!st.fini) h += `<button class="btn block" style="margin-top:14px" data-act="finir">${I('circle-check')} Marquer comme terminé</button>`;
    return h;
  }

  /* ======================================================================
     Notes personnelles
     ====================================================================== */
  function viewNote(m, nid) {
    const notes = Store.data.notes[m.id] || (Store.data.notes[m.id] = []);
    if (nid === 'new') {
      const n = { id: 'n' + Date.now().toString(36), titre: '', texte: '', maj: Date.now() };
      notes.unshift(n);
      Store.save();
      replace(`#/m/${m.id}/n/${n.id}`);
      return { skip: true };
    }
    const n = notes.find(x => x.id === nid);
    if (!n) return null;
    let apercu = false;
    app.innerHTML = topbar('Note', { sub: m.nom, right: `<button class="icon-btn" data-act="apercu" aria-label="Aperçu">${I('eye')}</button><button class="icon-btn" data-act="del" aria-label="Supprimer">${I('trash-2')}</button>` }) +
      `<div class="page">
        <input class="input serif" style="font-size:1.35rem;font-weight:600;margin-top:6px" data-input="titre" value="${E(n.titre)}" placeholder="Titre (ex. Cours 2 — La cité grecque)">
        <textarea class="textarea tall" style="margin-top:12px;min-height:52vh" data-input="texte" placeholder="Écris ou colle ton cours ici…">${E(n.texte)}</textarea>
        <div id="note-preview" class="card prose" hidden></div>
        <div class="hint-box" style="margin-top:12px;font-size:.82rem">
          <b>Mise en forme :</b> <code># Titre</code>, <code>## Sous-titre</code>, <code>- puce</code> (décale avec 2 espaces pour indenter),
          <code>I.</code> <code>A.</code> <code>1.</code> pour les plans, <code>**gras**</code>, <code>*italique*</code>, <code>==surligné==</code>, <code>&gt; citation</code>.
          Touche ${I('eye', 'ic-xs')} pour voir le rendu.</div>
      </div>`;
    const saveN = () => { n.maj = Date.now(); Store.save(); };
    cur.actions.titre = (el) => { n.titre = el.value; saveN(); };
    cur.actions.texte = (el) => { n.texte = el.value; saveN(); };
    cur.actions.apercu = () => {
      apercu = !apercu;
      const p = document.getElementById('note-preview');
      const ta = app.querySelector('textarea');
      p.hidden = !apercu; ta.hidden = apercu;
      if (apercu) p.innerHTML = (n.titre ? `<h2 class="md-h">${E(n.titre)}</h2>` : '') + (U.md(n.texte) || '<p class="muted">Note vide.</p>');
    };
    cur.actions.del = () => confirmBox('Supprimer cette note ?', 'Cette action est définitive.', 'Supprimer', () => {
      const k = notes.indexOf(n);
      if (k >= 0) notes.splice(k, 1);
      Store.save(true);
      goBack();
    });
    cur.leave = () => {
      if (!n.titre.trim() && !n.texte.trim()) {
        const k = notes.indexOf(n);
        if (k >= 0) { notes.splice(k, 1); Store.save(true); }
      }
    };
    return { tabbar: false, study: true };
  }

  /* ======================================================================
     Fiches méthode
     ====================================================================== */
  function viewMethode(id) {
    const me = S.methodes[id];
    if (!me) return null;
    const lies = [];
    S.matieres.forEach(m => (m.sujets || []).forEach(s => {
      const ty = T[s.type] || {};
      if ((s.methode || ty.methode) === id) lies.push({ m, s });
    }));
    app.innerHTML = topbar(E(me.titre), { sub: 'Fiche méthode' }) + `<div class="page">
      <div class="eyebrow" style="margin-top:6px">Méthode</div>
      <h1 class="h-display" style="font-size:1.9rem;margin-bottom:14px">${E(me.titre)}</h1>
      <article class="prose">${U.md(me.contenu)}</article>
      ${lies.length ? `<div class="section-title">${I('pen-line')} Mettre en pratique</div><div class="list">${lies.map(x => itemSujet(x.m, x.s)).join('')}</div>` : ''}
    </div>`;
    return { tabbar: false, study: true };
  }

  /* ======================================================================
     Réviser
     ====================================================================== */
  function viewReviser() {
    const due = countDue();
    const defi = Store.data.defi[today()];
    app.innerHTML = topbar('Réviser', { back: false, right: gearBtn() }) + `<div class="page">
      <p class="sub" style="margin:4px 2px 14px">Des séances courtes et régulières : c'est la meilleure façon de retenir.</p>
      <div class="list">
        <button class="card cta-card press" data-go="#/reviser/cartes" style="text-align:left">
          <span class="badge-ic">${I('layers')}</span><span><span class="t">Cartes à revoir</span><br><span class="d">${due ? `${due} carte${due > 1 ? 's' : ''} prête${due > 1 ? 's' : ''}, toutes matières confondues` : 'Aucune carte en attente aujourd\'hui'}</span></span><span class="go">${I('chevron-right')}</span></button>
        <button class="card cta-card press" data-go="#/defi" style="text-align:left">
          <span class="badge-ic">${I('target')}</span><span><span class="t">Défi du jour</span><br><span class="d">${defi != null ? `Ton score : ${defi}. Retente-le !` : 'Une question par matière'}</span></span><span class="go">${I('chevron-right')}</span></button>
      </div>
      <div class="section-title">${I('shuffle')} Quiz par matière</div>
      <div class="list">${S.matieres.filter(m => (m.quiz || []).length).map(m => `<button class="card item press" data-go="#/m/${m.id}/q/_mix" style="text-align:left">
        <span class="m-ic" style="width:38px;height:38px;border-radius:12px">${I(m.icone)}</span><span class="body"><span class="t">${E(m.nom)}</span><span class="d" style="display:block">10 questions au hasard</span></span><span class="chev">${I('chevron-right')}</span></button>`).join('')}</div>
      <div class="section-title">${I('list-checks')} Toutes les méthodes</div>
      <div class="list">${Object.keys(S.methodes).map(id => { const me = S.methodes[id]; return `<button class="card item press" data-go="#/methode/${id}" style="text-align:left">
        <span class="num">${I(me.icone || 'list-checks')}</span><span class="body"><span class="t">${E(me.titre)}</span><span class="d" style="display:block">${E(me.resume || '')}</span></span><span class="chev">${I('chevron-right')}</span></button>`; }).join('')}</div>
    </div>`;
    return { tab: 'reviser' };
  }

  /* ======================================================================
     Chrono
     ====================================================================== */
  function chronoRestant() {
    const c = Store.data.chrono;
    if (!c) return 0;
    return c.pause ? c.restant : Math.max(0, (c.fin - Date.now()) / 1000);
  }

  function startChrono(min, label, hash) {
    Store.data.chrono = { fin: Date.now() + min * 60000, duree: min * 60, label: label || '', hash: hash || '', pause: false };
    Store.save(true);
  }

  function stopChrono() {
    const c = Store.data.chrono;
    if (!c) return;
    const fait = c.duree - chronoRestant();
    if (fait > 30) { Store.addTime(Math.round(fait)); Store.action(); }
    Store.data.chrono = null;
    Store.save(true);
  }

  function miniChrono() {
    return `<div class="mini-chrono" id="mini-chrono" hidden>${I('timer')}<b data-chrono>0:00</b><span class="sp" data-chrono-label></span><button data-go="#/chrono" aria-label="Ouvrir le chrono">${I('chevron-right')}</button></div>`;
  }

  function tickChrono() {
    const c = Store.data.chrono;
    if (c && !c.pause && Date.now() >= c.fin) { finChrono(); return; }
    const rest = chronoRestant();
    if (c) {
      document.querySelectorAll('[data-chrono]').forEach(el => { el.textContent = U.fmtChrono(rest); });
      document.querySelectorAll('[data-chrono-label]').forEach(el => { el.textContent = (c.pause ? 'En pause · ' : '') + c.label; });
    }
    const mini = document.getElementById('mini-chrono');
    if (mini) mini.hidden = !c;
    const arc = document.querySelector('.ring.big .ring-arc');
    if (arc && c) {
      const len = 2 * Math.PI * 70;
      arc.setAttribute('stroke-dashoffset', len * (1 - rest / c.duree));
    }
  }

  function finChrono() {
    const c = Store.data.chrono;
    const label = c.label;
    stopChrono();
    Native.vibrate(900);
    if (cur.hash === '#/chrono') render();
    modal(`<div style="text-align:center"><div class="m-ic" style="margin:6px auto 12px;width:64px;height:64px;border-radius:20px">${I('trophy', 'ic-lg')}</div>
      <h3>Temps écoulé !</h3><p class="sub">${label ? E(label) + '<br>' : ''}Bravo pour cette séance. Pense à faire une vraie pause.</p>
      <button class="btn block" style="margin-top:18px" data-mact="ok">Super</button></div>`, { ok: closeModal });
  }

  function viewChrono() {
    const PRESETS = [[25, 'Pomodoro'], [5, 'Pause'], [50, '50 min'], [60, '1 h'], [120, '2 h'], [240, 'DS 4 h'], [360, 'DS 6 h']];
    let choix = 25;
    const j = Store.data.jours[today()] || { sec: 0 };
    const draw = () => {
      const c = Store.data.chrono;
      const rest = c ? chronoRestant() : choix * 60;
      const pct = c ? rest / c.duree : 1;
      app.innerHTML = topbar('Chrono', { back: false, right: gearBtn() }) + `<div class="page">
        <p class="sub" style="margin:4px 2px 0">Travaille sur papier en conditions réelles. Le temps compte dans ton objectif du jour.</p>
        <div class="card pad-lg" style="margin-top:16px;text-align:center">
          ${ring(pct, `<span data-chrono>${U.fmtChrono(rest)}</span>`, c ? `<span data-chrono-label>${E(c.label)}</span>` : 'prêt', true)}
          ${c ? '' : `<div class="presets">${PRESETS.map(p => `<button class="preset ${p[0] === choix ? 'on' : ''}" data-act="preset" data-v="${p[0]}">${p[1]}</button>`).join('')}</div>
            <div style="display:flex;gap:8px;align-items:center;justify-content:center;margin-bottom:16px"><span class="sub">ou</span>
            <input class="input" type="number" min="1" max="600" inputmode="numeric" placeholder="min" style="width:96px;text-align:center" data-input="custom"><span class="sub">minutes</span></div>`}
          <div class="btn-row">${c ? `<button class="btn line" data-act="stop">${I('x')} Arrêter</button>
            ${c.pause ? `<button class="btn" data-act="resume">${I('play')} Reprendre</button>` : `<button class="btn" data-act="pause">${I('pause')} Pause</button>`}` :
            `<button class="btn block" data-act="go">${I('play')} Démarrer</button>`}</div>
          ${c && c.hash ? `<button class="btn small ghost" style="margin-top:12px" data-go="${E(c.hash)}">${I('arrow-right')} Revenir au sujet</button>` : ''}
        </div>
        <div class="stats" style="grid-template-columns:1fr 1fr">
          <div class="stat"><div class="v">${Math.round(j.sec / 60)}<small style="font-size:.55em">min</small></div><div class="l">travaillées aujourd'hui</div></div>
          <div class="stat"><div class="v">${I('flame')}${Store.serie()}</div><div class="l">jours d'affilée</div></div>
        </div>
        <div class="callout callout-astuce"><div class="callout-title">${I('sparkles')}<span>La méthode Pomodoro</span></div>
          <div class="callout-body prose" style="font-size:.93rem">${U.md(`
            - 25 minutes de concentration totale, téléphone retourné.
            - 5 minutes de vraie pause (bouger, boire de l'eau).
            - Après 4 pomodoros, une pause longue de 15 à 30 minutes.
            - Pour un DS blanc, choisis la durée réelle de l'épreuve.`)}</div></div>
      </div>`;
      Native.keepAwake(!!(c && !c.pause));
    };
    cur.actions.preset = (el) => { choix = +el.dataset.v; draw(); };
    cur.actions.custom = (el) => {
      const v = parseInt(el.value, 10);
      if (v > 0 && v <= 600) {
        choix = v;
        app.querySelectorAll('.preset').forEach(b => b.classList.remove('on'));
        const lbl = app.querySelector('[data-chrono]');
        if (lbl) lbl.textContent = U.fmtChrono(v * 60);
      }
    };
    cur.actions.go = () => {
      const p = PRESETS.find(x => x[0] === choix);
      startChrono(choix, p ? p[1] : U.fmtDuree(choix), '');
      draw();
    };
    cur.actions.pause = () => { const c = Store.data.chrono; c.restant = chronoRestant(); c.pause = true; Store.save(true); draw(); };
    cur.actions.resume = () => { const c = Store.data.chrono; c.fin = Date.now() + c.restant * 1000; c.pause = false; Store.save(true); draw(); };
    cur.actions.stop = () => confirmBox('Arrêter le chrono ?', 'Le temps déjà passé sera compté dans ta journée.', 'Arrêter', () => { stopChrono(); draw(); });
    draw();
    cur.leave = () => Native.keepAwake(false);
    return { tab: 'chrono' };
  }

  /* ======================================================================
     Réglages
     ====================================================================== */
  function applyTaille() {
    document.documentElement.style.setProperty('--fs', (Store.data.profil.taille || 100) + '%');
  }

  function viewReglages() {
    const p = Store.data.profil;
    const draw = () => {
      app.innerHTML = topbar('Réglages') + `<div class="page">
        <div class="section-title" style="margin-top:8px">${I('graduation-cap')} Profil</div>
        <div class="card">
          <label class="field" style="margin-top:0"><span>Prénom</span><input class="input" data-input="prenom" value="${E(p.prenom)}" maxlength="30"></label>
          <div class="field"><span>Objectif quotidien</span><div class="chips">${[30, 60, 90, 120, 180].map(v => `<button class="preset ${v === p.objectif ? 'on' : ''}" data-act="obj" data-v="${v}">${U.fmtDuree(v)}</button>`).join('')}</div></div>
        </div>
        <div class="section-title">${I('book-open')} Lecture</div>
        <div class="card">
          <div class="field" style="margin-top:0"><span>Taille du texte : <b data-taille>${p.taille}%</b></span><input type="range" min="85" max="135" step="5" value="${p.taille}" data-input="taille"></div>
          <p class="prose" style="margin:10px 0 0;font-size:1rem">Aperçu : <i>Heureux qui, comme Ulysse, a fait un beau voyage…</i></p>
        </div>
        <div class="card" style="margin-top:12px;padding:4px 14px">
          <button class="setting" style="width:100%;text-align:left" data-act="vib">${I('sparkles', 'lead')}<span class="body"><span class="t">Vibrations</span><br><span class="d">À la fin du chrono et en cas d'erreur au quiz</span></span><span class="switch ${p.vibration ? 'on' : ''}"></span></button>
        </div>
        <div class="section-title">${I('download')} Sauvegarde</div>
        <div class="card" style="padding:4px 14px">
          <button class="setting" style="width:100%;text-align:left" data-act="export">${I('upload', 'lead')}<span class="body"><span class="t">Exporter mes données</span><br><span class="d">Envoie-toi une copie (mail, Drive…) pour ne rien perdre</span></span>${I('chevron-right')}</button>
          <button class="setting" style="width:100%;text-align:left" data-act="import">${I('download', 'lead')}<span class="body"><span class="t">Importer une sauvegarde</span><br><span class="d">Colle le texte d'une sauvegarde exportée</span></span>${I('chevron-right')}</button>
          <button class="setting" style="width:100%;text-align:left" data-act="reset">${I('rotate-ccw', 'lead')}<span class="body"><span class="t">Remettre la progression à zéro</span><br><span class="d">Tes notes personnelles sont conservées</span></span>${I('chevron-right')}</button>
        </div>
        <div class="section-title">${I('info')} À propos</div>
        <div class="card prose" style="font-size:.92rem">${U.md(`
          **Studium** — version 1.0. Une appli de révision pour l'hypokhâgne du lycée Frédéric-Mistral (Avignon).

          Les cours, quiz et sujets sont des **fiches de révision** rédigées à partir du programme et des plans de cours. Ils ne remplacent pas les cours des professeurs : en cas de doute, ce sont eux qui font foi. Complète l'appli avec tes propres notes.

          Les traductions de textes antiques sont des traductions de travail, adaptées pour l'entraînement.

          Icônes : Lucide (licence ISC). Police : EB Garamond (licence SIL OFL).`)}
        </div>
        <p class="footer-note">Ad astra per aspera.</p>
      </div>`;
    };
    draw();
    cur.actions.prenom = (el) => { if (el.value.trim()) { p.prenom = el.value.trim(); Store.save(); } };
    cur.actions.obj = (el) => { p.objectif = +el.dataset.v; Store.save(); app.querySelectorAll('[data-act=obj]').forEach(b => b.classList.toggle('on', b === el)); };
    cur.actions.taille = (el) => { p.taille = +el.value; applyTaille(); Store.save(); app.querySelector('[data-taille]').textContent = p.taille + '%'; };
    cur.actions.vib = (el) => { p.vibration = !p.vibration; Store.save(); el.querySelector('.switch').classList.toggle('on', p.vibration); };
    cur.actions.export = () => {
      const json = JSON.stringify(Store.data);
      if (!Native.share('Sauvegarde Studium ' + today(), json)) {
        modal(`<h3>Ta sauvegarde</h3><p class="sub">Copie ce texte et garde-le précieusement.</p><textarea class="textarea" readonly style="margin-top:10px;font-size:.75rem">${E(json)}</textarea>`);
      }
    };
    cur.actions.import = () => {
      modal(`<h3>Importer une sauvegarde</h3><p class="sub">Colle ici le texte exporté. Tes données actuelles seront remplacées.</p>
        <textarea class="textarea" id="imp" style="margin-top:10px;font-size:.8rem" placeholder='{"profil":…}'></textarea>
        <div class="btn-row"><button class="btn line" data-mact="no">Annuler</button><button class="btn" data-mact="ok">Importer</button></div>`,
      {
        no: closeModal,
        ok: () => {
          try {
            const d = JSON.parse(document.getElementById('imp').value);
            if (!d || !d.profil) throw new Error('format');
            localStorage.setItem('studium.v1', JSON.stringify(d));
            Store.load();
            applyTaille();
            closeModal();
            toast('Sauvegarde importée');
            draw();
          } catch (e) { toast('Ce texte n\'est pas une sauvegarde valide'); }
        }
      });
    };
    cur.actions.reset = () => confirmBox('Remettre à zéro ?', 'Cours lus, scores, cartes et copies seront effacés. Tes notes et ton profil sont conservés.', 'Remettre à zéro', () => {
      const d = Store.defaults();
      d.profil = Store.data.profil;
      d.notes = Store.data.notes;
      Store.data = d;
      Store.save(true);
      toast('Progression remise à zéro');
    });
    return { tab: null };
  }

  /* ======================================================================
     Ressources
     ====================================================================== */
  function viewRessources() {
    const R = window.RESSOURCES || [];
    app.innerHTML = topbar('Ressources') + `<div class="page">
      <p class="sub" style="margin:4px 2px 14px">Les sites de tes professeurs, à garder sous la main. Ils s'ouvrent dans ton navigateur.</p>
      <div class="list">${R.map(r => `<a class="card cta-card press" href="${E(r.url)}" data-ext="1" style="color:inherit">
        <span class="badge-ic">${I(r.icone || 'external-link')}</span><span><span class="t">${E(r.titre)}</span><br><span class="d">${E(r.desc)}</span></span><span class="go">${I('external-link')}</span></a>`).join('')}</div>
      <div class="callout callout-retenir" style="margin-top:18px"><div class="callout-title">${I('star')}<span>Bon à savoir</span></div>
        <div class="callout-body prose" style="font-size:.95rem">${U.md(`
          - **Littérature :** la professeure a inversé l'ordre du cours : on commence par la **poésie**, puis le **théâtre**, et on finit par le **roman**.
          - **Géographie :** le plan complet du cours sur **la forêt** se trouve dans les documents du **10 septembre** sur le site Œcoumène.
          - **Culture antique :** le thème de l'année est **« Connaître et transmettre »**.
          - Pense à recopier les plans et bibliographies dans l'onglet **Notes** de chaque matière.`)}</div></div>
    </div>`;
    return { tab: null };
  }

  /* ======================================================================
     Recherche
     ====================================================================== */
  let index = null;
  const strip = (s) => String(s || '').replace(/:::\w*/g, ' ').replace(/[#*>|=_^]/g, ' ').replace(/\s+/g, ' ').trim();

  function buildIndex() {
    if (index) return index;
    index = [];
    S.matieres.forEach(m => {
      (m.cours || []).forEach(c => index.push({ type: 'Cours', m: m.nom, titre: c.titre, texte: strip(c.contenu), go: `#/m/${m.id}/c/${c.id}` }));
      (m.sujets || []).forEach(s => index.push({ type: (T[s.type] || {}).label || 'Sujet', m: m.nom, titre: strip(s.titre), texte: strip([s.enonce, s.texte, s.pistes, s.corrige].join(' ')), go: `#/m/${m.id}/s/${s.id}` }));
      (m.quiz || []).forEach(q => index.push({ type: 'Quiz', m: m.nom, titre: q.titre, texte: strip(q.questions.map(x => x.q + ' ' + x.c[x.r] + ' ' + (x.e || '')).join(' ')), go: `#/m/${m.id}/q/${q.id}` }));
      (m.cartes || []).forEach(d => d.cartes.forEach(c => index.push({ type: 'Carte', m: m.nom, titre: strip(c[0]), texte: strip(c[1] + ' ' + (c[2] || '')), go: `#/m/${m.id}/d/${d.id}` })));
    });
    Object.keys(S.methodes).forEach(id => { const me = S.methodes[id]; index.push({ type: 'Méthode', m: '', titre: me.titre, texte: strip(me.contenu), go: `#/methode/${id}` }); });
    index.forEach(x => { x.nt = U.norm(x.titre); x.nx = U.norm(x.texte); });
    return index;
  }

  function viewRecherche(q) {
    const draw = (q) => {
      const terms = U.norm(q).split(/\s+/).filter(t => t.length > 1);
      let res = [];
      if (terms.length) {
        const notes = [];
        S.matieres.forEach(m => (Store.data.notes[m.id] || []).forEach(n => {
          const x = { type: 'Note', m: m.nom, titre: n.titre || 'Sans titre', texte: strip(n.texte), go: `#/m/${m.id}/n/${n.id}` };
          x.nt = U.norm(x.titre); x.nx = U.norm(x.texte);
          notes.push(x);
        }));
        buildIndex().concat(notes).forEach(x => {
          if (!terms.every(t => x.nt.includes(t) || x.nx.includes(t))) return;
          const sc = terms.reduce((a, t) => a + (x.nt.includes(t) ? 5 : 0) + (x.nx.includes(t) ? 1 : 0), 0) + (x.type === 'Cours' ? 1 : 0);
          res.push({ x, sc });
        });
        res.sort((a, b) => b.sc - a.sc);
        res = res.slice(0, 60);
      }
      const snippet = (x) => {
        const p = x.nx.indexOf(terms[0]);
        if (p < 0) return E(x.texte.slice(0, 120));
        const a = Math.max(0, p - 50), b = Math.min(x.texte.length, p + 90);
        let s = E((a ? '…' : '') + x.texte.slice(a, b) + (b < x.texte.length ? '…' : ''));
        terms.forEach(t => {
          const raw = x.texte.slice(p, p + t.length);
          if (raw && U.norm(raw) === t) s = s.split(E(raw)).join(`<span class="result-hl">${E(raw)}</span>`);
        });
        return s;
      };
      document.getElementById('res').innerHTML = !terms.length ? '' : !res.length ?
        `<div class="empty">${I('search')}<p>Aucun résultat pour « ${E(q)} ».</p></div>` :
        `<p class="sub" style="margin:0 2px 10px;font-size:.85rem">${res.length} résultat${res.length > 1 ? 's' : ''}</p><div class="list">` + res.map(({ x }) => `<button class="card press" data-go="${x.go}" style="text-align:left;display:block;width:100%">
          <span class="chips"><span class="chip red">${E(x.type)}</span>${x.m ? `<span class="chip">${E(x.m)}</span>` : ''}</span>
          <span style="display:block;font-weight:650;margin-top:8px">${E(x.titre)}</span>
          <span style="display:block;font-size:.86rem;color:var(--muted);margin-top:4px;line-height:1.45">${snippet(x)}</span></button>`).join('') + '</div>';
    };
    app.innerHTML = topbar('Recherche') + `<div class="page">
      <div class="search" style="margin-top:4px">${I('search')}<input class="input" type="search" value="${E(q)}" placeholder="Notion, auteur, mot latin…" data-input="q" enterkeyhint="search"></div>
      <div id="res" style="margin-top:16px"></div></div>`;
    let t = null;
    cur.actions.q = (el) => {
      clearTimeout(t);
      t = setTimeout(() => { draw(el.value); history.replaceState(null, '', '#/recherche/' + encodeURIComponent(el.value)); navStack[navStack.length - 1] = curHash(); }, 200);
    };
    draw(q);
    if (!q) setTimeout(() => { const i = app.querySelector('input'); if (i) i.focus(); }, 50);
    return { tab: null };
  }

  /* ======================================================================
     Divers
     ====================================================================== */
  function viewMessage(titre, texte) {
    app.innerHTML = topbar(E(titre)) + `<div class="page"><div class="empty">${I('info')}<p>${texte}</p>
      <button class="btn" data-go="#/">Retour à l'accueil</button></div></div>`;
    return { tab: null };
  }

  /* ======================================================================
     Temps d'étude
     ====================================================================== */
  let lastInteract = Date.now();
  ['touchstart', 'keydown', 'scroll', 'click'].forEach(ev => document.addEventListener(ev, () => { lastInteract = Date.now(); }, { passive: true }));
  setInterval(() => {
    if (document.visibilityState !== 'visible') return;
    if (Store.data.chrono && !Store.data.chrono.pause) return; // déjà compté par le chrono
    if (cur.study && Date.now() - lastInteract < 180000) Store.addTime(15);
  }, 15000);
  setInterval(tickChrono, 1000);
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') Store.save(true);
    else tickChrono();
  });

  /* ======================================================================
     Démarrage
     ====================================================================== */
  Store.load();
  applyTaille();
  tabbar.innerHTML = `<div class="tabs">
    <a href="#/" data-tab="home" data-go="#/">${I('house')}<span>Accueil</span></a>
    <a href="#/matieres" data-tab="matieres" data-go="#/matieres">${I('library-big')}<span>Matières</span></a>
    <a href="#/reviser" data-tab="reviser" data-go="#/reviser">${I('layers')}<span>Réviser</span><span class="dot" hidden></span></a>
    <a href="#/chrono" data-tab="chrono" data-go="#/chrono">${I('timer')}<span>Chrono</span></a></div>`;
  render();
})();
