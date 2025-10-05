const nav = document.querySelector('.navegacion');

// EXPLICACION 1

// Registrar un evento

// click: evento registra el numero de veces que damos clic en el elemento que seleccionamos
// nav.addEventListener('click', () => {
//     console.log('clic en el nav');
// })

// mouseenter: este evento registra el número de veces que pasamos el cursor en el elemento que seleccionamos
// nav.addEventListener('mouseenter', () => {
//     console.log('entrando en la navegación')
// })

// mouseout: este evento registra el número de veces que salimos con el cursor del elemento que seleccionamos
// nav.addEventListener('mouseout', () => {
//     console.log('Saliendo de la navegación')
// })

// addEventListener: esperamos que suceda un evento, una vez que sucede el evento se ejecuta un código

// EXPLICACIÓN 2

// Se puede tener varios eventListener activados

// nav.addEventListener('mouseout', () => {
//     console.log('Saliendo de la navegación');
//     nav.style.backgroundColor = 'transparent';
// })

// nav.addEventListener('mouseenter', () => {
//     console.log('entrando en la navegación')
//     nav.style.backgroundColor = 'white';
// })

// Otros eventos

// mousedown: este evento se ejecuta cuando se preciona un clic, es similar al evento clic
// nav.addEventListener('mousedown', () => {
//     console.log('diste clic');
// })

// mouseup: este evento se ejecuta cuando soltamos el clic. en el elemento seleccionando
// nav.addEventListener('mouseup', () => {
//     console.log('soltaste el clic');
// })

// dblclick: este evento se ejecuta cuando damos doble clic, en el elemento seleccionado
nav.addEventListener('dblclick', () => {
    console.log('diste doble clic');
})