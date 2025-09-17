/* .every(): todos los elementos de un arreglo debe de cumplir la 
condición para que nos retorne un true */

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 100 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

/* .every(): todos los elementos del arreglo deben cumplir la condición.
Se puede decir que este es el AND */
const resultado = carrito.every( producto => producto.precio < 1000 );
console.log(resultado); // true

/* .some(): método que revisa que al menos un elemento del arreglo
cumpla la condición. Se puede decir que este es el OR */
const resultado2 = carrito.some( producto => producto.precio < 500);
console.log(resultado); // true