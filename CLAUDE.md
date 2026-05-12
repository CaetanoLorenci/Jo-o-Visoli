# CLAUDE.md — Grupo Amplia · Site Institucional

Leia este arquivo inteiro antes de fazer qualquer alteração. Ele contém o contexto técnico completo do projeto e informações sobre o negócio.

---

## 1. Sobre o Negócio — Grupo Amplia

**O Grupo Amplia é uma empresa de marketing e estruturação comercial de alta performance.**
Não confunda com a Rocket Consórcios — são empresas completamente diferentes.
- **Grupo Amplia** → marketing, vendas, estruturação comercial
- **Rocket** → consórcios (empresa separada, sem relação)

### O que a empresa faz
O Grupo Amplia ajuda empresários a vender mais e melhor. O foco principal é:
1. Aumentar a precificação do cliente
2. Estruturar o processo comercial completo (captação → qualificação → fechamento)
3. Tornar o negócio independente do dono para vender todos os dias

### Dados de mercado (usados no site)
- **14 meses** de mercado com resultados comprovados
- **+R$500K** em faturamento gerado para clientes
- **60%** de taxa de fechamento em reuniões de vendas
- **8+ clientes** de grande porte atendidos
- Dobraram o próprio faturamento: de **R$13K para R$25K/mês** no início de 2024

### As 4 Soluções da empresa
| # | Produto | O que é |
|---|---------|---------|
| 01 | Assessoria de Marketing | Marketing interno + marca pessoal do empresário, gestão de redes, estratégia de conteúdo, +6 dígitos em anúncios |
| 02 | Mentoria Comercial | Processos do zero: ICP, cold call, script, apresentação, gestão de equipe, encontros 1x1. 60% de taxa de fechamento |
| 03 | Captação Audiovisual | Vídeos institucionais, conteúdo para redes, +10M de visualizações geradas para clientes |
| 04 | Produtos Educacionais | Cursos, playbooks e materiais de marketing e vendas |

### Clientes e resultados
| Cliente | Segmento | Resultado |
|---------|----------|-----------|
| Marlon Veículos | Automotivo | +R$350K bruto no 1º mês |
| Chama Autocar | Automotivo | +R$100K bruto no 1º mês |
| Colcci | Moda | R$60K em vendas |
| Track & Field | Moda esportiva | R$30K em vendas |
| Tommy Hilfiger | Moda premium | Parceria ativa |
| F4 Autocenter | Automotivo/Serviços | Parceria ativa — maior autocenter do Oeste de SC |
| Alecrim | Gastronomia | Parceria ativa — maior empório/cafeteria da região |
| Ascendy (Ale Ferreira) | Mentor | +180K seguidores, R$200K aos 18 anos — mentor que ajudou a estruturar a empresa |

### Fundador (card no site)
- **Caetano Lorenci** — Expert em Marketing e Gestão de Dados. +6 dígitos gerenciados em anúncios. Especialista em transformar dados em estratégias de marketing que geram receita real e previsível.

> Nota: João Visoli e João Mortari eram fundadores originais mas foram removidos do site a pedido do cliente. Apenas Caetano Lorenci deve aparecer no card de fundadores.

### Tom de voz
Direto, confiante, orientado a resultado. Linguagem de alta performance. Sem rodeios. Foco em números reais e provas sociais.

---

## 2. Repositório e Hospedagem

- **Repositório GitHub:** `CaetanoLorenci/Jo-o-Visoli`
- **Branch principal (live):** `main`
- **Branch de feature (legado):** `claude/add-chat-feature-WgQq7` — já foi mergeada em `main`, não usar mais
- **Hospedagem:** GitHub Pages servindo a partir da branch `main`
- **URL do site:** `https://caetanolorenci.github.io/Jo-o-Visoli/`

### Arquivos do projeto
```
/
├── index.html        ← Página principal do site (estrutura HTML fixa)
├── styles.css        ← Todos os estilos do site
├── script.js         ← Carrega content.json e aplica conteúdo no DOM
├── admin.html        ← Painel administrativo (acesso: /admin.html)
├── admin.js          ← Lógica completa do painel admin
├── admin.css         ← Estilos do painel admin
├── editor.js         ← Editor inline (editor flutuante no site)
├── content.json      ← Conteúdo editável publicado (lido por script.js)
└── logo.png          ← Logo padrão da empresa
```

---

## 3. Como o Conteúdo Funciona

### Fluxo completo
```
Admin edita no painel → clica "Salvar" → salvo em localStorage (amplia_content)
Admin clica "Publicar" → envia para GitHub via API → atualiza content.json na branch main
Visitante abre o site → script.js busca content.json → aplica no DOM
```

