/* Do While: se ejecuta al menos una vez y despues verifica que se 
cumpla la condición */

let i = 1; // Inicio

do {
    console.log(i % 2 === 0 ? `${i} es  par` : `${i} es impar`)
    i++; // incremento
    
} while(i < 20); // condición