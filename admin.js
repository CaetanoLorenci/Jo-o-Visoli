/* ============================================================
   GRUPO AMPLIA — ADMIN PANEL SCRIPT v3
   Senha padrão: Amplia2026
   ============================================================ */

// ── DEFAULTS ────────────────────────────────────────────────
const DEFAULTS = {
  'g-company':    'Grupo Amplia',
  'g-tagline':    'Estruturação comercial de alta performance.',
  'g-whatsapp':   '5549936181867',
  'g-instagram':  'grupo.amplia',
  'g-logo-size':  36,

  'h-eyebrow':  'A nossa proposta de valor',
  'h-pillar1':  'Para construir um negócio que venda todos os dias, de forma independente do dono.',
  'h-pillar2':  'Através de uma metodologia que nós vivenciamos diariamente no Grupo Amplia.',
  'h-cta':      'Quero estruturar meu comercial',

  'sb-eyebrow':     'Quem somos',
  'sb-h2':          'Somos uma {Estruturadora Comercial}',
  'sb-quote':       'Construímos um negócio que vende todos os dias, de forma independente do dono — e ensinamos nossos clientes a fazer o mesmo.',
  'sb-cite':        '— Grupo Amplia',
  'sb-p1':          'O foco aqui é aumentar a sua precificação e estruturar o seu comercial. Somos uma empresa jovem com 14 meses de mercado e resultados que falam por si: mais de meio milhão de reais gerados para empresários brasileiros em setores do varejo, automotivo e serviços.',
  'sb-p2':          'Antes de levar a metodologia para os nossos clientes, nós a aplicamos em nós mesmos — e dobramos o nosso próprio faturamento, saindo de R$13K para R$25K ao mês no início de 2024.',
  'sb-b1':          'Metodologia vivenciada internamente',
  'sb-b2':          'Resultados mensuráveis desde o 1º mês',
  'sb-b3':          'Processos completos: captação ao fechamento',
  'sb-badge-from':  'R$13K',
  'sb-badge-to':    'R$25K',
  'sb-badge-label': 'nosso próprio faturamento dobrado',

  'pq-eyebrow': 'Para quem é',
  'pq-title':   'Você se identifica com alguma dessas situações?',
  'pq-icon-1':  '😤', 'pq-text-1': 'Você é o único que sabe vender na empresa e se sente refém do seu próprio negócio',
  'pq-icon-2':  '📉', 'pq-text-2': 'Suas vendas são inconsistentes — mês bom, mês ruim, sem previsibilidade',
  'pq-icon-3':  '🤝', 'pq-text-3': 'Você não sabe como contratar, treinar e gerir um time comercial',
  'pq-icon-4':  '💸', 'pq-text-4': 'Você cobra barato, tem dificuldade em aumentar sua precificação sem perder clientes',
  'pq-icon-5':  '📣', 'pq-text-5': 'Seu marketing não gera leads qualificados para o seu time de vendas fechar',
  'pq-icon-6':  '🎯', 'pq-text-6': 'Você quer escalar, mas não tem processos comerciais estruturados',
  'pq-cta-text': 'Se você se identificou com pelo menos uma dessas situações, o Grupo Amplia é para você.',
  'pq-cta-btn':  'Quero resolver isso agora',

  stats: [
    { prefix: 'R$', value: '500', suffix: 'mil+', label: 'em faturamento gerado para clientes' },
    { prefix: '',   value: '14',  suffix: ' meses', label: 'de mercado com resultados comprovados' },
    { prefix: '',   value: '60',  suffix: '%', label: 'de taxa de fechamento em reuniões de vendas' },
    { prefix: '',   value: '8',   suffix: '+ clientes', label: 'de grande porte atendidos' },
  ],

  solutions: [
    { num: '01', icon: '✨', title: 'Identidade & Posicionamento Digital', desc: 'Construímos a presença digital que diferencia você do seu concorrente — do posicionamento estratégico ao visual e à voz que vendem.', items: 'Estratégia de posicionamento\nIdentidade visual para redes\nBio, feed e arquitetura de presença\nVoz, tom e narrativa da marca\nMarca pessoal do empresário', highlight: '' },
    { num: '02', icon: '📣', title: 'Gestão de Conteúdo & Redes Sociais', desc: 'Planejamento editorial e execução diária. Sua marca falando todos os dias com intenção — não só postando por postar.', items: 'Calendário editorial estratégico\nCopy persuasiva por formato\nPostagem e agendamento diário\nRelacionamento e gestão de DMs\nAnálise de métricas e ajustes', highlight: '' },
    { num: '03', icon: '🎬', title: 'Audiovisual & Roteiro', desc: 'Do roteiro ao corte final. Vídeos que prendem atenção e levam para a venda — Reels, anúncios, institucional e marca pessoal.', items: 'Roteiro estratégico por objetivo\nDireção e captação profissional\nEdição que segura a atenção\nReels, ads, institucional e VSLs\nConteúdo de marca pessoal', highlight: '+10M de visualizações geradas' },
    { num: '04', icon: '📈', title: 'Tráfego Pago & Aquisição', desc: 'Campanhas que geram demanda previsível — não impressões, mas reuniões marcadas e vendas fechadas.', items: 'Estratégia de campanha (Meta + Google)\nFunil de aquisição estruturado\nCriativos validados em teste\nGestão diária e otimização\nRelatórios com CAC, ROAS e LTV', highlight: '+6 dígitos gerenciados em ads' },
  ],

  clients: [
    { tag: 'Automotivo', name: 'Marlon Veículos', value: '+R$350K', period: 'bruto no 1º mês', desc: 'Mais de R$350 mil em venda de veículos no primeiro mês.' },
    { tag: 'Automotivo', name: 'Chama Autocar', value: '+R$100K', period: 'bruto no 1º mês', desc: 'Mais de R$100 mil em vendas no primeiro mês de assessoria.' },
    { tag: 'Moda', name: 'Colcci', value: 'R$60K', period: 'em vendas geradas', desc: 'Resultados expressivos para uma das maiores marcas de moda do Brasil.' },
    { tag: 'Moda esportiva', name: 'Track & Field', value: 'R$30K', period: 'em vendas geradas', desc: 'Estratégias comerciais que impulsionaram as vendas de forma consistente.' },
    { tag: 'Moda premium', name: 'Tommy Hilfiger', value: '✓', period: 'parceria ativa', desc: 'Marca reconhecida mundialmente confiou no Grupo Amplia.' },
    { tag: 'Serviços', name: 'F4 Autocenter', value: '✓', period: 'parceria ativa', desc: 'Um dos maiores autocenters do Oeste de SC.' },
    { tag: 'Gastronomia', name: 'Alecrim', value: '✓', period: 'parceria ativa', desc: 'Um dos maiores empórios e cafeterias da região.' },
    { tag: 'Mentor', name: 'Ascendy – Ale Ferreira', value: '+180K', period: 'seguidores | R$200K aos 18 anos', desc: 'Mentor que ajudou a estruturar a empresa.' },
  ],

  founders: [
    { initials: 'CL', name: 'Caetano Lorenci', role: 'Expert em Marketing e Gestão de Dados', statNum: '+6 dígitos', statLabel: 'gerenciados em anúncios', bio: 'Especialista em transformar dados em estratégias de marketing que geram receita.' },
  ],

  videos: [],

  'ct-title': 'Pronto para vender mais e melhor?',
  'ct-sub':   'Fale com nossa equipe e descubra como estruturar seu comercial de alta performance. Sem enrolação.',
  'ct-wabtn': 'Falar no WhatsApp',
  'ct-igbtn': 'Ver no Instagram',

  // Layout
  'l-headline':       '{VENDA} MAIS e {MELHOR}\natravés da\n{ESTRUTURAÇÃO COMERCIAL}\nde alta {performance!}',
  'l-fontsize':       'xlarge',
  'l-align':          'center',
  'l-italic':         true,
  'l-mark-bg':        true,
  'l-show-eyebrow':   true,
  'l-show-pillars':   true,
  'l-show-trust':     true,
  'l-show-ghost-btn': true,
  'l-wide-spacing':   false,
  'l-bg':             'black',
  'n-layout':         'row',
  's-style':          'bordered',
  'c-fmt':            'grid',
  'f-style':          'centered',

  // Section headers
  'sol-eyebrow': 'O que oferecemos',
  'sol-h2':      'Nossas {4 Soluções}',
  'res-eyebrow': 'Prova social',
  'res-h2':      'Empresas que {confiam} no Grupo Amplia',
  'fnd-eyebrow': 'Nossa equipe',
  'fnd-h2':      'FUNDADORES',
  'fnd-sub':     'Somos uma estruturadora comercial. O foco é aumentar a sua precificação e estruturar o seu comercial.',

  // Hero trust bar
  'trust-label': 'Empresas que confiam em nós:',
  'trust-1':     'Colcci',
  'trust-2':     'Tommy Hilfiger',
  'trust-3':     'Track & Field',
  'trust-4':     'Marlon Veículos',
  'trust-5':     'F4 Autocenter',

  // FAQ
  'faq-eyebrow': 'Dúvidas frequentes',
  'faq-h2':      'Perguntas {frequentes}',
  'faq-sub':     'Ainda com dúvidas? Fale diretamente com a nossa equipe no WhatsApp.',
  faq: [
    { q: 'Para qual tipo de empresa o Grupo Amplia atende?', a: 'Atendemos empresários de qualquer segmento que queiram estruturar seu comercial e escalar as vendas. Já atendemos moda (Colcci, Tommy Hilfiger, Track & Field), automotivo (Marlon Veículos, Chama Autocar, F4 Autocenter), gastronomia (Alecrim) e outros.' },
    { q: 'Qual é o prazo para ver resultados?', a: 'Nossos clientes do setor automotivo já geramos resultados no 1º mês (R$350K para Marlon Veículos e R$100K para Chama Autocar). O prazo varia de acordo com o segmento e o ponto de partida do seu comercial, mas trabalhamos para gerar resultado o mais rápido possível.' },
    { q: 'Como funciona a Mentoria Comercial?', a: 'Montamos todos os seus processos comerciais do zero: pesquisa de ICP, script de cold call, processo de apresentação para gerar valor antes do preço, gestão de equipe e encontros 1x1 para estruturar e tirar dúvidas. Nossa taxa de fechamento em reuniões é de 60%.' },
    { q: 'Vocês trabalham com empresas de fora do Brasil?', a: 'Atualmente, nossa atuação é focada em empresas brasileiras. Se você tiver interesse em uma parceria internacional, entre em contato para conversarmos sobre viabilidade.' },
    { q: 'Como começar a trabalhar com o Grupo Amplia?', a: 'É simples: clique no botão "Falar com a equipe", entre em contato via WhatsApp ou Instagram, e nossa equipe vai apresentar as soluções mais adequadas para o seu negócio.' },
  ],
};

