//  Explicación de como cambiar el css desde js
// const encabezado = document.querySelector('h1');


// encabezado.style.backgroundColor = 'yellow';
// encabezado.style.fontFamily = 'arial';
// encabezado.style.textTransform = 'uppercase'


// Explicación de como añadir y eliminar una clase a un elemento
const card = document.querySelector('.card');

// Añadir una nueva clase se usa .classList y después .add()
// Se puede añadir las clases que deseemos solo separando con una coma
card.classList.add('nueva-clase', 'clase2')
// Resultado <div class="card nueva-clase clase2">

// Eliminando una clase se usa .classList y después .remove()
card.classList.remove('card');
// Resultado <div class=" nueva-clase clase2">

console.log(card);