### Dois caminhos de leitura em script.js
1. **localStorage (`amplia_content`)** — usado no dispositivo do admin para ver as mudanças em tempo real sem publicar
2. **`content.json`** — lido por todos os outros dispositivos via `fetch('content.json?v='+Date.now())`

Se `localStorage` estiver preenchido, ele tem prioridade. Os outros dispositivos só leem `content.json`.

### Por que outro PC vê conteúdo antigo?
- Se um dispositivo ainda mostra conteúdo velho, fazer **Ctrl+Shift+R** (hard refresh) limpa o cache e força o fetch do `content.json` mais recente.
- O link do site **não muda** após atualizar o PAT. O URL é fixo pelo GitHub Pages.

---

## 4. Autenticação do Admin

### Senha do painel
- **Senha atual:** `Amplia2026`
- Armazenada como hash SHA-256 em `localStorage` sob a chave `amplia_pwd_hash`
- Se a chave não existir, a senha padrão do código (`DEFAULT_PWD = 'Amplia2026'`) é usada
- Para trocar a senha: aba "Alterar Senha" no painel admin
- Migração automática: se o hash armazenado ainda for da senha antiga `Amplia@2024`, ele é removido automaticamente para que a nova senha padrão entre em vigor

### Chaves de localStorage usadas pelo admin
| Chave | Conteúdo |
|-------|----------|
| `amplia_content` | JSON com todo o conteúdo editado (mesmo formato que content.json) |
| `amplia_pwd_hash` | Hash SHA-256 da senha atual |
| `amplia_auth` | `'1'` quando a sessão está autenticada (sessionStorage) |
| `amplia_github_token` | PAT do GitHub salvo para o botão Publicar |

---

## 5. Token GitHub (PAT) — Como Usar

### Para o botão "Publicar" no painel admin
O admin insere o PAT na aba "Senha" do painel → clica "Salvar Token". O token fica em `localStorage` (`amplia_github_token`) e é usado pelo botão Publicar para chamar a GitHub Contents API (`PUT /repos/CaetanoLorenci/Jo-o-Visoli/contents/content.json`).

### Para push via terminal (Claude Code)
O remote padrão do repositório usa um proxy local que bloqueia push direto. Para fazer push via terminal, é necessário trocar temporariamente o remote:

```bash
# 1. Trocar para URL com PAT
git remote set-url origin "https://SEU_TOKEN@github.com/CaetanoLorenci/Jo-o-Visoli.git"

# 2. Fazer o push
GIT_TERMINAL_PROMPT=0 git push -u origin main-local:main

# 3. Restaurar o remote original (proxy)
git remote set-url origin "http://local_proxy@127.0.0.1:43433/CaetanoLorenci/Jo-o-Visoli.git"
```

### Permissões necessárias no PAT
- `repo` (acesso completo ao repositório privado)
- Ou `contents: write` se usar fine-grained token

### Onde gerar novo PAT
GitHub → Settings → Developer settings → Personal access tokens → Fine-grained tokens (ou classic tokens)

---

## 6. Estrutura do content.json

O arquivo `content.json` é o coração do conteúdo editável. Todos os campos abaixo podem ser editados pelo painel admin e são aplicados ao site via `script.js`:

