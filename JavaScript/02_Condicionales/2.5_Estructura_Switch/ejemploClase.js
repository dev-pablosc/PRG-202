// switch
// sintaxis
/*

switch (CasoComparacion){
    case 0:
        // lo que realiza
        break
    case 1:
        // lo que realiza
        break
    case 2:
        // lo que realiza
        break

    ...
    default:
        // lo que realiza
}

*/



let dia = 3;
let nombreDia

switch (dia) {
    case 0:
        nombreDia = "Lunes"
        break
    case 1:
        nombreDia = "Martes"
        break
    case 2:
        nombreDia = "Miércoles"
        break
    case 3:
        nombreDia = "Jueves"
        break
    case 4:
        nombreDia = "Viernes"
        break
    case 5:
        nombreDia = "Sábado"
        break
    case 6:
        nombreDia = "Domingo"
        break
    default:
        nombreDia = "Número de día incorrecto"
}

console.log(nombreDia)


// ejemplo 2

let dia2 = 'miercoles'

switch (dia2) {
    case 'Lunes':
        console.log( "Dia Laboral")
        break
    case 'Martes':
        console.log( "Dia Laboral")
        break
    case 'Miercoles':
        console.log( "Dia Laboral")
        break

        break
    default:
        console.log( "Dia no existente")
}