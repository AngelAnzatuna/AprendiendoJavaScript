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

console.log(producto);
// Ejercicio accediendo al valor de país
console.log(producto.informacion.fabricacion.pais);
