const aprendiendo = function() {
    console.log('Aprendiendo JavaScript');
}

// Diferencias :
// 1ro se cambia el function por =>
// 2do si dentro de la función solo hay una linea de código ejemplo
// console.log('Aprendiendo JavaScript'); las llaves ya no son 
// necesarias
// 3ro si la función tiene una linea de código da por implicito
// el return (osea se elimino el console.log para mostrar el ejemplo),
// entonces el valor se queda registrado en la variable y lo podemos
// usar
const aprendiendo2 = () => 'Aprendiendo JavaScript';

console.log(aprendiendo2());
aprendiendo2();