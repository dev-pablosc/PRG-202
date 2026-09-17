// funciones que retornan algo nos permite trabajar con la devolucion

function sumar(a = 0, b = 0){
    return a + b
    // console.log(a+b)
}

const resultado = sumar(2, 3);
console.log(resultado)

// ejemplo 
console.log('Ejemplo Carrito de Compras >>>>>>>>>>>>>>>>>>>>>>>>>>>>>')

let total = 0;

function agregarCarrito(precio){
    return total += precio;
    // total = total + precio
}

function calcularImpuesto(total){
    return total * 1.15;
}

total = agregarCarrito(300);
total = agregarCarrito(100);
total = agregarCarrito(600);
console.log(total);

const totalPagar = calcularImpuesto(total);
console.log(`El total es de ${total}, precio final + impuestos : ${totalPagar}`)

