const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

// Spread Operator con arreglo de indices
/* Agregando un elemento al final del arreglo meses sin modificar el
arreglo original */
const meses2 = [...meses, 'Agosto'];
console.log(meses2);

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// Spread Operator con arreglo de objetos
/* Agregando un elemento al incio del arreglo carrito sin modificar el
arreglo original */
const producto = {nombre: 'Disco Duro', precio: 300};
const carrito2 = [producto, ...carrito];
console.log(carrito2);