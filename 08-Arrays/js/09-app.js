const carrito = [
    {nombre: 'Monitor 27 Pulgadas', precio: 500},
    {nombre: 'Televisión', precio: 100},
    {nombre: 'Tablet', precio: 200},
    {nombre: 'Audifonos', precio: 300},
    {nombre: 'Teclado', precio: 400},
    {nombre: 'Celular', precio: 700}
]

for( let i = 0; i < carrito.length; i++) {
    console.log(`El producto ${carrito[i].nombre}, tiene un precio ${carrito[i].precio}`);
}

// Método forEach: hace lo mismo que for loop
// Es un métedo predeterminado de JS
// producto hace referencia a cada uno de los elementos que estan
// dentro del array
carrito.forEach( function(producto) {
    console.log(`El producto ${producto.nombre}, tiene un precio ${producto.precio}`);
})