const carrito = [];

const producto = {
    nombre: 'Monitor 30 Pulgadas',
    precio: 200
}

const producto2 = {
    nombre: 'Celular',
    precio: 800
}

const producto3 = {
    nombre: 'Teclado',
    precio: 50
}

const producto4 = {
    nombre: 'Celular 2',
    precio: 100
}

carrito.push(producto);
carrito.push(producto2);
carrito.push(producto4);
carrito.unshift(producto3);

// .pop() : Eliminar último elemento de un arreglo
// carrito.pop();

// .shift() : Eliminar el primer elemento de un arreglo
// carrito.shift();

// .splice() : Eliminar un elemento de cualquier posición en un array
// toma 2 parametros, la posición del elemento y el número de elementos
// que quieres eleminar
carrito.splice(2, 1);
console.table(carrito);