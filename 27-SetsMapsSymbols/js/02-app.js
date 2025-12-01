// WeakSet

const weakset = new WeakSet();

const cliente = {
    nombre: 'Angel',
    edad: 33
}

weakset.add(cliente);

// console.log(weakset.has(cliente));

weakset.delete(cliente);

console.log(weakset);