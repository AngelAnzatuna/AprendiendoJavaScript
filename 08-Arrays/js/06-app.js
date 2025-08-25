const carrito = [ {nombre: 'Camara', precio: 200} ];

// Definir producto
const producto1 = {
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

// 1. Se crea un nueva variable
let resultado;

/* 2. Se asigna el valor, con los ... se le indica que es un array,
para agrgar los objetos solo se le pone su nombre, puedes poner en 
el orden que quieras que se imprima los objetos*/
resultado = [producto3, ...carrito, producto1, producto2];

console.table(resultado);