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
});
