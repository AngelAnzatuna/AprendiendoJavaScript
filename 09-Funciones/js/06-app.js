/* Parámetros predefinidos : son parametros por default. Si no hay un 
argumentos cuando se manda a llamar la función, los parametros 
predefinidos aparecen y así no nos sale undefined*/ 

// Ejemplo sin definir parametros
function saludar(nombre, apellido) {
    console.log(`Hola ${nombre} ${apellido}`)
}
saludar();
/* Resultado en consola: Hola undefined undefined */
saludar('Angel');
/* Resultado en consola: Hola Angel undefined */

// Ejemplo predefiniendo los parametros
function saludar2(nombre = 'Anónimo', apellido = '') {
    console.log(`Hola ${nombre} ${apellido}`)
}
saludar2();
/* Resultado en consola: Hola Anónimo*/
saludar2('Angel')
/* Resultado en consola: Hola Angel */
saludar2('Angel', 'Anzatuña')
/* Resultado en consola: Hola Angel Anzatuña */