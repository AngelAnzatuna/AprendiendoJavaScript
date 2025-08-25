let num1 = '20';
const num2 = '20.2';
const num3 = 'Uno';
const num4 = 20;

console.log(num1); // 20 tipo string
// Number.parseInt(num1): Convierte de string a número entero
console.log(Number.parseInt(num1)); // 20 tipo number
// Number.parseFloat(num2): Convierte de string a número flotante
console.log(Number.parseFloat(num2)); // 20.2 timpo number
/* Para cambiar un string a número este obligatoriamente debe ser 
un número, caso contrario nos da un NaN: none a number*/
console.log(Number.parseFloat(num3)); // NaN

// Revisar si un número es entero o no
console.log(Number.isInteger(num4)); // true
console.log(Number.isInteger(num3)); // false
console.log(Number.isInteger(num1)); // false
/* En este ultimo caso nos da falso ya que no lo tenemos registrado 
en una variable el cambio de tipo string a number */