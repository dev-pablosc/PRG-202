// Agregar y Eliminar propiedades de un Obj
const producto = { 
    nombre: 'Tv Curva',
    precio: 6000,
    disp: false
}
console.log(producto)

// Agregar Valores - 1 Si no existe la llave se crea 2 Si existe la llave se actualiza
producto.marca = 'LG' //1
producto.nombre = 'Tv de 50"' //2
console.log(producto)

producto['precio'] = 5000;
console.log(producto)

// Eliminar
// delete <nombreObj.'llave/key'>
delete producto.disp;
console.log(producto)