import { Ejemplo1Props, Ejemplo2Props, Ejemplo3Props, Ejemplo4Props, Ejemplo5Props } from "../componentes/props/Props";

const nombre2 = 'Pablo';
const lista = ['manzana', 'banana', 'pera', 'frutilla'];
const mostrarValor = valor => {
    console.log(valor)
}

const Ejemplo1 = props => {
    return(
        <div>
            <h1>Ejemplo de Propiedades</h1> 
            {/* ejemplo de propiedad simple y la puedo reutilizar */}
            <Ejemplo1Props nombre='Berni'/>
            <Ejemplo1Props nombre={nombre2}/>
            <hr/>
            {/* ejemplo de pasar array de elementos */}
            <Ejemplo2Props elementos={lista}/>
            <hr/>
            {/* ejemplo de multiples variables y destructuring */}
            <Ejemplo3Props titulo= "La Noticia" subtitulo= "Soy el subtitulo de la noticia" cuerpo= "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."/>
            <hr/>
            <Ejemplo4Props cambiarValor={mostrarValor}/>
            <hr/>
            <Ejemplo5Props eventoClick={mostrarValor}/>
        </div>     
    ) 
} 

export default Ejemplo1;