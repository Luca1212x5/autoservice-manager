# AutoService Manager
A simple web application to manage car repairs and service interventions for mechanics and car owners.

## Data model
| Field | Type | Notes |
| --- | --- | --- |
| Intervention | text | required, max 100 chars (e.g., Oil change VW Golf) |
| Completed | boolean | toggled from the list, default false |
| Service Type | fixed values | Mechanics, Electrical, Bodywork |
| Vehicle Category | relation | Car, SUV, Van |
| Mechanic | relation | the owner of the item (from week 11) |

## Sample data used across all stages:
1. Oil change VW Golf, active, Mechanics
2. Replace battery Ford Focus, done, Electrical
3. Paint front bumper BMW, active, Bodywork

## How to run
cd frontend
npm install
npm run dev
Then open the address printed in the terminal (http://localhost:5173).

## Status
- [x] Stage 1: static mockup
- [x] Stage 2: data logic in JavaScript
- [x] Stage 3: Vite and React project
- [x] Stage 4: components rendered from data
- [x] Stage 5: local state and events
- [ ] Stage 6: loading data from a mock API

---

## Stage 1: Static mockup

**Description:**
Initial HTML and CSS mockup of the application layout, featuring a dark theme, responsive grid/flexbox design, and form inputs.

**AI Usage:**
- **Tool:** Gemini
- **Used for:** Understanding project steps, structuring the data model, and code validation for HTML/CSS.
- **AI Log:** See [`ai-log/etapa-01.md`](ai-log/etapa-01.md)

### Stage 1 Checklist
| ID | Requirement | Where (permalink) | How to check |
| --- | --- | --- | --- |
| S1-R1 | README: description, fields, sample data, how to run | https://github.com/Luca1212x5/autoservice-manager/blob/0ec7338989c686b8219a7b1645d767a7f3f7927e/README.md?plain=1#L4-L16 | read |
| S1-R2 | AI usage section | https://github.com/Luca1212x5/autoservice-manager/blob/0ec7338989c686b8219a7b1645d767a7f3f7927e/README.md?plain=1#L18-L26 | read |
| S1-R3 | AI log for stage 1 | https://github.com/Luca1212x5/autoservice-manager/blob/0ec7338989c686b8219a7b1645d767a7f3f7927e/ai-log/etapa-01.md | read |
| S1-R4 | header, form (text + select), 3 cards with own data | https://github.com/Luca1212x5/autoservice-manager/blob/0ec7338989c686b8219a7b1645d767a7f3f7927e/index.html#L10-L54 | open the page |
| S1-R5 | finished card looks different | https://github.com/Luca1212x5/autoservice-manager/blob/0ec7338989c686b8219a7b1645d767a7f3f7927e/style.css#L23-L25 | look at the card |
| S1-R6 | 2 columns on desktop, 1 under 700px | https://github.com/Luca1212x5/autoservice-manager/blob/0ec7338989c686b8219a7b1645d767a7f3f7927e/style.css#L29-L31 | resize < 700px |
| S1-R7 | visible focus, readable dark theme | https://github.com/Luca1212x5/autoservice-manager/blob/0ec7338989c686b8219a7b1645d767a7f3f7927e/style.css#L25-L35 | Tab; dark mode |
| S1-R8 | commit "Stage 1" pushed | https://github.com/Luca1212x5/autoservice-manager/commit/0ec7338989c686b8219a7b1645d767a7f3f7927e | commit history |

---

## Stage 2: Data logic

**Description:**
Plain JavaScript, no DOM. `interventii.js` holds the array and the functions that read and change it. Results are printed in the browser console (F12).

**AI Usage:**
- **Tool:** Gemini
- **Used for:** Understanding immutability, array methods (`map`, `filter`, `reduce`) to calculate unique IDs, and debugging HTML script loading issues.
- **AI Log:** See [`ai-log/etapa-02.md`](ai-log/etapa-02.md)

### Stage 2 Checklist
| ID | Requirement | Where (permalink) | How to check |
| --- | --- | --- | --- |
| S2-R1 | JS file linked, logs on page load | https://github.com/Luca1212x5/autoservice-manager/blob/8d58d3cbd2833e9ef7c6b2cbea08c59d31bbadf7/index.html?plain=1#L62-L63 | open page, F12 |
| S2-R2 | 3+ items with id, name, state, tag | https://github.com/Luca1212x5/autoservice-manager/blob/8d58d3cbd2833e9ef7c6b2cbea08c59d31bbadf7/interventii.js#L4-L8 | read |
| S2-R3 | list, count, search, add, toggle, delete | https://github.com/Luca1212x5/autoservice-manager/blob/8d58d3cbd2833e9ef7c6b2cbea08c59d31bbadf7/interventii.js#L10-L42 | console output |
| S2-R4 | add rejects empty name and invalid tag | https://github.com/Luca1212x5/autoservice-manager/blob/8d58d3cbd2833e9ef7c6b2cbea08c59d31bbadf7/interventii.js#L35-L42 | last 2 console lines |
| S2-R5 | original array unchanged after add | https://github.com/Luca1212x5/autoservice-manager/blob/8d58d3cbd2833e9ef7c6b2cbea08c59d31bbadf7/interventii.js#L68-L70 | console line |
| S2-R6 | README Stage 2 section + AI log | https://github.com/Luca1212x5/autoservice-manager/blob/main/ai-log/etapa-02.md | read |
| S2-R7 | commit "Stage 2" pushed | https://github.com/Luca1212x5/autoservice-manager/commit/8d58d3cbd2833e9ef7c6b2cbea08c59d31bbadf7 | commit history |

---

## Stage 3: Vite and React project
The app now lives in frontend/, built with Vite. The data from stage 2 moved into the main component; the list is still printed raw.

### Stage 3 Checklist

| ID | Requirement | Where (permalink) | How to check |
| --- | --- | --- | --- |
| S3-R1 | npm run dev starts without errors | https://github.com/Luca1212x5/autoservice-manager/blob/9c167bd207a814d9a8d3ced2360723df9f81a95c/frontend/package.json#L7 | npm install, npm run dev |
| S3-R2 | app name and counter computed from data | https://github.com/Luca1212x5/autoservice-manager/blob/9c167bd207a814d9a8d3ced2360723df9f81a95c/frontend/src/App.jsx#L10-L18 | edit data, save |
| S3-R3 | data from README, not from the example | https://github.com/Luca1212x5/autoservice-manager/blob/9c167bd207a814d9a8d3ced2360723df9f81a95c/frontend/src/App.jsx#L3-L8 | compare with README |
| S3-R4 | stage 1 styles reused | https://github.com/Luca1212x5/autoservice-manager/blob/9c167bd207a814d9a8d3ced2360723df9f81a95c/frontend/src/App.css#L1-L5 | look at the page |
| S3-R5 | node_modules ignored, build passes | https://github.com/Luca1212x5/autoservice-manager/blob/9c167bd207a814d9a8d3ced2360723df9f81a95c/frontend/.gitignore#L3 | npm run build |
| S3-R6 | README Stage 3 section + AI log | https://github.com/Luca1212x5/autoservice-manager/blob/9c167bd207a814d9a8d3ced2360723df9f81a95c/ai-log/etapa-03.md | read |
| S3-R7 | commit "Stage 3" pushed | https://github.com/Luca1212x5/autoservice-manager/commit/9c167bd207a814d9a8d3ced2360723df9f81a95c | commit history |

---

## Stage 4: Components
The list is rendered from the data, through two components:
- `InterventieList` receives the whole array and renders one card per item.
- `InterventieCard` receives a single item through props and displays it.

### Stage 4 Checklist

| ID | Requirement | Where (permalink) | How to check |
| --- | --- | --- | --- |
| S4-R1 | 2+ components in src/components/ | https://github.com/Luca1212x5/autoservice-manager/tree/9c167bd207a814d9a8d3ced2360723df9f81a95c/frontend/src/components | open folder |
| S4-R2 | card receives data through props | https://github.com/Luca1212x5/autoservice-manager/blob/9c167bd207a814d9a8d3ced2360723df9f81a95c/frontend/src/components/InterventieCard.jsx#L10 | read |
| S4-R3 | map + key={id}, no console warnings | https://github.com/Luca1212x5/autoservice-manager/blob/9c167bd207a814d9a8d3ced2360723df9f81a95c/frontend/src/components/InterventieList.jsx#L12-L14 | F12, Console |
| S4-R4 | message for empty list | https://github.com/Luca1212x5/autoservice-manager/blob/9c167bd207a814d9a8d3ced2360723df9f81a95c/frontend/src/components/InterventieList.jsx#L5-L7 | set array to [] |
| S4-R5 | state changes the card look | https://github.com/Luca1212x5/autoservice-manager/blob/9c167bd207a814d9a8d3ced2360723df9f81a95c/frontend/src/components/InterventieCard.jsx#L12 | toggle a done flag |
| S4-R6 | README Stage 4 section + AI log | https://github.com/Luca1212x5/autoservice-manager/blob/9c167bd207a814d9a8d3ced2360723df9f81a95c/ai-log/etapa-04.md | read |
| S4-R7 | commit "Stage 4" pushed | https://github.com/Luca1212x5/autoservice-manager/commit/9c167bd207a814d9a8d3ced2360723df9f81a95c | commit history |

---

## Stage 5: local state and events
The list lives in React state. Checking and deleting work from the page, and the counters in the header follow automatically. A button in the header switches between light and dark mode. Changes are lost on refresh, which is what stage 6 and stage 10 fix.

### Stage 5 Checklist

| ID | Requirement | Where (permalink) | How to check |
| --- | --- | --- | --- |
| S5-R1 | list kept in useState, in App | https://github.com/Luca1212x5/autoservice-manager/blob/ba1c47362ef04c17b82dc80666e596b33e80758a/frontend/src/App.jsx#L15 | read |
| S5-R2 | toggling changes state and card look | https://github.com/Luca1212x5/autoservice-manager/blob/ba1c47362ef04c17b82dc80666e596b33e80758a/frontend/src/components/InterventieCard.jsx#L10-L14 | click a checkbox |
| S5-R3 | delete removes the item | https://github.com/Luca1212x5/autoservice-manager/blob/ba1c47362ef04c17b82dc80666e596b33e80758a/frontend/src/App.jsx#L24-L26 | click Delete |
| S5-R4 | header counter derived, not in state | https://github.com/Luca1212x5/autoservice-manager/blob/ba1c47362ef04c17b82dc80666e596b33e80758a/frontend/src/App.jsx#L34 | toggle, watch header |
| S5-R5 | immutable updates (no push, splice, assignment) | https://github.com/Luca1212x5/autoservice-manager/blob/ba1c47362ef04c17b82dc80666e596b33e80758a/frontend/src/App.jsx#L18-L26 | read |
| S5-R6 | light/dark toggle: state + data-theme on html | https://github.com/Luca1212x5/autoservice-manager/blob/ba1c47362ef04c17b82dc80666e596b33e80758a/frontend/src/App.jsx#L28-L32 | click the button, both system themes |
| S5-R7 | no console warnings; README + AI log | https://github.com/Luca1212x5/autoservice-manager/blob/ba1c47362ef04c17b82dc80666e596b33e80758a/ai-log/etapa-05.md | F12, Console |
| S5-R8 | commit "Stage 5" pushed | https://github.com/Luca1212x5/autoservice-manager/commit/ba1c47362ef04c17b82dc80666e596b33e80758a | commit history |