```json
{
  "g-company": "Grupo Amplia",
  "g-tagline": "Estruturação comercial de alta performance.",
  "g-whatsapp": "5549999999999",
  "g-instagram": "grupo.amplia",
  "g-logo-size": 36,
  "g-logo-src": "(base64 da logo personalizada, opcional)",

  "h-eyebrow": "A nossa proposta de valor",
  "h-pillar1": "texto do pilar 1 do hero",
  "h-pillar2": "texto do pilar 2 do hero",
  "h-cta": "texto do botão CTA principal",

  "l-headline": "{VENDA} MAIS e {MELHOR}\natravés da\n{ESTRUTURAÇÃO COMERCIAL}\nde alta {performance!}",
  "l-fontsize": "xlarge",
  "l-align": "center",
  "l-italic": true,
  "l-mark-bg": true,
  "l-show-eyebrow": true,
  "l-show-pillars": true,
  "l-show-trust": true,
  "l-show-ghost-btn": true,
  "l-wide-spacing": false,
  "l-bg": "black",

  "trust-label": "Empresas que confiam em nós:",
  "trust-1": "Colcci",
  "trust-2": "Tommy Hilfiger",
  "trust-3": "Track & Field",
  "trust-4": "Marlon Veículos",
  "trust-5": "F4 Autocenter",

  "n-layout": "row",
  "s-style": "bordered",
  "c-fmt": "grid",
  "f-style": "centered",

  "sol-eyebrow": "O que oferecemos",
  "sol-h2": "Nossas {4 Soluções}",
  "res-eyebrow": "Prova social",
  "res-h2": "Empresas que {confiam} no Grupo Amplia",
  "fnd-eyebrow": "Nossa equipe",
  "fnd-h2": "FUNDADORES",
  "fnd-sub": "Somos uma estruturadora comercial...",
  "prod-sec-eyebrow": "Produtos",
  "prod-sec-h2": "Invista no seu {crescimento}",
  "prod-sec-sub": "Cursos, mentorias e programas...",
  "faq-eyebrow": "Dúvidas frequentes",
  "faq-h2": "Perguntas {frequentes}",
  "faq-sub": "Ainda com dúvidas?...",

  "stats": [ { "prefix": "R$", "value": "500", "suffix": "mil+", "label": "..." } ],
  "solutions": [ { "num": "01", "icon": "📣", "title": "...", "desc": "...", "items": "item1\nitem2", "highlight": "" } ],
  "clients": [ { "tag": "Automotivo", "name": "Marlon Veículos", "value": "+R$350K", "period": "...", "desc": "..." } ],
  "founders": [ { "initials": "CL", "name": "Caetano Lorenci", "role": "...", "statNum": "+6 dígitos", "statLabel": "...", "bio": "..." } ],
  "videos": [],
  "produtos": [],
  "faq": [ { "q": "Pergunta?", "a": "Resposta." } ],

  "sb-eyebrow": "Quem somos",
  "sb-h2": "Somos uma {Estruturadora Comercial}",
  "sb-quote": "...",
  "ct-title": "Pronto para vender mais e melhor?",
  "ct-wabtn": "Falar no WhatsApp",
  "ct-igbtn": "Ver no Instagram"
}
```

---

## 7. Sintaxe `{texto}` no Headline

O campo `l-headline` usa uma sintaxe especial para colorir palavras de laranja:

```
{VENDA} MAIS e {MELHOR}
através da
{ESTRUTURAÇÃO COMERCIAL}
de alta {performance!}
```

- `{texto}` → `<span class="or">texto</span>` (cor laranja `#fc4900`)
- Quebras de linha (`\n`) → `<br/>` no HTML
- A última linha recebe `<em>` se `l-italic: true`
- **Importante:** `{...}` não pode cruzar quebras de linha. Escreva tudo numa mesma linha.

A função `parseMarkup()` em `script.js` e `admin.js` aplica primeiro o regex no texto completo, depois separa por `\n`. Esse foi um bug importante corrigido — não reverter para a versão antiga que processava linha a linha.

---

## 8. Abas do Painel Admin

| Aba | ID | O que edita |
|-----|----|-------------|
| Configurações Gerais | `geral` | Nome da empresa, tagline, WhatsApp, Instagram, tamanho do logo |
| Layout do Hero | `layout` | Headline, tamanho da fonte, alinhamento, fundo, toggles de visibilidade |
| Textos do Hero | `hero` | Eyebrow, pillars, CTA, trust bar (5 marcas) |
| Números / Stats | `numeros` | 4 estatísticas animadas (prefixo, valor, sufixo, legenda) |
| Soluções | `solucoes` | Eyebrow, h2, cards das 4 soluções |
| Clientes / Resultados | `clientes` | Eyebrow, h2, cards dos clientes |
| Fundadores | `fundadores` | Eyebrow, h2, sub, cards dos fundadores |
| Portfólio de Vídeos | `videos` | Adicionar/remover vídeos (YouTube, Vimeo, Drive, .mp4) |
| Produtos | `produtos` | Adicionar/remover produtos com preço, link e badge |
| FAQ | `faq` | Eyebrow, h2, sub, 5 perguntas e respostas |
| Contato / Links | `contato` | Título, subtítulo, texto dos botões WhatsApp e Instagram |
| Alterar Senha | `senha` | Trocar senha do admin + campo para salvar o GitHub PAT |

---

## 9. Seção de Fundadores — Atenção Especial

O HTML em `index.html` tem **apenas 1 `fund-card`** (Caetano Lorenci). O array `founders` em `content.json` pode ter até 3 objetos, mas o script só atualiza cards que existem no DOM — se o HTML tiver 1 card, apenas o index 0 do array será aplicado.

Se quiser adicionar mais fundadores no futuro:
1. Adicionar `<div class="fund-card">` em `index.html` na seção `#fundadores`
2. Adicionar o objeto correspondente no array `founders` de `content.json`
3. Commitar e fazer push para `main`

