// - Una función sin parámetros que devuelva siempre "true"
function sinParametros() {
	return true;
}

console.log(sinParametros());

// - Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado
const miPromesa = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve();
	}, 5000);
});

miPromesa.then(() => console.log("Hola soy una promesa"));

// - Una función generadora de índices pares automáticos
function* generadora() {
	let indice = 0;
	while (true) {
		indice += 2;
		yield indice;
		if (indice >= 20) {
			return;
		}
	}
}

const gen = generadora();
console.log(gen.next());
