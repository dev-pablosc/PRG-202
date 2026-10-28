// modificar texto (3 formas)

const titulo = document.querySelector('h1');

//1 si la visibilidad es hidden no lo encuentra
//console.log(titulo.innerText);
titulo.innerText = 'Texto Nuevo'

//2 si encuentra con la visibilidad hidden
//console.log(titulo.textContent); // no es posible agregar etiquetas solo contenido
titulo.textContent = 'Texto Nuevo con textContent'

//3 trae todo el contenido, hasta el html
//console.log(titulo.innerHTML); // aqui se puede agregar etiquetas en medio 
titulo.innerHTML = 'Texto Nuevo de <b>Desarrolo Web</b> <i>2026</i>'


// MODIFICAR ATRIBUTOS

// Modificar una img
const nuevaImg = document.querySelector('.contenedor-cards .card:nth-child(2) img')
//console.log(nuevaImg)

nuevaImg.src = './img/hacer4.jpg'
nuevaImg.alt = 'foto de ciclista'

// modificar <a>
const enlace = document.querySelector('nav a:nth-child(3)')
enlace.href = 'https://www.facebook.com'