// Objetos dentro de otros Objetos
const producto = { 
    nombre: 'Tv Curva',
    precio: 6000,
    disp: false,
    info : {
        modelo : 'LG',
        medidas : {
            peso : '20 Kg',
            pulgadas : 50
        },
        fabricacion : {
            pais: 'China'
        }
    }
}
console.log(producto)

// Acceder a los valores 
console.log(producto);
console.log(producto.info.modelo)

console.log(producto.info.fabricacion.pais)
console.log(producto.info.modelo)
