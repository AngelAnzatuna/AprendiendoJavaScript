/* Operador ternario: otra forma de ver si una condición se cumple, es
más simplificado que el if */

const autenticado = true;
/* Sintaxis variable ? condición que se cumple if : si no se cumple la condición else */
console.log(autenticado ? 'Si esta autenticado' : 'No esta autenticado');

// Revisar 2 condiciones en un operador ternario
const aut = true;
const pag = false;
console.log( aut && pag ? 'Puede seguir': 'No puede seguir');

// Ternario dentro de un ternario
/* ternario inicial (aut ? ..1.. : ...)
ternario anidado '..1..' (aut ? 'pag ? ... : ...' : ...) 
Nota le pongo en la explicación los '' para tener una referencia visual
no hay que poner en el código a menos que se coloque un string no
confundir*/
console.log( aut ? pag ? 'Autenticado, Si puede pagar': 'Autenticado, No puede pagar' : 'No esta autenticado' );
// repuestas segun la variable
// aut true y pag false: Autenticado, No puede pagar
// aut true y pag true: Autenticado, Si puede pagar
// aut false y pag true: No esta autenticado
// aut false y pag false: No esta autenticado