// ── STORAGE / AUTH ───────────────────────────────────────────
const STORAGE_KEY  = 'amplia_content';
const PWD_KEY      = 'amplia_pwd_hash';
const SESSION_KEY  = 'amplia_auth';
const TOKEN_KEY    = 'amplia_github_token';
const DEFAULT_PWD  = 'Amplia2026';
const GITHUB_OWNER = 'CaetanoLorenci';
const GITHUB_REPO  = 'Jo-o-Visoli';
const GITHUB_FILE  = 'content.json';

async function sha256(str) {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(str));
  return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2,'0')).join('');
}
async function checkPassword(input) {
  const stored  = localStorage.getItem(PWD_KEY);
  const inputH  = await sha256(input);
  const compare = stored || await sha256(DEFAULT_PWD);
  return inputH === compare;
}
async function setPassword(newPwd) {
  localStorage.setItem(PWD_KEY, await sha256(newPwd));
}

// Clear stored hash if it still matches old default so new default takes effect
(async () => {
  const stored = localStorage.getItem(PWD_KEY);
  if (stored && stored === await sha256('Amplia@2024')) localStorage.removeItem(PWD_KEY);
})();

function loadData()     { try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}'); } catch { return {}; } }
function saveData(data) {
  data._revision = Date.now();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

// Pull content.json from the repo and overwrite localStorage when the server
// has a newer _revision. Ensures direct edits to content.json propagate to the
// admin's own browser instead of being shadowed by a stale local cache.
async function syncFromServer() {
  try {
    const r = await fetch('content.json?v=' + Date.now(), { cache: 'no-cache' });
    if (!r.ok) return;
    const serverData = await r.json();
    if (!serverData || !Object.keys(serverData).length) return;
    const localData = loadData();
    const srvRev = Number(serverData._revision) || 0;
    const locRev = Number(localData._revision) || 0;
    if (srvRev > locRev) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(serverData));
    }
  } catch {}
}

function get(key) {
  const d = loadData();
  if (key in d) return d[key];
  if (key in DEFAULTS) return DEFAULTS[key];
  return '';
}

// ── AUTH ─────────────────────────────────────────────────────
const loginScreen = document.getElementById('loginScreen');
const dashboard   = document.getElementById('dashboard');
const loginForm   = document.getElementById('loginForm');
const loginError  = document.getElementById('loginError');

