const DEFAULT_SIZE = 16;
const DEFAULT_COLOR = "#000000";

//DOM creating needed elements
const header = document.querySelector('.header');
const container = document.querySelector('.container');
const buttonsContainer = document.querySelector('.buttons')
const description = document.querySelector('.main__description');

const resizeButton = document.createElement('button');
resizeButton.classList.add('.buttons__resize-button');
resizeButton.innerText = "Change Grid Size";
header.appendChild(resizeButton);

const retroButton = document.createElement('button');
retroButton.classList.add('.buttons__retro-button');
retroButton.innerText = "Retro";
buttonsContainer.appendChild(retroButton);

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

//Event Listeners
resizeButton.addEventListener('click', updateSize);
greyButton.addEventListener('click', greyScale);
rgbButton.addEventListener('click', rgbScale);
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

window.onload = () => {
    createDivs(DEFAULT_SIZE,DEFAULT_SIZE);
    retroColor();
    retroButton.classList.add('.active');
}

function clearDivs() {
    const divs = document.querySelectorAll('.squares');
    divs.forEach((div) => {
        div.style.backgroundColor = "grey";
    })
    if (retroButton.classList.contains('.active')) {
        retroColor();
    } else if (greyButton.classList.contains('.active')) {
        greyScale();
    } else if (rgbButton.classList.contains('.active')) {
        rgbScale();
    }
}

function removeDivs() {
    container.innerText = "";
}

function updateSize() {
    let size = prompt("What size grid would you like to use?");
    if (!size || size <= 0 || size > 100) {
        alert("Please select a number between 1 and 100.");
    } else {
        removeDivs();
        createDivs(size,size);
        description.innerText = `Now drawing with a ${size} x ${size} grid 🎨`;
    }
    return size;
}

function retroColor() {
    const divs = document.querySelectorAll('.squares');
    divs.forEach((div) => {
        div.addEventListener('mouseover', (event) => {
            event.target.style.backgroundColor = DEFAULT_COLOR;
        })
    })
    retroButton.classList.add('.active');
    greyButton.classList.remove('.active');
    rgbButton.classList.remove('.active');
}

function greyScale() {
    const divs = document.querySelectorAll('.squares');
    divs.forEach((div) => {
        div.addEventListener('mouseover', (event) => {
            const number = Math.floor(Math.random() * 256);
            const greyScale = `rgb(${number}, ${number}, ${number})`;
            event.target.style.background = greyScale;
        })
    })
    greyButton.classList.add('.active');
    retroButton.classList.remove('active');
    rgbButton.classList.remove('active');
}

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
    rgbButton.classList.add('.active');
    retroButton.classList.remove('active');
    greyButton.classList.remove('active');
}