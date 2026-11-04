// crear un nuevo elemento y mostrarlo (2 appendChild && insertBefore)

// Crear nuevo enlace
const enlace = document.createElement('A');

// Agregar texto al enlace nuevo
enlace.textContent = 'Nuevo Enlace'

// Añadiendo atributos (2) » setAttribute 
enlace.href = 'https://www.instagram.com'
// enlace.setAttribute('')
enlace.target = '_blank';



//////
// Mostrar el enlace que creamos (2)

// appendChild » agrega al final
const navegacion = document.querySelector('.navegacion');
// console.log(navegacion)
navegacion.appendChild(enlace);

// Agregar con mas control » insertBefore (necesario pasar 2 parametros)
navegacion.insertBefore(enlace, navegacion.children[1])


/// 
const vender = document.querySelector('nav a')
vender.onclick = funcionConsulta;

function funcionConsulta(){
   let resultado = confirm('Esta seguro de vender') // true o false
}

if(resultado === true){

} else {
    
}