function showDashboard() {
  loginScreen.style.display = 'none';
  dashboard.hidden = false;
  initDashboard().catch(err => console.error('[admin] initDashboard failed:', err));
}

if (sessionStorage.getItem(SESSION_KEY) === '1') showDashboard();

loginForm.addEventListener('submit', async e => {
  e.preventDefault();
  const ok = await checkPassword(document.getElementById('pwd').value);
  if (ok) { sessionStorage.setItem(SESSION_KEY, '1'); loginError.classList.remove('show'); showDashboard(); }
  else    { loginError.classList.add('show'); document.getElementById('pwd').value = ''; }
});

document.getElementById('togglePwd').addEventListener('click', () => {
  const el = document.getElementById('pwd');
  el.type = el.type === 'text' ? 'password' : 'text';
});

document.getElementById('logoutBtn').addEventListener('click', () => {
  sessionStorage.removeItem(SESSION_KEY); location.reload();
});

// ── TABS ─────────────────────────────────────────────────────
const TAB_TITLES = {
  geral: 'Configurações Gerais', layout: 'Layout do Hero', hero: 'Textos do Hero',
  numeros: 'Números / Stats', solucoes: 'Soluções', clientes: 'Clientes / Resultados',
  fundadores: 'Fundadores', videos: 'Portfólio de Vídeos',
  faq: 'FAQ', contato: 'Contato / Links', senha: 'Alterar Senha',
};

function switchTab(tab) {
  document.querySelectorAll('.sidebar__item').forEach(b => b.classList.toggle('active', b.dataset.tab === tab));
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.toggle('active', p.id === `tab-${tab}`));
  document.getElementById('mainTitle').textContent = TAB_TITLES[tab] || tab;
}
document.querySelectorAll('.sidebar__item').forEach(btn => btn.addEventListener('click', () => switchTab(btn.dataset.tab)));

// ── SIDEBAR TOGGLE ───────────────────────────────────────────
const sidebar     = document.getElementById('sidebar');
const mainContent = document.getElementById('mainContent');
document.getElementById('sidebarToggle').addEventListener('click', () => {
  if (window.innerWidth <= 900) sidebar.classList.toggle('mobile-open');
  else { sidebar.classList.toggle('collapsed'); mainContent.classList.toggle('full'); }
});
document.querySelectorAll('.sidebar__item').forEach(btn => btn.addEventListener('click', () => {
  if (window.innerWidth <= 900) sidebar.classList.remove('mobile-open');
}));

// ── TOAST ─────────────────────────────────────────────────────
function showToast(msg = '✓ Alterações salvas com sucesso!') {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2800);
}

// ── MARKUP PARSER ─────────────────────────────────────────────
function parseMarkup(raw, isItalic) {
  const withSpans = raw.replace(/\{([^}]*)\}/g, '<span class="or">$1</span>');
  const lines = withSpans.split('\n');
  const lastIdx = lines.length - 1;
  return lines.map((line, i) => {
    const isLast  = i === lastIdx;
    const wrapped = isLast && isItalic ? `<em>${line}</em>` : line;
    return i < lastIdx ? wrapped + '<br/>' : wrapped;
  }).join('');
}

const BG_CSS = {
  'black':       '#000',
  'dark-orange': 'linear-gradient(135deg,#000 0%,#1c0900 100%)',
  'deep-dark':   '#060606',
  'dark-warm':   'linear-gradient(160deg,#0d0d0d 0%,#1a0500 100%)',
  'charcoal':    '#141414',
};
const FONT_SIZE_CSS = {
  xlarge: 'clamp(2.6rem, 6vw, 5.2rem)',
  large:  'clamp(2rem, 4.5vw, 4rem)',
  medium: 'clamp(1.6rem, 3.5vw, 3rem)',
  small:  'clamp(1.2rem, 2.5vw, 2rem)',
};

// ─────────────────────────────────────────────
// POPULATE FIELDS
// ─────────────────────────────────────────────
function populateSimpleFields() {
  [
    'g-company','g-tagline','g-whatsapp','g-instagram',
    'h-eyebrow','h-pillar1','h-pillar2','h-cta',
    'ct-title','ct-sub','ct-wabtn','ct-igbtn',
    'sb-eyebrow','sb-h2','sb-quote','sb-cite','sb-p1','sb-p2','sb-b1','sb-b2','sb-b3',
    'sb-badge-from','sb-badge-to','sb-badge-label',
    'pq-eyebrow','pq-title',
    'pq-icon-1','pq-text-1','pq-icon-2','pq-text-2','pq-icon-3','pq-text-3',
    'pq-icon-4','pq-text-4','pq-icon-5','pq-text-5','pq-icon-6','pq-text-6',
    'pq-cta-text','pq-cta-btn',
    // Section headers + trust bar + FAQ header
    'sol-eyebrow','sol-h2','res-eyebrow','res-h2',
    'fnd-eyebrow','fnd-h2','fnd-sub',
    'trust-label','trust-1','trust-2','trust-3','trust-4','trust-5',
    'faq-eyebrow','faq-h2','faq-sub',
  ].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = get(id);
  });
  const logoSize = document.getElementById('g-logo-size');
  if (logoSize) {
    logoSize.value = get('g-logo-size') || 36;
    const lbl = document.getElementById('logo-size-val');
    if (lbl) lbl.textContent = logoSize.value;
  }
}

function populateLayoutFields() {
  document.getElementById('l-headline').value = get('l-headline');

  const fs = get('l-fontsize');
  document.getElementById('l-fontsize').value = fs;
  document.querySelectorAll('[data-size]').forEach(b => b.classList.toggle('active', b.dataset.size === fs));

  const al = get('l-align');
  document.getElementById('l-align').value = al;
  document.querySelectorAll('[data-align]').forEach(b => b.classList.toggle('active', b.dataset.align === al));

  const bg = get('l-bg');
  document.getElementById('l-bg').value = bg;
  document.querySelectorAll('.swatch').forEach(b => b.classList.toggle('active', b.dataset.bg === bg));

  ['l-italic','l-mark-bg','l-show-eyebrow','l-show-pillars','l-show-trust','l-show-ghost-btn','l-wide-spacing'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.checked = get(id) !== false;
  });

  const nl = get('n-layout');
  document.getElementById('n-layout').value = nl;
  document.querySelectorAll('[data-numlayout]').forEach(b => b.classList.toggle('active', b.dataset.numlayout === nl));

  const ss = get('s-style');
  document.getElementById('s-style').value = ss;
  document.querySelectorAll('[data-solstyle]').forEach(b => b.classList.toggle('active', b.dataset.solstyle === ss));

  const cf = get('c-fmt');
  document.getElementById('c-fmt').value = cf;
  document.querySelectorAll('[data-clifmt]').forEach(b => b.classList.toggle('active', b.dataset.clifmt === cf));

  const fst = get('f-style');
  document.getElementById('f-style').value = fst;
  document.querySelectorAll('[data-fndstyle]').forEach(b => b.classList.toggle('active', b.dataset.fndstyle === fst));
}

