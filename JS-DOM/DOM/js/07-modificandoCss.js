// modificando en css <style>

const titulo = document.querySelector('h1');
titulo.style.color = '#00263a'

// si la propiedad tiene dos palabras en css - background-color || justify-content 
// se usa camelCase en js >> backgroundColor || justifyContent

titulo.style.textTransform = 'uppercase'



// Agregar o quitar CLASES
const card = document.querySelector('.contenedor-cards .card:nth-child(3) .info');


// Listando las clases
console.log(card.classList)

// Agregar Clases
card.classList.add('nuevaClase')

// Para eliminar
card.classList.remove('info')