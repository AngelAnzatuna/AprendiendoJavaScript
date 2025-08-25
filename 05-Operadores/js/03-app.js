// Undefined
let num;
console.log(num); // undefined
/* Es undefined porque la variable esta definida pero su valor no*/
console.log(typeof num); //undefined

// Null
let num2 = null;
console.log(num2); // null
console.log(typeof num2); // Object
/* Es por la especificación de Emma, que es quien definie el estandar
del lenguaje dice que los null deben ser un objeto*/

// Comparación simple
console.log(num == num2); // true
/* Aqui supuestamente es true porque ninguno tiene un valor, aunque no
es el caso ya que num2 es null */
// Comparación estricta
console.log(num === num2); // false
/* Aquí si tomo la diferencia en que uno es undefined y el otro es 
null */