// ─────────────────────────────────────────────
// BUILD EDITORS (generated lists)
// ─────────────────────────────────────────────
function makeAccordion(title, fieldsHtml) {
  const d = document.createElement('div');
  d.className = 'card-editor';
  d.innerHTML = `
    <div class="card-editor__hd"><h3>${title}</h3><span class="card-editor__icon">+</span></div>
    <div class="card-editor__body"><div class="form-grid">${fieldsHtml}</div></div>`;
  d.querySelector('.card-editor__hd').addEventListener('click', () => {
    d.classList.toggle('open');
    updateAllPreviews();
  });
  return d;
}

function buildStatEditors() {
  const c = document.getElementById('stat-editors');
  c.innerHTML = '';
  get('stats').forEach((s, i) => {
    const el = document.createElement('div');
    el.className = 'stat-card';
    el.innerHTML = `<h3>Stat ${i+1}</h3>
      <div class="form-grid">
        <div class="field"><label>Prefixo</label><input type="text" id="st-pre-${i}" value="${s.prefix}" /></div>
        <div class="field"><label>Valor</label><input type="text" id="st-val-${i}" value="${s.value}" /></div>
        <div class="field"><label>Sufixo</label><input type="text" id="st-suf-${i}" value="${s.suffix}" /></div>
        <div class="field"><label>Legenda</label><input type="text" id="st-lbl-${i}" value="${s.label}" /></div>
      </div>`;
    c.appendChild(el);
  });
}

function buildSolEditors() {
  const c = document.getElementById('sol-editors');
  c.innerHTML = '';
  get('solutions').forEach((s, i) => {
    c.appendChild(makeAccordion(`${s.num} – ${s.title}`, `
      <div class="field"><label>Ícone</label><input type="text" id="so-icon-${i}" value="${s.icon}" /></div>
      <div class="field"><label>Número</label><input type="text" id="so-num-${i}" value="${s.num}" /></div>
      <div class="field full"><label>Título</label><input type="text" id="so-title-${i}" value="${s.title}" /></div>
      <div class="field full"><label>Descrição</label><textarea rows="2" id="so-desc-${i}">${s.desc}</textarea></div>
      <div class="field full"><label>Itens (um por linha)</label><textarea rows="4" id="so-items-${i}">${s.items}</textarea></div>
      <div class="field full"><label>Destaque (vazio = oculto)</label><input type="text" id="so-hl-${i}" value="${s.highlight}" /></div>`));
  });
}

function buildClientEditors() {
  const c = document.getElementById('client-editors');
  c.innerHTML = '';
  get('clients').forEach((cl, i) => {
    c.appendChild(makeAccordion(cl.name, `
      <div class="field"><label>Segmento</label><input type="text" id="cl-tag-${i}" value="${cl.tag}" /></div>
      <div class="field"><label>Nome</label><input type="text" id="cl-name-${i}" value="${cl.name}" /></div>
      <div class="field"><label>Valor</label><input type="text" id="cl-val-${i}" value="${cl.value}" /></div>
      <div class="field"><label>Período</label><input type="text" id="cl-per-${i}" value="${cl.period}" /></div>
      <div class="field full"><label>Descrição</label><textarea rows="2" id="cl-desc-${i}">${cl.desc}</textarea></div>`));
  });
}

function buildFounderEditors() {
  const c = document.getElementById('founder-editors');
  c.innerHTML = '';
  get('founders').forEach((f, i) => {
    c.appendChild(makeAccordion(f.name, `
      <div class="field"><label>Iniciais</label><input type="text" id="fn-ini-${i}" value="${f.initials}" /></div>
      <div class="field"><label>Nome</label><input type="text" id="fn-name-${i}" value="${f.name}" /></div>
      <div class="field full"><label>Cargo</label><input type="text" id="fn-role-${i}" value="${f.role}" /></div>
      <div class="field"><label>Número destaque</label><input type="text" id="fn-snum-${i}" value="${f.statNum}" /></div>
      <div class="field"><label>Label do número</label><input type="text" id="fn-slbl-${i}" value="${f.statLabel}" /></div>
      <div class="field full"><label>Bio</label><textarea rows="2" id="fn-bio-${i}">${f.bio}</textarea></div>`));
  });
}

function buildFaqEditors() {
  const c = document.getElementById('faq-editors');
  if (!c) return;
  c.innerHTML = '';
  get('faq').forEach((f, i) => {
    const el = document.createElement('div');
    el.className = 'stat-card';
    el.innerHTML = `<h3>Pergunta ${i + 1}</h3>
      <div class="form-grid">
        <div class="field full"><label>Pergunta</label><input type="text" id="faq-q-${i}" /></div>
        <div class="field full"><label>Resposta</label><textarea rows="3" id="faq-a-${i}"></textarea></div>
      </div>`;
    c.appendChild(el);
    const qEl = el.querySelector(`#faq-q-${i}`);
    const aEl = el.querySelector(`#faq-a-${i}`);
    if (qEl) qEl.value = f.q;
    if (aEl) aEl.value = f.a;
  });
}

// ─────────────────────────────────────────────
// VIDEO EDITORS
// ─────────────────────────────────────────────
function buildVideoEditors() {
  const list = document.getElementById('videos-list');
  if (!list) return;
  const videos = get('videos') || [];
  list.innerHTML = '';
  videos.forEach((v, i) => addVideoRow(i, v));
}

