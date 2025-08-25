const producto = {
    nombre : 'Monitor 20 Pulgadas',
    precio : 200,
    disponible : true
}

/* Object.keys() : retorna un arreglo de las llaves de las propiedades que estan dentro del objeto. 
Se usa para saber si un objeto tiene o no información, ejemplo en
una base de datos*/
console.log( Object.keys( producto ) );
//[nombre, precio, disponible]

/* Object.values() : retorna un arreglo de los valores de las propiedades que estan dentro del objeto */
console.log( Object.values( producto ) );
//['Monitor 20 Pulgadas', 200, true]

/* Object.entries() : retorna en un arreglo las llaves y los valores
pero en pares */
console.log( Object.entries( producto ) );
