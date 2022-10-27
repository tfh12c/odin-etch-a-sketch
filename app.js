const container = document.querySelector('.container');
const buttonsContainer = document.querySelector('.buttons')

const greyButton = document.createElement('button');
greyButton.classList.add('.buttons__grey-button');
greyButton.innerText = "Grey Scale";
buttonsContainer.appendChild(greyButton)

const rgbButton = document.createElement('button');
rgbButton.classList.add('.buttons__grey-button');
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
    // console.log(divs);
    divs.forEach((div) => {
        div.addEventListener('mouseover', (event) => {
            event.target.style.background = "purple";
        })
    })
}