import alumnos from '../data/alumnos.json';

const Ejemplo4 = props =>{
    return(
        <>
            <h2>hola soy la pagina ejemplo 4 jSON</h2>
            <ul>
                { alumnos.map( alumno =>(
                    <li>{alumno.nombre} {alumno.apellido} - ({alumno.edad}) </li>
                )
                )}
            </ul>
        </>
    )
}

export default Ejemplo4;