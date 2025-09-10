/* JavaScript tiene sus propios iteradores que son forEach y map */

/*  forEach ideal para recorrer arreglos, se ejecuta al menos una vez
por cada vez que haya elementos en el arreglo, es decir si hay 20
elementos se ejecuta 20 veces, si hay un  elemeneto se ejecuta una vez
 */

const pendientes = ['tarea', 'comer', 'proyecto', 'Estudiar'];

pendientes.forEach( (pendiente, indice) => {
    console.log(`${indice} : ${pendiente}`);
} )

const carrito = [
    {nombre: 'Monitor 27 Pulgadas', precio: 500},
    {nombre: 'Televisión', precio: 100},
    {nombre: 'Tablet', precio: 200},
    {nombre: 'Audifonos', precio: 300},
    {nombre: 'Teclado', precio: 400},
    {nombre: 'Celular', precio: 700}
]

// forEach no crea un nuevo arreglo aqui no tienes indice
/*
carrito.forEach( producto => {
    console.log(`${producto.nombre} precio ${producto.precio}`);
})
*/
const newArray = carrito.forEach( producto => producto.nombre );
console.log(newArray); // No das undefined ya que no crea nuevo arreglo

// .map crea un nuevo arreglo, aqui tiens indice
const newArray2 = carrito.map( producto => producto.nombre);
console.log(newArray2); // Imprime el nuevo arreglo

// ejercicio de practica cambiando a for
/*
for( let i = 0; i < carrito.length; i ++) {
    console.log(carrito[i].nombre);
}
*/