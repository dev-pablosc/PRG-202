// navegando a travez de los diferentes elementos de DOM 

// Navegacion de padre a hijo  

console.log(document.querySelector('nav'))
console.log(document.querySelector('nav').childNodes) //❌

console.log(document.querySelector('nav').children) // ✅
console.log(document.querySelector('nav').children[2].textContent = 'Inicio')

// console.log(document.querySelector('nav a:nth-child(3)').textContent = 'InicioNuevo')

// Mas opciones para navegar
console.log(document.querySelector('nav').firstElementChild)
console.log(document.querySelector('nav').lastElementChild)


// Moficar el texto de una card
console.log(document.querySelector('.card:nth-child(2)').children[1].children[1].textContent = 'Nuevo TITULO')



// Navegacion de hijo a padre
const ejemplo = document.querySelector('.hacer:nth-child(2) .premium .info h3')
// console.log(ejemplo)

console.log(ejemplo.parentElement.parentElement.parentElement.parentElement)



// traversing a los hermanos >>> nextElementSibling
console.log(document.querySelector('.card').nextElementSibling.nextElementSibling)
// para ir al hermano anterior
// previosElementSibling


// Ver los atributos
console.log(document.querySelector('#formulario').attributes)