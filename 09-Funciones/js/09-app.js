const reproductor = {
// A los elementos dentro del objeto se les conoce como propiedades    
// Pero cuando el elemento es una función se le conoce como método 
// de propiedad    
    reproducir: function(id) {
        console.log(`Reproduciendo canción con el id ${id}`);
    },
    pausar: function() {
        console.log('pausando...');
    },
    siguiente: function(id) {
        console.log(`Siguiente canción con el id ${id}`);   
    },
    creandoPlaylist: function(nombre) {
        console.log(`Creando playlist de ${nombre}`)
    },
    reproduciendoPlaylist: function(nombre) {
        console.log(`Reproduciendo playlist ${nombre}`)
    }
}

// Llamando a la función dentro del objeto
reproductor.reproducir(30);
reproductor.reproducir(2);
reproductor.pausar();
reproductor.siguiente(25);
reproductor.creandoPlaylist('Reggae');
reproductor.reproduciendoPlaylist('Reggae');