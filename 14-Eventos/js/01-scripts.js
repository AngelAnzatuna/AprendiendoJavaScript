// DOMContentLoaded : es el evento que se ejecuta una vez que es descargado todo el documento html, es el más utilizado. Este siempre va a hacer una función anonima

// En este ejemplo DOMContentLoaded espera que el documento se haya ejecutado, y ahí recien se ejecuta el código que esta dentro del evento, en este caso en la consola se va a imprimir en el siguiente orden 1, 3, y al final el 2
console.log(1);
document.addEventListener('DOMContentLoaded', () => {
    console.log(2);
})
console.log(3);