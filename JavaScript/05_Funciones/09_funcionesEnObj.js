// Funciones Como Propiedades de Obj >> (metodos de propiedad)

const reproductor = {
    reproducir: function(id){
        console.log(`Reproduciendo cancion con id ${id}`)
    },
    pausar: function(){
        console.log('Pausando musica . . .')
    },
    playlist: function(num){
        console.log(`Creando Playlist # ${num}`)
    },
    reproducirPlaylist: function(id){
        console.log(`Reproducir playlist #${id}`)
    }
}

reproductor.borrar = function(){
    console.log('Borrando cancion')
}

reproductor.reproducir(30);
reproductor.reproducir(10);
reproductor.pausar();

reproductor.playlist(7);

reproductor.borrar();

reproductor.reproducirPlaylist(7)
