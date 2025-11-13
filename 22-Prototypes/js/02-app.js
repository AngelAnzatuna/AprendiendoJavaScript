function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

const angel = new Cliente('Angel', 500);

function formatearCliente(cliente) {
    const {nombre, saldo} = cliente;
    return `El cliente ${nombre} tiene un saldo de ${saldo}`;
}

function formatearEmpresa(cliente) {
    const {nombre, saldo, categoria} = cliente;
    return `El cliente ${nombre} tiene un saldo de ${saldo} y pertenece a la categoria ${categoria}`;
}

console.log(formatearCliente(angel));

function Empresa(nombre, saldo, categoria) {
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria = categoria;
}

const dabxis = new Empresa('Dabxis', 5000, 'Mantenimiento');

console.log(formatearEmpresa(dabxis));