function addVideoRow(i, v = {}) {
  const list = document.getElementById('videos-list');
  const div = document.createElement('div');
  div.className = 'video-editor';
  div.dataset.vidIdx = i;
  div.innerHTML = `
    <div class="form-grid">
      <div class="field full"><label>Título</label><input type="text" id="vid-title-${i}" value="${v.title||''}" placeholder="Ex: Case João Silva — R$0 para R$50K" /></div>
      <div class="field full">
        <label>URL do vídeo</label>
        <input type="text" id="vid-url-${i}" value="${v.url||''}" placeholder="YouTube, Vimeo, Google Drive ou link .mp4" />
        <small style="color:var(--wh3);font-size:.72rem;margin-top:.25rem;display:block">Suporta: youtube.com, youtu.be, vimeo.com, drive.google.com, ou link direto .mp4</small>
      </div>
      <div class="field full"><label>Descrição (opcional)</label><input type="text" id="vid-desc-${i}" value="${v.desc||''}" /></div>
      <div class="field">
        <label>Orientação</label>
        <div style="display:flex;gap:.5rem;margin-top:.35rem">
          <label style="display:flex;align-items:center;gap:.4rem;cursor:pointer;font-size:.82rem">
            <input type="radio" name="vid-orient-${i}" id="vid-orient-h-${i}" value="horizontal" ${(v.orient||'horizontal')==='horizontal'?'checked':''} /> Horizontal
          </label>
          <label style="display:flex;align-items:center;gap:.4rem;cursor:pointer;font-size:.82rem">
            <input type="radio" name="vid-orient-${i}" id="vid-orient-v-${i}" value="vertical" ${v.orient==='vertical'?'checked':''} /> Vertical
          </label>
        </div>
      </div>
    </div>
    <button type="button" class="btn-remove-item" data-vid-remove="${i}">✕ Remover</button>
    <hr style="border-color:var(--bd);margin:1rem 0" />
  `;
  list.appendChild(div);
  div.querySelector('[data-vid-remove]').addEventListener('click', () => {
    div.remove();
    renumberVideos();
  });
}

function renumberVideos() {
  document.querySelectorAll('.video-editor').forEach((div, i) => {
    div.dataset.vidIdx = i;
    div.querySelector('[data-vid-remove]').dataset.vidRemove = i;
    ['title','url','desc'].forEach(f => {
      const el = div.querySelector(`[id^="vid-${f}-"]`);
      if (el) el.id = `vid-${f}-${i}`;
    });
  });
}

function collectVideos() {
  return [...document.querySelectorAll('.video-editor')].map(div => {
    const i = div.dataset.vidIdx;
    const orientEl = div.querySelector(`input[name="vid-orient-${i}"]:checked`);
    return {
      title:  document.getElementById(`vid-title-${i}`)?.value || '',
      url:    document.getElementById(`vid-url-${i}`)?.value   || '',
      desc:   document.getElementById(`vid-desc-${i}`)?.value  || '',
      orient: orientEl?.value || 'horizontal',
    };
  }).filter(v => v.url);
}

// ─────────────────────────────────────────────
// LIVE PREVIEWS
// ─────────────────────────────────────────────
function updatePreviewGeral() {
  const co   = document.getElementById('g-company')?.value   || DEFAULTS['g-company'];
  const tl   = document.getElementById('g-tagline')?.value   || DEFAULTS['g-tagline'];
  const wa   = document.getElementById('g-whatsapp')?.value  || DEFAULTS['g-whatsapp'];
  const ig   = document.getElementById('g-instagram')?.value || DEFAULTS['g-instagram'];
  const size = parseInt(document.getElementById('g-logo-size')?.value || DEFAULTS['g-logo-size']);
  const el   = id => document.getElementById(id);
  if (el('pv-company'))  el('pv-company').textContent  = co;
  if (el('pv-tagline'))  el('pv-tagline').textContent  = tl;
  if (el('pv-wa'))       el('pv-wa').textContent       = `WhatsApp: ${wa}`;
  if (el('pv-ig'))       el('pv-ig').textContent       = `@${ig}`;
  // Logo size preview (scaled: main site uses full px, preview is ~50% scale)
  if (el('pv-logo'))     el('pv-logo').style.height    = Math.round(size * 0.5) + 'px';
  if (el('logo-size-val')) el('logo-size-val').textContent = size;
  // Custom logo src
  const storedSrc = get('g-logo-src');
  if (storedSrc) {
    if (el('pv-logo'))          el('pv-logo').src          = storedSrc;
    if (el('logoUploadPreview')) el('logoUploadPreview').src = storedSrc;
  }
}

function updatePreviewHero() {
  const ey = document.getElementById('h-eyebrow')?.value || DEFAULTS['h-eyebrow'];
  const p1 = document.getElementById('h-pillar1')?.value || DEFAULTS['h-pillar1'];
  const p2 = document.getElementById('h-pillar2')?.value || DEFAULTS['h-pillar2'];
  const ct = document.getElementById('h-cta')?.value     || DEFAULTS['h-cta'];
  const el = id => document.getElementById(id);
  if (el('pv-h-eyebrow')) el('pv-h-eyebrow').textContent = ey.toUpperCase();
  if (el('pv-h-pillar1')) el('pv-h-pillar1').textContent = p1;
  if (el('pv-h-pillar2')) el('pv-h-pillar2').textContent = p2;
  if (el('pv-h-cta'))     el('pv-h-cta').textContent    = ct.toUpperCase();
}

function updatePreviewLayout() {
  const raw      = document.getElementById('l-headline')?.value   ?? get('l-headline');
  const isItalic = document.getElementById('l-italic')?.checked   ?? true;
  const fs       = document.getElementById('l-fontsize')?.value   ?? 'xlarge';
  const bg       = document.getElementById('l-bg')?.value         ?? 'black';
  const align    = document.getElementById('l-align')?.value      ?? 'left';
  const wide     = document.getElementById('l-wide-spacing')?.checked ?? false;
  const showEy   = document.getElementById('l-show-eyebrow')?.checked ?? true;
  const showPi   = document.getElementById('l-show-pillars')?.checked ?? true;
  const showTr   = document.getElementById('l-show-trust')?.checked   ?? true;
  const showGh   = document.getElementById('l-show-ghost-btn')?.checked ?? true;
  const showMk   = document.getElementById('l-mark-bg')?.checked   ?? true;
  const eyText   = document.getElementById('h-eyebrow')?.value    || DEFAULTS['h-eyebrow'];
  const ctaText  = document.getElementById('h-cta')?.value        || DEFAULTS['h-cta'];

  const el = id => document.getElementById(id);
  if (el('prevHeadline')) {
    el('prevHeadline').innerHTML = parseMarkup(raw, isItalic);
    el('prevHeadline').className = `pv-headline fs-${fs}`;
    el('prevHeadline').style.textAlign  = align;
    el('prevHeadline').style.letterSpacing = wide ? '.08em' : '';
  }
  if (el('previewHero'))    el('previewHero').style.background  = BG_CSS[bg] || '#000';
  if (el('prevEyebrow'))  { el('prevEyebrow').textContent = eyText.toUpperCase(); el('prevEyebrow').style.display = showEy ? '' : 'none'; }
  if (el('prevPillars'))    el('prevPillars').style.display   = showPi ? '' : 'none';
  if (el('prevTrust'))      el('prevTrust').style.display     = showTr ? '' : 'none';
  if (el('prevGhostBtn'))   el('prevGhostBtn').style.display  = showGh ? '' : 'none';
  if (el('prevMark'))       el('prevMark').style.display      = showMk ? '' : 'none';
  if (el('prevCtaBtn'))     el('prevCtaBtn').textContent      = ctaText.toUpperCase();
  const hero = el('previewHero');
  if (hero) hero.style.alignItems = align === 'center' ? 'center' : '';
}

