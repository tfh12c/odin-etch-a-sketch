const container = document.querySelector('.container');
const buttonsContainer = document.querySelector('.buttons')

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