// for of

// array
const pendientes = ['Tarea', 'Compras', 'BañarMascota'];
for(let v of pendientes ){
    console.log(v);
}

// array de Obj
const carrito = [
    { nombre : 'Tablet', precio: 700},
    { nombre: 'Tv', precio: 4000},
    { nombre : 'Celular', precio: 5000}
]

for(let producto of carrito){
    console.log(`${producto.nombre} Precio es ${producto.precio}`)
}