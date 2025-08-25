// Object Literal
/*Escribir un objeto directamente con sus propiedades y valores.
Se usa cuando necesitas un objeto único y específico.
Sintaxis sencilla con { }. 
Objeto único, rápido y directo.*/
const producto = {
    nombre : 'Monitor 20 Pulgadas',
    precio : 200,
    disponible : true
}

// Object Constructor
/*Se crea con una función constructora (o con class en ES6).
Permite crear múltiples objetos similares con diferentes valores.
Se usa new para instanciar.
Plantilla para crear varios objetos del mismo tipo.*/
function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible =  true;
}

const producto2 = new Producto('Monitor 24 Pulgadas', 500);
console.log(producto2);

const producto3 = new Producto('Televisión', 300);
console.log(producto3);