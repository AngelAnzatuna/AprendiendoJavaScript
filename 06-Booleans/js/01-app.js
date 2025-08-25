const bool1 = true;
const bool2 = false;
const bool3 = 'true';

console.log(bool1); // true
console.log(bool2); // false
console.log(typeof bool1); // boolean

/* Cuando comparamos un bolean con un string aunque sea el comparador
simple igual detecta si es string o boolean*/
console.log(bool1 == bool3); // false

// Otra forma de crear booleans
const bool4 = new Boolean(true);
console.log(bool4);