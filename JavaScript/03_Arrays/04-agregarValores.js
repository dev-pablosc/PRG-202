// agregar nuevos valores (3)
const semana = ['lunes', 'martes', 'miercoles', 'viernes'];
console.log(semana.length)
console.log(semana)

// >1 agregar por indice, tambien se actualiza
// pero es necesario saber la longituda (length)
semana[1] = 'MARTESS'
semana[semana.length] = 'Sabado'
console.log(semana)

// agregar al FINAL -> push
semana.push('Domingo')
console.log(semana)

// agregar al INICIO -> unshift
semana.unshift('DiasSemana')
console.table(semana)