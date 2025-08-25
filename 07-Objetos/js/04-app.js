const producto = {
    nombre : 'Monitor 20 Pulgadas',
    precio : 200,
    disponible : true
}

console.log(producto.nombre);
/* Forma antigua de acceder al valor de una propiedad del objeto y 
guardarla en una variable*/
/*
const nombre = producto.nombre;
console.log(nombre);
*/

/* Usando object destructuring : extrae la propiedad del objeto y crear
la variable en un solo paso  */
const { precio } = producto;
console.log(precio); // 200
// Se puede extraer varias propiedades a la vez del objeto
const { nombre, disponible } = producto;
console.log(nombre); // Monitor 20 Pulgadas
console.log(disponible); // true
/* Si quires extraer una propiedad que no esta definida de va a salir
undefined*/
const {imagen} = producto;
console.log(imagen); // undefined
