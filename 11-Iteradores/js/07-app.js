/* for off : itera sobre arreglos
similar al for pero te permite recorrer un array de una
forma más facil, y es más simplicado que el for normal */

const pendientes = ['tarea', 'comer', 'proyecto', 'Estudiar'];

for(let pendiente of pendientes) {
    // accede a los valores de los elementos en este caso los strings
    console.log(pendiente);
}

const carrito = [
    {nombre: 'Monitor 27 Pulgadas', precio: 500},
    {nombre: 'Televisión', precio: 100},
    {nombre: 'Tablet', precio: 200},
    {nombre: 'Audifonos', precio: 300},
    {nombre: 'Teclado', precio: 400},
    {nombre: 'Celular', precio: 700}
]

for(let producto of carrito) {
    // acede a los valores de los elementos en este caso los objetos
    console.log(producto);
}