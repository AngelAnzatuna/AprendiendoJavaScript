let resultado;

// PI
resultado = Math.PI;

// Redondear
resultado = Math.round(2.8);
resultado = Math.round(2.5);
resultado = Math.round(2.4);

// Redondear hacia el número superior
resultado = Math.ceil(2.1);

// Redondear hacia el número inferior
resultado = Math.floor(2.9);

// Raiz cuadrada
resultado = Math.sqrt(144);

// Potencia : eleva un número a su potencia
resultado = Math.pow(2, 4);

// Valor absoluto : cambia de negativo a positivo
resultado = Math.abs(-500);

// Número aleatorio : da números decimales de 0 a hasta 1
resultado = Math.random();

/* Para obtener números aleatorios mayores a 1 y que sean enteros
debemos combinar con otros metodos.
En este ejemplo usamos un rango de 0 a 30*/
resultado = Math.round(30 * Math.random());


console.log(resultado);