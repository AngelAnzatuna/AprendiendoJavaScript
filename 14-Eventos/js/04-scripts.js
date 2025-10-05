// Seleccionamos el elemento tipo form de id formulario
const formulario = document.querySelector('#formulario');

// submit: evento que se utiliza para enviar un formulario
formulario.addEventListener('submit', validarFormulario );

function validarFormulario(e) {
// .preventDefault(): detiene la ejecución de la acción por default que tiene nuestro elemento formulario, que en este caso te manda a un nuevo enlace
// es común detener la acción en la vida real
    e.preventDefault();

// .target.method: Para saber que método esta usando el formulario    
    console.log(e.target.method); // Estamos usando el métod POST

// .target.action: Nos indica la acción por default que va a hacer el formulario. En este caso a la nueva dirección que va a ir este formulario
    console.log(e.target.action)// Nos imprime un enlace

    console.log(e) // Para que se imprima en la consola se debe dar clic en buscar
}

// Sirve para consultar una api, para enviar datos a una endpoint de una api, valida formulario