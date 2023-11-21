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

![screenshot](documentation/javascript-validation-script.png)
![screenshot](documentation/javascript-validation-questions.png)

## Browser Compatibility

I have tested the site in chrome, safari and firefox.

- [Chrome](https://www.google.com/chrome)
- [Firefox (Developer Edition)](https://www.mozilla.org/firefox/developer)
- [Safari](https://support.apple.com/downloads/safari)

I've tested my deployed project on multiple browsers to check for compatibility issues.

| Browser | Start | Quiz | Next | Scoreboard | Restart |
| --- | --- | --- | --- | --- | --- |
| Chrome | ![screenshot](documentation/chrome-start.png) | ![screenshot](documentation/chrome-quiz.png) | ![screenshot](documentation/chrome-next.png) | ![screenshot](documentation/chrome-scoreboard.png) | ![screenshot](documentation/chrome-restart.png) |
| Firefox | ![screenshot](documentation/firefox-start.png) | ![screenshot](documentation/firefox-quiz.png) | ![screenshot](documentation/firefox-next.png) | ![screenshot](documentation/firefox-scoreboard.png) | ![screenshot](documentation/firefox-restart.png) |
| Safari | ![screenshot](documentation/safari-start.png) | ![screenshot](documentation/safari-quiz.png) | ![screenshot](documentation/safari-next.png) | ![screenshot](documentation/safari-scoreboard.png) | ![screenshot](documentation/safari-restart.png) |

## Responsiveness

I have tested the site on mobile, tablet and desktop screens. Below are attached screenshots.

I've tested my deployed project on multiple devices to check for responsiveness issues.

| Device | Start | Quiz | Next & Scoreboard | Restart | Notes |
| --- | --- | --- | --- | --- | --- |
| Mobile (DevTools) | ![screenshot](documentation/iphone-start.png) | ![screenshot](documentation/iphone-quiz.png) | ![screenshot](documentation/iphone-next.png) | ![screenshot](documentation/iphone-restart.png) | --- |
| Tablet (DevTools) | ![screenshot](documentation/ipad-start.png) | ![screenshot](documentation/ipad-quiz.png) | ![screenshot](documentation/ipad-next.png) | ![screenshot](documentation/ipad-restart.png) | --- |
| Desktop (Devtools) | ![screenshot](documentation/desktop-start.png) | ![screenshot](documentation/desktop-quiz.png) | ![screenshot](documentation/desktop-next.png) | ![screenshot](documentation/desktop-restart.png) | --- |

## Lighthouse Audit

I've tested my deployed project using the Lighthouse Audit tool to check for any major issues.
Sample Lighthouse testing documentation:

| Page | Mobile | Desktop |
| --- | --- | --- |
| index | ![screenshot](documentation/lighthouse-mobile.png) | ![screenshot](documentation/lighthouse-desktop.png) |


## Unfixed Bugs

- When restarting the game it does not zero the correct and wrong answers. See below in attached screenshot how it has calculated 7 wrong answers and 7 correct answers, totally 14. When there is only 12 questions. I want it to zero both correct and wrong after answering all 12 questions. 

    ![screenshot](documentation/unfixed-bug01.png)

    - Attempted fix: I had no remaining time to attempt to fix this.

 - The restart button is to close to the container. See below in attached screenshot. I would also like for it to be bigger when it does appear. 

    ![screenshot](documentation/unfixed-bug01.png)

    - Attempted fix: I had no remaining time to attempt to fix this.

There are no more bugs that I am aware of.
