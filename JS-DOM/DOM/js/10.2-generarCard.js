// La mejor práctica es construir de adentro hacia afuera
// (es decir: de los hijos → hacia el padre)


const parrafo1 = document.createElement('P');
parrafo1.classList.add('categoria', 'concierto')
parrafo1.textContent = 'Concierto'

const parrafo2 = document.createElement('P');
parrafo2.classList.add('titulo')
parrafo2.textContent = 'Rock'

const parrafo3 = document.createElement('P');
parrafo3.classList.add('precio')
parrafo3.innerHTML = '<b>500$</b> por persona'

const div2 = document.createElement('DIV');
div2.classList.add('info')

// agregar al div2
div2.appendChild(parrafo1)
div2.appendChild(parrafo2)
div2.appendChild(parrafo3)


// crear img
const nuevaImg = document.createElement('IMG');
nuevaImg.src = 'img/hacer1.jpg'
nuevaImg.alt = 'Mesa de un DJ'

// crear nuevo Div
const nuevaCard = document.createElement('DIV')
nuevaCard.classList.add('card')

// agregacion final
nuevaCard.appendChild(nuevaImg)
nuevaCard.appendChild(div2)

console.log(nuevaCard)

// insertar en el HTML
const hacer = document.querySelector('main section:nth-child(5) .contenedor-cards');

hacer.insertBefore(nuevaCard, hacer.children[2])
