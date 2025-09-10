/* for in: itera sobre objetos */

const automovil = {
    modelo: 'Camaro',
    year: 1969,
    motor: '6.0'
}

// Forma 1
for (let caracteristica in automovil) {
    console.log(`${automovil[caracteristica]}`);
}

// Forma 2
for (let [llave, valor] of Object.entries(automovil)) {
    console.log(llave + ': ' + valor);
}

// Ejemplos de pratcia


// 3
const edades = [16, 20, 15, 50, 37, 36];

const mayorIgual18 = edades.filter( edad => {
    if (edad >= 18){
        return edad
    }
} )

console.log(mayorIgual18)