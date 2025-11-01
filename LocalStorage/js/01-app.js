// Variable
localStorage.setItem('nombre:', 'Angel');

// Objeto
const datos = {
    nombre: 'Luis',
    edad: 70
}
// Transformando a string dentro de una variable
const datosString = JSON.stringify(datos);
localStorage.setItem('datos', datosString);

// Array
const meses = ['enero', 'febrero', 'marzo'];
// Transformando a string de forma directa
localStorage.setItem('meses', JSON.stringify(meses));