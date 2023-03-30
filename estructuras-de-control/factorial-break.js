let producto = 1;
let i = 10;

while (true) {
	producto *= i;
	i--;
	if (i === 1) {
		break;
	}
}
console.log(producto);
