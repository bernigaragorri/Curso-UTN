function todosLosParrafos(){
    const allparrafos = document.getElementsByTagName('p'); //quarysSelectorAll()   
    // console.log(allparrafos)

    const num = allparrafos.length;

    alert(`Hay ${num} elementos <p> dentro de este documento.`); // alert('la cantidad de los p es ' + allparrafos.length);
}


function parrafosCaja1(){
    const caja1 = document.getElementById('caja1');

    const caja1Parrafos = caja1.getElementsByTagName('p');
    
    const num = caja1Parrafos.length;

    alert(`Hay ${num} elementos <p> dentro de este documento.`);

}


function parrafosCaja2(){
    const caja2Parrafos = document.querySelectorAll('#caja2 p')
    // console.log(caja2Parrafos)

    const num = caja2Parrafos.length;

    alert(`Hay ${num} elementos <p> dentro de este documento.`);
}

