const autenticado = true;
// Correcto
if(autenticado) {
    console.log('Usuario autenticado')
}
// Incorrecto : ya se da por echo que autenticado esta como true
if(autenticado === true) {
    console.log('Usuario autenticado')
}

// Revisar el orden de las condiciones
const puntaje = 500;
/* Correcto : revisa las condiciones e imprime la mas allegada ya que
las 2 son correctas y 400 es una mejor felicitación que 300*/
if(puntaje > 400) {
    console.log('Tu puntaje es mayor a 400');
} else if( puntaje > 300) {
    console.log('Tu puntaje es mayor a 300');
}
/* Incorrecto : revisa las condiciones e imprime la mas alejada ya que
las 2 son correctas y 300 es una felicitación menor que 400*/
if(puntaje > 300) {
    console.log('Tu puntaje es mayor a 300');
} else if( puntaje > 400) {
    console.log('Tu puntaje es mayor a 400');
}

/* No es muy común usar else if si no que hay veces que se solo se usa
el if*/
// Aqui imprime las 2 condiciones puesto que se cumple
const punt = 500;
if(punt > 400) {
    console.log('Tu puntaje es mayor a 400');
}
if(punt > 300) {
    console.log('Tu puntaje es mayor a 300');
}
/* Para que solo se imprima una condición que se cumpla se trabaja
con las funciones y el código se detiene con el return. En este ejemplo
se va a detener en el 1er if ya que se cumple la condición*/

// Esta es la forma que se trabaja en el mundo real
function revisarPuntaje() {
    if(punt > 400) {
        console.log('Tu puntaje es mayor a 400');
        return;
    }
    if(punt > 300) {
        console.log('Tu puntaje es mayor a 300');
        return;
    }
}

revisarPuntaje();