O painel admin tem 3 campos de fundadores no DEFAULTS (JV, CL, JM) — isso é o padrão de backup, mas o que realmente aparece no site é o que está no HTML + o que está em `content.json`.

---

## 10. Como Fazer Alterações no Código

### Fluxo recomendado

```bash
# 1. Verificar branch atual
git branch

# 2. Se necessário, criar branch a partir de main
git fetch origin main
git checkout -b main-local origin/main

# 3. Fazer as alterações nos arquivos
# (usar Read, Edit, Write — preferir Edit para arquivos existentes)

# 4. Stage e commit
git add <arquivos modificados>
git commit -m "descrição clara da mudança"

# 5. Push para main (com PAT)
git remote set-url origin "https://TOKEN@github.com/CaetanoLorenci/Jo-o-Visoli.git"
GIT_TERMINAL_PROMPT=0 git push origin main-local:main
git remote set-url origin "http://local_proxy@127.0.0.1:43433/CaetanoLorenci/Jo-o-Visoli.git"
```

### Regras importantes
- **Sempre commitar na branch `main-local` e fazer push para `main`**
- Nunca forçar push sem motivo
- O remote padrão é o proxy (`http://local_proxy@127.0.0.1:43433/...`) — sempre restaurar após o push
- Não criar Pull Request a menos que o usuário peça explicitamente

---

## 11. Atualizar content.json via API (sem terminal)

O botão "Publicar" no painel admin faz isso automaticamente. Mas se precisar atualizar via terminal/script:

```js
// GitHub Contents API
PUT https://api.github.com/repos/CaetanoLorenci/Jo-o-Visoli/contents/content.json
Authorization: token SEU_TOKEN
Content-Type: application/json

{
  "message": "chore: update content",
  "content": "<base64 do JSON>",
  "sha": "<sha atual do arquivo — obter com GET antes>"
}
```

---

## 12. Seções do index.html e seus Seletores CSS

| Seção | ID anchor | Classe principal | Seletor h2 |
|-------|-----------|-----------------|------------|
| Hero | `#hero` | `.hero` | `.hero h1` |
| Números | `#numeros` | `.numeros` | — |
| Sobre | `#sobre` | `.sobre` | `.sobre h2` |
| Para Quem | `#para-quem` | `.para-quem` | `.para-quem h2` |
| Portfólio | `#portfolio` | `.portfolio` | — |
| Soluções | `#solucoes` | `.solucoes` | `.solucoes h2` |
| Resultados | `#resultados` | `.resultados` | `.resultados h2` |
| Fundadores | `#fundadores` | `.fundadores` | `.fundadores__title` |
| FAQ | `#faq` | `.faq` | `.faq h2` |
| Produtos | `#produtos` | `.produtos` | `.produtos h2` |
| Contato | `#contato` | `.cta-final` | `.cta-final h2` |

---

## 13. Variáveis CSS Principais (styles.css)

```css
--or: #fc4900;      /* Laranja principal */
--wh: #fff;         /* Branco */
--wh3: rgba(255,255,255,0.3);
--bg: #000;         /* Fundo principal */
--bd: rgba(255,255,255,0.08); /* Bordas */
```

---

## 14. Checklist para Novos Commits

Antes de commitar qualquer mudança:
- [ ] Testar se `parseMarkup` ainda funciona (não quebrar com `{texto}` em linha única)
- [ ] Verificar se `content.json` está válido (JSON sem erros de sintaxe)
- [ ] Confirmar que `index.html` tem o número correto de `fund-card` divs
- [ ] Usar mensagens de commit descritivas em inglês ou português
- [ ] Fazer push para `main` (não para outra branch) e restaurar o remote proxy

---

## 15. Problemas Conhecidos e Soluções

| Problema | Causa | Solução |
|----------|-------|---------|
| Site em outro PC mostra conteúdo antigo | Cache do browser | Ctrl+Shift+R (hard refresh) |
| `{TEXTO}` aparece literal no site | Bug no `parseMarkup` antigo | Já corrigido — não reverter para versão antiga |
| Push retorna 401 ou é bloqueado | PAT expirado ou proxy bloqueando | Gerar novo PAT e usar no remote URL |
| Botão Publicar retorna erro de token | Token não salvo no localStorage | Aba "Senha" → campo "GitHub Token" → Salvar Token |
| `fund-card` de fundador não atualiza | Index do array `founders` não corresponde ao card no HTML | Verificar quantos `fund-card` existem no HTML |
