const btnEliminarCliente = document.querySelector("#btn-eliminar-cliente");

btnEliminarCliente.addEventListener("click", async () => {
	const confirmar = confirm(
		"¿Está seguro que desea eliminar su cuenta? ya no podrá volver a iniciar sesión y perderá sus datos"
	);

	if (confirmar) {
		await fetch("/eliminar-cuenta", {
			method: "DELETE",
		});

		location.assign("/logout");
	}
});
