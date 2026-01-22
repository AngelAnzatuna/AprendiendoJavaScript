import Citas from "../js/classes/Citas";

describe('Probar la clase de Citas', () => {

    const citas = new Citas();
    const id = Date.now();

    test('Agregar una nueva cita', () => {
        const citaObj = {
            id,
            mascota: 'Hulk',
            propietario: 'Angel',
            telefono: '1234567890',
            fecha: '10-12-2026',
            hora: '10:30',
            sintomas: 'Solo duerme',
        };

        citas.agregarCita(citaObj);

        // Prueba
        expect(citas).toMatchSnapshot()
    });

    test('Actualizar cita', () => {
        const citaActualizada = {
            id,
            mascota: 'Nuevo Nombre',
            propietario: 'Angel',
            telefono: '1234567890',
            fecha: '10-12-2026',
            hora: '10:30',
            sintomas: 'Solo duerme',
        };

        citas.editarCita(citaActualizada);

        expect(citas).toMatchSnapshot();
    });

    test('Eliminar cita', () => {
        citas.eliminarCita(id);

        expect(citas).toMatchSnapshot();
    })
});