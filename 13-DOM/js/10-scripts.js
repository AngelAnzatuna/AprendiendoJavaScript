// FORMAS DE CREAR ELEMENTOS

// EJEMPLO 1 CREANDO UN NUEVO ENLACE
// 1 Usando createElement
const enlace = document.createElement('A');
// Agregando texto
enlace.textContent = 'Nuevo Enlace';
// Añadiendo href
enlace.href = '#';
// Añadiendo un target
enlace.target = '_blank';

console.log(enlace);

// AGREGANDO Y MOSTRABDO EL ENLACE EN HTML

// FORMA 1 USANDO .appendChild()
// Seleccionamos el elemento donde queremos mostrar el enlace en este caso dentro del elemento de la clase navegacion
const navegacion = document.querySelector('.navegacion');
// .appendChild: es para agregar un elemento hijo nuevo a la navegación que sea visible en la página web no en la consola
// navegacion.appendChild(enlace); // Aparece al final de nuesto menú en la página web

// FORMA 2 USANDO .insertBefore()
// insertBefore(): Tener control en donde colocar el elemento enlace en nuestra página web. Rquiere 2 argumentos (1. El elemento que queremos agregar, 2. En donde se desea agregar). En este caso para saber en donde queremos agregar el elemento se usa console.log(navegacion.children) nos da la posición de los elementos hijos y para acceder a la posición lo hacemos con el corchete
navegacion.insertBefore(enlace, navegacion.children[1]); // En este caso lo estamos insertando el enlace antes de la posición 1


// EJEMPLO 2

// CREANDO UN NUEVO CARD

// 1ro creamos los parrafos
const parrafo1 = document.createElement('P');
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria', 'concierto');

const parrafo2 = document.createElement('P');
parrafo2.textContent = 'Nombre del concierto';
parrafo2.classList.add('titulo');

const parrafo3 = document.createElement('P');
parrafo3.textContent = '$300 por persona';
parrafo3.classList.add('precio');

// 2do Creando div con la clase de info donde estan los parrafos
const info = document.createElement('DIV');
info.classList.add('info');
// Agregando los parrafos en el div con la clase info
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

// 3ro Creando la imagen
const imagen = document.createElement('IMG');
imagen.src = 'img/hacer3.jpg'

// 4to Creamos el div donde se alamacena la imagen y los parrafos
const card = document.createElement('DIV');
card.classList.add('card');

// 5to Agregando al div card la img y el div que contiene los parrafos
card.appendChild(imagen);
card.appendChild(info);

// 6to Seleccionando el contenedor donde vamos a agregar el card
const contenedor = document.querySelector('.hacer .contenedor-cards');

// 7to agregando el card en el html
contenedor.insertBefore(card, contenedor.children[0]);

// Recordar para ver que se puede hacer con el elemento lo hacemos desde consola una vez seleccionado el elemento, desplegamos la lista para ver las funciones que podemos usar