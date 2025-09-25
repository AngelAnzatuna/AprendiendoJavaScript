let elemento;

// Seleccionando el documento en general
elemento = document;
elemento = document.all;
// Seleccionando el head del documento
elemento = document.head;
// Seleccionando el body
elemento = document.body;
elemento = document.domain;

// .forms nos informa cuantos formularios hay en el documento
elemento = document.forms;
// Seleccionando el formulario por su indice y su atributo id
elemento = document.forms[0].id;
// Seleccionando el formulario por su indice y su atribito method
elemento = document.forms[0].method;
// Seleccionando el formulario por su indice y su atributo clase
elemento = document.forms[0].classList;

// .links nos indica cuantos enlaces hay en el documento
elemento = document.links;
// Seleccionando un enlace por su indice
elemento = document.links[4];
// Seleccionando un enlacer por su indice y su atributo clase,
// esto nos devuelve un tipo document que es como un array
elemento = document.links[4].classList;
// Selccionado un enlacer por su indice y el nombre de la clase
// que nos devuelve el texto de la clase con un string
elemento= document.links[4].className;

// .images nos indica cuantas imagenes hay en el documento
elemento = document.images;

// .scripts no indica cuantos scripts hay en el documento
elemento = document.scripts;


console.log(elemento);