# Stage 6: AI log

## Tools
- Gemini

## Conversations
- [https://share.gemini.google/bDry5vMCF1hm]

## Key requests

### 1. Mock API connection (json-server) and useEffect
- **Asked:** How to move the hardcoded array to a `db.json` file, fetch it using `json-server`, and handle the loading and error states as required by Stage 6.
- **Got:** Step-by-step instructions on setting up `json-server@0.17.4`, creating an `api.js` file with `fetch`, and using `useEffect` with a cleanup function (`ignore`) to prevent race conditions.
- **Changed or rejected:** I adapted the logic to pass the fetched data through my existing `genereazaTabelaAleatoare` function. This ensured that my custom "live capacity semaphore" feature kept its dynamic, randomized behavior on every refresh while still meeting the academic requirement of fetching data from the API.

### 2. Cinematic Scroll Animation and Image Adjustments
- **Asked:** How to create a specific cinematic effect where a BMW M3 Competition zooms in and brightens from the dark as the user scrolls down to the footer. Also asked how to change a web image to a local one and increase its brightness.
- **Got:** React logic using `useRef` and `useEffect` with a scroll event listener to calculate the scroll percentage. CSS and inline style dynamic calculations for `scale`, `opacity`, and `filter: brightness()`. Instructions to put local images in the `/public` folder.
- **Changed or rejected:** I tweaked the multiplier in the `brightness` filter calculation to make the car shine even brighter when fully scrolled down, adjusting the values until the visual effect was perfect for my design.

### 3. Vite/Oxc Parse Error Resolution
- **Asked:** Why my app crashed with a `[PARSE_ERROR] Identifier 'useState' has already been declared` in Vite.
- **Got:** An explanation that I had duplicate `import { useState }` declarations at the top of my `App.jsx` file.
- **Changed or rejected:** I simply removed the duplicate line and consolidated all hooks (`useState`, `useEffect`, `useRef`) into a single import line.

## What I learned / what did not work
I learned how to run a frontend and a mock backend simultaneously using two separate VS Code terminals (`npm run dev` and `npm run api`). I understood the importance of handling the three states of a network request (loading, success, error) to prevent blank screens and provide a good user experience. I also learned how powerful React's `useEffect` can be for binding scroll positions to visual layout updates (like my M3 animation). Lastly, I noticed that while I fetch data from the API on load, toggling or deleting items only changes the local state and resets on refresh, which I understand is normal for Stage 6 and will be fully synchronized with the server in the next stage.