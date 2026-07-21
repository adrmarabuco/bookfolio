# Handoff para o Codex — BookFolio SEO, pacote da extensão e site GitHub Pages

## Objetivo geral

Executar duas frentes relacionadas:

1. Atualizar o pacote da extensão BookFolio para melhorar sua identificação como um visual bookmark manager na Chrome Web Store.
2. Transformar o atual repositório da política de privacidade em um site oficial, estático e otimizado para SEO, publicado no GitHub Pages.

O trabalho deve preservar o funcionamento atual da extensão. Esta tarefa é principalmente de metadados, conteúdo, documentação, identidade e site institucional.

---

# PARTE A — ATUALIZAÇÃO DO PACOTE DA EXTENSÃO

## 1. Inspeção inicial

Antes de modificar arquivos:

1. Identificar a raiz real da extensão.
2. Localizar o `manifest.json`.
3. Verificar se nome e descrição são escritos diretamente no manifest ou internacionalizados com `__MSG_*__`.
4. Localizar a pasta `_locales`, caso exista.
5. Identificar o sistema de build:

   * npm;
   * pnpm;
   * yarn;
   * Vite;
   * Webpack;
   * scripts próprios;
   * extensão estática sem build.
6. Identificar a versão atualmente publicada.
7. Procurar ocorrências de:

   * `BookFolio — Bookmark Navigator`;
   * `Bookmark Navigator`;
   * `Folio`;
   * `your@email.com`;
   * textos antigos de privacidade.
8. Não alterar permissões, APIs ou comportamento da extensão sem necessidade expressa.

Produzir um resumo curto dos arquivos encontrados antes de iniciar as alterações.

---

## 2. Atualizar o manifest

### Nome principal

Alterar o nome público para:

```json
"name": "BookFolio — Visual Bookmark Manager"
```

### Nome curto

Usar:

```json
"short_name": "BookFolio"
```

O nome curto deve continuar sendo apenas a marca. Não usar palavras-chave adicionais nele.

### Descrição curta do manifest

Usar exatamente:

```json
"description": "Visual bookmark manager and new-tab dashboard for organizing Chrome bookmarks into daily tools, projects, research, and groups."
```

Essa descrição possui menos de 132 caracteres.

### Versão

Se a versão atual for `1.2.0`, atualizar para:

```json
"version": "1.2.1"
```

Se a versão já tiver avançado, aumentar apenas o patch da versão atual.

Não reduzir nem reutilizar uma versão já publicada.

---

## 3. Internacionalização

Se o manifest usar algo como:

```json
"name": "__MSG_extensionName__"
```

não substituir pelo texto direto.

Nesse caso, atualizar os arquivos correspondentes em `_locales`.

### Inglês

Exemplo:

```json
{
  "extensionName": {
    "message": "BookFolio — Visual Bookmark Manager"
  },
  "extensionShortName": {
    "message": "BookFolio"
  },
  "extensionDescription": {
    "message": "Visual bookmark manager and new-tab dashboard for organizing Chrome bookmarks into daily tools, projects, research, and groups."
  }
}
```

### Português do Brasil

```json
{
  "extensionName": {
    "message": "BookFolio — Gerenciador Visual de Favoritos"
  },
  "extensionShortName": {
    "message": "BookFolio"
  },
  "extensionDescription": {
    "message": "Gerenciador visual e painel de nova guia para organizar favoritos do Chrome por rotina, projetos, pesquisas e grupos."
  }
}
```

Preservar todas as demais mensagens existentes.

Validar os arquivos JSON depois das alterações.

---

## 4. Branding interno

Dentro da interface, manter preferencialmente a marca curta:

> BookFolio

Não repetir “Visual Bookmark Manager” em todos os cabeçalhos internos.

Usar o nome completo apenas em locais como:

* página About;
* onboarding;
* metadados;
* tela inicial de boas-vindas;
* documentação;
* site;
* Chrome Web Store.

Pesquisar e substituir apenas quando semanticamente correto.

