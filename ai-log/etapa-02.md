# Stage 2: AI log

## Tools

* Gemini

## Conversations

* https://share.gemini.google/doIL79Ye1OhI

## Key requests

### 1. JS File Integration and Data Structure

* **Asked:** How to correctly link the new JavaScript file (`interventii.js`) to my HTML page without altering the visual interface, and how to structure the initial array of objects.
* **Got:** Instructions to add the `<script>` tag just before the closing `</body>` tag so the script loads optimally and the results can be monitored in the browser console.
* **Changed or rejected:** I implemented the suggested `<script>` placement and adapted the array structure to fit my specific "AutoService Manager" data model perfectly.

### 2. Immutability and ID Calculation

* **Asked:** How to add a new item to the array without using `.push()` to respect the immutability requirement, and how to correctly calculate the next ID without creating duplicates.
* **Got:** Explanations on using the spread operator (`...`) to build and return a new array. The AI also suggested using the `reduce` method to find the maximum existing ID instead of using `length + 1`, which is unsafe when items are deleted.
* **Changed or rejected:** I adopted the `reduce` method for the ID calculation as it was much safer and more robust than my initial idea of relying on array length.

### 3. Debugging Console Output

* **Asked:** For help debugging why my JavaScript console messages were not appearing in the browser despite the JS code looking correct.
* **Got:** The AI analyzed my HTML code and identified a syntax error at the end of the document (duplicate `</body>` and `</html>` tags) that was blocking the script from loading correctly.
* **Changed or rejected:** I cleaned up the duplicated tags as suggested, and the console tests ran successfully immediately after.

## What I learned / what did not work

I learned how to manage application state using plain JavaScript without manipulating the DOM. Technically, I learned how to use array methods like `map`, `filter`, and `reduce` to ensure immutability, which I understand is a crucial concept for the upcoming React stages. The main thing that did not work initially was the script execution due to a simple HTML typo, teaching me to always double-check the structural integrity of my files when external scripts fail to load.