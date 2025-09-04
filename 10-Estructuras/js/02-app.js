const  puntaje = 1001;

// COMPARADOR NO ES IGULA
if(puntaje != 1000) {
    console.log('si es diferente...')
}

// COMPARADOR SIMPLE Y ESTRICTO
// COMPARADOR SIMPLE
if(puntaje == '1001') {
    console.log('si es igual...'); /* Compara solo la cantidad */
} else {
    console.log('no es igual')
}
// COMPARADOR ESTRICTO
if(puntaje === '1001') {
    console.log('Si es igual');
} else {
    console.log('No es igual'); /* Compara la cantidad y el tipo de
     variable*/
}