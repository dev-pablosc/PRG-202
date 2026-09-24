// Break & Continue

// detecta un numero o condicion y se inturrumpe
for(let i= 1; i<=10; i++){
    if(i === 5){
        break;
    }
    console.log(i)
}

// continue  detecta un numero o condicion y da un salto al siguiente 
for(let i= 1; i<=10; i++){
    if(i === 5){
        //console.log('cinco');
        continue;
    }
    console.log(i)
}

// identicar un producto que tiene descuento

const carrito = [
    { nombre : 'Tablet', precio: 700},
    { nombre: 'Tv', precio: 4000},
    { nombre: 'Laptop', precio: 5000, descuento: true},
    { nombre : 'Tablet', precio: 700},
    { nombre: 'Tv', precio: 4000},
    { nombre : 'Tablet', precio: 700},
    { nombre: 'Tv', precio: 4000}
]


for(let v of  carrito){
    if(v.descuento){
        console.log(`Este producto tiene descuento!!! ${v.nombre}`)
        break;
    }
    //console.log(v.nombre)
}