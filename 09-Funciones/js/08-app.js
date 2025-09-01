// Para tener registrar y poder usar el valor usamos return
function sumar(a, b) {
    return a + b;
}
// Para usar el valor almacenado debemos guardar en una variable
const resultado = sumar(2, 3);
console.log(resultado); // 5

// Ejemplo avanzado
// En este ejemplo se va a calcular el total sin iva y despues con iva
// 1ro  creamos una variable donde se va a almacenar el resultado sin
// iva
let total = 0;
// 2do creamos la función que va a tener la suma de los productos del
// carrito
function elementosCarrito( precio ) {
// Le indicamos al programa que el valor de nuestro precio le sume
// el valor del total    
    return total += precio;
}
// colocamos el nombre de variable y le asignamos el argumento de la
// funcion, este valor se queda registra ahora nuestro total cambia 
// de 0 a 100
total = elementosCarrito(100);
// otra vez asignamos otro argumento a la función, y como nuestro 
// total vale 100 se aplica lo que esta el código dentro de la 
// función y ahora nuestro total vale 110 
total = elementosCarrito(900);
// Se imprime el valor total 110
console.log('El valor a pagar sin iva es: ' + total);

// 3ro Creamos la función para calcular el valor total incluido el iva
function calcularImpuesto(total) {
    return total * 1.15;
}
// creamos una variable donde se va a almacenar el valor generado por 
// return; agregando el total de la variable total que tiene el registro
// de 110 que seria el argumento de nuestra nueva función
const valorPagar = calcularImpuesto(total);
// Se imprime el valor total con el calculo del impuesto 
console.log(`El valor a pagar incluido iva es: ${valorPagar}`);