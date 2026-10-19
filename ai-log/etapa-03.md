# Stage 3: AI log

## Tools

- Gemini

## Conversations

- (https://share.gemini.google/jsLsA7fSlPyu)

## Key requests

### 1. Vite Project Initialization and Terminal Errors

- **Asked:** How to initialize a React project using Vite and resolve the `PSSecurityException` error that blocked `npm` commands in the VS Code terminal.
- **Got:** Explanations on why PowerShell blocks scripts by default and two solutions: switching to `cmd` or running `Set-ExecutionPolicy` to allow script execution.
- **Changed or rejected:** I chose the `Set-ExecutionPolicy` fix so I could continue using the default PowerShell integrated terminal without switching environments. 

### 2. Template Cleanup and Data Migration

- **Asked:** How to clean up the default Vite template and integrate the styles from Stage 1 and the data structure from Stage 2.
- **Got:** A step-by-step guide to deleting unnecessary assets (like `index.css`, SVGs), migrating the old CSS into `App.css`, and putting the AutoService data array directly into `App.jsx`.
- **Changed or rejected:** I followed the structure exactly, updating the `.container` CSS rule to `grid-template-columns: 1fr;` to fit the current stage's layout requirements before the form is reintroduced.

### 3. Build Verification and GitHub Push

- **Asked:** How to verify the build process and correctly push the project to GitHub without accidentally uploading the massive `node_modules` folder.
- **Got:** Instructions to run `npm run build` to verify the project, followed by using `git status --short` from the root directory to confirm `.gitignore` was working properly.
- **Changed or rejected:** I initially got directory errors because I was trying to run the build command from the root folder instead of `frontend/`, but corrected the pathing with `cd` before committing.

## What I learned / what did not work

I learned how Vite scaffolds a modern React application and how a development server (`npm run dev`) instantly reflects changes. I also understood the importance of `package.json` for managing dependencies and why `node_modules` must be strictly ignored via `.gitignore`. The main thing that did not work initially was executing `npm` commands due to Windows PowerShell security policies and executing git commands from the wrong nested folder, teaching me to pay closer attention to the current active directory in the terminal.