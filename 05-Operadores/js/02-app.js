const num1 = 20;
const num2 = '20';
const num3 = 30;

// Revisar si 2 números son iguales
console.log(num1 == num2); // true
console.log(num1 == num3); // false

// Comparador estricto
console.log(num1 === num2); // false
/* Para que nos de true le aplicamos el parseInt a num2, es la función
que convierte  un string a un number*/
console.log(num1 === parseInt(num2)); // true 

// Operador tyoeof te dice el tipo de dato
console.log(typeof num1); // number
console.log(typeof num2); // string

// Comparador diferente
const pass1 = 'admin';
const pass2 = 'Admin';

console.log(pass1 != pass2); // true
console.log(num1 != num2); // false
// Comparador diferente estricto
console.log(num1 !== num2); // true