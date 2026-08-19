// Sintaxis 

/*
if (Pregunta Logica){
    //
} else {
    //     
}
*/

let password = '';
let correctPassword = 'abc1234'

password = prompt('Introduce tu contraseña')

console.log('Ingresando al sistema ...')
console.log(password)

if ( password === correctPassword) {
    // camino verdadero
    console.log('Autenticacion Correcta')
} else {
    console.log('Contraseña Equivocada')
}

