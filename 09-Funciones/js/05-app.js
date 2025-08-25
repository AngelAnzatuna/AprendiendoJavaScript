// Parametros cuando se define la función
function sumar(a, b) { // a y b son parámetros
    console.log(a+b);
}

// Argumentos cuando se manda a llamar la función (valores reales)
sumar(2, 3) // 2 y 3 son argumentos
sumar(53, 953.5); // 1006.5

function saludar(nombre, apellido) {
    console.log(`Hola me llamo ${nombre} ${apellido}`)
}

saludar('Angel', 'Anzatuña');
saludar('Luis', 'Anzatuña');
saludar('Jairo', 'Anzatuña');