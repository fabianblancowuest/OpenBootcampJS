const nombre = "Fabián";
const apellido = "Blanco";

let estudiante = `${nombre} ${apellido}`;

let estudianteMayus = estudiante.toLocaleUpperCase();
let estudianteMinus = estudiante.toLocaleLowerCase();

let longitudCadena = estudiante.length;

let primeraLetra = nombre[0];

let ultimaLetra = apellido[apellido.length - 1];
let sinEspacios = estudiante.split(" ").join("");
let sinEspacio = estudiante.replace(/ /g, "");

let estaContenido = estudiante.includes(nombre);
