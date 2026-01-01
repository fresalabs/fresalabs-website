# FresaLabs Website

The official website for [FresaLabs](https://fresalabs.com) - Software for Everyone.

Built with Next.js 15, React 19, Tailwind CSS, Framer Motion, and anime.js.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **UI:** React 19, Tailwind CSS
- **Animations:** Framer Motion, anime.js
- **Icons:** Lucide React
- **Deployment:** GitHub Pages (static export)

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

```bash
npm run build
```

This creates a static export in the `out` directory, ready for deployment.

## Deployment

The site is deployed to GitHub Pages. The build output is configured for static export with:

- Custom domain: `fresalabs.com`
- CNAME file included in public directory
- Google Analytics preserved

## Project Structure

```
├── app/                  # Next.js App Router pages
│   ├── layout.tsx       # Root layout with navigation/footer
│   ├── page.tsx         # Home page
│   ├── privacy/         # Privacy policy
│   └── terms/           # Terms of service
├── components/          # React components
│   ├── Hero.tsx         # Animated hero section
│   ├── Products.tsx     # Products showcase
│   ├── About.tsx        # About section
│   ├── Navigation.tsx   # Header navigation
│   └── Footer.tsx       # Site footer
├── public/              # Static assets
│   ├── CNAME           # Custom domain
│   └── app-ads.txt     # Google AdSense
└── tailwind.config.ts   # Tailwind with custom colors
```

## License

MIT
