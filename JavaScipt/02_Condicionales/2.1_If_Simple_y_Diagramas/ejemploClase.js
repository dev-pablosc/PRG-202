// Traducir lógica visual de diagramas de flujo a sintaxis If 
/* LECCIÓN 2.1: CONDICIONAL 'IF' Y DIAGRAMAS DE FLUJO (GUÍA DEL PROFESOR)


OBJETIVO: 
Conectar la lógica visual de los diagramas de flujo (el rombo) con la sintaxis de JavaScript.

EXPLICACIÓN TEÓRICA Y ANALOGÍA (Para la pizarra):
- Dibujar en la pizarra un rombo de decisión lógico con una pregunta adentro (Ej: ¿edad >= 18?).
- Explicar: "En los diagramas de flujo, usamos un rombo para evaluar una condición. De ese rombo sale una flecha que dice 'Sí' (True). En JavaScript, ese rombo se llama 'if' (que en inglés significa 'si' condicional, como 'si pasa esto...')."

SINTAXIS:
if ( pregunta lógica ) {
    // Lo que pasa si la respuesta es SÍ (true)
}

- Los paréntesis () son el rombo de tu diagrama. Ahí va la condición.
- Las llaves {} son el camino del "Sí". Todo el código que esté dentro de las llaves SOLO se ejecutará si la condición fue verdadera. Si es falsa, la computadora ignora las llaves y sigue de largo.
*/

let edadUsuario = 20;

// Rombo de decisión: ¿Es mayor o igual a 18?
if (edadUsuario >= 18) {
    // Camino del SÍ
    console.log("Acceso concedido. Bienvenido al sistema.");
}

// Este código está AFUERA de las llaves, se ejecuta siempre, sin importar el rombo.
console.log("Fin del programa.");


// OTRO EJEMPLO (Para mostrar qué pasa cuando es False)
let puntos = 50;

console.log("Evaluando puntaje...");

// ¿Los puntos son mayores a 100? Falso.
if (puntos > 100) {
    // La computadora ignorará este bloque por completo. No imprimirá esto:
    console.log("¡Ganaste una vida extra!"); 
}