const encabezado = document.querySelector('.contenido-hero h1');
console.log(encabezado);

// Acceder al contenido(texto) de una etiqueta del html
// Existen 3 formar

/* 1ro .innerText */
console.log(encabezado.innerText); /* Trae el texto tal cual */
/* 2do .textContent */
console.log(encabezado.textContent); /* Trae el texto pero separa las
etiquetas que estan dentro del elemento pero no las imprime */
/* 3ra .innerHTML */
console.log(encabezado.innerHTML); /* Trae el texto, pero imprime
las etiquetas que tiene dentro del elemento */

/* El profe nos indica la diferencia entre .innerText y .textContent
En el archivo styles.css en el h1 activo visibility: hidden;
.innerText: no encuentra el visibility: hidden;
.textContent: si encuentra el visibility: hidden; */

// Otra forma de acceder de manera directa al texto
const encabezado2 = document.querySelector('.contenido-hero h1').textContent
console.log(encabezado2);

// Ejemplo de como cambiar el texto del encabezado
// Debe estar borrado el visibility: hidden; de css
document.querySelector('.contenido-hero h1').textContent = 'Hola mundo';

// Ejemplo de como modificar una imagen
const imagen = document.querySelector('.contenedor-cards .card img')
console.log(imagen);

imagen.src = 'img/hacer2.jpg'