document.addEventListener("DOMContentLoaded", () => {
	const nuevoPassword = document.querySelector("#input-nuevo-password");
	const repetirNuevoPassword = document.querySelector(
		"#input-confirmar-nuevo-password"
	);
	const passwordActual = document.querySelector("#input-password-actual");

	nuevoPassword.addEventListener("input", () => {
		repetirNuevoPassword.disabled = !nuevoPassword.value;
		passwordActual.disabled = !nuevoPassword.value;
	});
});
