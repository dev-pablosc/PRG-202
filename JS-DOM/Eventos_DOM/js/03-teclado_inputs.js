// eventos que suceden en el teclado

const busqueda = document.querySelector('.busqueda')

// agregando eventos

//(2)
// keydown (mantengo precionada la tecla)
/*
busqueda.addEventListener('keydown', ()=>{
    console.log('keydown')
})

// keyup (suelto la tecla)
busqueda.addEventListener('keyup', ()=>{
    console.log('Soltaste la tecla')
})
*/

// copiar, pegar, cortar (copy, paste, cut)
busqueda.addEventListener('copy', ()=>{
    alert('Copiado al portapapeles')
})

busqueda.addEventListener('paste', ()=>{
    let respuesta = confirm('Estas seguro de pegar ?')

})

busqueda.addEventListener('cut', ()=>{
    let respuesta = confirm('Estas seguro de pegar ?')

})


// Saber que esta escribiendo el user
busqueda.addEventListener('input', (evt)=>{
    //console.log(evt)
    //console.log(evt.type)
    //console.log(evt.target)
    console.log(evt.target.value)
})

// formulario vacio ?
busqueda.addEventListener('input', (e)=>{
    if(e.target.value === ''){
        alert('este campo es obligatorio')
    }
})