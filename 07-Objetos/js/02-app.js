const producto = {
    nombre : 'Monitor 20 Pulgadas',
    precio : 200,
    disponible : true
}

console.log(producto);
/* Para acceder a una propiedad dentro del objeto se utiliza la sintaxis
del punto se coloca el nombre del objeto . seguido el nombre de la
propiedad*/
console.log(producto.nombre); // Monitor 20 Pulgadas
console.log(producto.precio); // 200
console.log(producto.disponible); // true
/* Existe otra forma que no es común y da el mismo resultado */
console.log(producto['nombre']); // Monitor 20 Pulgadas