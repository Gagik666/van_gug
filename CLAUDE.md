# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Project Overview

Next.js 16.2.11 portfolio site with i18n support (Armenian/English). Uses App Router, React 19.2.4, React Compiler, Turbopack, and Tailwind CSS 4.

## Commands

```bash
npm run dev      # Start dev server with Turbopack
npm run build    # Production build with Turbopack
npm start        # Start production server
npm run lint     # Run ESLint
```

Dev server runs at http://localhost:3000

## Architecture

- **App Router**: `src/app/` — layout.tsx sets Geist fonts, renders Navbar/Footer, uses `lang="am"`
- **i18n**: Client-side only with `react-i18next`. Configuration in `src/i18n/`, translations in `src/i18n/locales/`. Default language: Armenian (`am`), fallback order: `am` → `en`
- **Components**: Feature-organized in `src/components/home/` (Hero, Services, Portfolio, etc.), layout in `src/components/layout/`, shared in `src/components/common/`
- **Import alias**: `@/*` → `src/*`
- **React Compiler**: Enabled in `next.config.ts` (`reactCompiler: true`)

## Next.js Version Warning

This uses Next.js 16 with breaking changes from your training data. Check `node_modules/next/dist/docs/` before writing code.

## Code Style

- TypeScript strict mode enabled
- Target ES2017
- JSX transform: `react-jsx`
- Return only modified files
- Keep responses minimal