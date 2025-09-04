/* Operador OR: revisa que se cumpla almenos una condición */

const efectivo = 300;
const credito = 300;
const disponible = efectivo + credito;
const totalPagar = 500;

// Si solo tenemos la 1ra condición no se cumple imprime el else
/* Tenemos las 2 condiciones y un se cumple se imprime el if la variable
credito vale 1000*/
/* Ahora la variable credito vale 300 y agregamos la 3ra condición
por lo cual si cumple e imprime el of*/     
if (efectivo > totalPagar || credito > totalPagar || disponible > totalPagar) {
    console.log('Si puedes pagar');
} else {
    console.log('No puedes pagar');
}