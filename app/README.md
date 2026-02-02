# LAB PRO Website

Sito web bilingue (ITA/ENG) per LAB PRO S.r.l., azienda italiana specializzata nella produzione di prodotti da forno artigianali.

## 🚀 Tecnologie

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS 3.4
- **UI Components**: shadcn/ui
- **Routing**: React Router DOM
- **Icons**: Lucide React

## 📁 Struttura del Progetto

```
app/
├── public/                 # Asset statici
├── src/
│   ├── components/
│   │   ├── layout/         # Header, Footer, Layout
│   │   ├── seo/            # SEO, JSON-LD components
│   │   └── ui/             # shadcn/ui components
│   ├── i18n/               # Traduzioni e contesto
│   │   ├── translations.ts # Testi ITA/ENG
│   │   └── I18nContext.tsx # Gestione lingua
│   ├── pages/              # Pagine del sito
│   ├── App.tsx             # Router principale
│   └── main.tsx            # Entry point
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## 🌍 Architettura Bilingue

Il sito supporta due lingue con routing dedicato:

- **Italiano (default)**: `/it/*`
- **Inglese**: `/en/*`
- **Redirect**: `/` → `/it`

### Cambio lingua

Lo switch lingua è disponibile nell'header (desktop) e nel menu mobile. La preferenza viene salvata in `localStorage`.

## 📱 Pagine

| Route | Pagina |
|-------|--------|
| `/` | Redirect a `/it` |
| `/it`, `/en` | Home |
| `/it/chi-siamo`, `/en/chi-siamo` | Chi Siamo |
| `/it/pane-naturale`, `/en/pane-naturale` | Il Nostro Pane |
| `/it/focaccia-romana`, `/en/focaccia-romana` | Focaccia Romana |
| `/it/focaccia-ligure`, `/en/focaccia-ligure` | Focaccia Ligure |
| `/it/altri-prodotti`, `/en/altri-prodotti` | Altri Prodotti |
| `/it/lievito-madre`, `/en/lievito-madre` | Lievito Madre |
| `/it/lavora-con-noi`, `/en/lavora-con-noi` | Lavora con Noi |
| `/it/contatti`, `/en/contatti` | Contatti |

## 🛠️ Comandi

```bash
# Installazione dipendenze
npm install

# Development server
npm run dev

# Build produzione
npm run build

# Preview build
npm run preview
```

## ♿ Accessibilità

- Semantic HTML5
- ARIA labels dove necessario
- Focus states visibili
- Skip link per screen reader
- Supporto `prefers-reduced-motion`
- Colori con contrasto WCAG AA

## 🔍 SEO

- Meta tags dinamici per pagina
- JSON-LD structured data:
  - LocalBusiness
  - Organization
  - BreadcrumbList
- OpenGraph tags
- Canonical URLs
- Semantic headings (1 H1 per pagina)

## 📱 Mobile-First

Il design è sviluppato con approccio mobile-first:

- Breakpoint: `sm: 640px`, `md: 768px`, `lg: 1024px`, `xl: 1280px`
- Menu hamburger su mobile
- Touch targets minimi 44x44px
- Tipografia responsive

## 🖼️ Immagini

Le immagini sono placeholder. Per aggiungere immagini reali:

1. Inserire i file in `/public/images/`
2. Aggiornare i riferimenti nelle pagine
3. Usare formati WebP per ottimizzazione

## 📄 Licenza

© 2025 LAB PRO S.r.l. - Tutti i diritti riservati.
