// Class declaretion
class Cliente {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    // Creando un método
    mostrarInformacion() {
        return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`
    }

    // Creando Métodos estaticos o propiedades estáticas
    static bienvenida() {
        return `Bienvenido al Cajero`
    }
}

// Instanciar
const angel = new Cliente('Angel', 1000);
// Llamando al método
console.log(angel.mostrarInformacion());
console.log(angel);

console.log(Cliente.bienvenida());

// Class expression
const Cliente2 = class {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }
    // Método aplica igual a la class declaration
    mostrarInformacion() {
        return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`
    }
}

// Instanciar
const angel2 = new Cliente2('Angel', 1000);
console.log(angel2.mostrarInformacion());
console.log(angel2);