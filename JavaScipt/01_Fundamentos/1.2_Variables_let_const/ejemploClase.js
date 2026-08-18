// La memoria y cajas de almacenamiento 
/*

LECCIÓN 1.2: VARIABLES (LET Y CONST)

OBJETIVO DE LA CLASE: 
Comprender qué es una variable (memoria) y la diferencia fundamental entre 'let' y 'const'.

EXPLICACIÓN TEÓRICA:
- ¿Qué es una variable? 
  
- En JavaScript moderno usamos dos palabras para crear cajas:
  1. 'let': Es una caja normal. Puedes abrirla después y cambiar lo que tiene adentro.
  2. 'const': Es una caja con candado (Constante). Una vez que guardas algo, JAMÁS puedes cambiarlo.
*/

// 1. CREANDO VARIABLES CON 'let' (Las que pueden cambiar)
let nombre = 'Juan';
let edad = 45;

edad = 46;

console.log(nombre, edad)


// 2. CREANDO CONSTANTES CON 'const' (Las que NO pueden cambiar)
const fechaNacimiento = '15/06/2000';
const numeroPI = 3.1416;

console.log(`Fecha de nacimiento es: ${fechaNacimiento}`)

// 3. ERROR LÓGICO:

fechaNacimiento = '15/06/2001';
console.log(`Fecha de nacimiento es: ${fechaNacimiento}`)

// fechaNacimiento = "20/10/2005"; 

