const cliente = {
    nombre: 'Angel Alexis',
    balance: 500,
    tipo: 'Premium'
}

describe('Testing al cliente', () => {
    test('Es Angel', () => {
        expect(cliente).toMatchSnapshot();
    });
});