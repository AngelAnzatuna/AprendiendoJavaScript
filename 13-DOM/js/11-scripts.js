// const btnFlotante = document.querySelector('.btn-flotante');
// const footer = document.querySelector('.footer');

// // Estamos registrando un evento
// // Los eventos tienen 2 parámetros, (1ro nombre del evento, 2do la función si esta dentro del evento o el nombre de la función si esta afuera del evento)

// // Forma 1 creando la función anonima (se llama así porque no le ponemos nombre a la función), desde el evento 
// // btnFlotante.addEventListener('click', () => {
// //     console.log('Diste clic en el boton');
// // });

// // Forma 2 creando una función fuera del evento y solo se le pasa el nombre de la función y no los parentesis
// btnFlotante.addEventListener('click', mostrarOcultarFooter);
// function mostrarOcultarFooter() {
//     // .contains: método que permite verificar si un elemento tiene o no tiene una clase
//     if(footer.classList.contains('activo')){
//         // Ocultando el footer
//         footer.classList.remove('activo');
//         // this hace referencia a btnFlotante
//         // Cambiando el btn al color y mensaje principal
//         this.classList.remove('activo');
//         this.textContent = 'Idioma y Moneda'
//     } else {
//         // Expandiendo el footer
//         footer.classList.add('activo');
//         // Cambiando el color y el texto del boton
//         this.classList.add('activo');
//         this.textContent = 'X Cerrar'
//     }
// }


const btnFlotante = document.querySelector('.btn-flotante');
const footer =  document.querySelector('.footer');

btnFlotante.addEventListener('click', mostrarOcultarFooter);

function mostrarOcultarFooter() {
    if(footer.classList.contains('activo')){
        footer.classList.remove('activo');
        this.classList.remove('activo')
        this.textContent = 'Idioma y Moneda'
    } else {
        footer.classList.add('activo');
        this.classList.add('activo');
        this.textContent = 'Cerrar';
    }
    console.log(this.classList)
}