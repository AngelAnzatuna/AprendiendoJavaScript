// Eventos que suceden con el teclado

const busqueda = document.querySelector('.busqueda');

// keydown: ejecuta el evento cuando se preciona una tecla, en el elemento seleccionado
// busqueda.addEventListener('keydown', () => {
//     console.log('Escribiendo...');
// });

// keyup: ejecuta el evento cuando se suelta la tecla que tenemos presionada, en el elemento seleccionado
// busqueda.addEventListener('keyup', () => {
//     console.log('Soltaste la tecla...');
// })

// blur: se ejecuta el evento cuando se sale del elemento seleccionado en este caso el input. Es muy utilizado para validaciones
// busqueda.addEventListener('blur', () => {
//     console.log('Saliste del input');
// });

// copy: se ejecuta el evento cuando el usuario copia el texto que esta dentro del elemento seleccionado con el comando ctrl + c.
// busqueda.addEventListener('copy', () => {
//     console.log('Copiaste el texto');
// });

// paste: se ejecuta el evento cuando el usuario pega un texto dentro del elemento seleccionado con el comando ctrl + v.
// busqueda.addEventListener('paste', () => {
//     console.log('Pegaste un texto');
// })

// cut: se ejecuta el evento cuando el usuario corta el texto que esta dentro del elemento seleccionado con el comando ctrl + x.
// busqueda.addEventListener('cut', () => {
//     console.log('Cortaste el texto');
// });

// input: se ejecuta cuando el usuario hace cualquier cosa con el teclado, osea que se parece a todos los eventos anteriores en uno solo, menos al evento bur y tampoco me registro el copy, ya que no verifica si el usaurio se salio del elemento seleccionado
// busqueda.addEventListener('input', () => {
//     console.log('Usando input');
// });

// EXPLICACIÓN 2
// Pasos para saber que esta escribiendo el usuario
// Dentro del parentesis se le puede pasar el evento que esta sucediendo, se lo puede nombrar de varias formas e, event, evento, hasta podemos ponerle otro nombre
// Al momento de escribir en nuestro elemento seleccionado se ejecutara el evento y nos dara información de nuestro evento, datos que podemos usar
// busqueda.addEventListener('input', (e) => {
// .type: te dice sobre que elemento estas trabajando
    // console.log(e.type); // te informa que es un elemento tipo input
// .target: te da la información completa del elemento, su etiqueta, su atributos    
    // console.log(e.target);
// .value: te da el texto que estan escribiendo en el elemento input
//     console.log(e.target.value);    
// });

// Ejemplo verificación que el usuario está haciendo una busqueda
busqueda.addEventListener('input', (e)=>{
    if(e.target.value === ''){
        console.log('Fallo la validación')
    }
    // Aquí el programa corre cuando se borra todas las palabras en el elemento seleccionado
});