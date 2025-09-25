// Seleccionar elementos por su clase...

// Seleccionando la clase header
const header = document.getElementsByClassName('header');
console.log(header);

// Seleccionando la clase hero
const hero = document.getElementsByClassName('hero');
console.log(hero); /* Retorna un arreglo con todos los elementos
que contenga esta clase en este caso 1 */

// Si las clases existen más de 1 vez, te trae todos los elementos 
// que tenga esa clase
const contenedores = document.getElementsByClassName('contenedor');
console.log(contenedores); /* Retorna un arreglo con todos los elementos
que contenga esta clase en este caso 4 */

// Si una clase no existe
const noExiste = document.getElementsByClassName('no-existe');
console.log(noExiste); // Retorna un arreglo vacio, no marca un error