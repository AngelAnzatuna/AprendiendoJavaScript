const producto = {
    nombre : 'Monitor 20 Pulgadas',
    precio : 200,
    disponible : true
}

// Agregar nuevas propiedades al objeto
/* Se usa la sintaxis del punto pero para agregar el valor lo debemos
hacer con el signo de =, por lo que estamos afuera del objeto*/
producto.imagen = 'imagen.jpg';
console.log(producto); // r1

// Eliminar una propiedad del objeto
delete producto.disponible;

console.log(producto); // r2