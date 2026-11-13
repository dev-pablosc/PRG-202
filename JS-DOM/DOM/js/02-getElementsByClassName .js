// Seleccionar elementor por su clase
// devuelve HTMl collection [arrayLike]

const header = document.getElementsByClassName('header');
console.log(header)

// Si las clases se repiten
const constenedores = document.getElementsByClassName('contenedor')
console.log(constenedores)

// si no existe la clase » devuelve un array vacio
const noExiste = document.getElementsByClassName('noExiste')
console.log(noExiste)