Não modificar nomes de chaves, IDs, storage keys, namespaces ou identificadores internos usados pelo código.

---

## 5. Criar pacote de conteúdo para a Chrome Web Store

Criar a pasta:

```text
store-listing/
```

Adicionar:

```text
store-listing/
├── STORE_LISTING_EN.md
├── STORE_LISTING_PT_BR.md
├── SCREENSHOT_PLAN.md
├── RELEASE_NOTES.md
└── ASSET_CHECKLIST.md
```

Esses arquivos não precisam fazer parte do ZIP final da extensão.

---

## 6. Conteúdo de `STORE_LISTING_EN.md`

### Product title

```text
BookFolio — Visual Bookmark Manager
```

### Short summary

```text
Visual bookmark manager and new-tab dashboard for organizing Chrome bookmarks into daily tools, projects, research, and groups.
```

### Long description

```text
BookFolio is a visual bookmark manager and new-tab dashboard for Chrome.

It transforms the bookmarks already stored in your browser into an organized, searchable web navigation system—with visual folders, functional groups, address-bar search, a side panel, pinned links, and keyboard shortcuts.

Instead of leaving useful websites buried inside bookmark menus, you can organize them around the way you actually use the web:

🚀 Daily tools and frequently visited websites
🧩 Links and dashboards for each project
📚 Research materials, articles, and documentation
💼 Work and administrative systems
🎓 Study resources and reference libraries
🔁 Reusable groups of websites you often open together

No migration to another bookmark service is required. Install BookFolio, open a new tab, and your existing Chrome bookmark hierarchy is already available.

────────────────────────────────────────
✦ YOUR BOOKMARKS, EVERYWHERE
────────────────────────────────────────

→ New-tab dashboard — browse your entire bookmark library as a visual workspace

→ Side panel — access and search bookmarks while keeping the current website open

→ Address-bar search — type “bf” in the Chrome omnibox to search bookmarks from anywhere

→ Command palette — press Ctrl+Shift+F, or Cmd+Shift+F on Mac, to jump directly to search

→ Context-menu saving — right-click a page or link and save it to a selected bookmark folder

────────────────────────────────────────
✦ ORGANIZE THE WEB AROUND YOUR WORKFLOW
────────────────────────────────────────

→ Browse bookmarks using grid or list views

→ Navigate the complete folder hierarchy from a collapsible and resizable sidebar

→ Add colors and emoji to folders for faster visual recognition

→ Pin frequently used websites to a permanent shortcut strip

→ See recently accessed bookmarks automatically

→ Drag and drop bookmarks between folders

→ Create, reorder, move, and organize subfolders

BookFolio works with Chrome’s existing bookmark structure. You do not need to import your bookmarks into a separate BookFolio database.

────────────────────────────────────────
✦ CREATE FUNCTIONAL GROUPS
────────────────────────────────────────

Folders organize where links are stored.

Groups organize how links are used.

Create named groups containing websites from different bookmark folders, then open the entire group when you begin a task.

Examples:

→ Daily Start — email, calendar, task manager, and dashboards

→ Development — repository, documentation, hosting, and monitoring

→ Research — search engines, databases, articles, and references

→ Finance — banking, investments, reports, and spreadsheets

→ Study — learning platform, notes, readings, and exercises

You can also open all bookmarks inside a folder at once. BookFolio asks for confirmation before opening a large number of tabs.

────────────────────────────────────────
✦ FIND SAVED LINKS FASTER
────────────────────────────────────────

→ Instant search by bookmark name or URL

→ Search results display the complete folder path

→ Press “/” from the dashboard to focus the search field

→ Search from the new tab, side panel, or Chrome address bar

Instead of searching the web again for a website you already saved, BookFolio helps you navigate your own collection.

────────────────────────────────────────
✦ VISUAL AND KEYBOARD NAVIGATION
────────────────────────────────────────

→ Light, dark, and automatic system themes

→ Custom background using a color, gradient, or personal image

→ Resizable sidebar and compact mode

→ Full keyboard navigation using arrows, Enter, and Backspace

→ Quick shortcuts for search, adding bookmarks, changing layouts, dark mode, and calendar

→ Built-in shortcut reference panel

────────────────────────────────────────
✦ ADDITIONAL BROWSER TOOLS
────────────────────────────────────────

→ Open Tabs panel for switching between or closing active tabs

→ Recently Closed panel for restoring closed tabs

→ Toolbar badge showing how many bookmarks are saved for the current website

→ Optional calendar and clock panel

These tools complement the bookmark workspace without replacing Chrome’s native browsing features.

────────────────────────────────────────
✦ LOCAL-FIRST PRIVACY
────────────────────────────────────────

BookFolio does not require an account and does not use advertising or analytics trackers.

Bookmark organization, search, folder customization, and per-site bookmark counts are processed through Chrome’s extension APIs.

BookFolio does not operate an external server that receives your bookmarks or browsing history.

Your existing bookmarks remain part of your Chrome profile.

────────────────────────────────────────
✦ START IMMEDIATELY
────────────────────────────────────────

BookFolio is free.

Install it, open a new tab, and your existing bookmarks are already there—organized, searchable, and accessible from different parts of the browser.

Turn saved links into:

• a daily launcher;
• a project workspace;
• a personal research library;
• a directory of useful websites;
• a navigation system for the web.
```

