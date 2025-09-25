const card = document.querySelectorAll('.card');
console.log(card); /* Nos retorna un NodeList(Array) con todos los
elementos que tienen la clase card */

// Si un clase no existe
const noExiste = document.querySelectorAll('no-existe');
console.log(noExiste); // Retorna una NodeList(Array) vacio

/* En el caso que en una pagina existe dos id, que eso no debe pasar
porque solo debe haber un id por pagina, si te devueleve los elementos
pero eso no está bien, por lo que no debe de haber 2 id en una misma
página */