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
let theme = 'black'

for(i=0; i<16; i++) {
    const row = document.createElement('div');
    for(j=0; j<16; j++) {
        const element = document.createElement('div');
        row.appendChild(element)
    }
    container.appendChild(row);
}

let elements = document.querySelectorAll('#container div div');
elements.forEach(element => element.addEventListener('mouseover', function(e) {
    if (theme == 'black') {
        element.style.backgroundColor = 'black';
    }
    else if (theme == 'rainbow') {
        element.style.backgroundColor = randomizeColor();
    } 
}))

const reset = document.querySelector('#reset');
const resize = document.querySelector('#resize');
const rainbow = document.querySelector('#rainbow');

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
    elements.forEach(element => element.addEventListener('mouseover', function(e) {
        if (theme == 'black') {
            element.style.backgroundColor = 'black';
        }
        else if (theme == 'rainbow') {
            element.style.backgroundColor = randomizeColor();
        } 
    }))
})

rainbow.addEventListener('click', function(e) {
    theme = 'rainbow';
})

