const btnEliminarNegocio = document.querySelector("#btn-eliminar-negocio");

btnEliminarNegocio.addEventListener("click", async () => {
	const confirmar = confirm(
		"¿Está seguro que desea eliminar su cuenta? ya no podrá volver a iniciar sesión y perderá sus datos"
	);

	if (confirmar) {
		await fetch("/eliminar-cuenta-negocio", {
			method: "DELETE",
		});

		location.assign("/logout");
	}
});
