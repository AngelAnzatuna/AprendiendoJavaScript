const producto = '  Monitor 20 Pulgadas  ';

console.log(producto);
console.log(producto.length);

// .trimStart() : función Eliminar espacios del inicio
console.log(producto.trimStart());
// .trimEnd() : función elimina espacios al final
console.log(producto.trimEnd());

// Se combina las 2 funciones para eliminar espacios al final y adelante
console.log(producto.trimStart().trimEnd());
// Función antigua que se utliza con más frecuencia para eliminar los espacios de atras y adelante
console.log(producto.trim());