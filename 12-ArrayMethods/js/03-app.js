// .reduce se nota más en los arreglos con objetos

// En este ejemplo sirvio para la suma de todos los valores de precio

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// Forma manual con .forEach()
let total = 0;
carrito.forEach( producto => total += producto.precio);
console.log(total);

/* Forma con .reduce() : se le pasa 2 valores: 
Primer valor previo osea el let total = 0,
Segundo valor es el valor actual
El 0 que esta  al final es el que se le asigna al total del inicio
se iniciaria 0 + 2200 = 2200. Si le cambiamos ese 0 por 1000
se iniciaria 1000 + 2200 = 3200 */
let resultado = carrito.reduce( (total, producto) => total +  producto.precio, 0 );
console.log(resultado);