function updatePreviewNumeros() {
  const stats  = collectStats();
  const layout = document.getElementById('n-layout')?.value ?? 'row';
  const pv     = document.getElementById('pv-numeros');
  if (!pv) return;
  pv.className = 'pv-numeros' + (layout === 'grid' ? ' grid-layout' : '');
  pv.innerHTML = stats.map(s => `
    <div class="pv-stat">
      <span class="pv-stat-val">${s.prefix}${s.value}${s.suffix}</span>
      <span class="pv-stat-lbl">${s.label}</span>
    </div>`).join('');
}

function updatePreviewSolucoes() {
  const sols  = collectSolutions();
  const style = document.getElementById('s-style')?.value ?? 'bordered';
  const pv    = document.getElementById('pv-solucoes');
  if (!pv) return;
  pv.innerHTML = sols.map((s, i) => {
    const cls = i === 1 ? 'pv-sol-card featured' : (style === 'filled' ? 'pv-sol-card filled' : style === 'minimal' ? 'pv-sol-card minimal' : 'pv-sol-card');
    const items = (s.items || '').split('\n').filter(Boolean).slice(0,3).map(it => `<li>${it}</li>`).join('');
    return `<div class="${cls}">
      <div class="pv-sol-icon">${s.icon}</div>
      <div class="pv-sol-title">${s.title}</div>
      <ul class="pv-sol-items">${items}</ul>
    </div>`;
  }).join('');
}

function updatePreviewClientes() {
  const clients = collectClients();
  const fmt     = document.getElementById('c-fmt')?.value ?? 'grid';
  const pv      = document.getElementById('pv-clientes');
  if (!pv) return;
  pv.className = 'pv-clientes' + (fmt === 'list' ? ' list-layout' : fmt === 'compact' ? ' compact-layout' : '');
  const shown = fmt === 'compact' ? clients.slice(0,6) : clients.slice(0,4);
  pv.innerHTML = shown.map(c => `
    <div class="pv-cli-card">
      <span class="pv-cli-tag">${c.tag}</span>
      <div class="pv-cli-name">${c.name}</div>
      <span class="pv-cli-val">${c.value}</span>
      <span class="pv-cli-per">${c.period}</span>
    </div>`).join('');
}

function updatePreviewFundadores() {
  const founders = collectFounders();
  const style    = document.getElementById('f-style')?.value ?? 'centered';
  const pv       = document.getElementById('pv-fundadores');
  if (!pv) return;
  pv.innerHTML = founders.map(f => {
    const cls = style === 'left' ? 'pv-fnd-card left-style' : style === 'minimal' ? 'pv-fnd-card minimal-style' : 'pv-fnd-card';
    return `<div class="${cls}">
      <div class="pv-fnd-av">${f.initials}</div>
      <div>
        <div class="pv-fnd-name">${f.name}</div>
        <div class="pv-fnd-role">${f.role}</div>
        <div class="pv-fnd-stat">${f.statNum}</div>
      </div>
    </div>`;
  }).join('');
}

function updatePreviewFaq() {
  const el = id => document.getElementById(id);
  const g  = id => document.getElementById(id)?.value || DEFAULTS[id] || '';
  if (el('pv-faq-eyebrow')) el('pv-faq-eyebrow').textContent = g('faq-eyebrow').toUpperCase();
  if (el('pv-faq-title')) {
    el('pv-faq-title').innerHTML = g('faq-h2').replace(/\{([^}]*)\}/g, '<span style="color:#fc4900">$1</span>');
  }
  const list = el('pv-faq-list');
  if (list) {
    list.innerHTML = DEFAULTS.faq.map((_, i) => {
      const q = document.getElementById(`faq-q-${i}`)?.value || DEFAULTS.faq[i]?.q || '';
      return `<div class="pv-faq-item"><span>+</span>&nbsp;<span>${q}</span></div>`;
    }).join('');
  }
}

function updatePreviewContato() {
  const title = document.getElementById('ct-title')?.value || DEFAULTS['ct-title'];
  const sub   = document.getElementById('ct-sub')?.value   || DEFAULTS['ct-sub'];
  const wa    = document.getElementById('ct-wabtn')?.value || DEFAULTS['ct-wabtn'];
  const ig    = document.getElementById('ct-igbtn')?.value || DEFAULTS['ct-igbtn'];
  const el = id => document.getElementById(id);
  if (el('pv-ct-title')) el('pv-ct-title').innerHTML = title;
  if (el('pv-ct-sub'))   el('pv-ct-sub').textContent = sub;
  if (el('pv-ct-wa'))    el('pv-ct-wa').textContent  = wa;
  if (el('pv-ct-ig'))    el('pv-ct-ig').textContent  = ig;
}

function updatePreviewSobre() {
  const g = id => document.getElementById(id)?.value || DEFAULTS[id] || '';
  const el = id => document.getElementById(id);
  if (el('pv-sb-quote'))  el('pv-sb-quote').textContent  = '"' + g('sb-quote') + '"';
  if (el('pv-sb-cite'))   el('pv-sb-cite').textContent   = g('sb-cite');
  if (el('pv-sb-from'))   el('pv-sb-from').textContent   = g('sb-badge-from');
  if (el('pv-sb-to'))     el('pv-sb-to').textContent     = g('sb-badge-to');
  if (el('pv-sb-eyebrow'))el('pv-sb-eyebrow').textContent= g('sb-eyebrow').toUpperCase();
  if (el('pv-sb-h2'))     el('pv-sb-h2').textContent     = g('sb-h2').replace(/\{([^}]*)\}/g, '$1');
  if (el('pv-sb-p1'))     el('pv-sb-p1').textContent     = g('sb-p1').substring(0, 100) + '…';
}

function updatePreviewParaQuem() {
  const g = id => document.getElementById(id)?.value || DEFAULTS[id] || '';
  const el = id => document.getElementById(id);
  if (el('pv-pq-eyebrow')) el('pv-pq-eyebrow').textContent = g('pq-eyebrow').toUpperCase();
  if (el('pv-pq-title'))   el('pv-pq-title').textContent   = g('pq-title');
  const grid = el('pv-pq-grid');
  if (grid) {
    grid.innerHTML = [1,2,3,4,5,6].map(i =>
      `<div class="pv-pq-card"><span>${g('pq-icon-'+i)}</span><p>${g('pq-text-'+i).substring(0,60)}…</p></div>`
    ).join('');
  }
}

