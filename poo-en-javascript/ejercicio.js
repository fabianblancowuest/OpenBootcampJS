class Estudiante {
	constructor(nombre) {
		this.nombre = nombre;
		this.asignaturas = ["Javascript", "HTML", "CSS"];
	}

	obtenDatos() {
		return `Mi nombre es ${
			this.nombre
		} y tengo las siguientes asignaturas: ${this.asignaturas.join(", ")}`;
	}
}

const estudiante1 = new Estudiante("Carlos");

console.log(estudiante1.obtenDatos());
