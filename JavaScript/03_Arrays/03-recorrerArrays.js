// recorrer un array (3)
const semana = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado'];
console.table(semana)

// Saber la longitud
console.log(semana.length)
console.log(typeof(semana))

// Recorrer el arreglo iterando con bucle tradi
for(let i =0; i<=4;i++ ){
    console.log(semana[i])
}

console.log('>>>>>>>>>>>>>>>>>>Usando metodo Length')
for(let k = 0; k<semana.length; k++){
    console.log(semana[k])
}

// recorrer con forEach
console.log('>>>>>>>>>>>>>>>>>>>>>>>> forEach')
semana.forEach( v => {
    console.log(v)
})

// recorrer con for of
console.log('>>>>>>>>>>>>>>>>>>>>>>>> for of')
for (e of semana){
    console.log(e)
}