const aprobados = alumnos.filter(function(alumno){
    return alumno.nota >=7;
});

console.log(aprobados);
console.log(`${aprobados.length}aprobados`);

for(let i=0; i<aprobados.length; i++)