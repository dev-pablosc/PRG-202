// modificar elementos (3 formas)

const titulo = document.querySelector('h1')

// MODIFICAR TEXTO
// 1 Si la visibilidad es hidden no lo encuentra
titulo.innerText = 'Texto creado con InnerText'

// 2 Si la visibilidad es hidden SI lo encuentra
titulo.textContent = 'Titulo creado con textContent'

// 3 Puede crear hasta etiquetas html
titulo.innerHTML = 'Titulo <i>creado</i> con <b>innerHTML</b>'


// Modificar ATRIBUTOS
// Modificar una img
const imagenNueva = document.querySelector('.contenedor-cards .card:nth-child(2) img')
//console.log(imagenNueva)
imagenNueva.src = './img/hacer4.jpg'
imagenNueva.alt = 'Hombre con una bicicleta de noche'