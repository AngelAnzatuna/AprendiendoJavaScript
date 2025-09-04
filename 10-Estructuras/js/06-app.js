/* Operador &&: revisa que se cumpla 2 condiciones dentro del if*/

const usuario = true;
const puedePagar = false;

// En este ejemplo solo se puede comparar una condición
if(usuario) {
    // console.log('Si eres usuario');
} else if(puedePagar) {
    // console.log('Si puede pagar');
}
/* En este ejemplo para ver como funciona el if cambiamos los valores
en las variables para ver como funcionan los else  if
Es importante el orden en que colocas los else if ya que estas se 
ejecutan cuando ya cumple una condición. Ejemplo: si el else if(!usuario)
esta en 2da posición y tenemos else if(!usuario && !puedePagar) en
4ta posición y nuestras variables son false las 2, se va a ejecutar el
else if de la 2da posición porque solo estamos verificando usuario, y 
como en el if importa la posición no importa que el else if de la 4ta 
posición sea la correcta*/
// Se utiliza el && para poder comparar que se cumplan las 2 condiciones
if(usuario && puedePagar) {
    // variables usuario true, pagar true
    console.log('Si puedes comprar');
} else if(!usuario && !puedePagar) {
    // variables usuario false, pagar false
    console.log('No puedes comprar');
} else if(!usuario) {
    // variables usuario false, pagar true
    console.log('Inicia sesión o crea cuenta');
} else if(!puedePagar) {
    // variables usuario true, pagar false
    console.log('Fondos Insuficientes');
}