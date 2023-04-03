// - Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)

const datosPersonales = {
	nombre: "Fabián",
	apellido: "Blanco Wuest",
	edad: 32,
	altura: 1.77,
	eresDesarrollador: true,
};
// - Una variable que obtenga tu edad a partir del objeto anterior
const edad = datosPersonales.edad;

// - Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
const objetosVarios = [
	{ ...datosPersonales },
	(mejoresAmigos = {
		nombre: "BlackBe",
		apellido: "Blanco Wuest",
		edad: 8,
		altura: 0.32,
		tipo: "perro",
	}),
	{
		nombre: "Venus",
		apellido: "Blanco Wuest",
		edad: 4,
		altura: 0.35,
		tipo: "perro",
	},
];

// - Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
const objetosOrdenados = objetosVarios.sort((a, b) => b.edad - a.edad);

console.log(objetosOrdenados);
