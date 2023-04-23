// create squares in js to replace the list elements //
const squaresContainer = document.getElementById('squares');
const numberOfSquares = 16;
let i = 0;


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
    colors.splice(random, 1);
    return selected;
}

while(i < numberOfSquares) {
    document.createElement('li');
    const color = selectColor();
    square.style.background = color;
    squaresContainer.appendChild(square);
    i++;
}