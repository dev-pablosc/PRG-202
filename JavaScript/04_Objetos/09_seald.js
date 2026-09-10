// Metodos de Objetos - Seald (no permite agregar, eliminar, SI actualizar)

// 1. Habilitar 'use strict
//'use strict';

const producto = { 
    nombre: 'Tv Curva',
    precio: 6000,
    disp: false
}

// Prevenir que en un obj se agregue, modifique, elimine
//Object.seal(producto);
producto.precio = 5000;


/* esto es un error*/

// producto.marca = 'LG'



// delete producto.nombre


console.log(producto)


console.log(Object.isSealed(producto))