/* querySelector va a retornar máximo un elemento, y en el caso
de no encontrarlo te retorna un null*/

// Seleccionando con una clase
const card = document.querySelector('.card');
console.log(card);

// Podemos tener selectores especificos como en css
// Seleccionando con 2 clases
const info = document.querySelector('.premium .info');
console.log(info);

// Seleccionando el segundo card en hospedaje
// se usa :nth-child(número de card)
// Seleccionando un elemento con una etiqueta, clase, y pseudocódigo
const segundoCard = document.querySelector('section.hospedaje .card:nth-child(2)');
console.log(segundoCard);

// Seleccionando elemento con Id
const formulario = document.querySelector('#formulario');
console.log(formulario);

// Seleccionando elemetos con HTML(es la etiqueta)
const navegacion = document.querySelector('nav');
console.log(navegacion);
