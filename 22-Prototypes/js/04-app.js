function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

Cliente.prototype.tipoCliente = function() {
    let tipo;

    if(this.saldo > 10000) {
        tipo = 'Gold';
    } else if(this.saldo > 5000) {
        tipo = 'Platium';
    } else {
        tipo = 'Normal';
    }
    return tipo;
}

Cliente.prototype.nombreClienteSaldo = function() {
    return `Nombre: ${this.nombre}, Saldo: ${this.saldo}, Tipo Cliente: ${this.tipoCliente()}`;
}

Cliente.prototype.retiraSaldo = function(retira) {
    this.saldo -= retira;
}

function Persona(nombre, saldo, telefono) {
    Cliente.call(this, nombre, saldo);
    this.telefono = telefono;
}
// Clonando Propiedades
// Heredando las funciones de Cliente
Persona.prototype = Object.create(Cliente.prototype);
// Mostrando el constructor
Persona.prototype.constructor = Cliente;

// Instanciarlo
const angel = new Persona('Angel', 5000, 12347859);
console.log(angel);
console.log(angel.nombreClienteSaldo());

Persona.prototype.mostrarTelefono = function() {
    return `El teléfono de esta persona es ${this.telefono}`
}

console.log(angel.mostrarTelefono());