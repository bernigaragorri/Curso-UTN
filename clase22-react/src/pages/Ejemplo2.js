import { Ejemplo1Estado, Ejemplo2Estado } from "../componentes/estado/Estados";
import '../styles/estilos.css'

const Ejemplo2 = props => {
    return(
        <div>
            <h1>Ejemplos Estados</h1>
            <Ejemplo1Estado/>
            <hr/>
            <Ejemplo2Estado/>
        </div>
    )
}

export default Ejemplo2;