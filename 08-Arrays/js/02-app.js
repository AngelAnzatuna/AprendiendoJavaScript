const numeros = [10, 20, 30, 40, 50, [1, 2, 3]];

// console.table: muestra los arreglos en un tabla en la consola
console.table(numeros);

// Accediendo a un valor del arreglo
// nombre del arreglo [indice del elemento]
console.log(numeros[3]); // Accede al elemento 40

// Si accedes a un valor que no existe te marcara undefined

// Accediendo a un valor de un arreglo que esta dentro de un arreglo
console.log(numeros[5][0])
/* Explicación: numeros[5] esta accediendo al arreglo que esta
dentro del arreglo, [0] esta accediendo al primer valor del
arreglo que esta dentro del arreglo */