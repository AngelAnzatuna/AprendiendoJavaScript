const reproductor = {
// 2. Se crea una propiedad nueva para el ejemplo de set y get
    cancion: '',
    reproducir: id => console.log(`Reproduciendo canción con el id ${id}`),
    pausar: () => console.log(`Pausando...`),
    borrar: id => console.log(`Borrando canción ${id}`),
    crearPlaylist: nombre => console.log(`Creando la playlist ${nombre}`),
    reproducirPlaylist: nombre => console.log(`Reproduciendo la playlist ${nombre}`),

// 1. Dentro  de los metodos de propiedad se usan el set y get
// set : sirve para agregar valores
// get : sirve para obtener de vuelta los valores

// 3. trabajamos con set
    set nuevaCancion(cancion) {
// usamos el this para que busque la propiedad cancion (la que esta 
// en el punto 2) dentro del objeto
// la cancion que esta despues del igual hace referencia al parámetro 
// de la función nuevaCancion        
        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`);
    },
    
    
// 4. trabajamos con get para obtener los valores    
    get obtenerCancion() {
        console.log(`${this.cancion}`)
    }
}

// 5. Forma de utilizar set y get
// accediendo al set, no se usa parentesis para definir el argumento, 
// se lo realiza como cuando agregas una nueva propiedad desde 
// afuera del objeto
reproductor.nuevaCancion = 'Malegria'; // Añadiendo Malegria
// como en el set ya esta agregado nuestro valor canción se lo 
// obtiene con la funcion de get sin el parentesis
reproductor.obtenerCancion; // Malegria 


reproductor.reproducir(20);
reproductor.pausar();
reproductor.borrar(10);
reproductor.crearPlaylist('Salsa');
reproductor.reproducirPlaylist('Reggae');