// Esta clase se enfoca en buscar un elemento dentro de un arreglo
// Para arreglos simples se usa .includes para arreglos con objetos
// se usa .some
// Array simple
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

// Comprobar si un valor existe en un arreglo

// Forma básica
meses.forEach( mes => {
    if(mes === 'Enero'){
        console.log('Enero si existe');
    }
} )

/* Usando el array methods .includes() 
* Solo sirve para array simples */
const resultado = meses.includes('Enero');
const resultado2 = meses.includes('Diciembre');
console.log(resultado); // true
console.log(resultado2); // false

// Array con objetos
const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// En un arreglo de objetos se utliza .some()
/* .some(): método que revisa que al menos un elemento del arreglo
cumpla la condición  */
const existe = carrito.some(producto =>  producto.nombre === 'Celular')
console.log(existe); // true

// Tambien se usa para los arreglos tradicionales
const existe2 = meses.some(mes => mes === 'Febrero')
console.log(existe2); // true