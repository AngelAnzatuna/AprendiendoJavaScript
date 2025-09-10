// break: corta la ejecución de un for loop

/* Crea un for loop que al detectar el elemento número 5 detenga su
ejecución */

for( let i = 0; i <=10; i++) {
    if(i === 5) {
        console.log('Este es el 5');
        break; // Detiene la ejecución del programa, imprime del 1
        // hasta el 4 y el 5 pero haciendo enfacis en esta condición,
        // no se imprime Número 5, se imprime Este es el 5
    }
    console.log(`Número ${i}`);
}

/* continue: nos permite intercetar un elemento identificarlo y continuar
con la ejecución */

/* Quiero que cuando sea el número 5 se imprima en letras */
for( let i = 0; i <=10; i++) {
    if(i ===5) {
        console.log('CINCO');
        continue; // Si no hay continue se imprime CINCO y
        // Número 5. Pero como hay el continue se imprime
        // CINCO y pasa al Número 6, no se repite
    }
    console.log(`Número ${i}`);
}

// Ejemplo para usar el continue en la vida real
// Decirle al cliente que un producto esta en descuento
const carrito = [
    {nombre: 'Monitor 27 Pulgadas', precio: 500},
    {nombre: 'Televisión', precio: 100},
    {nombre: 'Tablet', precio: 200, descuento: true},
    {nombre: 'Audifonos', precio: 300},
    {nombre: 'Teclado', precio: 400, descuento: true},
    {nombre: 'Celular', precio: 700}
]
for(let i = 0; i < carrito.length; i++) {
    if(carrito[i].descuento) {
        console.log(`${carrito[i].nombre} vale ${carrito[i].precio}, y esta en descuento`);
        continue;
    }
    console.log(`${carrito[i].nombre} vale ${carrito[i].precio}`);
}