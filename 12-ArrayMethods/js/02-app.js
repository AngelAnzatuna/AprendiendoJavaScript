/*Video para encontrar el indice o posición de un elemento dentro de un
array
* Punto importante si estas dentro de un objeto que tenga 2 valores 
iguales .findIndex() solo te mostrará el 1er index que cumpla la
condición
*/

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

// Metodo manual usando .forEach()
meses.forEach( (mes, indice) => {
    if(mes === 'Febrero'){
        console.log(`${mes} esta en el indece ${indice}`)
    }
} )
// Usando  .findIndex()
const indice = meses.findIndex( mes => mes === 'Abril' );
console.log(indice); // 3
// Si buscas un valor que no existe te imprime un -1

// Es igual en un arreglo de objetos
const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

const index = carrito.findIndex(producto => producto.nombre === 'Televisión');
console.log(index);
