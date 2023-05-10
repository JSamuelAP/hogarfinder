const form = document.querySelector("#form-post");

form.addEventListener("submit", (event) => {
	event.preventDefault();
	const titulo = form.titulo.value.trim();
	const descripcion = form.descripcion.value.trim();

	if (!titulo || !descripcion) {
		event.preventDefault();
		alert("Favor de ingresar un titulo y una descripción");
	} else form.submit();
});