---

## 7. Conteúdo de `STORE_LISTING_PT_BR.md`

### Título

```text
BookFolio — Gerenciador Visual de Favoritos
```

### Resumo

```text
Gerenciador visual e painel de nova guia para organizar favoritos do Chrome por rotina, projetos, pesquisas e grupos.
```

### Orientação

Criar uma tradução natural da descrição inglesa.

Não fazer tradução palavra por palavra.

Usar consistentemente:

* favoritos;
* gerenciador de favoritos;
* painel de nova guia;
* grupos funcionais;
* barra de endereços;
* painel lateral;
* navegação visual.

Não usar simultaneamente “favoritos” e “bookmarks” na mesma frase, exceto quando for necessário explicar um termo da interface do Chrome.

---

## 8. Plano de screenshots

Criar `SCREENSHOT_PLAN.md` com cinco imagens planejadas.

### Screenshot 1 — Proposta central

Texto principal:

```text
Turn Chrome bookmarks into a visual navigation system
```

Texto secundário:

```text
Daily tools · Projects · Research · Resources
```

Imagem:

* dashboard principal;
* estrutura realista de favoritos;
* grupos funcionais visíveis;
* evitar interface vazia.

### Screenshot 2 — Grupos funcionais

Texto:

```text
Open a complete work context with one click
```

Mostrar grupos como:

* Daily Start;
* Development;
* Research;
* Study.

### Screenshot 3 — Diferentes pontos de acesso

Texto:

```text
Access bookmarks without interrupting your workflow
```

Mostrar:

* side panel;
* omnibox com `bf`;
* nova guia.

### Screenshot 4 — Organização visual

Texto:

```text
Folders you can recognize at a glance
```

Mostrar:

* cores;
* emoji;
* favoritos fixados;
* recentes.

### Screenshot 5 — Privacidade e compatibilidade

Texto:

```text
Your existing Chrome bookmarks. No separate account.
```

Mostrar interface real, sem escudos genéricos ou promessas absolutas.

### Regras para screenshots

* Usar interface atual da extensão.
* Usar resolução compatível com a Chrome Web Store.
* Evitar excesso de texto.
* Não mostrar dados pessoais reais.
* Não mostrar e-mails, contas, sistemas internos ou favoritos confidenciais.
* Usar o mesmo tema, tipografia e identidade visual em todas as imagens.

---

## 9. Release notes

Criar `RELEASE_NOTES.md`:

```text
Version 1.2.1

• Updated product name to “BookFolio — Visual Bookmark Manager”
• Improved product description and marketplace positioning
• Updated privacy and product documentation
• No changes to bookmark data or existing user settings
```

