const form = document.querySelector("#form-opiniones");
const comentarioInput = document.querySelector("#input-comentario");
const selectInput = document.querySelector("#select-puntaje");

form.addEventListener("submit", (event) => {
	const comentario = comentarioInput.value.trim();
	const puntaje = selectInput.value;

	if (!comentario || !puntaje) {
		event.preventDefault();
		alert("Favor de dejar un comentario y escoger una calificación");
	} else form.submit();
});
