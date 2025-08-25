const producto = 'Monitor 20 Pulgadas';

console.log(producto);
// .replace : te permite reemplazar un texto con otro
console.log(producto.replace('Pulgadas', '"'));
console.log(producto.replace('Monitor', 'Monitor Curvo'));

/* .slice : corta texto, tu le indicas el texto que quieres 
que aparesca en este caso Monitor*/
console.log(producto.slice(0, 7));
/* Si solo pones un número recortara desde el inicio hasta
el número, en este caso se mostrara 20 Pulgadas */
console.log(producto.slice(8));
/* Si le pasas un numero mayor al inicio slice no hace nada */
console.log(producto.slice(2, 1));

/* .substring : corta el texto tu le indicas el inicio y el
fin muy similar a .slice  */
console.log(producto.substring(0, 7));
/* La diferencia es que si se pone un número mayor al inicio
este si te da la información en este caso la o */
console.log(producto.substring(2, 1));

/* Para obtener el primer caracter de tu nombre */
const usuario = 'Angel'
// Usando .slice
console.log(usuario.slice(0, 1));
/* Método .chatAt = obtiene solo un caracter de la posición 
que le indiques. En este caso queremos la letra A que es 0*/
console.log(usuario.charAt(0));