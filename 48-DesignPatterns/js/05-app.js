// Module Pattern

const modulo1 = (function() {
    const nombre = 'Angel';
    function hola() {
        console.log('Hola')
    }

    return {
        nombre,
        hola
    }
})();