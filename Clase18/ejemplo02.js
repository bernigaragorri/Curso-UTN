const alumnos =[
    {
        nombre: 'Flavia', edad: 10
    },
    {
        nombre: 'Maria', edad: 3
    },
    {
        nombre: 'Santi', edad: 5
    },
    {
        nombre: 'Matias', edad: 2
    },
    {
        nombre: 'Nico', edad: 4
    },
    {
        nombre: 'Rosa', edad: 3
    }
]

const chicos = alumnos.filter(
    alumno => alumno.edad <= 4
)

console.log(chicos)

for(let i=0; i<chicos.length; i++){
    document.write(`<p>Niño: ${chicos[i].nombre}, cuya edad es ${chicos[i].edad}.</p>`)
}