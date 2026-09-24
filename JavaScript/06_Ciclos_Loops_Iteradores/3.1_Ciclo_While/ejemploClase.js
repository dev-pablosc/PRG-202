// Iteracion >> repetir un proceso

// Reglas Importantes
/*
1. Inicializacion - Necesita una VARIABLE de control
2. Condicion - Rombo en DF
3. Actualizacion - El incremento o cambio  
*/

// Ejemplo WHILE

console.log('Iniciando Conteo . . .')

// 1 Inicializacion
let contador = 1;

// 2 Condicion (El ciclo se repetira MIENTRAS esto sea verdad/true)
while(contador <= 5) {
    // lo que esta aqui se repetira
    console.log('El contador va en:' + contador)

// 3 Actualizacion 
// ++, +=, contandor = contador + 1
    contador++ 
}

console.log('Fin del loop')