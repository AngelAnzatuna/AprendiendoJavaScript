const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
const meses2 = ['Agosto', 'Septiembre'];
const meses3 = ['Octubre', 'Noviembre']

/* .concat(): en los parentesis se colocan los mesese que se quiere 
añadir */
const resultado = meses.concat(meses2, meses3);
console.log(resultado)

/* spread operator: se coloca 3 puntos y el nombre del arreglo que se
concatena */
const resultado2 = [...meses2, ...meses, ...meses3];
console.log(resultado2)