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

const {precio, info:{modelo}, info:{fabricacion : {pais}}} = producto;

console.log(precio)
console.log(modelo)
console.log(pais)