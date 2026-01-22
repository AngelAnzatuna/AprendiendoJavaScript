import Citas from "../js/classes/Citas";

describe('Probar la clase de Citas', () => {

    const citas = new Citas();

    test('Agregar una nueva cita', () => {
        const citaObj = {
            mascota: 'Hulk',
            propietario: 'Angel',
            telefono: '1234567890',
            fecha: '10-12-2026',
            hora: '10:30',
            sintomas: 'Solo duerme',

        };

        citaObj.id = Date.now();

        citas.agregarCita(citaObj);

        // Prueba
        expect(citas).toMatchSnapshot()
    });
});