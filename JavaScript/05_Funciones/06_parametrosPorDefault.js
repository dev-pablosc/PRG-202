// parametros por default

function saludar(nombre='', apellido='Sin apellido'){
    console.log(`Hola ${nombre}, ${apellido}`)
}

saludar('Pablo')

// ejemplo 2

function sumar(a=0, b=0){ // a y b son parametros
    return (a+b)
}

console.log(sumar(2))