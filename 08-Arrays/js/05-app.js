const meses = ['Enero', 'Febrero', 'Marzo'];

/* .push() : Agregar valores al final del arreglo sin conocer su 
extensión*/
meses.push('Abril');

console.table(meses);

// Nuevo ejemplo para un carrito de compras
// Se inica con un arreglo vacio
const carrito = [];

// Definir producto
const producto = {
    nombre : 'Monitor 32 Pulgadas',
    precio : 400
}

const producto2 = {
    nombre: 'Celular',
    precio: 800
}

const producto3 = {
    nombre: 'Teclado',
    precio: 50
}

carrito.push(producto);
carrito.push(producto2);
/* .unshift() : agrega valores al inicio del arreglo */
carrito.unshift(producto3);
console.table(carrito);