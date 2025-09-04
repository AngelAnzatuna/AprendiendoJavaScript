// Else if:
/* Las condiciones se aplican segun su importancia, primero debe de ir la
más importante y despues la relevancia como nosotros le indiquemos*/

const dinero = 300;
const totalAPagar = 500;
const tarjeta = true;

// Le preguntamos si el dinero es mayor o igual a el totalAPagar
// como no se cumple salta a la siguiente condición
if(dinero >= totalAPagar) {
    console.log('Si podemos pagar');
/* Le preguntamos si tenemos tarjeta, como si se cumple impreme el
código de esta condición*/    
} else if(tarjeta) {
    console.log('Si puedes pagar con tarjeta');
/* Si en la variable tarjeta estaría false, se ejucutaria el código de 
else */    
} else {
    console.log('Fondos insuficientes')
}