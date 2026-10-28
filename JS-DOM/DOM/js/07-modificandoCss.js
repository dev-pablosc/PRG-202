// modificando en css <style>

// Cambiando el titulo
const titulo = document.querySelector('h1');
titulo.style.color = '#1a1c1e'

// Si la propiedad tiene 2 palabras en css » background-color , justify-content
// Se debe usar camelCase en Js            » backgroundColor,   justiyContent

titulo.style.textTransform = 'uppercase'

// Agregar o quitar CLASES

const card = document.querySelector('.contenedor-cards .card:nth-child(4) .info')
console.log(card.classList)

// eliminar clases
card.classList.remove('info')

// agregar clases
card.classList.add('info', 'claseNueva')