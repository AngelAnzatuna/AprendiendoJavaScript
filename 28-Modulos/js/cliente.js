export const nombreCliente = 'Angel';
export const ahorro = 200;

export function mostrarInformacion(nombre, ahorro) {
    return `Cliente: ${nombre} - Ahorro: $${ahorro}`;
}

export function tieneSaldo(ahorro) {
    if(ahorro > 0) {
        console.log('Si tiene saldo');
    } else {
        console.log('No tiene saldo')
    }
}