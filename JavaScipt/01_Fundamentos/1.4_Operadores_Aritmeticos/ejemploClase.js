// Suma, resta, multiplicacion, division, modulo 
/* LECCIÓN 1.4: OPERADORES ARITMÉTICOS Y CONCATENACIÓN 

OBJETIVO: 
Realizar matemáticas básicas y aprender usos variados del operador '+'.

EXPLICACIÓN TEÓRICA:
- Matemáticas básicas: Suma (+), Resta (-), Multiplicación (*), División (/).
- El Módulo (%): Devuelve el RESTO de una división. 

- ¡LA TRAMPA DEL MÁS (+)!
Si usamos + con numeros los suma
Si usamos + con Strings los une (concatenacion)
*/

// 1. Matemáticas
let a = 10;
let b = 3;

console.log('Suma igual a: ', a + b) 
console.log('Resta igual a: ', a - b)
console.log('Multiplicacion igual a: ', a * b)
console.log('Division igual a: ', a / b)
console.log('Modulo igual a: ', a % b)


// 2. Concatenación de Textos
let saludo = "Hola";
let persona = "Ana";
// Sumar textos
console.log(saludo + ' ' + persona)

// 3. La Trampa (Número + Texto = Texto)
console.log( 5 + 5); // Da 10 (Suma Matematica)
console.log('5' + '5') // Da '55' 
console.log(5 + '5') // Da '55' Si hay un texto JS asume que quieres pegar todo