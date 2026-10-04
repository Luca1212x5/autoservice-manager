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

## AI usage
| Tool | Used for |
| --- | --- |
| Gemini | Understanding project steps, structuring the data model, and code validation |

Details per stage:
- Stage 1: see the ai-log/ folder.

## How to run
Open index.html in a browser. No build step, no server.

## Status
- [x] Stage 1: static mockup
- [ ] Stage 2: data logic in JavaScript

## Stage 1 Checklist (To be filled after git push)

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
