const gridContainer = document.querySelector('.grid-Container');
let hoverHandler;

function addSquare() {
    const createSquare = document.createElement('div');
    createSquare.classList.add('square');
    gridContainer.appendChild(createSquare);
}

function drawGrid(num) {
    let x = 0;
    while (x < (num * num)) {
        addSquare();
        x++
    }
    hoverHandler = document.querySelectorAll('.square');
    hoverHandler.forEach(item => {
        item.addEventListener('mouseover', () => item.style.backgroundColor = 'black');
    })
}

drawGrid(16);

function gridSize() {
    let num = Number(prompt("Please type the desired grid size. Maximum size is 100, minimum size is 2", "16"));
    hoverHandler.forEach(item => item.style.backgroundColor = 'white');
    if (num >= 100) {
        gridContainer.style.gridTemplateColumns = 'repeat(100, 1fr)';
        gridContainer.style.gridTemplateRows = 'repeat(100, 1fr)';
        drawGrid(100);
        return;
    }
    if (num <= 2) {
        gridContainer.style.gridTemplateColumns = 'repeat(2, 1fr)';
        gridContainer.style.gridTemplateRows = 'repeat(2, 1fr) ';
        drawGrid(2);
        return;
    }
    else {
        gridContainer.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
        gridContainer.style.gridTemplateRows = `repeat(${num}, 1fr)`;
        drawGrid(`${num}`);
    }
}

function randomColor() {
    hoverHandler = document.querySelectorAll('.square');
    hoverHandler.forEach(item => {
        item.addEventListener('mouseover', () => {
            var o = Math.round, r = Math.random, s = 255;
            item.style.backgroundColor = 'rgb(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s);
        });
    })
}

function black() {
    hoverHandler = document.querySelectorAll('.square');
    hoverHandler.forEach(item => {
        item.addEventListener('mouseover', () => item.style.backgroundColor = 'black');
    })
}

