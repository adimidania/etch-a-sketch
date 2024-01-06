const container = document.querySelector('#container')

for(i=0; i<16*16; i++) {
    const element = document.createElement('div')
    container.appendChild(element)
}

const elements = document.querySelectorAll('#container div')
elements.forEach(element => element.addEventListener('mouseover', function(e) {
    element.style.backgroundColor = 'black'
}))
