/* For lop: se ejecuta hasta que el código deje de cumplir una
condición 
Consta de 3 partes
1ra Inicializador: en que lugar va a empezar a contar o a repetirce
nuestro código, es recomendable ponerle como i de indice 
2da Condición: lo que se va a revisar 
3ra Incremento
4to Dentro de la llaves va a ejecutarse dentro del código*/

// Escenario aprendizaje
for(let i = 0; i < 10; i++) {
    console.log(`Numero: ${i}`);
}

// Escenario real

/* Con un for loop como se identifica los números pares e impares */
for(let i =1; i <= 20; i++) {
    console.log(i%2 === 0 ? `${i} es par` : `${i} es impar`);
}

/* Ejemplo usando un array de carrito de compras */
const personas = [
    {nombre: 'Angel', edad: 20},
    {nombre: 'ALexis', edad: 20},
    {nombre: 'Luis', edad: 20},
    {nombre: 'Teresa', edad: 20}
]

for(let i = 0; i < personas.length; i++){
    console.log(`Hola, te llamas ${personas[i].nombre} y tienes ${personas[i].edad} años`)
}