const boton = document.querySelector("#boton-favorito");
const iconoCorazon = boton.querySelector("#boton-favorito-icono");
const id = window.location.pathname.split("/").pop();

boton.addEventListener("click", async () => {
	const esFavorito = boton.dataset.favorito;

	try {
		if (esFavorito == "true") {
			boton.dataset.favorito = "false";
			iconoCorazon.classList.replace("bi-heart-fill", "bi-heart");
			await fetch(`/perfil-negocio/${id}/favorito`, {
				method: "DELETE",
			});
		} else {
			boton.dataset.favorito = "true";
			iconoCorazon.classList.replace("bi-heart", "bi-heart-fill");
			await fetch(`/perfil-negocio/${id}/favorito`, {
				method: "POST",
			});
		}
	} catch (e) {
		alert("Error al marcar o desmarcar el negocio como favorito");
	}
});
