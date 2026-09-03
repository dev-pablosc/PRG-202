

// Destructuring
let miArray = [1, 2, 3];
console.log(miArray)
let [valor0 , ,  nuevoValor2, nuevoValor3] = miArray
console.log(valor0)
//console.log(nuevoValor1)
console.log(nuevoValor2)
console.log(nuevoValor3)

// Sixtaxis pero con valores predeterminados
let [nuevoValor4 = 0, nuevoValor5 = 0, nuevoValor6 = 0, nuevoValor7 = 0] = miArray
console.log(nuevoValor4)
console.log(nuevoValor5)
console.log(nuevoValor6)
console.log(nuevoValor7)


console.log('>>>>>>>>>>>>>>>>>>>>> Spreading')

// PROPAGACION (...)
// Agregar el operador Spread -> ...

// en JS existe una manera imperativa de trabajar sobre la variable ORIGINAL (cap 4, 5)

// Pero tambien una forma DECLARATIVA, no modifica la variable ORIGINAL

let miArray2 = ['Numeros', ...miArray, 4]
console.log(miArray2)