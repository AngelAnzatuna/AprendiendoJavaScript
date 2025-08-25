const producto = {
    nombre : 'Monitor 20 Pulgadas',
    precio : 200,
    disponible : true
}

/* En un objeto aunque su variable conste como const sus propiedades
se se pueden modificar */
producto.precio = 300; 
console.log(producto); /* El valor de la propiedad precio del objeto
producto se va a actualizar*/