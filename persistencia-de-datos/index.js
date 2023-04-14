const nombre = "Fabián";
const apellido = "Blanco";

const persona = {
	nombre,
	apellido,
};

console.log(persona);

sessionStorage.setItem("nombre-sesion", JSON.stringify(persona));
localStorage.setItem("persona", JSON.stringify(persona));

let fecha = new Date();
let expira = fecha.setTime(fecha.getTime() + 2 * 1000);
let expires = "; expires=" + expira.toUTFCString();

document.cookie = `persona=${JSON.stringify(persona)}` + expires;
