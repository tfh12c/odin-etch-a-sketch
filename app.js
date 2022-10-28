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

function createDivs(columns, rows) {
    for (let i = 0; i < (columns * rows); i++) {
        const div = document.createElement('div');
        div.classList.add('squares');
        container.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
        container.appendChild(div);
    }
}
createDivs(16,16);

window.onload = () => {
    const divs = document.querySelectorAll('.squares');
    divs.forEach((div) => {
        div.addEventListener('mouseover', (event) => {
            event.target.style.background = "black";
        })
    })
}

function clearDivs() {
    container.innerHTML = "";
}

function updateSize() {
    const size = prompt("What size grid would you like to use?");
    if (!size || size <= 0 || size > 100) {
        alert("Please select a number between 1 and 100.");
    } else {
        clearDivs();
        createDivs(size,size);
        description.innerText = `Now drawing with a ${size} x ${size} grid 🎨`;
    }
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