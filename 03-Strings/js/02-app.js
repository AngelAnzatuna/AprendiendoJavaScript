const producto = 'Monitor 20 Pulgadas';

console.log(producto);
// Conocer la cantidad de letras de la cadena de texto
console.log(producto.length); //19

// Métodos que te dicen si existe una palabra o no
// indexOf : te indica que lugar se encuentra la palabra
// si no existe el valor es -1
console.log(producto.indexOf('0')); // 9
// includes : te indica si el texto existe o no
// si existe el valor es true, caso contrario es false
// tomar en cuenta las mayusculas y minusculas
console.log(producto.includes('monitor')) // false
console.log(producto.includes('Monitor')) // true