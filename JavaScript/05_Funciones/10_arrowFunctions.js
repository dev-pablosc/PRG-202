// funciones anonimas / tipo flecha
/*
function aprendiendo0(){
    console.log('Imprimo algo')
}*/


const aprendiendo = function(){
    console.log('Aprendiendo JS')
}

const aprendiendo2 = () => {
    console.log('Aprendiendo PG')
}


// Si la respuesta es una sola linea las llaves son opcionales, se da por implicito un return
const aprendiendo3 = () => 'Aprendiendo NodeJS'

aprendiendo();
aprendiendo2();
let resultado = aprendiendo3();
console.log(resultado)