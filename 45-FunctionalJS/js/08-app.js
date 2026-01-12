const obtenerCliente = () => {
    const nombre = 'Angel';

    function muestraNombre() {
        console.log(nombre)
    }

    return muestraNombre;
}

const cliente = obtenerCliente();

cliente();