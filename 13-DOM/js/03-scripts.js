const formulario = document.getElementById('formulario');
console.log(formulario); /* Te retorna el elemento con el id 
formulario */

// Que pasa cuando se selecciona algo que no existe
const noExiste = document.getElementById('no-existe');
console.log(noExiste); // Te retorna un null, pero no es un error

/* En el caso que exista 2 id con el mismo nombre en una pagina html
no te marca error, pero no se debe hacer eso. pero si llega a pasar
getElementById seleccionar el primer elemento que cumpla la condición */