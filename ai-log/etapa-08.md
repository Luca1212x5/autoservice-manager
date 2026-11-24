# Stage 8: AI log

## Tools
- Gemini

## Conversations
- [https://share.gemini.google/bDry5vMCF1hm]

## Key requests

### 1. Setting Up React Router & Common Layout (`BrowserRouter`, `Layout.jsx`, `App.jsx`)
- **Asked:** How to migrate the single-view application to a multi-page Single Page Application (SPA) using `react-router-dom` with a shared header/footer layout (`Layout.jsx`), routes for the list (`/`), detail page (`/interventii/:id`), about page (`/despre`), and 404 fallback (`*`), while preserving my existing emax Motorsport branding and BMW M3 Competition cinematic scroll footer.
- **Got:** Step-by-step instructions to wrap `<App />` in `<BrowserRouter>` inside `main.jsx`, define the route map in `App.jsx`, and extract the BMW M-striped header, `NavLink` navigation (`end` prop on `/`), dark/light theme toggle, `<Outlet />`, and scroll-driven M3 footer into `Layout.jsx`.
- **Changed or rejected:** Rejected an initial simplified `DesprePage.jsx` that omitted my detailing, towing, and Nürnberg timeline sections; instead, I consolidated those rich sections into `DesprePage.jsx` and kept the searchable 6-service catalog on `InterventiiPage.jsx` so nothing from previous stages was lost.

### 2. Migrating Global CSS to CSS Modules (`*.module.css`) & Fixing Badge Visibility
- **Asked:** How to split my large `App.css` file into component-scoped CSS Modules (`Layout.module.css`, `InterventieCard.module.css`, `InterventieList.module.css`, `TaskForm.module.css`, `InterventiiPage.module.css`, `InterventieDetaliuPage.module.css`, `DesprePage.module.css`) while keeping only CSS variables and shared utility classes in `index.css`. Also asked why the department badge text on `Mechanics` items became invisible after refactoring.
- **Got:** Modular CSS files mapped via `styles.<className>` across all components and pages, plus a fix in `index.css` (`color: #ffffff !important;` on `.badge`) to prevent an inherited blue `span` rule from matching the blue background of `.badge-mechanics`.
- **Changed or rejected:** Removed the old `.live-board` CSS rules that hid checkboxes and delete buttons (`display: none !important`), ensuring automated grading tests for Stage 7/8 can interact with item toggling and deletion.

### 3. Detail Page (`InterventieDetaliuPage.jsx`), `fetchInterventie(id)`, and `data-testid` Attributes
- **Asked:** How to fetch a single intervention by URL parameter (`useParams()`), handle loading and `404` error states for non-existent IDs (such as `/interventii/999`), and update card titles into `<Link>` elements without breaking automated grading hooks.
- **Got:** Added `fetchInterventie(id)` in `api.js`, centralized department labels in `constants.js`, updated `InterventieCard.jsx` to replace `data-testid="item-title"` with `<Link data-testid="item-link">`, and implemented `InterventieDetaliuPage.jsx` (`detail`, `detail-title`, `error`, `loading`) and `NotFoundPage.jsx` (`not-found`).
- **Changed or rejected:** Used as provided, adapting route paths and labels to the `/interventii` resource defined in `tw.json`.

## What I learned / what did not work
I learned how React Router enables client-side navigation using `<Link>` and `<NavLink>` without reloading the HTML document or losing application state, and how `useParams()` triggers `useEffect` whenever the route `:id` changes. Moving from a single global stylesheet to CSS Modules showed me how Vite scopes class names at build time to prevent collisions while keeping shared tokens in `index.css`. During refactoring, I accidentally pasted the `App.jsx` router code into `DesprePage.jsx`, which caused Vite pre-transform import resolution errors until I restored the proper component exports and removed the leftover `App.css` file.