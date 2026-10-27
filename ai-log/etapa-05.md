# Stage 5: AI log

## Tools
- Gemini

## Conversations
- [https://share.gemini.google/OumkYyFeNiHb]

## Key requests

### 1. State and Immutable Updates
- **Asked:** How to move my initial array into React `useState` and how to adapt my Stage 2 functions (`handleToggle`, `handleDelete`) to update the state immutably.
- **Got:** Code examples showing how to use `useState` with the initial array, and how to use `map` and `filter` inside the `setInterventii` function with the `(prev) => ...` pattern.
- **Changed or rejected:** I adapted the `INTERVENTII_INITIALE` array to match my project's data exactly.

### 2. Controlled Inputs and Theme Toggle
- **Asked:** How to properly bind the checkbox to the state without getting console warnings, and how to implement a dark/light mode toggle button in the header.
- **Got:** Instructions to use `checked` along with `onChange` for the checkbox (controlled input). For the theme, I received the logic to keep the current theme in state and apply `data-theme` to the `document.documentElement`.
- **Changed or rejected:** Everything worked perfectly. I adjusted the CSS variables in `App.css` to match my custom colors from Stage 1.

## What I learned / what did not work
I learned that React state should be lifted to the closest common ancestor (`App.jsx`) and passed down as props. I also understood the importance of the `onChange` handler for checkboxes in React to prevent them from becoming read-only, and why we must pass a callback function to `onClick` (`() => handleDelete(id)`) instead of calling it immediately.