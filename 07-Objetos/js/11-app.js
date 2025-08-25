/* this : se usa para hacer referencia a las propidades que estan
dentro del objeto.
Si no colocamos this el programa buscara los valores que estan
fuera del objeto*/

const producto = {
    nombre : 'Monitor 20 Pulgadas',
    precio : 200,
    disponible : true, 
    mostrarInfo : function() {
        console.log(`El producto ${this.nombre} tiene un precio de ${this.precio}`);
    }

}

producto.mostrarInfo();
/* Resultado: El producto Monitor 20 Pulgadas tiene un precio de 200 */