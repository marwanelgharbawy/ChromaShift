// Select The Button Object
let button = document.querySelector("button")
changeBackground()

// Add the event listener method to it, on click would call a function that changes background
button.addEventListener("click", changeBackground)

function changeBackground() {
    // Generate colors
    let r = color()
    let g = color()
    let b = color()

    // Change background color
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`

    // Change page's text color white or black
    document.body.style.color = textColor(r, g, b)
    document.body.style.color = textColor(r, g, b)
    button.style.color = textColor(r, g, b)

    // Display RGB and HEX values of color
    let rgb = `rgb(${r}, ${g}, ${b})`;
    let hex = rgbToHex(r, g, b);
    document.getElementById("rgbValue").innerText = `RGB: ${rgb}`
    document.getElementById("hexValue").innerText = `Hex: ${hex}`
}

function color() {
    return Math.floor(Math.random() * 256)
}

function textColor(r, g, b) {
    // luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b
    return 0.2126 * r + 0.7152 * g + 0.0722 * b > 128 ? 'black' : 'white'
}

// RBG and Hex functions (for displaying color code)
function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}