Só afirmar “no functional changes” se for verdade após revisar o diff.

---

## 10. Política de privacidade

Corrigir o documento existente:

* substituir usos antigos de “Folio” por “BookFolio”;
* remover `your@email.com`;
* inserir um endereço de contato real já fornecido pelo proprietário;
* não inventar e-mail;
* revisar afirmações absolutas como “no data leaves your device”;
* distinguir dados enviados a servidores do BookFolio de eventual sincronização feita pelo próprio Chrome;
* manter consistência entre:

  * política;
  * manifest;
  * formulário de privacidade da Chrome Web Store;
  * site.

Formulação preferida:

```text
BookFolio does not operate an external server that receives your bookmarks or browsing history.
```

E:

```text
BookFolio does not require an account and does not use advertising or analytics trackers.
```

Só manter essas afirmações após verificar o código.

---

## 11. Testes do pacote

Executar:

1. Validação de todos os arquivos JSON.
2. Build de produção usando o gerenciador de pacotes detectado.
3. Testes existentes.
4. Lint, quando configurado.
5. Carregamento da extensão descompactada em Chrome.
6. Testar:

   * nova guia;
   * side panel;
   * omnibox `bf`;
   * criação e edição de bookmarks;
   * grupos;
   * drag and drop;
   * configurações;
   * temas;
   * atalhos;
   * persistência dos dados.
7. Confirmar que os favoritos existentes não foram alterados.
8. Confirmar que configurações de usuários da versão anterior continuam funcionando.
9. Inspecionar erros no console.
10. Confirmar que o nome completo aparece corretamente em:

    * caixa de instalação;
    * `chrome://extensions`;
    * pacote final.

---

## 12. Gerar ZIP

Gerar um ZIP de produção em:

```text
dist/bookfolio-visual-bookmark-manager-vX.Y.Z.zip
```

O `manifest.json` deve estar na raiz do ZIP, e não dentro de uma pasta intermediária.

Não incluir:

* `.git`;
* `node_modules`;
* arquivos de teste;
* arquivos-fonte desnecessários;
* credenciais;
* `.env`;
* documentação de marketing;
* screenshots de trabalho;
* arquivos temporários.

---

# PARTE B — SITE OFICIAL NO GITHUB PAGES

## 13. Decisão de arquitetura

Usar o repositório atualmente dedicado à política de privacidade.

Implementar um site estático com Jekyll, compatível nativamente com GitHub Pages.

Publicar a partir da branch principal e da raiz do repositório.

Não adicionar React, Next.js, banco de dados, backend ou dependências desnecessárias.

O site deve continuar funcional mesmo sem JavaScript.

JavaScript pode ser usado apenas para:

* menu mobile;
* pequenas interações;
* galeria de screenshots.

Não adicionar analytics nesta primeira versão.

---

## 14. Estrutura de arquivos

Criar:

```text
/
├── _config.yml
├── _layouts/
│   └── default.html
├── _includes/
│   ├── header.html
│   └── footer.html
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── main.js
│   └── images/
│       ├── bookfolio-logo.png
│       ├── hero-dashboard.webp
│       ├── screenshot-dashboard.webp
│       ├── screenshot-groups.webp
│       ├── screenshot-side-panel.webp
│       └── screenshot-search.webp
├── index.md
├── privacy.md
├── support.md
├── 404.html
├── robots.txt
├── sitemap.xml
├── favicon.ico
├── README.md
└── Gemfile
```

Usar apenas plugins suportados pelo GitHub Pages.

---

## 15. Configuração do Jekyll

Exemplo de `_config.yml`:

```yaml
title: "BookFolio — Visual Bookmark Manager"
description: "Turn existing Chrome bookmarks into a visual new-tab dashboard with folders, groups, side-panel access, search, and keyboard navigation."
lang: "en"
url: "https://GITHUB_USER.github.io"
baseurl: "/REPOSITORY_NAME"

markdown: kramdown
permalink: pretty

exclude:
  - README.md
  - Gemfile
  - Gemfile.lock
  - node_modules
  - vendor
```

