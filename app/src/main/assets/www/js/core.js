/* Studium — noyau : registre des contenus, sauvegarde, outils, rendu du texte */
(function () {
  'use strict';

  /* ---------- Registre des contenus ---------- */
  var S = window.STUDIUM = {
    matieres: [],
    methodes: {},
    citations: [],
    add: function (m) { S.matieres.push(m); },
    methode: function (id, m) { m.id = id; S.methodes[id] = m; },
    matiere: function (id) {
      for (var i = 0; i < S.matieres.length; i++) if (S.matieres[i].id === id) return S.matieres[i];
      return null;
    }
  };

  /* ---------- Outils ---------- */
  var U = window.U = {};

  U.esc = function (s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  };

  U.icon = function (name, cls) {
    var p = (window.ICONS || {})[name] || '';
    return '<svg class="ic ' + (cls || '') + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" ' +
      'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + p + '</svg>';
  };

  U.pad = function (n) { return (n < 10 ? '0' : '') + n; };

  U.dayKey = function (d) {
    d = d || new Date();
    return d.getFullYear() + '-' + U.pad(d.getMonth() + 1) + '-' + U.pad(d.getDate());
  };

  U.addDays = function (key, n) {
    var p = key.split('-');
    var d = new Date(+p[0], +p[1] - 1, +p[2]);
    d.setDate(d.getDate() + n);
    return U.dayKey(d);
  };

  U.shuffle = function (a) {
    a = a.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  };

  U.hash = function (s) {
    var h = 0;
    for (var i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0;
    return Math.abs(h);
  };

  U.words = function (s) {
    s = (s || '').trim();
    return s ? s.split(/\s+/).length : 0;
  };

  U.fmtDuree = function (min) {
    if (!min) return '';
    if (min < 60) return min + ' min';
    var h = Math.floor(min / 60), m = min % 60;
    return h + ' h' + (m ? ' ' + U.pad(m) : '');
  };

  U.fmtChrono = function (sec) {
    sec = Math.max(0, Math.round(sec));
    var h = Math.floor(sec / 3600), m = Math.floor((sec % 3600) / 60), s = sec % 60;
    return (h ? h + ':' + U.pad(m) : m) + ':' + U.pad(s);
  };

  U.norm = function (s) {
    return String(s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
  };

  /* Retire l'indentation commune d'un bloc de texte écrit dans le code */
  U.dedent = function (txt) {
    var lines = String(txt || '').replace(/\t/g, '  ').split('\n');
    while (lines.length && !lines[0].trim()) lines.shift();
    while (lines.length && !lines[lines.length - 1].trim()) lines.pop();
    var min = Infinity;
    lines.forEach(function (l) {
      if (l.trim()) min = Math.min(min, l.match(/^ */)[0].length);
    });
    if (!isFinite(min)) min = 0;
    return lines.map(function (l) { return l.slice(min); }).join('\n');
  };

  /* ---------- Rendu du texte (Markdown simplifié) ----------
     # Titre / ## Sous-titre / ### / ####
     - puce, 1. numéro, I. / A. / a) : listes imbriquées par l'indentation (2 espaces)
     > citation                 | tableau | simple |
     :::def Titre ... :::       **gras**  *italique*  ==surligné==  [lien](url)
  */
  var CALLOUTS = {
    def: ['Définition', 'book-marked'],
    retenir: ['À retenir', 'star'],
    attention: ['Attention', 'info'],
    exemple: ['Exemple', 'lightbulb'],
    methode: ['Méthode', 'list-checks'],
    auteur: ['Référence', 'quote'],
    note: ['Note', 'pen-line'],
    astuce: ['Astuce', 'sparkles']
  };

  U.inline = function (s) {
    s = U.esc(s);
    s = s.replace(/\[([^\]]+)\]\((https?:[^)\s]+)\)/g, function (m, t, u) {
      return '<a href="' + u + '" data-ext="1">' + t + ' ' + U.icon('external-link', 'ic-xs') + '</a>';
    });
    s = s.replace(/\*\*\*([^*]+)\*\*\*/g, '<strong><em>$1</em></strong>');
    // le gras peut contenir de l'italique : **Le *Ménon*** → <strong>Le <em>Ménon</em></strong>
    s = s.replace(/\*\*((?:[^*]|\*(?!\*)|\*(?=\*\*(?!\*)))+?)\*\*(?!\*)/g, '<strong>$1</strong>');
    s = s.replace(/(^|[^*\w])\*([^*\s][^*]*?)\*(?!\w)/g, '$1<em>$2</em>');
    s = s.replace(/==([^=]+)==/g, '<mark>$1</mark>');
    s = s.replace(/\^\^([^^]+)\^\^/g, '<span class="red">$1</span>');
    return s;
  };

  var LIST_RE = /^(\s*)([-*•]|\d+[.)]|[IVX]+\.|[A-H]\.|[a-h]\))\s+(.*)$/;

  function renderList(lines) {
    // lines : [{indent, marker, text}] ; construit des listes imbriquées
    var root = { children: [], indent: -1 };
    var stack = [root];
    lines.forEach(function (it) {
      while (stack.length > 1 && it.indent <= stack[stack.length - 1].indent) stack.pop();
      var node = { indent: it.indent, marker: it.marker, text: it.text, children: [] };
      stack[stack.length - 1].children.push(node);
      stack.push(node);
    });
    function out(nodes) {
      var h = '<ul class="md-list">';
      nodes.forEach(function (n) {
        var bullet = /^[-*•]$/.test(n.marker);
        var lvl = /^[IVX]+\.$/.test(n.marker) ? 'lv-roman' : /^[A-H]\.$/.test(n.marker) ? 'lv-alpha' : '';
        h += '<li class="' + (bullet ? 'is-bullet' : 'is-num') + ' ' + lvl + '">' +
          '<span class="mk">' + (bullet ? '' : U.esc(n.marker)) + '</span>' +
          '<div class="li-body"><div class="li-text">' + U.inline(n.text) + '</div>' +
          (n.children.length ? out(n.children) : '') + '</div></li>';
      });
      return h + '</ul>';
    }
    return out(root.children);
  }

  function renderTable(rows) {
    var cells = rows.map(function (r) {
      return r.trim().replace(/^\|/, '').replace(/\|$/, '').split('|').map(function (c) { return c.trim(); });
    });
    var head = cells[0], body = cells.slice(1).filter(function (r) { return !r.every(function (c) { return /^:?-{2,}:?$/.test(c); }); });
    var h = '<div class="table-wrap"><table><thead><tr>' + head.map(function (c) { return '<th>' + U.inline(c) + '</th>'; }).join('') + '</tr></thead><tbody>';
    body.forEach(function (r) { h += '<tr>' + r.map(function (c) { return '<td>' + U.inline(c) + '</td>'; }).join('') + '</tr>'; });
    return h + '</tbody></table></div>';
  }

  U.md = function (txt) {
    var lines = U.dedent(txt).split('\n');
    var html = '', i = 0;
    while (i < lines.length) {
      var line = lines[i], t = line.trim();
      if (!t) { i++; continue; }

      var co = t.match(/^:::(\w+)\s*(.*)$/);
      if (co) {
        var depth = 1, inner = [];
        i++;
        while (i < lines.length) {
          var tt = lines[i].trim();
          if (/^:::\w+/.test(tt)) depth++;
          else if (tt === ':::') { depth--; if (!depth) { i++; break; } }
          inner.push(lines[i]);
          i++;
        }
        var def = CALLOUTS[co[1]] || CALLOUTS.note;
        html += '<div class="callout callout-' + co[1] + '"><div class="callout-title">' + U.icon(def[1]) +
          '<span>' + U.inline(co[2] || def[0]) + '</span></div><div class="callout-body">' + U.md(inner.join('\n')) + '</div></div>';
        continue;
      }

      var hm = t.match(/^(#{1,4})\s+(.*)$/);
      if (hm) {
        var lv = hm[1].length + 1;
        html += '<h' + lv + ' class="md-h">' + U.inline(hm[2]) + '</h' + lv + '>';
        i++; continue;
      }

      if (/^-{3,}$/.test(t)) { html += '<hr>'; i++; continue; }

      if (t.charAt(0) === '>') {
        var q = [];
        while (i < lines.length && lines[i].trim().charAt(0) === '>') {
          q.push(lines[i].trim().replace(/^>\s?/, ''));
          i++;
        }
        var src = '';
        if (q.length > 1 && /^[—–-]\s/.test(q[q.length - 1])) src = q.pop().replace(/^[—–-]\s/, '');
        html += '<blockquote><p>' + q.map(U.inline).join('<br>') + '</p>' + (src ? '<cite>' + U.inline(src) + '</cite>' : '') + '</blockquote>';
        continue;
      }

      if (t.charAt(0) === '|') {
        var rows = [];
        while (i < lines.length && lines[i].trim().charAt(0) === '|') { rows.push(lines[i]); i++; }
        html += renderTable(rows);
        continue;
      }

      if (LIST_RE.test(line)) {
        var items = [];
        while (i < lines.length) {
          var l = lines[i];
          if (!l.trim()) {
            // une ligne vide ne coupe la liste que si la suite n'est pas un élément de liste
            if (i + 1 < lines.length && LIST_RE.test(lines[i + 1])) { i++; continue; }
            break;
          }
          var m = l.match(LIST_RE);
          if (m) {
            items.push({ indent: m[1].length, marker: m[2], text: m[3] });
          } else if (items.length && /^\s+/.test(l)) {
            items[items.length - 1].text += ' ' + l.trim();
          } else break;
          i++;
        }
        html += renderList(items);
        continue;
      }

      var para = [t];
      i++;
      while (i < lines.length && lines[i].trim() && !/^(#{1,4}\s|>|\||:::|-{3,}$)/.test(lines[i].trim()) && !LIST_RE.test(lines[i])) {
        para.push(lines[i].trim());
        i++;
      }
      html += '<p>' + para.map(U.inline).join('<br>') + '</p>';
    }
    return html;
  };

  /* Texte d'étude (poème, extrait) avec numéros de lignes tous les 5 vers/lignes */
  U.texte = function (txt, opts) {
    opts = opts || {};
    var lines = U.dedent(txt).split('\n');
    var n = 0, h = '<div class="doc' + (opts.vers ? ' doc-vers' : '') + (opts.lang ? ' lang-' + opts.lang : '') + '">';
    lines.forEach(function (l) {
      if (!l.trim()) { h += '<div class="doc-gap"></div>'; return; }
      n++;
      h += '<div class="doc-l"><span class="doc-n">' + (n % 5 === 0 ? n : '') + '</span><span class="doc-t">' + U.inline(l) + '</span></div>';
    });
    return h + '</div>';
  };

  /* ---------- Sauvegarde ---------- */
  var KEY = 'studium.v1';
  var Store = window.Store = {
    data: null,
    defaults: function () {
      return {
        profil: { prenom: '', objectif: 60, taille: 100, vibration: true, cree: U.dayKey() },
        jours: {},      // "2026-10-20": { sec: 0, actions: 0 }
        cours: {},      // "latin/c1": date de lecture
        quiz: {},       // "latin/q1": { best, last, n, date }
        cartes: {},     // "latin/d1": { idx: { b: boîte, due: jour } }
        sujets: {},     // "latin/s1": { etapes: {}, eval: {}, fini, maj, items: {} }
        notes: {},      // "latin": [ { id, titre, texte, maj } ]
        chrono: null,   // { fin, duree, label, pause }
        dernier: null,  // { hash, titre, matiere }
        defi: {}        // "2026-10-20": score
      };
    },
    load: function () {
      var raw = null;
      try { raw = localStorage.getItem(KEY); } catch (e) { /* stockage indisponible */ }
      var d = Store.defaults();
      if (raw) {
        try {
          var p = JSON.parse(raw);
          Object.keys(d).forEach(function (k) { if (p[k] !== undefined) d[k] = p[k]; });
          d.profil = Object.assign(Store.defaults().profil, p.profil || {});
        } catch (e) { /* sauvegarde illisible : on repart de zéro */ }
      }
      Store.data = d;
      return d;
    },
    _t: null,
    save: function (now) {
      clearTimeout(Store._t);
      var w = function () {
        try { localStorage.setItem(KEY, JSON.stringify(Store.data)); } catch (e) { /* plein ou indisponible */ }
      };
      if (now) w(); else Store._t = setTimeout(w, 250);
    },
    jour: function (key) {
      key = key || U.dayKey();
      var j = Store.data.jours[key];
      if (!j) j = Store.data.jours[key] = { sec: 0, actions: 0 };
      return j;
    },
    action: function () {
      Store.jour().actions++;
      Store.save();
    },
    addTime: function (sec) {
      Store.jour().sec += sec;
      Store.save();
    },
    serie: function () {
      var j = Store.data.jours, k = U.dayKey(), n = 0;
      var actif = function (x) { return j[x] && (j[x].actions > 0 || j[x].sec >= 120); };
      if (!actif(k)) k = U.addDays(k, -1);
      while (actif(k)) { n++; k = U.addDays(k, -1); }
      return n;
    },
    semaineMin: function () {
      var k = U.dayKey(), s = 0;
      for (var i = 0; i < 7; i++) { var j = Store.data.jours[k]; if (j) s += j.sec; k = U.addDays(k, -1); }
      return Math.round(s / 60);
    },
    totalActions: function () {
      var s = 0, j = Store.data.jours;
      Object.keys(j).forEach(function (k) { s += j[k].actions || 0; });
      return s;
    }
  };

  /* ---------- Pont Android (partage, vibration, écran allumé) ---------- */
  var Native = window.Native = {
    has: function () { return !!window.StudiumAndroid; },
    share: function (titre, texte) {
      if (window.StudiumAndroid) { window.StudiumAndroid.share(titre, texte); return true; }
      if (navigator.share) { navigator.share({ title: titre, text: texte }).catch(function () {}); return true; }
      return false;
    },
    vibrate: function (ms) {
      if (!Store.data.profil.vibration) return;
      if (window.StudiumAndroid) window.StudiumAndroid.vibrate(ms || 400);
      else if (navigator.vibrate) navigator.vibrate(ms || 400);
    },
    keepAwake: function (on) {
      if (window.StudiumAndroid) window.StudiumAndroid.keepScreenOn(!!on);
    },
    open: function (url) {
      if (window.StudiumAndroid) window.StudiumAndroid.openUrl(url);
      else window.open(url, '_blank');
    }
  };
})();
