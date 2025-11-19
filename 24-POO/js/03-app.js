class Cliente {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion() {
        return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`;
    }

    static bienvenida() {
        return `Bienvenido al Cajero`
    }
}

// Herencia
class Empresa extends Cliente {
    // Agregando más propiedades a la nueva clase heredada
    constructor(nombre, saldo, telefono, categoria) {
        super(nombre, saldo);
        this.telefono = telefono;
        this.categoria = categoria;
    }

    static bienvenida() { // reescribir un método
        return `Bienvenido al Cajero de Empresas`
    }

}

const angel = new Cliente('Angel', 1000);
const empresa = new Empresa('Alexis', 2000, 123798456, 'Aprendizaje');

console.log(empresa);
console.log(empresa.mostrarInformacion( ));

console.log(Cliente.bienvenida());
console.log(Empresa.bienvenida());