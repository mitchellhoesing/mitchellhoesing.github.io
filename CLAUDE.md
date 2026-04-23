# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal portfolio site for Mitchell Hoesing, deployed to GitHub Pages at `mitchellhoesing.github.io`. Forked from `mldangelo/personal-site`. React 18 + React Router v6 + SCSS, built with Create React App and statically pre-rendered with react-snap.

## Commands

- `npm start` — dev server with fast refresh (default `http://localhost:3000`)
- `npm run build` — production build to `build/` (no prerender)
- `npm run predeploy` — `build` + react-snap static export (what CI runs); requires Chromium/Puppeteer to launch
- `npm run deploy` — pushes `build/` to the `gh-pages` branch (manual deploy; CI does this automatically on push to `main`)
- `npm run lint` — ESLint over all git-tracked `*.js` files
- `npm test` — Jest (`--passWithNoTests`); run a single test with `npx jest path/to/file.test.js`
- `npm run analyze` — source-map-explorer over the built JS chunks

## Architecture

**Routing is defined in two places that must stay in sync.** `src/App.js` declares the actual `<Route>` elements with lazy-loaded page components; `src/data/routes.js` drives the navigation menu in `src/components/Template/Navigation.js`. Adding or renaming a page means editing both.

**Pages → Layout → Components.** Each file in `src/pages/` is wrapped in `<Main title="..." description="...">` from `src/layouts/Main.js`, which provides `react-helmet-async` head tags, `Analytics`, `Navigation`, `ScrollToTop`, and `SideBar`. Pages are code-split via `React.lazy()` in `App.js`.

**Content lives in `src/data/`, not in page components.** Resume sections (`resume/{courses,degrees,skills,work}.js`), projects (`projects.js`), contact (`contact.js`), and the About page (`about.md`, loaded dynamically and rendered with `markdown-to-jsx`). To change site copy, edit data — not JSX.

**react-snap requires the hydration branch in `src/index.js`.** When the prerendered HTML is already in the DOM, `hydrateRoot` runs; otherwise `createRoot` does. Don't simplify this to a single path or static export breaks. `react-snap` config (with `--no-sandbox` puppeteer args) lives in `package.json`.

**Analytics is production-only.** `src/components/Template/Analytics.js` only initializes `react-ga` when `NODE_ENV=production`, using `REACT_APP_GA_TRACKING_ID` (set in `.github/workflows/github-pages.yml`, not `.env`).

**Styles.** SCSS entry is `src/static/css/main.scss`, imported once from `App.js`. Subdirs: `base/`, `components/`, `layout/`, `libs/`, `pages/`.

## Deployment

CI in `.github/workflows/github-pages.yml` runs on every push to `main` and deploys to GitHub Pages by pushing `build/` to the `gh-pages` branch. `npm run deploy` is the manual equivalent. The custom domain is set via `public/CNAME`. `package.json:homepage` and `PUBLIC_URL` must agree with the deploy target — changing them shifts the dev-server base path too.

CI in `.github/workflows/node.js.yml` runs lint, predeploy (build + react-snap), and tests on Node 14/16/18 for pushes/PRs to `main`. The Puppeteer step installs system deps via `apt-get`; recent commits trimmed this list, so be cautious changing it.

## Conventions

- ESLint extends `airbnb` with the overrides in `.eslintrc` — notably `linebreak-style: unix` and `react/function-component-definition: arrow-function`. Match the existing style; the lint step will fail CI otherwise.
- Line endings are enforced as LF via `.gitattributes`. On Windows, configure git (`git config core.autocrlf input`) before committing — CRLF will break the lint step.
- React components are arrow-function components with `prop-types`; no TypeScript.
- Don't add tests for trivial display components — the project explicitly uses `--passWithNoTests`. Jest is wired up (`jest.config.js` maps CSS/SCSS to `babel-jest` and `.md` to `markdown-to-jsx`) but the suite is intentionally minimal.
