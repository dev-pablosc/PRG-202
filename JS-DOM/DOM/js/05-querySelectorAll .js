// retorna todos los elementos diferente a » querySelector
// devuelve NodeList » ArrayLike

const cards = document.querySelectorAll('.card');
console.log(cards)

// si no existe la clase Devuelve un array vacio
const cards2 = document.querySelectorAll('.cardNoExiste');
console.log(cards2)
