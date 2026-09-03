// Destructuring (2)
const producto = { 
    nombre: 'Tv Curva',
    precio: 6000,
    disp: false
}
console.log(producto);

// forma Antigua
nombreExtraido = producto.nombre;
console.log(producto);
console.log(nombreExtraido);

// nueva -> ademas de extraer el valor se CREA la variable
const {nombre} = producto;
console.log(nombre);
/*
const {marca} = producto;
console.log(marca)*/

const {precio, disp} = producto; // extraer simultaneamente
console.log(precio+ ' ' + disp)

