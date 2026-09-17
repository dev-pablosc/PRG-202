// pasar parametors a Arrow Functions

const aprendiendo = function(tecno){
    console.log(`'Aprendiendo ${tecno}`)
}
aprendiendo('Java')

const aprendiendo2 = (tecno) => {
    console.log(`'Aprendiendo ${tecno}`)
}
aprendiendo2('JS')


const aprendiendo3 = (tecno) => `'Aprendiendo ${tecno}`
console.log(aprendiendo3('Python'))

const aprendiendo4 = tecno => `'Aprendiendo ${tecno}`
console.log(aprendiendo4('SQL'))