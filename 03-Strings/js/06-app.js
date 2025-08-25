const producto = 'Monitor 20 Pulgadas';

// .repeat : te va a permitir repetir una cadena de texto
const texto = ' en Promoción'.repeat(3);
console.log(texto); // R1
console.log(`${producto} ${texto} !!!`); // R2

// .split : divide un string
/* Ya sea por un caracter  o un simbolo dentro del string */
const actividad = 'Estoy aprendiendo JavaScript Moderno';
console.log(actividad.split(' ')); // R3

const hobbies = 'leer, escribir, jugar, descansar, cantar, bailar';
console.log(hobbies.split(',')); // R4