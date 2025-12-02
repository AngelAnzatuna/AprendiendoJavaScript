const sym = Symbol();
const sym2 = Symbol();

// sym === sym2 ? console.log('Son iguales') : console.log('Son Diferentes');

const nombre = Symbol();
const apellido = Symbol();

const persona = {};

// Agregar nombre y apellido como llaves del objeto
persona[nombre] = 'Angel';
persona[apellido] = 'Anzatuña';
persona.tipoCliente = 'Premium';
persona.saldo = 500;

console.log(persona);
// console.log(persona[nombre]);

// Las propiedades que utiliza un symbol no son iterables
for(let i in persona) {
    console.log(i);
}

// Definir una descripción del symbol
const nombreCliente = Symbol('Nombre del Cliente');

const cliente = {};

cliente[nombreCliente] = 'Alexis';

console.log(cliente);