function updateAllPreviews() {
  updatePreviewGeral();
  updatePreviewHero();
  updatePreviewLayout();
  updatePreviewNumeros();
  updatePreviewSobre();
  updatePreviewParaQuem();
  updatePreviewSolucoes();
  updatePreviewClientes();
  updatePreviewFundadores();
  updatePreviewFaq();
  updatePreviewContato();
}

// ─────────────────────────────────────────────
// PRESET BUTTON WIRING
// ─────────────────────────────────────────────
function wirePresets(selector, hiddenId, attr) {
  document.querySelectorAll(selector).forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll(selector).forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById(hiddenId).value = btn.dataset[attr];
      updateAllPreviews();
    });
  });
}

// ─────────────────────────────────────────────
// COLLECT DATA
// ─────────────────────────────────────────────
function countRendered(idPrefix) {
  return document.querySelectorAll(`[id^="${idPrefix}"]`).length;
}
function collectStats() {
  return Array.from({ length: countRendered('st-val-') }, (_, i) => ({
    prefix: document.getElementById(`st-pre-${i}`)?.value ?? '',
    value:  document.getElementById(`st-val-${i}`)?.value ?? '',
    suffix: document.getElementById(`st-suf-${i}`)?.value ?? '',
    label:  document.getElementById(`st-lbl-${i}`)?.value ?? '',
  }));
}
function collectSolutions() {
  return Array.from({ length: countRendered('so-title-') }, (_, i) => ({
    num:       document.getElementById(`so-num-${i}`)?.value   ?? '',
    icon:      document.getElementById(`so-icon-${i}`)?.value  ?? '',
    title:     document.getElementById(`so-title-${i}`)?.value ?? '',
    desc:      document.getElementById(`so-desc-${i}`)?.value  ?? '',
    items:     document.getElementById(`so-items-${i}`)?.value ?? '',
    highlight: document.getElementById(`so-hl-${i}`)?.value    ?? '',
  }));
}
function collectClients() {
  return Array.from({ length: countRendered('cl-name-') }, (_, i) => ({
    tag:    document.getElementById(`cl-tag-${i}`)?.value  ?? '',
    name:   document.getElementById(`cl-name-${i}`)?.value ?? '',
    value:  document.getElementById(`cl-val-${i}`)?.value  ?? '',
    period: document.getElementById(`cl-per-${i}`)?.value  ?? '',
    desc:   document.getElementById(`cl-desc-${i}`)?.value ?? '',
  }));
}
function collectFounders() {
  return Array.from({ length: countRendered('fn-name-') }, (_, i) => ({
    initials:  document.getElementById(`fn-ini-${i}`)?.value  ?? '',
    name:      document.getElementById(`fn-name-${i}`)?.value  ?? '',
    role:      document.getElementById(`fn-role-${i}`)?.value  ?? '',
    statNum:   document.getElementById(`fn-snum-${i}`)?.value  ?? '',
    statLabel: document.getElementById(`fn-slbl-${i}`)?.value  ?? '',
    bio:       document.getElementById(`fn-bio-${i}`)?.value   ?? '',
  }));
}

function collectAll() {
  const d = {};
  ['g-company','g-tagline','g-whatsapp','g-instagram','h-eyebrow','h-pillar1','h-pillar2','h-cta','ct-title','ct-sub','ct-wabtn','ct-igbtn'].forEach(id => {
    const el = document.getElementById(id);
    if (el) d[id] = el.value;
  });
  const logoSize = document.getElementById('g-logo-size');
  if (logoSize) d['g-logo-size'] = parseInt(logoSize.value);
  // Logo src (base64) — carried over from stored data if not changed in this session
  const storedLogoSrc = get('g-logo-src');
  if (storedLogoSrc) d['g-logo-src'] = storedLogoSrc;
  d.stats     = collectStats();
  d.solutions = collectSolutions();
  d.clients   = collectClients();
  d.founders  = collectFounders();
  d.videos    = collectVideos();
  // Layout
  ['l-headline','l-fontsize','l-align','l-bg','n-layout','s-style','c-fmt','f-style'].forEach(id => {
    const el = document.getElementById(id);
    if (el) d[id] = el.value;
  });
  ['l-italic','l-mark-bg','l-show-eyebrow','l-show-pillars','l-show-trust','l-show-ghost-btn','l-wide-spacing'].forEach(id => {
    const el = document.getElementById(id);
    if (el) d[id] = el.checked;
  });
  // Sobre
  ['sb-eyebrow','sb-h2','sb-quote','sb-cite','sb-p1','sb-p2','sb-b1','sb-b2','sb-b3','sb-badge-from','sb-badge-to','sb-badge-label'].forEach(id => {
    const el = document.getElementById(id);
    if (el) d[id] = el.value;
  });
  // Para Quem
  const pqIds = ['pq-eyebrow','pq-title','pq-cta-text','pq-cta-btn'];
  for (let i = 1; i <= 6; i++) { pqIds.push(`pq-icon-${i}`, `pq-text-${i}`); }
  pqIds.forEach(id => {
    const el = document.getElementById(id);
    if (el) d[id] = el.value;
  });
  // Section headers + trust bar + FAQ header
  ['sol-eyebrow','sol-h2','res-eyebrow','res-h2','fnd-eyebrow','fnd-h2','fnd-sub',
   'trust-label','trust-1','trust-2','trust-3','trust-4','trust-5',
   'faq-eyebrow','faq-h2','faq-sub'].forEach(id => {
    const el = document.getElementById(id);
    if (el) d[id] = el.value;
  });
  // FAQ items
  d.faq = DEFAULTS.faq.map((_, i) => ({
    q: document.getElementById(`faq-q-${i}`)?.value ?? '',
    a: document.getElementById(`faq-a-${i}`)?.value ?? '',
  }));
  return d;
}

// ── SAVE ──────────────────────────────────────────────────────
document.getElementById('saveBtn').addEventListener('click', () => {
  saveData(collectAll());
  showToast('✓ Alterações salvas com sucesso!');
});

// ── PASSWORD CHANGE ───────────────────────────────────────────
document.getElementById('changePwdBtn').addEventListener('click', async () => {
  const curr = document.getElementById('pwd-current').value;
  const nw   = document.getElementById('pwd-new').value;
  const cf   = document.getElementById('pwd-confirm').value;
  const msg  = document.getElementById('pwdMsg');
  if (!(await checkPassword(curr)))  { msg.className='pwd-msg error';   msg.textContent='Senha atual incorreta.'; return; }
  if (nw.length < 6)                 { msg.className='pwd-msg error';   msg.textContent='Nova senha muito curta (mín. 6 caracteres).'; return; }
  if (nw !== cf)                     { msg.className='pwd-msg error';   msg.textContent='As senhas não coincidem.'; return; }
  await setPassword(nw);
  msg.className='pwd-msg success'; msg.textContent='Senha alterada com sucesso!';
  ['pwd-current','pwd-new','pwd-confirm'].forEach(id => document.getElementById(id).value='');
});

