// Event Bubbling

const cardDiv = document.querySelector('.card') 
const div2 = document.querySelector('.info') 
const titulo = document.querySelector('.titulo') 


cardDiv.addEventListener('click', (e)=>{
    e.stopPropagation();
    console.log('diste click')
})
div2.addEventListener('click', (e)=>{
    e.stopPropagation();
    console.log('click en info')
})
titulo.addEventListener('click', (e)=>{
    e.stopPropagation();
    console.log('click en titulo')
})