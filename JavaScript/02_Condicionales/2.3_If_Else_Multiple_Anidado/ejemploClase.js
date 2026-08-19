// Sintaxis 

/*
if(){
    else if (){
    
    } else if (){
    
    } else {
        
    }
} else {
    
}
*/

// EJEMPLO 1 >> SEMAFORO
let colorSemaforo = 'rojo';

if(colorSemaforo === 'verde'){
    console.log('Puede avanzar');

} else if (colorSemaforo === 'amarillo'){
    console.log('Precaucion...')

} else if (colorSemaforo === 'rojo'){
    console.log('DETENTE')

} else {
    console.log('Ese color no existe')
}


// EJEMPLO 2 >> Cuidando el orden de las preguntas
// Categorias por edad

let edadPersona = 75;

if(edadPersona >= 70){
    console.log('Tercera Edad')
} else if (edadPersona >= 18){
    console.log('Mayor de Edad')
} else if (edadPersona >= 13) {
    console.log('Eres un adolescente')
} else {
    console.log('Eres un niño')
}

// Error LOGICO

let edad= 75

/*if(edad >= 18){
    console.log('Mayor de edad')
    if (edad >= 13){
    console.log('adolescente')
} 
} else if (edad >= 70) {
    console.log('Tercera Edad')
} else {
    console.log('Eres un niño')
}
    */


// esto esta mal

if(edad >= 18){
    console.log('Mayor de edad')
} else if (edad >= 13){
    console.log('adolescente')
} else if (edad >= 70) {
    console.log('Tercera Edad')
} else {
    console.log('Eres un niño')
}

// FIZZ BUZZ
