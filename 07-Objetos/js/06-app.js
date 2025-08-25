const producto = {
    nombre : 'Monitor 20 Pulgadas',
    precio : 200,
    disponible : true,
    informacion : {
        medidas : {
            peso : '1kg',
            medida : '1m'
        },
        fabricacion : {
            pais : 'China'
        }
    }
}

/* nombre // accediendo a la propiedad nombre 
informacion : {medidas, fabricacion : {pais}} // accediendo a la porpiedad medidas y a la propiedad pais
informacion  // accediendo a la propiedad información 
*/

const { nombre, informacion : {medidas, medidas : {peso}, fabricacion : {pais}}, informacion} = producto;

console.log(nombre); // Monitor 20 Pulgadas
console.log(medidas); // Objeto medidas
console.log(peso); // 1kg
console.log(pais); // China
console.log(informacion); // Objeto informacion
