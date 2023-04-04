class Estudiante {
	nombre = "Fabián";
	asignaturas = ["Javascript", "HTML", "CSS"];

	obtenDatos() {
		return {
			nombre: this.nombre,
			asignaturas: this.asignaturas.join(", "),
		};
	}
}

const estudiante1 = new Estudiante();

console.log(estudiante1.obtenDatos());
