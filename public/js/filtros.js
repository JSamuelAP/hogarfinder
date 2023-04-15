document.addEventListener("DOMContentLoaded", () => {
	const checkNombre = document.querySelector("#check-nombre");
	const checkPrecio = document.querySelector("#check-precio");
	const checkUbicacion = document.querySelector("#check-ubicacion");
	const inputNombre = document.querySelector("#input-nombre");
	const inputPrecioMinimo = document.querySelector("#input-precio-minimo");
	const inputPrecioMaximo = document.querySelector("#input-precio-maximo");
	const inputUbicacion = document.querySelector("#input-ubicacion");

	checkNombre.addEventListener("change", () => {
		inputNombre.disabled = !checkNombre.checked;
		inputNombre.required = checkNombre.checked;
	});

	checkPrecio.addEventListener("change", () => {
		inputPrecioMinimo.disabled = !checkPrecio.checked;
		inputPrecioMaximo.disabled = !checkPrecio.checked;
		inputPrecioMinimo.required = checkPrecio.checked;
		inputPrecioMaximo.required = checkPrecio.checked;
	});

	checkUbicacion.addEventListener("change", () => {
		inputUbicacion.disabled = !checkUbicacion.checked;
		inputUbicacion.required = checkUbicacion.checked;
	});
});
