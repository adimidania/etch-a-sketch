const DEFAULT_COLOR = '#333333';
const DEFAULT_MODE = 'color';
const DEFAULT_SIZE = 16;

let currentColor = DEFAULT_COLOR;
let currentMode = DEFAULT_MODE;
let currentSize = DEFAULT_SIZE;

function setCurrentColor(newColor) {
    currentColor = newColor;
}

function setCurrentMode(newMode) {
    currentMode = newMode;
}

function setCurrentSize(newSize) {
    currentSize = newSize;
}

function randomizeColor() {
    const chars = '0123456789ABCDEF';
    let color = '#';
    for (i=0; i<6; i++) {
        color += chars.charAt(Math.random()* chars.length)
    }
    return color;
}

let container = document.querySelector('#container');
const main = document.querySelector('main');
const reset = document.querySelector('#reset');
const resize = document.querySelector('#resize');
const rainbow = document.querySelector('#rainbow');
const erase = document.querySelector('#erase');
const colorInput = document.querySelector('#color-input');

rainbow.addEventListener('click', () => setCurrentMode('rainbow'));
erase.addEventListener('click', () => setCurrentMode('erase'));
colorInput.addEventListener('input', (e) => {
    console.log('Target', e.target.value);
    setCurrentMode('color');
    setCurrentColor(e.target.value);
    console.log(currentColor);
})
reset.addEventListener('click', () => {
    clearGrid();
});
resize.addEventListener('click', function(e) {
    getNewSize();
    removeGrid();
    createGrid(currentSize);
    main.appendChild(container);
})

function createGrid(size) {
    for(i=0; i<size; i++) {
        const row = document.createElement('div');
        for(j=0; j<size; j++) {
            const element = document.createElement('div');
            element.addEventListener('click', changeColor)
            row.appendChild(element)
        }
        container.appendChild(row);
    }
}

function clearGrid() {
    for(i=0; i<currentSize; i++) {
        const row = container.children[i];
        for(j=0; j<currentSize; j++) {
            const element = row.children[j];
            element.style.backgroundColor = 'transparent';
        }
    } 
}

function removeGrid() {
    main.removeChild(container);
    while(container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function getNewSize() {
    let size = parseInt(prompt("Please enter the number of squares per side (Max. 100)"));
    if (Number.isInteger(size)) {
        if (size > 100) {
            setCurrentSize(100);
        } else {
            setCurrentSize(size);
        }
    } else {
        setCurrentSize(16);
    }
}

function changeColor(e) {
    if (currentMode == 'color') {
        e.target.style.backgroundColor = currentColor;
    }
    else if (currentMode == 'rainbow') {
        e.target.style.backgroundColor = randomizeColor();
    } 
    else {
        e.target.style.backgroundColor = 'transparent';
    }
}

createGrid(currentSize);