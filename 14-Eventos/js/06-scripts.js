// Event Bubbling: puede causar errores ya que si le damos clic a elementos hijos que tambien hemos seleccionado, ocurren los eventos de padres e hijos

// .stopPropagation(): detiene el event bubbling. Con esto si damos clic en el elemento seleccionado ya solo se enfoca en el elemento.

// Ayuda a prevenir errores

const cardDiv = document.querySelector('.card');
const infoDiv = document.querySelector('.info');
const tituloDiv = document.querySelector('.titulo');

cardDiv.addEventListener('click', e =>{
    e.stopPropagation();
    console.log('click en card');
});

infoDiv.addEventListener('click', e=>{
    e.stopPropagation();
    console.log('click en info');
});

tituloDiv.addEventListener('click', e=>{
    e.stopPropagation();
    console.log('click en titulo');
});