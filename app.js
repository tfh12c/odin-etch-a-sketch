const DEFAULT_SIZE = 16;
let userSize = DEFAULT_SIZE;
console.log(userSize);

const container = document.querySelector('.container');
const buttonsContainer = document.querySelector('.buttons')
const description = document.querySelector('.main__description');

const resizeButton = document.createElement('button');
resizeButton.classList.add('.buttons__resize-button');
resizeButton.innerText = "Change Grid Size";
buttonsContainer.appendChild(resizeButton)

const greyButton = document.createElement('button');
greyButton.classList.add('.buttons__grey-button');
greyButton.innerText = "Grey Scale";
buttonsContainer.appendChild(greyButton)

const rgbButton = document.createElement('button');
rgbButton.classList.add('.buttons__rgb-button');
rgbButton.innerText = "Rainbow!";
buttonsContainer.appendChild(rgbButton);

const clearButton = document.createElement('button');
clearButton.classList.add('.buttons__clear-button');
clearButton.innerText = "Clear";
buttonsContainer.appendChild(clearButton);

clearButton.addEventListener('click', clearDivs);

function createDivs(columns, rows) {
    for (let i = 0; i < (columns * rows); i++) {
        const div = document.createElement('div');
        div.classList.add('squares');
        container.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
        container.appendChild(div);
    }
}
createDivs(DEFAULT_SIZE,DEFAULT_SIZE);

window.onload = () => {
    const divs = document.querySelectorAll('.squares');
    divs.forEach((div) => {
        div.addEventListener('mouseover', (event) => {
            event.target.style.backgroundColor = "black";
        })
    })
}

function clearDivs() {
    removeDivs();
    if (isNaN(userSize)) {
        createDivs(DEFAULT_SIZE,DEFAULT_SIZE);
        description.innerText = `Now drawing with a ${DEFAULT_SIZE} x ${DEFAULT_SIZE} grid 🎨`;
    } else {
        createDivs(userSize, userSize);
        description.innerText = `Now drawing with a ${userSize} x ${userSize} grid 🎨`;
    }
}

function removeDivs() {
    container.innerText = "";
}

function updateSize() {
    const userSize = prompt("What size grid would you like to use?");
    if (!userSize || userSize <= 0 || userSize > 100) {
        alert("Please select a number between 1 and 100.");
    } else {
        removeDivs();
        createDivs(userSize,userSize);
        description.innerText = `Now drawing with a ${userSize} x ${userSize} grid 🎨`;
    }
    return userSize;
}


resizeButton.addEventListener('click', updateSize);

function greyScale() {
    const divs = document.querySelectorAll('.squares');
    divs.forEach((div) => {
        div.addEventListener('mouseover', (event) => {
            const number = Math.floor(Math.random() * 256);
            const greyScale = `rgb(${number}, ${number}, ${number})`;
            event.target.style.background = greyScale;
        })
    })
}

greyButton.addEventListener('click', greyScale);

function rgbScale() {
    const divs = document.querySelectorAll('.squares');
    divs.forEach((div) => {
        div.addEventListener('mouseover', (event) => {
            const letters = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            event.target.style.background = color;
        })
    })
}
rgbButton.addEventListener('click', rgbScale);