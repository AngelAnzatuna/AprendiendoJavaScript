const cliente = {
    nombre: 'Angel',
    balance: 500
}

describe('Testing al Cliente', () => {
    test('El cliente es premium', () => {
        expect(cliente.balance).toBeGreaterThan(400);
    });

    test('Es Angel', () => {
        expect(cliente.nombre).toBe('Angel');
    });

    test('No es otro cliente', () => {
        expect(cliente.nombre).not.toBe('Alexis');
    });

    test('No tiene 500', () => {
        expect(cliente.balance).not.toBe(400);
    });
})