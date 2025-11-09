// La llave debe tenet el mismo nombre en este caso los : al final
const nombre = localStorage.getItem('nombre:');
console.log(nombre);

// En el caso del objeto
const datos = localStorage.getItem('datos');
// Usamos JSON.parse() para transformar un string en un objeto o array, si cumple la estructura
// Inderectamente: 1ro se guarda dentro de una variable
const datosJSON = JSON.parse(datos)
// Se la imprime
console.log(datosJSON); // Resultado un objeto

// Directamente
const meses = localStorage.getItem('meses')
// Se aplica la transformación directamente
console.log(JSON.parse(meses)); // Imprime un array