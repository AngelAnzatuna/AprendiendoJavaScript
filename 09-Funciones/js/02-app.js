// Declaración de Función ( Function Declaration )
sumar(); //4
function sumar() {
    console.log(2+2);
}

sumar2(); // error
// Expresión de la Función ( Function Expression )
const sumar2 = function() {
    console.log(2+3);
}


// La principal diferencia es que las function declaration se pueden
// mandar a llamar antes de escribirlas (conocido como hoisting), 
// mientras que las function expression no y marcan un error