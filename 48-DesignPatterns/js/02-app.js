// Constructor Pattern
class Persona {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }
}


class Cliente extends Persona {
    constructor(nombre, email, empresa) {
        super(nombre, email);
        this.empresa = empresa;
    }
}

const persona = new Persona('Alexis', 'alexis@correo.com');
console.log(persona);

const cliente = new Cliente('Angel', 'angel@correo.com', 'Angel Company');

console.log(cliente);