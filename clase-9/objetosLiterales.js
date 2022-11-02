/* //*Declaracion de objeto
let miPais = {
    pais: 'argentina',
    poblacion: '20',
    capital: 'buenos aires'
}
console.log(miPais.capital);
console.log(`${miPais.pais} tinene ${miPais.poblacion} habitantes y su capital es ${miPais.capital}`); */

/* //*Declaracion de objeto con funcion
let curso = {
    alumnos: ['Santiago', 'Sofia'],
    turno: 'Noche',
    mostrarAlumnosYTurno: function () {
        for (let i = 0; i < curso.alumnos.length; i++) {
            alumno = curso.alumnos[i];
            console.log(`${alumno} cursa en el turno ${curso.turno}`);
        }
    }
}
console.log(curso.mostrarAlumnosYTurno()); */

/* //*Declaracion de objeto usando this (este sirve para no repetir el nombre del objeto)
let curso = {
    estudiantes : ['Santiago', 'Belen'],
    turno : 'Noche',
    horario : '19hs a 21:30hs',
    mostrarHorario : function () {
        return `El horario de ${this.estudiantes[0]} es de ${this.horario}`;
    }
}
console.log(curso.mostrarHorario()); */

//*Constructor
//!Generalmente a las fucniones constructoras se les llama con la primera letra en mayusculas
/*function Auto(marca, modelo) {
    this.laMarca = marca;
    this.elModelo = modelo;
}

//*Instanciar un constructor

let miAuto = new Auto('Ford', 'KA');
console.log(miAuto); */

/* //* Ej con constructor
function AddAll(nombreAlumno, edadAlumno, turnoAlumno) {
    this.nombreAlumno = nombreAlumno;
    this.edadAlumno = edadAlumno;
    this.turnoAlumno = turnoAlumno;
}

let nuevoAlumno = new AddAll('Lautaro', 20, 'Tarde');
console.log(nuevoAlumno); */

//*Ej 1 playground
/* let perro = {
    nombre: 'mimi',
    edad: 12,
    vacunado: true
} */

//* Ej 2 playground

/* let deportista = {
	energia: 100,
    experiencia: 10,
    nombre: "Aimar",
    entrenarHoras: function (cantHoras) {
       this.energia = this.energia - cantHoras * 5;
       this.experiencia = this.experiencia + cantHoras * 2;
    }
};

console.log("==Antes de comenzar entrenamiento==");
console.log("Deportista energia: "+deportista.energia);
console.log("Deportista experiencia: "+deportista.experiencia);
console.log("==ENTRENANDO==");
deportista.entrenarHoras(5);
console.log("==FIN ENTRENAMIENTO==");
console.log("Deportista energia: "+deportista.energia);
console.log("Deportista experiencia: "+deportista.experiencia); */
