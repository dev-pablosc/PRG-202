// Metodos para ELIMINAR 
const semana = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado'];
console.log(semana);

// eliminar del FINAL -> POP()
semana.pop();
console.log(semana);

// eliminar el INICIO -> SHIFT() 
semana.shift();
console.log(semana);


// eliminar posicion especifica -> splice
semana.splice(1, 2);
console.log(semana);