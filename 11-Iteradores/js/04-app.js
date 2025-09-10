/* While: Se ejecuta mientras una condición sea verdadera */

let i = 1; // Inicializar el while
// Ejemplo simple
/*
while(i < 10) { // Condición 
    console.log(i);
    i++; // Incremento
}
*/
// Fizz Buzz
/*
while(i <=100) {
    if(i % 15 === 0) {
        console.log('fizz buzz');
    } else if( i % 3 === 0) {
        console.log('fizz');
    } else if( i % 5 === 0) {
        console.log('buzz');
    } else {
        console.log(i);
    }

    i++;
}
*/
// Detentando pares y nones con el while
while(i < 20) {
    console.log(i % 2 === 0 ? `${i} es par` : `${i} es impar`);
    i++;
}