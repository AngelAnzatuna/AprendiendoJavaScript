const carrito = [
    {nombre: 'Monitor 27 Pulgadas', precio: 500},
    {nombre: 'Televisión', precio: 100},
    {nombre: 'Tablet', precio: 200},
    {nombre: 'Audifonos', precio: 300},
    {nombre: 'Teclado', precio: 400},
    {nombre: 'Celular', precio: 700}
]

// Aquí parace que hacen lo mismo 
carrito.forEach( function(producto) {
    console.log(`El producto ${producto.nombre}, tiene un precio ${producto.precio}`);
})

carrito.map( function(producto) {
    console.log(`El producto ${producto.nombre}, tiene un precio ${producto.precio}`);
})

// Aquí se ve como .map crea un nuevo arreglo

const nuevoArreglo = carrito.map( function(producto) {
    return(`${producto.nombre} vale ${producto.precio}`);
})

const nuevoArreglo2 = carrito.forEach( function(producto) {
    return(`${producto.nombre} vale ${producto.precio}`);
})

console.log(nuevoArreglo); // Imprime el nuevo arreglo
console.log(nuevoArreglo2); // Imprime undefined

const meses = ['Enero', 'Diciembre'];

const febrero = 'Febrero';
const marzo = 'Marzo';

let nuevoMeses = [marzo, ...meses, febrero];
console.table(nuevoMeses);