Codex deve detectar o usuário e o nome real do repositório.

Não publicar os placeholders `GITHUB_USER` ou `REPOSITORY_NAME`.

Caso seja um site de usuário chamado `GITHUB_USER.github.io`, usar `baseurl: ""`.

---

## 16. Metadados do site

### Title principal

```text
BookFolio — Visual Bookmark Manager for Chrome
```

### Meta description

```text
Turn existing Chrome bookmarks into a visual new-tab dashboard with folders, groups, side-panel access, search, and keyboard navigation.
```

### Open Graph

Configurar:

```html
<meta property="og:type" content="website">
<meta property="og:title" content="BookFolio — Visual Bookmark Manager for Chrome">
<meta property="og:description" content="Turn existing Chrome bookmarks into a visual web navigation system.">
<meta property="og:image" content="{{ '/assets/images/og-bookfolio.png' | absolute_url }}">
<meta property="og:url" content="{{ page.url | absolute_url }}">
```

Adicionar também metadados equivalentes para compartilhamento em redes sociais.

### Canonical

Adicionar canonical em todas as páginas:

```html
<link rel="canonical" href="{{ page.url | absolute_url }}">
```

---

## 17. Dados estruturados

Adicionar JSON-LD na homepage:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "BookFolio",
  "applicationCategory": "BrowserApplication",
  "operatingSystem": "Google Chrome",
  "description": "A visual bookmark manager and new-tab dashboard that turns existing Chrome bookmarks into a personal web navigation system.",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "downloadUrl": "CHROME_WEB_STORE_URL"
}
</script>
```

Substituir `CHROME_WEB_STORE_URL` pelo link real:

```text
https://chromewebstore.google.com/detail/bookfolio-%E2%80%94-bookmark-navi/hkjmdpnpkdghjokbimhkdnepholjbfjo
```

Não adicionar avaliações, estrelas ou número de usuários ao schema enquanto não houver dados verificáveis e adequados.

---

## 18. Conteúdo da homepage

### Hero

Eyebrow:

```text
VISUAL BOOKMARK MANAGER FOR CHROME
```

Título:

```text
Turn your Chrome bookmarks into a web navigation system.
```

Subtítulo:

```text
BookFolio transforms the bookmarks already stored in Chrome into a visual new-tab dashboard for daily tools, projects, research, resources, and reusable groups.
```

Botão principal:

```text
Add to Chrome — Free
```

Botão secundário:

```text
See how it works
```

Nota curta:

```text
No BookFolio account. No separate bookmark database.
```

---

## 19. Seção do problema

Título:

```text
Saved does not mean usable.
```

Texto:

```text
Chrome makes it easy to save a link. The difficult part is finding and using it again after your bookmark collection grows.

Routine websites become buried inside folders. Useful articles are saved and forgotten. Project resources are scattered across different locations.

BookFolio keeps your existing Chrome bookmarks, but gives them a visual and functional structure built for navigation.
```

Comparativo:

### Traditional bookmarks

```text
Nested menus
Forgotten links
Repeated searches
Disconnected project resources
```

### BookFolio

```text
Daily launcher
Project workspaces
Research library
Functional groups
Visual navigation
```

---

## 20. Seção de casos de uso

Título:

```text
Organize the web around the way you use it.
```

Cards:

### Daily tools

```text
Keep email, calendars, dashboards, task managers, and frequently used websites immediately available.
```

### Projects

```text
Group documentation, repositories, files, dashboards, and tools into a reusable project context.
```

### Research

```text
Build a personal library of articles, references, databases, documentation, and resources worth revisiting.
```

### Study

```text
Organize learning platforms, readings, notes, exercises, and reference materials.
```

### Personal directory

```text
Create your own structured map of the websites that matter to you.
```

### Browsing routines

```text
Open a complete set of related websites instead of searching for and opening every page individually.
```

---

## 21. Seção de recursos

Título:

```text
Your bookmarks, available throughout Chrome.
```

Itens:

### New-tab dashboard

```text
Open a new tab and browse your complete bookmark hierarchy as a visual workspace.
```

### Side panel

```text
Navigate and search bookmarks while keeping the current website open.
```

### Address-bar search

```text
Type “bf” in the Chrome address bar to search bookmarks from anywhere.
```

### Functional groups

```text
Combine related links independently of their original folders and open a complete context when needed.
```

### Visual organization

```text
Use colors, emoji, pinned links, recent items, grid view, and list view for faster recognition.
```

### Keyboard navigation

```text
Search and navigate the bookmark workspace without relying on the mouse.
```

---

## 22. Seção de privacidade

Título:

```text
Built around your existing Chrome bookmarks.
```

Texto:

```text
BookFolio does not require an account and does not use advertising or analytics trackers.

