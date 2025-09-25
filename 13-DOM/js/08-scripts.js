/* Traversing the DOM: la forma como te vas a mover a los diferentes  
elementos*/

// Nota el .parentNode y .childNodes devuelven los nodes contando los espacios en blanco por lo cual es mejor usar .parentElement y .children

// EXPLICACIÓN 1 RECORRIENDO A ELEMENTOS HIJOS

// const navegacion = document.querySelector('nav');
// console.log(navegacion);

// Nodos: en este caso son los enlaces de la etiqueta nav, son los
// elementos que hay dentro de una etiqueta 

// console.log(navegacion.childNodes) // .childNodes: Los espacios en
// blanco (enter) son considerados elementos
// Resultado nodeList(9) osea 9 elementos 

// console.log(navegacion.children) // .children Los espacios en blanco 
// (enter) no son considerados como elementos 
// Resultado HTMLCollection(4) 4 elementos


// EXPLICACIÓN 1.2
// Aqui nos explica como podemos acceder a los elementos similar a los arrays usando .children
// console.log(navegacion.children[1])


// EXPLICACIÓN 1.3
//  Usando nodeName y nodeType
// console.log(navegacion.children[0].nodeName); // Nos devuelve el nombre de la etiqueta html pero en mayuscula A
// console.log(navegacion.children[0].nodeType); // Devuelve el tipo del nodo que es el 1 que significa que es un nodo de tipo elementos (los elementos son las nombres de las etiquetas de html). Esto se lo ve en documentación developer.mozilla se hace una busqueda

// EXPLICACIÓN 1.4
// Aquí el profe accede al primer elemento con clase card
// const card = document.querySelectorAll('.card');
// console.log(card)

// console.log(card.children); // Imprime los elementos hijos que hay dentro del 1er elemento card padre
// console.log(card.children[1].children[1].textContent); // .children[1] : Accedemos al 2do elemento hijo de nuestro elemento padre. Como este elemento hijo tambien tiene hijos podemos acceder a sus elementos hijos incluyendo otro .children. Para accerder al texto de ese elemento lo hacemos con un .textContent


// EXPLICACIÓN 1.5
// Para modificar el texto seleccionado
// card.children[1].children[1].textContent = 'Practicando dom js'
// Cambiando la imagen sin ayuda del profe
// card.children[0].src = 'img/lupa.png'
// card accedemos al primer elemento con la clase card
// .children[0]: accedemos al primer elemento hijo que es la img
// .src: accede a la ruta de la imagen
// =: indicamos que vamos a asignar un nuevo valor
// 'img/lupa.png': nombre de la ruta de la imagen a cambiar


// EXPLICACIÓN 2 RRECORRIENDO A ELEMENTOS PADRES
// Recorrer hacia elementos padres en este caso .card esta dentro de elementos padres

// Traversing de hijo a padre con .parentNode
// console.log(card.parentNode); // No usarlo
// console.log(card.parentElement.parentElement);
// Esto hace que se seleccione el elemento padre de la clase .card, que es un <div class="contenedor-cards">
// si colocamos otro .parentElement nos recorre al padre de la clase contenedor-cards que ese el elemento <section class="hacer">


// EXPLICACIÓN 3 RECORRIENDO A ELEMENTOS HERMANOS
// Se refiere que estamos en un elemento padre, y seleccionamos un elemento hijo, y queremos seleccionar el 2do elemento no el 1ro le agregamos .nextElementSibling si queremos seleccionar el 3er elemento de igual forma aplicamos otro nextElementSibling
// console.log(card.nextElementSibling.nextElementSibling);


// EXPLICACIÓN 4 SELECCIONANDO EL ULTIMO CARD
// Para entender este ejemplo selecciona el ultimo card del elemento padre y con el .previousElementSibling seleccionamos el elemento anterior a este que es el 3er elemento
// const ultimoCard = document.querySelector('.card:nth-child(4)');
// console.log(ultimoCard);
// console.log(ultimoCard.previousElementSibling);


// EXPLICACIÓN 5 SELECCIONANDO EL PRIMERO Y EL ULTIMO ELEMENTO
const navegacion = document.querySelector('.navegacion');
// Para traerse el 1er elemento se usa .firtsElementChild
console.log(navegacion.firstElementChild);
// Para traerse el ultimo elemento se usa .lastElementChild
console.log(navegacion.lastElementChild);