# ChromaShift

### Difficulty: Easy
A simple color flipper webpage that dynamically changes the background color by the click of a button, demonstrating basic JavaScript functionality.  Perfect for learning DOM manipulation and working with colors in web development.

### How it works:
This micro project consists of 3 basic files: HTML, CSS, and JavaScript. The code is minimal and can be compressed further, but it has been kept expanded for simplicity and readability.

With each button click, the script generates a random background color by randomizing three values for red, green, and blue (RGB). Using the DOM, the background color is updated seamlessly.

One challenge is ensuring proper text contrast. Dark text on a dark background is hard to read, so the text color needs to switch between black and white based on the brightness of the background color. The color's brightness, or luminosity, is calculated to determine whether the text should be black or white. If the background is bright, the text color is set to black, and if it’s dark, the text color is set to white.

To make the color change easier on the eyes, a transition effect has been added. After testing various transition durations, I found the current value to be the most suitable for a smooth and visually comfortable effect.
