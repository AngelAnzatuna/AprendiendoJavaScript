// Class declaretion
class Cliente {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }
}

// Instanciar
const angel = new Cliente('Angel', 1000);
console.log(angel);

// Class expression
const Cliente2 = class {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }
}

// Instanciar
const angel2 = new Cliente2('Angel', 1000);
console.log(angel2);