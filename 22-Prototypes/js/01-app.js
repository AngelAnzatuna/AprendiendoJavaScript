const cliente = {
    nombre: 'Angel',
    saldo: 500
}

console.log(cliente);
console.log(typeof cliente);

function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

const angel = new Cliente('Angel', 500);

console.log(angel);