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
Open `index.html` in a browser. No build step, no server.

## Status
- [x] Stage 1: static mockup
- [x] Stage 2: data logic in JavaScript
- [ ] Stage 3: Vite and React project

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
| S1-R1 | README: description, fields, sample data, how to run | https://github.com/Luca1212x5/autoservice-manager/blob/80220149d8191ade0a2bebdb283b3714f79b4208/README.md | read |
| S1-R2 | AI usage section | https://github.com/Luca1212x5/autoservice-manager/blob/d4b7740/README.md#L20-L30 | read |
| S1-R3 | AI log for stage 1 | https://github.com/Luca1212x5/autoservice-manager/blob/d4b7740/ai-log/etapa-01.md | read |
| S1-R4 | header, form (text + select), 3 cards with own data | https://github.com/Luca1212x5/autoservice-manager/blob/d4b7740/index.html#L10-L54 | open the page |
| S1-R5 | finished card looks different | https://github.com/Luca1212x5/autoservice-manager/blob/d4b7740/style.css#L20-L25 | look at the card |
| S1-R6 | 2 columns on desktop, 1 under 700px | https://github.com/Luca1212x5/autoservice-manager/blob/d4b7740/style.css#L30-L35 | resize < 700px |
| S1-R7 | visible focus, readable dark theme | https://github.com/Luca1212x5/autoservice-manager/blob/d4b7740/style.css#L36-L45 | Tab; dark mode |
| S1-R8 | commit "Stage 1" pushed | https://github.com/Luca1212x5/autoservice-manager/commit/d4b7740 | commit history |

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