// else if 

let edadUser = 57;

if ( edadUser === 37) {
    console.log('La edad es 37')
} else {
    console.log('La edad no es 37')
}


// Operador Terneare
// sintaxis
/*
let variable = (Pregunta Logica) ? Lo que se realiza por el SI  : Lo que se realiza por el NO
*/

// evitar Redundancia o Repeticiones
// (edadUser === 37) ? console.log('La edad es 37 >con Terneareo') : console.log('La edad no es 37 > Terneareo')
console.log( (edadUser === 37) ? 'La edad es 37 >con Terneareo' : 'La edad no es 37 > Terneareo')

let mensaje = (edadUser === 37) ? 'La edad es 37 >con Terneareo' : 'La edad no es 37 > Terneareo'
console.log(mensaje)