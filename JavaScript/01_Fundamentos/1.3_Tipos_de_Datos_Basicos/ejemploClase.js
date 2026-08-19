// Strings, Numbers, Booleans, Null, Undefined 
/*
LECCIÓN 1.3: TIPOS DE DATOS BÁSICOS 

OBJETIVO: 
Entender que las "cajas" (variables) pueden guardar diferentes tipos de "objetos" y que la computadora los trata diferente.

EXPLICACIÓN TEÓRICA:
En JS existen tipos de datos primitivos. Los 3 más usados son:
1. String (Cadenas de texto)
2. Number - Enteros , Decimales
3. Boolean (True - False)

Otros dos importantes para cuando algo "no existe":
Undefined - Caja esta vacia, pero valores despues
Null - Caja esta vacia y queremos que siga vacia

HERRAMIENTA CLAVE: 'typeof'. Nos permite preguntarle a JS "¿Qué tipo de dato tiene esta variable?".
*/

let nombre = 'Carlos'; // String
let edad = 20; // Number
let esEstudiante = true // Boolean (no tienen comillas)

let nota; // undefined
let saldo = null; // null declara vacio


// Usando typeof para investigar
console.log(`Tipo de nombre es: ${typeof nombre}`)
console.log(`Tipo de edad es: ${typeof edad}`)
console.log(`Tipo de esEstudiante es: ${typeof esEstudiante}`)
console.log(`Tipo de nota es: ${typeof nota}`)
console.log(`Tipo de saldo es: ${typeof saldo}`)