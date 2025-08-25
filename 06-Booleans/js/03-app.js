const autenticado = true;
// Forma correcta
if(autenticado) {
    console.log('Si puedes ver netflix');
} else {
    console.log('No no puedes verlo');
}

/* Forma incorrecta : ya esta implicito el true no es necesario
especificar*/
if(autenticado === true) {
    console.log('Si puedes ver netflix');
} else {
    console.log('No no puedes verlo');
}

// Operador ternario
console.log(autenticado ? 'Si esta autenticado' : 'No esta autenticado');