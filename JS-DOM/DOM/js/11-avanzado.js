console.log('testing')
const btn = document.querySelector('.btn-flotante');
const footer = document.querySelector('footer');

btn.addEventListener('click', mostrarFooter);


function mostrarFooter(){
    if(this.classList.contains('activo')){
        this.classList.remove('activo');
        footer.classList.remove('activo')
        this.textContent = 'Idioma y Moneda'
    } else{
        this.classList.add('activo');
        footer.classList.add('activo');
        this.textContent = '❌ Cerrar'
    }
}