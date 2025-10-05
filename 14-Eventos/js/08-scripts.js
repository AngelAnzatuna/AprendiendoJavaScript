// Evitar la propagación con contenido creado...
const parrafo1 = document.createElement('P');
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria');
parrafo1.classList.add('concierto');

// Segundo parrafo
const parrafo2 = document.createElement('P');
parrafo2.textContent = 'Concierto de Rock';
parrafo2.classList.add('titulo');

// 3er parrafo...
const parrafo3 = document.createElement('p');
parrafo3.textContent = '$800 por persona';
parrafo3.classList.add('precio');
// 1ra Explicación: podemos obtener eventos cuando estamos creando html desde js, y la función la declaramos en la parte inferior, y así ya trabajamos con el elemento que queremos
// parrafo3.onclick = nuevaFuncion;
// 2da Explicación en el caso de que deseemos pasar un argumento
// lo que no se debe hacer ya que al tener los parentesis le estamos llamando a la función
// parrafo3.onclick = nuevaFuncion(1);
// 3ra Explicación lo que se debe hacer es, crear una función anonima y dentro de la función anonima llamar a nuestra función
parrafo3.onclick = function() {
    nuevaFuncion(1) 
}

// crear el div...
const info = document.createElement('div');
info.classList.add('info');
info.appendChild(parrafo1)
info.appendChild(parrafo2)
info.appendChild(parrafo3);

// Vamos a crear la imagen
const imagen = document.createElement('img');
imagen.src = 'img/hacer2.jpg';

// Crear el Card..
const contenedorCard = document.createElement('div');
contenedorCard.classList.add('contenedorCard');

// Vamos a asignar la imagen al card...
contenedorCard.appendChild(imagen);

// y el info
contenedorCard.appendChild(info);

// Insertarlo en el HTML...
const contenedor = document.querySelector('.hacer .contenedor-cards');
contenedor.appendChild(contenedorCard); // al inicio info

// 1ra Explicación creamos la función 
// function nuevaFuncion() {
//     console.log('desde nueva función')
// }

// 2da Explicación
// Al parecer funciona pero no se debe hacer
// function nuevaFuncion(id) {
//     console.log('desde nueva función', id)
// }

// 3ra Explicación
function nuevaFuncion(id) {
    console.log('desde nueva función', id)
}