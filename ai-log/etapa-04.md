# Stage 4: AI log

## Tools
- Gemini

## Conversations
- [https://share.gemini.google/aAnQ4nE4ribv]

## Key requests

### 1. Component Creation and Props
- **Asked:** How to split the code from `App.jsx` into smaller React components (`InterventieList` and `InterventieCard`) and pass data using props.
- **Got:** Step-by-step instructions and JSX code to create the `components` folder and the two required files, mapping the data array correctly.
- **Changed or rejected:** I adapted the `ETICHETE_SERVICIU` dictionary to map my specific service types ("Mechanics", "Electrical", "Bodywork") to Romanian labels for display.

### 2. Conditional Rendering
- **Asked:** How to display a message when the list is empty and change the card's CSS class based on the completed status.
- **Got:** Code implementing an early return in `InterventieList` for an empty array and ternary operators in `InterventieCard` to toggle the "done" class and status text.
- **Changed or rejected:** Everything worked perfectly. I tested the empty list by temporarily emptying the array, and the fallback message displayed as expected.

## What I learned / what did not work
I learned how React components communicate hierarchically (parent to child) using `props`. I also learned how to use the `map` method within JSX to generate multiple components dynamically, and why the `key` prop is crucial for React to keep track of list items without throwing console errors. The transition from raw JSON to components was smooth once the files were correctly linked and imported.