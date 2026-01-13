// Implicit Binding

const usuario = {
    nombre: 'Angel',
    edad: 32,
    informarcion() {
        console.log(`Mi Nombre es ${this.nombre} y mi edad es ${this.edad}`);
    },
    mascota: {
        nombre: 'Hulk',
        edad: 3,
        informarcion() {
            console.log(`Mi Nombre es ${this.nombre} y mi edad es ${this.edad}`);
        }
    }
    
}

usuario.informarcion();
usuario.mascota.informarcion();