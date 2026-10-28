// navegando a travez de los diferentes elementos de DOM 

// traversing de PADRE a hijo » children no ChilNodes

console.log(document.querySelector('.navegacion'))
console.log(document.querySelector('.navegacion').childNodes) 

console.log(document.querySelector('.navegacion').children)
console.log(document.querySelector('.navegacion').children[2].textContent = 'Modificado')

// otra opcion para navegar entre elementos
console.log('>>>>>>>>>>>>>>>>>>>>>>>>>')
console.log(document.querySelector('.navegacion').firstElementChild)
console.log(document.querySelector('.navegacion').lastElementChild)


// modificar texto de card
const card = document.querySelector('.card:nth-child(2)').children[1].children[0]
card.textContent = 'Titulo Generado desde JS'

// modificar una img
console.log(document.querySelector('.card:nth-child(2)').children[0].src = './img/hacer4.jpg')

// Conocer los ATRIBUTOS
console.log(document.querySelector('.card:nth-child(2)').children[0].attributes);
console.log(document.querySelector('form').attributes);



// traversing de HIJO a padre
const titulo2 = document.querySelector('.hacer:nth-child(2) .info h3');
console.log(titulo2)

console.log(titulo2.parentElement.parentElement.parentElement);


// traversing entre hermanos » nextElementSibling
console.log(document.querySelector('.card').nextElementSibling.nextElementSibling)
// previousElementSibling