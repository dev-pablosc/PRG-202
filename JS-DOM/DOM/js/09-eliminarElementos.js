// eliminar elementos (2) - .remome() & removeChild (se pasa referencia del padre)

const primerEnlace = document.querySelector('nav a')
// console.log(primerEnlace)

// Eliminar elementos por si mismos
primerEnlace.remove()
// Referencia desde el padre (» El padre se encarga de eliminar al hijo)
const registro = document.querySelector('.navegacion').children[1];
registro.remove()


// Eliminar desde el padre
const main = document.querySelector('main')

main.removeChild(main.children[0])