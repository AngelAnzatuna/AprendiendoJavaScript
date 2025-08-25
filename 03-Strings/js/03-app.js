const producto = 'Monitor 20 Pulgadas ';
const precio = '30 UDS';

console.log(producto.concat(precio));
console.log(producto.concat('En descuento'));

console.log(producto + 'Con un precio de: ' + precio)
console.log('El producto ' + producto + 'tiene un precio de: ' + precio);
console.log('El producto ', producto, 'tiene un precio de: ', precio);

// Template Strings 
console.log(`El producto ${producto}tiene un precio de ${precio}`)
