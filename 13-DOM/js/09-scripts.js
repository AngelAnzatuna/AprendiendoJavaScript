// En este video se va a seguir los siguientes pasos:
// Seleccionar el 1er enlace que aparece en el sitio web
// const primerEnlace = document.querySelector('a');

// Forma 1
// .remove para eleminar
// primerEnlace.remove(); // Se observa en la pagina web que solo hay 3 enlaces
// Se puede ejecutar desde la consola (se copia el anterior código y se pega en la consola) del navegador y pasa lo mismo

// Usar console.log para verificar que el código funciona
// console.log(primerEnlace);

// Forma 2
// Elimina el elemento desde el elemento padre
// 1 Seleccionamos la clase de navegación donde estas los elementos hijos que son los enlaces
const navegacion = document.querySelector('.navegacion')

// 2 Con console.log(navegacion.children) nos ayuda a navegar y seleccionar el elemento que se quiere eliminar
console.log(navegacion.children);

// 3 Con el método .removeChild(se le pasa el nodo a eliminar, se le pasa la referencia(navegacion.children[2])); con este método se elimina al elemento hijo que le pusimos de referencia 
navegacion.removeChild( navegacion.children[2] ); // Se elimina el enlace Registro desde nuestra página web