const form = document.querySelector("#formulario-filtros");
const checkNombre = form.querySelector("#check-nombre");
const checkPrecio = form.querySelector("#check-precio");
const checkUbicacion = form.querySelector("#check-ubicacion");
const inputNombre = form.querySelector("#input-nombre");
const inputPrecioMinimo = form.querySelector("#input-precio-minimo");
const inputPrecioMaximo = form.querySelector("#input-precio-maximo");
const inputUbicacion = form.querySelector("#input-ubicacion");

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

form.addEventListener("submit", (event) => {
	event.preventDefault();

	if (!checkNombre.checked && !checkPrecio.checked && !checkUbicacion.checked) {
		alert("Favor de indicar al menos un parámetro para filtrar");
		return;
	}

	if (
		(checkNombre.checked && !inputNombre.value.trim()) ||
		(checkUbicacion.checked && !inputUbicacion.value.trim())
	) {
		alert("Favor de llenar todos los campos habilitados");
		return;
	}

	if (
		checkPrecio.checked &&
		inputPrecioMinimo.value > inputPrecioMaximo.value
	) {
		alert("El precio mínimo no puede ser mayor al precio máximo");
		return;
	}

	form.submit();
});
