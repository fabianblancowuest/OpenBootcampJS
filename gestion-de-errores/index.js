const saludar = (nombre) => {
	if (typeof nombre === "string") return `Bienvenido ${nombre}`;

	throw new TypeError("¡El dato ingresado no es una cadena de texto!");
};

try {
	saludar(300);
	console.log("¡Ejecución exitosa!");
} catch (error) {
	console.log(error);
}
