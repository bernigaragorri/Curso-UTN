const empleados = [
    {
        nombre: 'Flavia', trabajo: 'desarrollador'  
    },
    {
        nombre: 'Pablo', trabajo: 'abogado'  
    },
    {
        nombre: 'Lucas', trabajo: 'maestro'  
    },
    {
        nombre: 'Maria', trabajo: 'desarrollador'  
    },
    {
        nombre: 'Cata', trabajo: 'jardinera'  
    },
    {
        nombre: 'Martina', trabajo: 'desarrollador'  
    }
]

const desarrollador = empleados.filter(
    empleado => empleado.trabajo === 'desarrollador'
)

const noDesarrollador = empleados.filter(
    empleado => empleado.trabajo !== 'desarrollador'
)


console.log(desarrollador)

console.log(noDesarrollador)