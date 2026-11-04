// La mejor práctica es construir de adentro hacia afuera
// (es decir: de los hijos → hacia el padre)


const parrafo = document.createElement('P');
parrafo.textContent = 'NuevoConcierto';
parrafo.classList.add('categoria', 'concierto');

const parrafo2 = document.createElement('P');
parrafo2.textContent = 'Musica EDM';
parrafo2.classList.add('titulo');

const parrafo3 = document.createElement('P');
parrafo3.innerHTML = '<b>$700</b> <i>por persona</i>';
parrafo3.classList.add('precio');

//div
const div2 = document.createElement('DIV');
div2.classList.add('info')
// agregando al div2
div2.appendChild(parrafo)
div2.appendChild(parrafo2)
div2.appendChild(parrafo3)

const nuevaImg = document.createElement('IMG');
nuevaImg.src = 'img/hacer1.jpg';
nuevaImg.alt = 'imagen de un concierto'


// div principal
const card = document.createElement('DIV');
card.classList.add('card');
// agregando al divPrincipal
card.appendChild(nuevaImg);
card.appendChild(div2);

console.log(card)

//
const hacer3 = document.querySelector('main section:nth-child(5) .contenedor-cards')
hacer3.insertBefore(card, hacer3.children[2])