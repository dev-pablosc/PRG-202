// Seleccionar elementor por su clase

const header = document.getElementsByClassName('header');
console.log(header)

const hero = document.getElementsByClassName('hero')
console.log(hero)

// Si las clases se repiten
// devuelve multiples elemensto (Array-like)
const contenedores = document.getElementsByClassName('contenedor')
console.log(contenedores)

// Si no existe la clase devuelve un array vacio
const noExiste = document.getElementsByClassName('noExiste');
console.log(noExiste)