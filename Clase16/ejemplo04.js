const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', function(e){
    e.preventDefault();
    
    if(e.currentTarget.nombre.value == ''){
        alert('El campo nombre es obligatorio');
        return;
    }
    if(e.currentTarget.mensaje.value == ''){
        alert('El campo mensaje es obligatorio');
        return;
    }
    
    alert(`Gracias ${e.currentTarget.nombre.value} por enviarnos el siguiente ${e.currentTarget.mensaje.value}.` );

    } )