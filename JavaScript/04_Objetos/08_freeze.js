// Metodos de Objetos - Freeze (no permite agregar, modificar, eliminar)

// 1. Habilitar 'use strict
'use strict';

const producto = { 
    nombre: 'Tv Curva',
    precio: 6000,
    disp: false
}

// Prevenir que en un obj se agregue, modifique, elimine
Object.freeze(producto);

/* esto es un error*/

//producto.marca = 'LG'

//producto.precio = 5000;

// delete producto.nombre


console.log(producto)


console.log(Object.isFrozen(producto))