// eventos con el scroll del mouse

// window es la ventana global

window.addEventListener('scroll', () => {
    // console.log('scrolling')
})

// 
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY
    //console.log(scrollY)
})


window.addEventListener('scroll', ()=>{
    const premium = document.querySelector('.premium');
    const ubicacion = premium.getBoundingClientRect();

    //console.log(ubicacion)
    if(ubicacion.top < 900){
        console.log('El elemento ya se puede ver')
    } else {
        console.log('falta mas scroll')
    }

})