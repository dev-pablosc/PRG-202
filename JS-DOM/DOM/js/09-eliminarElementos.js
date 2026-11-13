// eliminar elementos (2) - .remome() & removeChild (se pasa referencia del padre)

const primerEnlace = document.querySelector('nav a');
//console.log(primerEnlace)

// eliminar elementos por si mismos
primerEnlace.remove();
//
const registro  = document.querySelector('a:nth-child(2)');
//registro.remove()

// eliminar desde el padre
const main = document.querySelector('main');
main.removeChild(main.children[2])
main.removeChild(main.children[0])