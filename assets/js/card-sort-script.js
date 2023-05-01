// Need to use code to ensure that the DOM has fully loaded //
// Need to move code so that nothing creates a global variable //
//document.addEventListener("DOMContentLoaded", function() {
    //let
//});

// create squares in js to replace the list elements //
const squaresContainer = document.getElementById('squares');
const numberOfSquares = 16;
let i = 0;
let square1, square2;
let clickCount = 0;


// create pairs of colors to hopefully eventually be replaced with images //

let colors = [
    '#33ff33',
    '#33ff33',
    '#ff944d',
    '#ff944d',
    '#80ccff',
    '#80ccff',
    '#ffff66',
    '#ffff66',
    '#ff4dff',
    '#ff4dff',
    '#ff1a1a',
    '#ff1a1a',
    '#dddddd',
    '#dddddd',
    '#000099',
    '#000099',
];

function selectColor() {
    // 0-16
    const randomColor = Math.floor(Math.random() * colors.length);
    const selected = colors[randomColor];
    colors.splice(randomColor, 1);
    console.log(selected);
    return selected;
}

while(i < numberOfSquares) {
    let square = document.createElement('li');
    const color = selectColor();
    //square.style.background = color;
    square.setAttribute("data-color", color);
    squaresContainer.appendChild(square);
    i++;
}

const squares = document.querySelectorAll('li')
for(const square of squares) {
    square.addEventListener('click', squareClicked);
}

function squareClicked() {
    clickCount++;
    clickCount === 1 ? (square1 = this) : (square2 = this);
    if (clickCount === 1) {
        square1.style.background = square1.getAttribute("data-color");
    } else {
        square2.style.background = square2.getAttribute("data-color");
        checkMatch()
    }
}

function checkMatch() {
    let match = square1.getAttribute('data-color') === square2.getAttribute('data-color');
    if(!match) {
        noMatch()
    } else {
        isMatch()
    }
}

function noMatch() {
    clickCount = 0;
    console.log('no match');
}

function isMatch() {
    clickCount = 0; 
    console.log('match!')
}