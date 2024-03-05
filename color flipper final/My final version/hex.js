const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

// add event listener to button with id btn
btn.addEventListener('click', function(){
let hexColor = "#";

// loop that runs six times and adds random values from hex to hexColor
for (let i = 0; i < 6; i++){
    hexColor += hex[getRandomNumber()];
}


color.textContent = hexColor;
document.body.style.backgroundColor = hexColor;


})

// generate random number (index) from hex array
function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}

