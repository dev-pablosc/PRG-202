// Eventos que ocurren con el mouse

const nav = document.querySelector('.navegacion');


// Registrando Eventos

// CLICK (2)

// click
nav.addEventListener('click', ()=>{
    console.log('diste click')
})

// DobleCLICK
nav.addEventListener('dblclick', ()=>{
    console.log('dobleCLICK. . .')
})

/* mouse (4)*/
// mouseenter
nav.addEventListener('mouseenter', ()=>{
    console.log('entrando al area de nav')

    nav.style.background = 'black'
})

// mouseout
nav.addEventListener('mouseout', ()=>{
    console.log('⚠️ Saliendo')

})

// mousedown => parecido al click pero se dispara con un click(sin soltar)
nav.addEventListener('mousedown', ()=>{
    console.log('mouseDown')
})
// mouseup => cuando suelto el click
nav.addEventListener('mouseup', ()=>{
    console.log('Soltanto el click')

})