const carrito = [
    {nombre: 'Monitor 27 Pulgadas', precio: 500},
    {nombre: 'Televisión', precio: 100},
    {nombre: 'Tablet', precio: 200},
    {nombre: 'Audifonos', precio: 300},
    {nombre: 'Teclado', precio: 400},
    {nombre: 'Celular', precio: 700},
]

// Usando .map
const nuevoArreglo = carrito.map( function(producto) {
    return `${producto.nombre} - Precio: ${producto.precio}`
})
console.log(nuevoArreglo);
// transformando a arrow function
const nuevoArreglo2 = carrito.map( producto => `${producto.nombre} - Precio: ${producto.precio}` );
console.log(nuevoArreglo2);

// Usando .forEach
carrito.forEach( function(producto) {
    console.log(`${producto.nombre} - Precio: ${producto.precio}`);
});
// transformando a arrow function
carrito.forEach( producto => console.log(`${producto.nombre} - Precio: ${producto.precio}`) );
