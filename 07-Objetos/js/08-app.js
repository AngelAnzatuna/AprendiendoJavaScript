/* Haciendo que un objeto se comporte como una constante, es decir
que no pueda ser modificado */
/* 'use strict'; : es un operador que habilita el modo estricto en 
JavaScript y evita las malas prácticas, se coloca al inicio de la hoja.
Una vez habilitada se tiene acceso a una serie de metodos para objetos
*/
'use strict';
const producto = {
    nombre : 'Monitor 20 Pulgadas',
    precio : 200,
    disponible : true
}

/* Object.freeze(): Le indicamos que no se puede agregar o modificar una 
propiedad dentro del objeto */
Object.freeze(producto);
// producto.imagen = 'imagen.jpg'; /* Comentamos esta liena para que pueda correr el programa y ver como funciona el metodo Object.isFrozen()*/ 
console.log(producto); // Error /* Cuando esta  descomentado la linea anterior */

/* Object.isFrozen() : metodo para saber si un objeto esta congelado */
console.log(Object.isFrozen(producto)); // true