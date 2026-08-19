// AND, OR, NOT, mayor que, menor que, igualdades 
/*
LECCIÓN 1.5: COMPARACIÓN Y LÓGICA 

OBJETIVO: 
Aprender cómo la computadora toma decisiones evaluando condiciones. Todo el resultado de estas operaciones siempre será un BOOLEANO (true o false).
Esta es la base exacta que se usa dentro de los rombos de decisión en los diagramas de flujo.

EXPLICACIÓN TEÓRICA:
1. Comparación:
    > , < , >= , <=
    == Igual
    === Estrictamente Igual

2. Operadores Lógicos (Juntar varias preguntas):
    - AND (&&), Todas las condiciones tienen que ser verdad
    (mayor de edad && tienen que tener licencia)
    
    -OR (||): , Al menos una tiene que ser verdad
    (Estar en la lista de invtados(false) || Tipo de invitado VIP(true))

    -NOT (!) Invertir resultado 
    !true => false
    !false => true
*/

let edad = 20;
let tieneLicencia = true;

// COMPARACIONES BÁSICAS
console.log('Es mayor de edad?', edad >= 18);
console.log('Tiene exactamente 15?', edad == 15)

console.log('Tipos de comparaciones')
console.log(20 == 20);
console.log(20 == '20'); // == compara el valor, ignora el tipo de dato
console.log(20 === '20'); // === compara el valor, compara el tipo de dato


// OPERADOR AND (&&) - Ambas deben cumplirse
let puedeConducir = (edad >= 18) && tieneLicencia === true;
console.log('Puede ?', puedeConducir)

// OPERADOR OR (||) - Una sola debe cumplirse
let dia = 'Sabado';
let esFinDeSemana = (dia === 'Sabado') || (dia === 'Domingo')

console.log('Es finde?', esFinDeSemana)

/*
dia = 'lunes';
esFinDeSemana = (dia === 'Sabado') || (dia === 'Domingo')

console.log('Es finde?', esFinDeSemana) */

// OPERADOR NOT (!)
let aprobado = true;

console.log(aprobado);
console.log(!aprobado);
console.log(!false);


/*

*/