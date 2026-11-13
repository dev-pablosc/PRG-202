// crear un nuevo elemento y mostrarlo (2 » appendChild && insertBefore)

// Crear nuevo enlace
const nuevoEnlace = document.createElement('A');
//console.log(nuevoEnlace)

// Agregar texto
nuevoEnlace.textContent = 'NuevoEnlace'

// Añadir atributos
nuevoEnlace.href = 'https://www.facebook.com';
nuevoEnlace.target = '_blank';

console.log(nuevoEnlace)



//// Mostrar el elemento
const navegacion = document.querySelector('nav')

// appenChild agrega al final
navegacion.appendChild(nuevoEnlace)

// Colocar con mas control » insertBefore
navegacion.insertBefore(nuevoEnlace, navegacion.children[2])
