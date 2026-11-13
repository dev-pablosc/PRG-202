const boton = document.querySelector('.btn-flotante')
const footer = document.querySelector('footer')

// agregar eventos
boton.addEventListener('click', revelarFooter);

function revelarFooter(){
    if(footer.classList.contains('activo')){
        footer.classList.remove('activo')
        boton.textContent = 'Idioma y Moneda'
        boton.classList.remove('activo')
    } else {
        footer.classList.add('activo')
        boton.textContent = '» CERRAR'
        boton.classList.add('activo')
    }
}