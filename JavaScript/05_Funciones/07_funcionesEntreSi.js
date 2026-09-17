// Como se comunican las funciones entre si

iniciarApp();

function iniciarApp(){
    console.log('Iniciando ...');
    segundaFuncion();
}

// 2da funcion
function segundaFuncion(){
    console.log('Hola desde la 2da funcion');

    const user2 = prompt('Introduce tu usuario');
    console.log(user2);
    
    // 3era funcion
    userAuth(user2);
}

// 3era funcion
function userAuth(user){
    console.log('Autenticando . . .');
    console.log(`Usuario Autenticado: ${user}`)
}