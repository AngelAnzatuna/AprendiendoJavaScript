const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];

console.table(meses);

// Forma para recorrer todo el arreglo

// 1ro. Conocer el tamaño del arreglo
//.length : propiedad que informa cuanto mide el arreglo. Se inicia 
// desde 1
console.log(meses.length); // Nos indica que tiene 6 elementos

// 2do. Recorrer un arreglo con for loop
for(let i = 0; i < meses.length; i++) {
    console.log(meses[i]);
}
/* Explicación: usando el bucle for inciamos la iteración desde 0;
le indicamos que la iteración debe ser menor a los elementos que hay
en nuestro arreglo; le indicamos que el iterador de aumentar de uno
en uno.
meses[i] accedemos al arreglo meses y como el iterador inicia en 0, 
en el 1er caso seria meses[0] donde esta accediendo al elemento 0 del
arreglo que es 'Enero', se vuelve a iniciar el programa y ahora el
iterador cambia a 1, compara si 1 es menor al numero de elementos que}tiene nuestro arreglo en este caso 6, como si lo es imprime el acceso al arreglo meses[1] que es Febrero, así hasta que ya no se cumpla el bucle */
