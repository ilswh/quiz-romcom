# Testing

Return back to the [README.md](README.md) file.

I have tested my romcom-quiz through validation of HTML, CSS and JavaScript.
I checked the  browser compatability through chrome, safari and firefox.
I have checked the responsiveness on tablet, phone and laptop. Desktop?
Finally I tested it through Lighthouse.

Essentially, in this part, you should go over all of your project's features, and ensure that they all work as intended,
with the project providing an easy and straightforward way for the users to achieve their goals.

## Code Validation

Use the space to discuss code validation for any of your own code files (where applicable).
You are not required to validate external libraries/frameworks, such as imported Bootstrap, Materialize, Font Awesome, etc.

### HTML

I have used the recommended [HTML W3C Validator](https://validator.w3.org) to validate all of my HTML files. Below is the attached the link with a screenshot.

https://validator.w3.org/nu/?doc=https%3A%2F%2Filswh.github.io%2Fquiz-romcom%2F
![screenshot](documentation/html-validation.png)

### CSS

I have used the recommended [CSS Jigsaw Validator](https://jigsaw.w3.org/css-validator) to validate all of my CSS files. Below is the attached the link with a screenshot.

 https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Filswh.github.io%2Fquiz-romcom%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=sv
![screenshot](documentation/css-validation.png)

### JavaScript

I have used the recommended [JShint Validator](https://jshint.com) to validate all of my JS files.
Below is attached screenshots.

![screenshot] (documentation/javascript-validation-script.png)
![screenshot](documentation/javascript-validation-questions.png)

## Browser Compatibility

I have tested the site in chrome, safari and firefox.

- [Chrome](https://www.google.com/chrome)
- [Firefox (Developer Edition)](https://www.mozilla.org/firefox/developer)
- [Safari](https://support.apple.com/downloads/safari)

I've tested my deployed project on multiple browsers to check for compatibility issues.

| Browser | Start | Quiz | Next | Scoreboard | Restart | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| ![Chrome] |  | ![screenshot](documentation/chrome-start.png) | ![screenshot](documentation/chrome-quiz.png) | ![screenshot](documentation/chrome-next.png) | ![screenshot](documentation/chrome-scoreboard.png) | ![screenshot](documentation/chrome-restart.png) |
| ![Firefox] | ![screenshot](documentation/firefox-start.png) | ![screenshot](documentation/firefox-quiz.png) | ![screenshot](documentation/firefox-next.png) | ![screenshot](documentation/firefox-scoreboard.png) | ![screenshot](documentation/firefox-restart.png) |
| ![Safari] | ![screenshot](documentation/safari-start.png) | ![screenshot](documentation/safari-quiz.png) | ![screenshot](documentation/safari-next.png) | ![screenshot](documentation/safari-scoreboard.png) | ![screenshot](documentation/safari-restart.png) |


## Responsiveness

I have tested the site on mobile, tablet and desktop screens. Below are attached screenshots.

I've tested my deployed project on multiple devices to check for responsiveness issues.

| Device | Start | Quiz | Next | Scoreboard | Restart | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| Mobile (DevTools) | --- | --- | --- | --- | --- | --- |
| Tablet (DevTools) | --- | --- | --- | --- | --- | --- |
| Desktop (Devtools) | --- | --- | --- | --- | --- | --- |


## Lighthouse Audit

Use this space to discuss testing the live/deployed site's Lighthouse Audit reports.
Avoid testing the local version (especially if developing in Gitpod), as this can have knock-on effects of performance.

Sample Lighthouse testing documentation:

I've tested my deployed project using the Lighthouse Audit tool to check for any major issues.

| Page | Mobile | Desktop | Notes |
| --- | --- | --- | --- |
| index | --- | --- | --- |

## Bugs

This section is primarily used for JavaScript and Python applications,
but feel free to use this section to document any HTML/CSS bugs you might run into.

It's very important to document any bugs you've discovered while developing the project.
Make sure to include any necessary steps you've implemented to fix the bug(s) as well.

**PRO TIP**: screenshots of bugs are extremely helpful, and go a long way!

- JS Uncaught ReferenceError: `foobar` is undefined/not defined

    ![screenshot](documentation/bug01.png)

    - To fix this, I _____________________.

- JS `'let'` or `'const'` or `'template literal syntax'` or `'arrow function syntax (=>)'` is available in ES6 (use `'esversion: 11'`) or Mozilla JS extensions (use moz).

    ![screenshot](documentation/bug02.png)

    - To fix this, I _____________________.

- Python `'ModuleNotFoundError'` when trying to import module from imported package

    ![screenshot](documentation/bug03.png)

    - To fix this, I _____________________.

- Django `TemplateDoesNotExist` at /appname/path appname/template_name.html

    ![screenshot](documentation/bug04.png)

    - To fix this, I _____________________.

- Python `E501 line too long` (93 > 79 characters)

    ![screenshot](documentation/bug04.png)

    - To fix this, I _____________________.

## Unfixed Bugs

You will need to mention unfixed bugs and why they were not fixed.
This section should include shortcomings of the frameworks or technologies used.
Although time can be a big variable to consider, paucity of time and difficulty understanding
implementation is not a valid reason to leave bugs unfixed.

If you've identified any unfixed bugs, no matter how small, be sure to list them here.
It's better to be honest and list them, because if it's not documented and an assessor finds the issue,
they need to know whether or not you're aware of them as well, and why you've not corrected/fixed them.

Some examples:

- On devices smaller than 375px, the page starts to have `overflow-x` scrolling.

    ![screenshot](documentation/unfixed-bug01.png)

    - Attempted fix: I tried to add additional media queries to handle this, but things started becoming too small to read.

- For PP3, when using a helper `clear()` function, any text above the height of the terminal does not clear, and remains when you scroll up.

    ![screenshot](documentation/unfixed-bug02.png)

    - Attempted fix: I tried to adjust the terminal size, but it only resizes the actual terminal, not the allowable area for text.

- When validating HTML with a semantic `section` element, the validator warns about lacking a header `h2-h6`. This is acceptable.

    ![screenshot](documentation/unfixed-bug03.png)

    - Attempted fix: this is a known warning and acceptable, and my section doesn't require a header since it's dynamically added via JS.

⚠️⚠️⚠️⚠️⚠️ START OF NOTES (to be deleted) ⚠️⚠️⚠️⚠️⚠️

If you legitimately cannot find any unfixed bugs or warnings, then use the following sentence:

There are no remaining bugs that I am aware of.
