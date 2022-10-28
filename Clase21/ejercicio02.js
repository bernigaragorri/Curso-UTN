const distancia = parseInt(prompt('Ingrese la distancia en metros', ''))

function transporte(){
    if(Number.isNaN(distancia)){
        document.write('el valor ingresado no es valido') 
    }else if (distancia  <= 1000) {
        document.write('El medio apropiado es a pie')
    }else if (distancia > 1000 && distancia <= 10000) {
        document.write('El medio apropiado es bicicleta')
    } else if (distancia > 10000 && distancia <= 30000 ){
        document.write('El medio apropiado es colectivo')
    } else if (distancia > 30000 && distancia <= 100000 ){
        document.write('El medio apropiado es auto')
    } else if (distancia > 100000){
        document.write('El medio apropiado es avion')
    }
}

transporte();


//otra solucion// 


// const metros = 25000;
// let transportes = '';

// if(metros > 0 && metros <=1000){
//     transporte = 'pie'
// } else if (metros > 1000 && metros >= 10000){
//     transportes = 'bicicleta'
// } else if (metros > 10000 && metros <= 30000){
//     transporte = 'colectivo'
// } else if (metros > 30000 && metros <= 100000){
//     transporte = 'auto'
// } else if (metros > 1000000){
//     transporte = 'avion'
// }

// console.log(`Para ${metros} metros recomendamos ir ${transportes}`)