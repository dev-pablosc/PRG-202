// foreach > metodo()

// foreach en Array
const pendientes = ['Tarea', 'Compras', 'BañarMascota'];

pendientes.forEach( (v, index)=>{
    console.log(`Indice: ${index}: ${v}`)
})

// ej2
// ForEach en array de objetos
const carrito = [
    { nombre : 'Tablet', precio: 700},
    { nombre: 'Tv', precio: 4000},
    { nombre : 'Celular', precio: 5000}
]

carrito.forEach( (e) => {
    console.log(`${e.nombre} el precio es: ${e.precio}`)
})