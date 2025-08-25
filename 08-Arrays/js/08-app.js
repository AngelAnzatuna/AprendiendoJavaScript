// Ejemplo destructuring en objetos
const producto = {
    nombre: 'Monitor 30 Pulgadas',
    precio: 300,
    disponible: true
}

const {nombre} = producto;
console.log(nombre);

// Destructuring con arrays
const numeros = [10, 20, 30, 40, 50];
// Obtener el valor 10
// const [primero] = numeros;
// console.log(primero); //10

// Obtener el valor 30
// const [, , tercero] = numeros;
// console.log(tercero); // 30

// Obtener el valor 20 y 40
// const [ , segundo, , cuarto] = numeros;
// console.log(segundo) // 20
// console.log(cuarto) // 40

// Obtener los valores desde el 30 hasta el 50
// const[ , , ...restantes ] = numeros;
// console.log(restantes); // 30, 40, 50