The extension works with bookmarks stored in your Chrome profile. BookFolio does not operate an external server that receives your bookmarks or browsing history.

Your bookmarks remain compatible with Chrome’s native bookmark structure.
```

Links:

```text
Read the Privacy Policy
```

```text
View permissions explained
```

A página não deve usar “100% private”, “completely anonymous” ou “no data ever leaves your device” sem comprovação técnica precisa.

---

## 23. Seção FAQ

### Does BookFolio replace my Chrome bookmarks?

```text
No. BookFolio uses the bookmarks already stored in Chrome and presents them through a visual navigation interface.
```

### Do I need to import my bookmarks?

```text
No. Your existing bookmark hierarchy is available after installation.
```

### Does BookFolio require an account?

```text
No BookFolio account is required.
```

### Is BookFolio free?

```text
Yes. BookFolio is currently free to install and use.
```

### Does uninstalling BookFolio delete my bookmarks?

```text
BookFolio works with Chrome’s native bookmarks. Uninstalling the extension should not delete the bookmarks stored in your Chrome profile.
```

Confirmar tecnicamente essa resposta antes de publicar.

### How is BookFolio different from a separate bookmark service?

```text
BookFolio focuses on making your existing Chrome bookmarks easier to navigate. It does not require you to move your links into a separate BookFolio database.
```

### Why does BookFolio request access to bookmarks?

```text
Bookmark access is required to display, search, create, move, and organize the bookmarks stored in Chrome.
```

### Why does BookFolio request access to tabs?

```text
Tab access supports features such as the open-tabs panel, recently closed tabs, opening bookmark groups, and switching between active pages.
```

Conferir cada permissão real no manifest antes de publicar o FAQ.

---

## 24. CTA final

Título:

```text
Your bookmarks are already there. Make them useful.
```

Texto:

```text
Turn saved links into a daily launcher, project workspace, research library, and personal directory of the web.
```

Botão:

```text
Add BookFolio to Chrome
```

Nota:

```text
Free · No BookFolio account required
```

---

## 25. Página de suporte

Criar `/support/` com:

* instalação;
* primeiros passos;
* como usar `bf` na barra de endereços;
* como abrir o side panel;
* como criar grupos;
* como abrir todos os links;
* como restaurar a nova guia padrão;
* como reportar erro;
* e-mail de contato real;
* versão atual;
* link para a política de privacidade;
* link para a Chrome Web Store.

Não publicar um endereço fictício.

---

## 26. Página de privacidade

Converter o `privacy.md` atual em página Jekyll usando front matter:

```yaml
---
layout: default
title: Privacy Policy
permalink: /privacy/
---
```

Preservar o histórico Git do arquivo.

Corrigir nome, contato e afirmações conforme a revisão da Parte A.

Não apagar o arquivo antigo antes de confirmar que:

1. a nova página está acessível;
2. o endereço foi testado;
3. o link da Chrome Web Store foi atualizado;
4. não existe referência pública apontando para uma página inexistente.

---

## 27. Design

Direção visual:

* interface limpa;
* aparência de ferramenta de produtividade;
* tipografia legível;
* fundo claro e escuro conforme preferência do sistema;
* máximo de duas fontes;
* largura de leitura confortável;
* seções espaçosas;
* cards simples;
* screenshots reais;
* animações mínimas;
* evitar aparência de template genérico de startup.

Usar a identidade visual já existente do BookFolio.

Não criar um logotipo novo sem solicitação.

---

## 28. Responsividade e acessibilidade

Garantir:

* navegação por teclado;
* foco visível;
* contraste adequado;
* headings em ordem semântica;
* `alt` descritivo para screenshots;
* botões com texto claro;
* layout mobile;
* respeito a `prefers-reduced-motion`;
* nenhuma informação transmitida apenas por cor;
* links de CTA identificáveis;
* HTML semântico.

---

## 29. Performance

Objetivos:

* site completamente estático;
* sem frameworks pesados;
* imagens em WebP ou AVIF com fallback quando necessário;
* dimensões explícitas nas imagens;
* lazy loading abaixo da dobra;
* CSS pequeno;
* JavaScript opcional e mínimo;
* nenhuma chamada para servidores externos desnecessários;
* nenhuma fonte bloqueante quando puder ser evitada.

---

## 30. SEO técnico

Criar:

### `robots.txt`

```text
User-agent: *
Allow: /

