const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];

// Actualizando el valor de un elemento del arreglo
meses[0] = 'Nuevo mes';
// Forma no comun de agregar valores en un arreglo
meses[6] = 'Ultimo mes';
// Si agregas un valor al arreglo que se salte la secuencia, javascript
// crear el valor pero no crea los valores de la secuencia, como se 
// ve en la img. no se creo los valores para 7 8 y 9
meses[10] = 'Saltando mes';

console.table(meses);
