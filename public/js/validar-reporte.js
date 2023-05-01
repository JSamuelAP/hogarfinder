const form = document.querySelector("#form-reporte");
const problemaInput = document.querySelector("#input-problema");

form.addEventListener("submit", (event) => {
	const problema = problemaInput.value.trim();

	if (!problema) {
		event.preventDefault();
		alert("Favor de describir el prolema que tuvo con esta empresa");
	} else form.submit();
});
