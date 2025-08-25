// Declaración de Función ( Function Declaration )
/* Pasos para crear una Function Declaration
1 usar la palabra reservada function
2 nombre de la función
3 () aquí va los parémetros de la función
4 {} abrir llaves
A esto se lo conoce como Definir la función
*/
function sumar() {
    console.log(2+2);
}

/* Mandar a llamar la función */
sumar(); //4

// Expresión de la Función ( Function Expression )
/* Pasos para crear una Function Expression
1 definir la variable con cosnt o let
2 nombre de la variable
3 asignación
4 asignar la función y el código dentro de la función 
*/
const sumar2 = function() {
    console.log(2+3);
}
/* Mandar a llamar la función */
sumar2(); // 5