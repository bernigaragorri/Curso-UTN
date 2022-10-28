const edad = parseInt(prompt('Ingrese su edad', ''))

// if(edad>=18){
//     alert('Puede conducir')  ----->este hice yo
// }else{
//     alert('No puede conducir')
// }


// if(Number.isNaN(edad)){
//     document.write('Debes ingresar un numero')
// }else if (edad >= 18){
//     document.write('Podes conducir')
// }else{
//     document.write('No podes conducir')
// }


function conducir() {
    if(Number.isNaN(edad)){
            document.write('La edad ingresada no es válida') 
        }else if (edad >= 18) {
            document.write(`Hola ${nombre}, tienes edad suficiente para conducir.`)
        } else {
            document.write(`Hola ${nombre}, no tienes edad suficiente para conducir.`)
        }
    }
    
    conducir();
    