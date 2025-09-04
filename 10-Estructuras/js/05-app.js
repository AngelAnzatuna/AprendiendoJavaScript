/* Switch case: es una forma de revisar por multiples condiciones en
caso de que se cumpla, lo hace por medio de los cases
Los cases revisan el parámetro del switch y determina si cumple o no
la condición
Colocar break al final de cada case, para que no se ejecute lo demás
case
Al final de los cases es obligatorio colocar un default, es el que
indica cuando ninguna condición se cumple*/


const metodoPago = 'ninguno';

switch (metodoPago) {
    case 'efectivo':
        console.log(`Pagaste con ${metodoPago}`);
        break;
    case 'cheque':
        console.log(`Pagaste con ${metodoPago}`);
        break;
    case 'tarjeta':
        console.log(`Pagaste con ${metodoPago}`);
        break;
    // Ejemplo usando una función
    case 'transferencia':
        pagar(metodoPago);
        break;
    default:
        console.log('Aún no has seleccionado un método de pago o método de pago no soportado')
        break;

}

function pagar(pago) {
    console.log(`Pagaste con ${pago}`)
}