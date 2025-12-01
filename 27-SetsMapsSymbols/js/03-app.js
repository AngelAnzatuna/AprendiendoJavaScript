const cliente = new Map();

cliente.set('nombre', 'Karen');
cliente.set('tipo', 'Premium');
cliente.set('saldo', 3000);

console.log(cliente.size);

console.log(cliente.has('nombre'));

console.log(cliente.get('tipo'));

cliente.delete('saldo');

cliente.clear();

console.log(cliente);


const paciente = new Map( [ ['nombre', 'paciente'], ['cuarto', 'no definido'] ] );

paciente.set('dr', 'Dr Asignado');
// Te permite un valor a un elemento
paciente.set('nombre', 'Antonio');

console.log(paciente);

paciente.forEach( (datos, index) => {
    // console.log(datos); // imprime los valores
    console.log(index); // imprime las llaves
})