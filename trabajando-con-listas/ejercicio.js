// - Una variable que contenga la lista de la compra (mínimo 5 elementos)
const listaCompras = ["Atún", "Tostadas", "Queso", "Arroz", "Sal"];

// - Modifica la lista de la compra y añádele "Aceite de Girasol"
listaCompras.push("Aceite de Girasol");

// - Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
listaCompras.pop();

// - Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
const peliculasFavoritas = [
	{
		titulo: "Corazón Valiente",
		director: "Mel Gibson",
		fecha: new Date(1995, 8, 29),
	},
	{
		titulo: "La supremacía Bourne",
		director: "Paul Greengrass",
		fecha: new Date(2004, 8, 17),
	},
	{
		titulo: "John Wick",
		director: "Chad Stahelski",
		fecha: new Date(2014, 9, 24),
	},
];

// - Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
const posteriores = peliculasFavoritas.filter(
	(pelicula) => pelicula.fecha > new Date(2010, 0, 1),
);

// - Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
const directoresPeliculas = peliculasFavoritas.map(
	(pelicula) => pelicula.director,
);

// - Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
const titulosPeliculas = peliculasFavoritas.map((pelicula) => pelicula.titulo);

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
const directoresTitulosPeliculas = directoresPeliculas.concat(titulosPeliculas);

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
const directoresTitulosPeliculas2 = [
	...directoresPeliculas,
	...titulosPeliculas,
];
