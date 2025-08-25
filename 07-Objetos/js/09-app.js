'use strict';
const producto = {
    nombre : 'Monitor 20 Pulgadas',
    precio : 200,
    disponible : true
}

/* Object.seal() : no se pueden agregar o eliminar las propiedades pero si se puede modificar las propiedades existentes */
Object.seal(producto);
producto.disponible = false;
console.log(producto); /* cambia el la propiedad disponible de true a false */

// Si queremos agregar o eliminar una propiedad marcara error

/* Object.isSealed(producto) : metodo para saber si el objeto esta cellado */
console.log(Object.isSealed(producto)); // true