// ── PUBLISH TO GITHUB ─────────────────────────────────────────
function utf8ToBase64(str) {
  const bytes = new TextEncoder().encode(str);
  let bin = '';
  bytes.forEach(b => { bin += String.fromCharCode(b); });
  return btoa(bin);
}

async function publishContent() {
  const token = localStorage.getItem(TOKEN_KEY);
  if (!token) {
    showToast('⚠ Configure o GitHub Token na aba "Senha" primeiro!');
    switchTab('senha');
    return;
  }

  const btn = document.getElementById('publishBtn');
  if (btn) { btn.disabled = true; btn.textContent = 'Publicando…'; }

  try {
    const apiUrl = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${GITHUB_FILE}`;
    const headers = { 'Authorization': `token ${token}`, 'Accept': 'application/vnd.github.v3+json', 'Content-Type': 'application/json' };

    let sha = null;
    const getResp = await fetch(apiUrl, { headers });
    if (getResp.ok) { sha = (await getResp.json()).sha; }

    const data = collectAll();
    saveData(data);

    const body = { message: 'chore: update site content via admin panel', content: utf8ToBase64(JSON.stringify(data, null, 2)) };
    if (sha) body.sha = sha;

    const putResp = await fetch(apiUrl, { method: 'PUT', headers, body: JSON.stringify(body) });

    if (putResp.ok) {
      showToast('🌐 Publicado! Todos os dispositivos verão as alterações em instantes.');
    } else {
      const err = await putResp.json().catch(() => ({}));
      showToast(`⚠ Erro ao publicar: ${err.message || putResp.status}`);
    }
  } catch (e) {
    showToast(`⚠ Erro de rede: ${e.message}`);
  } finally {
    if (btn) {
      btn.disabled = false;
      btn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg> Publicar';
    }
  }
}

// ── INIT ──────────────────────────────────────────────────────
let _previewDebounce;
function schedulePreviewUpdate() {
  clearTimeout(_previewDebounce);
  _previewDebounce = setTimeout(updateAllPreviews, 120);
}

async function initDashboard() {
  // Pull latest published content before populating editors so that direct
  // edits to content.json (or other devices' publishes) don't get hidden by
  // a stale local cache on this device.
  await syncFromServer();

  populateSimpleFields();
  populateLayoutFields();
  buildStatEditors();
  buildSolEditors();
  buildClientEditors();
  buildFounderEditors();
  buildVideoEditors();
  buildFaqEditors();

  // Wire add button for videos
  document.getElementById('addVideoBtn')?.addEventListener('click', () => {
    const count = document.querySelectorAll('.video-editor').length;
    addVideoRow(count);
  });

  // Wire preset buttons
  wirePresets('[data-size]',      'l-fontsize', 'size');
  wirePresets('[data-align]',     'l-align',    'align');
  wirePresets('.swatch',          'l-bg',       'bg');
  wirePresets('[data-numlayout]', 'n-layout',   'numlayout');
  wirePresets('[data-solstyle]',  's-style',    'solstyle');
  wirePresets('[data-clifmt]',    'c-fmt',      'clifmt');
  wirePresets('[data-fndstyle]',  'f-style',    'fndstyle');

  // Wire all inputs → debounced live preview (avoids rebuilding every preview
  // pane on every keystroke, which made the panel feel laggy).
  document.querySelectorAll('input:not([type=password]):not([type=hidden]), textarea').forEach(el => {
    el.addEventListener('input', schedulePreviewUpdate);
    el.addEventListener('change', schedulePreviewUpdate);
  });

  // ── Logo upload ──
  const uploadArea    = document.getElementById('logoUploadArea');
  const fileInput     = document.getElementById('g-logo-file');
  const removeBtn     = document.getElementById('logoRemoveBtn');
  const uploadPreview = document.getElementById('logoUploadPreview');

  if (uploadArea && fileInput) {
    // Show remove button if custom logo already saved
    if (get('g-logo-src') && removeBtn) removeBtn.style.display = '';

    uploadArea.addEventListener('click', (e) => {
      if (e.target === fileInput) return; // evita loop
      fileInput.click();
    });

    fileInput.addEventListener('change', () => {
      const file = fileInput.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = e => {
        const src = e.target.result;
        // Store immediately (will be included in next Save)
        const d = (() => { try { return JSON.parse(localStorage.getItem('amplia_content') || '{}'); } catch { return {}; } })();
        d['g-logo-src'] = src;
        localStorage.setItem('amplia_content', JSON.stringify(d));
        // Update previews
        if (uploadPreview) uploadPreview.src = src;
        const pvLogo = document.getElementById('pv-logo');
        if (pvLogo) pvLogo.src = src;
        if (removeBtn) removeBtn.style.display = '';
        showToast('✓ Logo atualizada! Clique em Salvar para confirmar.');
      };
      reader.readAsDataURL(file);
    });

    if (removeBtn) {
      removeBtn.addEventListener('click', () => {
        const d = (() => { try { return JSON.parse(localStorage.getItem('amplia_content') || '{}'); } catch { return {}; } })();
        delete d['g-logo-src'];
        localStorage.setItem('amplia_content', JSON.stringify(d));
        if (uploadPreview) uploadPreview.src = 'logo.png';
        const pvLogo = document.getElementById('pv-logo');
        if (pvLogo) pvLogo.src = 'logo.png';
        removeBtn.style.display = 'none';
        fileInput.value = '';
        showToast('✓ Logo personalizada removida.');
      });
    }
  }

  // ── Publish button ──
  document.getElementById('publishBtn')?.addEventListener('click', publishContent);

  // ── GitHub token field & save ──
  const tokenEl = document.getElementById('github-token');
  if (tokenEl) {
    const saved = localStorage.getItem(TOKEN_KEY);
    if (saved) tokenEl.value = saved;
  }
  document.getElementById('saveTokenBtn')?.addEventListener('click', () => {
    const val = document.getElementById('github-token')?.value?.trim();
    if (val) { localStorage.setItem(TOKEN_KEY, val); showToast('✓ Token salvo neste dispositivo.'); }
    else { showToast('⚠ Digite um token antes de salvar.'); }
  });

  updateAllPreviews();
}