Sitemap: ABSOLUTE_SITEMAP_URL
```

Substituir pelo endereço real.

### `sitemap.xml`

Incluir:

* homepage;
* privacy;
* support.

Adicionar:

* canonical;
* Open Graph;
* meta description;
* headings únicos;
* links internos;
* favicon;
* imagem social;
* JSON-LD.

Não repetir palavras-chave artificialmente.

Usar os termos naturalmente:

* visual bookmark manager;
* Chrome bookmark manager;
* bookmark organizer;
* new-tab dashboard;
* bookmark groups;
* bookmark sidebar;
* organize Chrome bookmarks;
* personal web navigation.

---

## 31. Publicação no GitHub Pages

Depois de concluir:

1. Fazer commit das alterações.
2. Enviar para a branch principal.
3. Abrir Settings → Pages.
4. Selecionar publicação por branch.
5. Selecionar a branch principal.
6. Selecionar a pasta raiz.
7. Salvar.
8. Aguardar o deployment.
9. Verificar a URL publicada.
10. Ativar “Enforce HTTPS”.
11. Testar homepage, privacy, support, CSS, imagens e links.
12. Atualizar no Developer Dashboard:

    * website oficial;
    * support URL;
    * privacy policy URL.

Não alterar os links da Chrome Web Store antes de o site estar publicamente acessível.

---

# PARTE C — VALIDAÇÃO FINAL

## 32. Definition of Done — extensão

* [ ] Nome público atualizado.
* [ ] `short_name` permanece BookFolio.
* [ ] Descrição curta atualizada.
* [ ] Versão incrementada.
* [ ] Locales atualizados.
* [ ] Nenhum placeholder de contato.
* [ ] Nenhuma permissão modificada sem justificativa.
* [ ] Build concluído.
* [ ] Extensão carregada e testada.
* [ ] ZIP gerado com manifest na raiz.
* [ ] Store listing documentada.
* [ ] Release notes criadas.

## 33. Definition of Done — site

* [ ] Homepage publicada.
* [ ] Política de privacidade publicada.
* [ ] Página de suporte publicada.
* [ ] Layout responsivo.
* [ ] Screenshots reais.
* [ ] CTA da Chrome Web Store funcionando.
* [ ] Metadados SEO presentes.
* [ ] Canonical correto.
* [ ] Sitemap correto.
* [ ] Robots correto.
* [ ] JSON-LD válido.
* [ ] HTTPS ativo.
* [ ] Nenhum placeholder.
* [ ] Nenhuma afirmação não verificada.
* [ ] Nenhum analytics ou tracker.
* [ ] Links da Chrome Web Store atualizados somente após validação.

---

# PARTE D — FORMATO DA ENTREGA DO CODEX

Ao concluir, apresentar:

1. Resumo das alterações.
2. Lista de arquivos modificados.
3. Lista de arquivos criados.
4. Diff do manifest.
5. Versão final usada.
6. Comandos executados.
7. Resultado dos testes.
8. Caminho do ZIP gerado.
9. URL final do GitHub Pages.
10. Pendências que dependam do proprietário.
11. Campos que ainda precisam ser preenchidos manualmente no Developer Dashboard.
12. Qualquer afirmação de privacidade que não tenha sido possível validar no código.

Não publicar nem enviar a nova versão à Chrome Web Store automaticamente sem autorização explícita.

---

# Registro de execução — site

Atualizado em 20 de julho de 2026.

## Escopo respeitado

- A Parte A (pacote da extensão) não foi modificada.
- Nenhum manifest, locale, número de versão, permissão, ZIP ou material de store listing foi criado ou alterado neste repositório.
- Nenhuma alteração foi enviada à Chrome Web Store.

## Implementado

- [x] Arquitetura Jekyll estática compatível com GitHub Pages.
- [x] Configuração para `https://adrmarabuco.github.io/bookfolio/`, detectada a partir do remoto `adrmarabuco/bookfolio`.
- [x] Layout compartilhado, header, footer e navegação mobile com fallback funcional sem JavaScript.
- [x] Homepage institucional com hero, problema, comparativo, casos de uso, recursos, privacidade, FAQ e CTA.
- [x] Página `/privacy/` preservando o arquivo `privacy.md` no histórico Git.
- [x] Página `/support/` com instalação, primeiros passos, omnibox `bf`, side panel, grupos, abrir todos, restauração da nova guia, troubleshooting e contato.
- [x] Página 404 personalizada.
- [x] Design responsivo, dark mode por preferência do sistema, foco visível, skip link, HTML semântico e suporte a `prefers-reduced-motion`.
- [x] Site funcional sem frameworks, fontes externas, analytics ou trackers.
- [x] Canonical, meta description, Open Graph, Twitter Card e JSON-LD `SoftwareApplication`.
- [x] `robots.txt`, `sitemap.xml`, favicon e imagem Open Graph.
- [x] Quatro screenshots reais integrados à homepage, convertidos para WebP, com dimensões explícitas, carregamento adiado e texto alternativo descritivo.
- [x] CTA e dados estruturados apontando para a URL real da Chrome Web Store.
- [x] Contato real `adrianomal@gmail.com` usado nas páginas de privacidade e suporte.
- [x] Afirmações absolutas “100% private”, “completely anonymous” e “no data ever leaves your device” removidas.
- [x] Política distingue armazenamento do BookFolio de eventual sincronização executada pelo próprio Chrome.
- [x] Checagem automatizada de arquivos obrigatórios, referências de assets, placeholders, metadados SEO e balanceamento do CSS.

## Pendente antes da publicação

- [ ] Executar o build Jekyll completo; Ruby/Bundler não estão disponíveis no ambiente atual.
- [ ] Fazer inspeção visual em desktop e mobile; nenhum navegador integrado está disponível nesta sessão.
- [ ] Confirmar no código da extensão as declarações sobre servidor externo, analytics, armazenamento, permissões e efeito da desinstalação. O pacote não está neste repositório e ficou fora do escopo solicitado.
- [ ] Commit e push para `main`.
- [ ] Ativar GitHub Pages na branch `main`, pasta raiz, e habilitar HTTPS.
- [ ] Validar em produção homepage, `/privacy/`, `/support/`, CSS, imagens, canonical, sitemap, robots e links.
- [ ] Atualizar website, support URL e privacy policy URL no Developer Dashboard somente depois do deployment validado.

## URLs previstas após o deployment

- Site: `https://adrmarabuco.github.io/bookfolio/`
- Privacidade: `https://adrmarabuco.github.io/bookfolio/privacy/`
- Suporte: `https://adrmarabuco.github.io/bookfolio/support/`
- Sitemap: `https://adrmarabuco.github.io/bookfolio/sitemap.xml`
