document.addEventListener("DOMContentLoaded", () => {
	const checkboxCliente = document.querySelector("#checkbox-cliente");
	const checkboxNegocio = document.querySelector("#checkbox-negocio");
	const formularioCliente = document.querySelector("#form-cliente");
	const formularioNegocio = document.querySelector("#form-negocio");

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
		const nombre = formularioCliente
			.querySelector("#input-nombre-cliente")
			.value.trim();
		const apellido = formularioCliente
			.querySelector("#input-apellido-cliente")
			.value.trim();
		const correo = formularioCliente
			.querySelector("#input-correo-cliente")
			.value.trim();
		const password = formularioCliente
			.querySelector("#input-password-cliente")
			.value.trim();
		const confirmarPassword = formularioCliente
			.querySelector("#input-confirmar-password-cliente")
			.value.trim();

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

	formularioNegocio.addEventListener("submit", (event) => {
		event.preventDefault();
		const nombre = formularioNegocio
			.querySelector("#input-nombre-negocio")
			.value.trim();
		const tipoServicio = formularioNegocio
			.querySelector("#input-tipo-servicio")
			.value.trim();
		const domicilio = formularioNegocio
			.querySelector("#input-domicilio-negocio")
			.value.trim();
		const correo = formularioNegocio
			.querySelector("#input-correo-negocio")
			.value.trim();
		const password = formularioNegocio
			.querySelector("#input-password-negocio")
			.value.trim();
		const confirmarPassword = formularioNegocio
			.querySelector("#input-confirmar-password-negocio")
			.value.trim();

		if (
			!nombre ||
			!tipoServicio ||
			!domicilio ||
			!correo ||
			!password ||
			!confirmarPassword
		) {
			alert("Favor de ingresar todos los campos");
		} else if (password.length < 8) {
			alert("La contraseña debe ser mayor a 8 caracteres");
		} else if (password !== confirmarPassword) {
			alert("Las contraseñas no coinciden");
		} else formularioNegocio.submit();
	});
});
