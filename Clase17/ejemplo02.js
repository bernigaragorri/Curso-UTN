const mensaje = document.getElementById('mensaje');

function ocultarMensaje(){
    const mensaje = document.getElementById('mensaje');
    mensaje.style.display = 'none';
}

function CambiarVisibilidad(){
    
    if(mensaje.style.visibility == 0){
        mensaje.style.visibility = 'hidden'
    }else{
        mensaje.style.visibility = ''
    }
}

setTimeout(ocultarMensaje, 5000) // 5 segundos
setInterval(CambiarVisibilidad,5000); // 500 medio segundo / hacelo cada tanto