function randomizeColor() {
    const chars = '0123456789ABCDEF';
    let color = '#';
    for (i=0; i<6; i++) {
        color += chars.charAt(Math.random()* chars.length)
    }
    return color
}

let container = document.querySelector('#container');
const main = document.querySelector('main');
let currentColor = '#333333'
let theme = 'color'

for(i=0; i<16; i++) {
    const row = document.createElement('div');
    for(j=0; j<16; j++) {
        const element = document.createElement('div');
        row.appendChild(element)
    }
    container.appendChild(row);
}

let elements = document.querySelectorAll('#container div div');
elements.forEach(element => element.addEventListener('click', function(e) {
    if (theme == 'color') {
        element.style.backgroundColor = currentColor;
    }
    else if (theme == 'rainbow') {
        element.style.backgroundColor = randomizeColor();
    } else if (theme == 'erase') {
        element.style.backgroundColor = 'transparent';
    }
}))

const reset = document.querySelector('#reset');
const resize = document.querySelector('#resize');
const rainbow = document.querySelector('#rainbow');
const erase = document.querySelector('#erase');
const colorInput = document.querySelector('#color-input');

reset.addEventListener('click', function(e) {
    elements.forEach(element => element.style.backgroundColor = 'transparent');
})

resize.addEventListener('click', function(e) {
    let size = parseInt(prompt("Please enter the number of squares per side (Max. 100)"));
    if (Number.isInteger(size)) {
        if (size > 100) {
            size = 100;
        }
    } else {
        console.log('Not integer');
        size = 16;
    }
    main.removeChild(container);
    while(container.firstChild) {
        container.removeChild(container.firstChild);
    }
    for(i=0; i<size; i++) {
        const row = document.createElement('div');
        for(j=0; j<size; j++) {
            const element = document.createElement('div');
            row.appendChild(element)
        }
        container.appendChild(row);
    }
    main.appendChild(container);
    elements = container.querySelectorAll('#container div div');
    elements.forEach(element => element.addEventListener('click', function(e) {
        if (theme == 'color') {
            element.style.backgroundColor = currentColor;
        }
        else if (theme == 'rainbow') {
            element.style.backgroundColor = randomizeColor();
        } else if (theme == 'erase') {
            element.style.backgroundColor = 'transparent';
        }
    }))
})

rainbow.addEventListener('click', function(e) {
    theme = 'rainbow';
})

erase.addEventListener('click', function(e) {
    theme = 'erase';
})

colorInput.addEventListener('input', function(e) {
    currentColor = e.target.value;
})

