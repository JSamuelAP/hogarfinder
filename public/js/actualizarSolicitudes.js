const btnActualizar = document.querySelector("#btn-actualizar");

btnActualizar.addEventListener("click", async (e) => {
	const selects = Array.from(document.querySelectorAll("select"));
	const data = selects.map((select) => {
		return { estado: select.value, id: select.dataset.id };
	});

	for (const item of data) {
		await fetch("/solicitudes", {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(item),
		})
			.then((response) => {})
			.catch((error) => {
				alert("Error al actualizar las solicitudes");
			});
	}

	location.reload();
});
