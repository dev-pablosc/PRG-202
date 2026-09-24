// sintaxis foor loop
/*
1. Inicializacion - Necesita una VARIABLE de control
2. Condicion - Rombo en DF
3. Actualizacion - El incremento o cambio  
*/

/*
for(Inicializacion, Condicion, Actualizacion){
    // realizamos si se cumple la condicion
}
*/

// iterar
const carrito = [
    { nombre : 'Tablet', precio: 700},
    {nombre: 'Tv', precio: 4000}
]

for(let i = 0;  i<carrito.length; i++){
    console.log(carrito[i])
}

for(let v of carrito){
    console.log(v)
}

/*
carrito.forEach(function(producto)){
    console.log(`el producto ${producto.nombre}, cuesta ${producto.precio}`)
}*/


// puede crear un nuevo arreglo y almacenarlo >> map
const nuevoArray = carrito.map

console.log(nuevoArray)
