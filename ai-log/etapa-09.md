# Stage 9: AI log

## Tools
- Gemini

## Conversations
- [https://share.gemini.google/bDry5vMCF1hm]

## Key requests

### 1. Initializing the Express Backend & Project Structure (`backend/`)
- **Asked:** How to replace `json-server` with a standalone Node.js + Express REST API in `backend/` using ES Modules (`"type": "module"`), separating `app.js` from `server.js`, and configuring `CORS_ORIGIN` and `PORT` via `.env.example`.
- **Got:** Complete setup for `backend/package.json` (Express 5 + `cors` + `node --watch src/server.js`), `backend/.gitignore`, `backend/.env.example`, `backend/src/app.js` (with `cors`, `express.json()`, `/health`, 404 fallback, and centralized error middleware), and `backend/src/server.js`.
- **Changed or rejected:** Adapted the server port (`3001`) and allowed origin (`http://localhost:5173`) to match my existing Vite frontend configuration.

### 2. Implementing REST Routes (`routes/interventii.js`) & Server-Side Validation (`validation.js`)
- **Asked:** How to implement all five CRUD endpoints (`GET /interventii`, `GET /interventii/:id`, `POST /interventii`, `PATCH /interventii/:id`, `DELETE /interventii/:id`) with in-memory data storage, whitelist field validation, and proper HTTP status codes (`200`, `201`, `204`, `400`, `404`).
- **Got:** `backend/src/validation.js` (`valideazaInterventie` supporting `partial: true` for `PATCH`, plus `parseId`) and `backend/src/routes/interventii.js` with a shared `gasesteIndex` helper returning `{ error: "..." }` on invalid or missing IDs.
- **Changed or rejected:** Synchronized `TIPURI_SERVICII` (`["Mechanics", "Electrical", "Bodywork"]`) with `frontend/src/constants.js` and `tw.json`, and migrated all 7 automotive interventions from the old `db.json` into the Express in-memory array.

### 3. Connecting Frontend (`api.js`) & Removing `json-server`
- **Asked:** How to display server-side validation and 404 error messages in the React UI and completely remove `json-server` from `frontend/` so automated grading checks pass (`S9-R4`).
- **Got:** Updated the `request` helper in `frontend/src/api.js` to parse `body.error` from failed responses, deleted `frontend/db.json`, removed `json-server` and the `api` script from `frontend/package.json`, and ran `npm install` to update `package-lock.json`.
- **Changed or rejected:** Used as provided and verified all endpoints via `curl` and browser DevTools Network/Console tabs.

## What I learned / what did not work
I learned how Express 5 processes middleware sequentially (`cors` -> `express.json()` -> routes -> 404 handler -> 4-argument centralized error handler) and why separating `app.js` from `server.js` allows importing the Express app without binding a network port during testing. I also understood why server-side validation with a field whitelist is mandatory even when the React form already validates inputs, as external clients (`curl`) can bypass the UI. Finally, inspecting the browser Network tab confirmed how `Access-Control-Allow-Origin` enables cross-origin requests between `:5173` and `:3001`.