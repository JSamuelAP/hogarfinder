document.addEventListener("DOMContentLoaded", () => {
	const checkboxCliente = document.querySelector("#checkbox-cliente");
	const checkboxNegocio = document.querySelector("#checkbox-negocio");
	const formularioCliente = document.querySelector("#form-cliente");
	const formularioNegocio = document.querySelector("#form-negocio");
	const nombreClienteInput = document.querySelector("#input-nombre-cliente");
	const apellidoClienteInput = document.querySelector(
		"#input-apellido-cliente"
	);
	const emailClienteInput = document.querySelector("#input-correo-cliente");
	const passwordClienteInput = document.querySelector(
		"#input-password-cliente"
	);
	const confirmarPasswordClienteInput = document.querySelector(
		"#input-confirmar-password-cliente"
	);

	checkboxCliente.addEventListener("change", () => {
		if (checkboxCliente.checked) {
			formularioCliente.classList.remove("d-none");
			formularioNegocio.classList.add("d-none");
		}
	});

	checkboxNegocio.addEventListener("change", () => {
		if (checkboxNegocio.checked) {
			formularioNegocio.classList.remove("d-none");
			formularioCliente.classList.add("d-none");
		}
	});

	formularioCliente.addEventListener("submit", (event) => {
		event.preventDefault();
		const nombre = nombreClienteInput.value.trim();
		const apellido = apellidoClienteInput.value.trim();
		const correo = emailClienteInput.value.trim();
		const password = passwordClienteInput.value.trim();
		const confirmarPassword = confirmarPasswordClienteInput.value.trim();

		if (!nombre || !apellido || !correo || !password || !confirmarPassword) {
			event.preventDefault();
			alert("Favor de ingresar todos los campos");
		} else if (password.length < 8) {
			event.preventDefault();
			alert("La contraseña debe ser mayor a 8 caracteres");
		} else if (password !== confirmarPassword) {
			event.preventDefault();
			alert("Las contraseñas no coinciden");
		} else formularioCliente.submit();
	});
});
