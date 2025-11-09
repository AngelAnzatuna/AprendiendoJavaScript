// Elimina un elemento
localStorage.removeItem('nombre:')

// Para actulizar se debe realizar varios pasos
// 1. Llama el elemento
const meses = localStorage.getItem('meses');
// 2. Transformale de string a array
const mesesArray = JSON.parse(meses);
// 3. Imprimimos en consola para verificar que es un array
console.log(mesesArray);
// 4. Ingresamos un nuevo mes en este caso abril
mesesArray.push('abril');
// 5. Comprobamos que se ingreso
console.log(mesesArray);
// 6. Lo cambiamos a string
const mesesString = JSON.stringify(mesesArray);
// 7. Lo enviamos con set
localStorage.setItem('meses', mesesString);
// Nuestro localStorage está actualizado. Este es paso a paso tambien se lo puede acortar ciertas puntos en si cuando se cambia de un string al arrray y viceversa

// Eliminar toda la información almacenada en localStorage
localStorage.clear();