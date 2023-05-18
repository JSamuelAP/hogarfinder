const form = document.querySelector("#actualizar-datos-form");

form.addEventListener("submit", async (e) => {
	e.preventDefault();
	const nombre = form.nombre.value.trim();
	const apellido = form.apellido.value.trim();
	const correo = form.correo.value.trim();
	const pass = form.pass.value.trim();
	const confirmarPass = form.confirmarPass.value.trim();
	const passActual = form.passActual.value.trim();

	if (!nombre || !apellido || !correo) {
		alert("Nombre, Apellido y Correo electrónico no pueden ser vacios");
		return;
	}

	if (pass) {
		if (!confirmarPass || !passActual) {
			alert("Los campos de contraseñas no pueden estar vacías");
			return;
		}

		if (pass !== confirmarPass) {
			alert(
				"La nueva contraseña no coinide con la del campo Confirmar nueva contraseña"
			);
			return;
		}

		if (pass.length < 8) {
			alert("La nueva contraseña tiene que ser de mínimo 8 caracteres");
			return;
		}

		if (passActual !== form.hiddenPass.value.trim()) {
			alert("Contraseña actual incorrecta");
			return;
		}
	}

	form.submit();
});
