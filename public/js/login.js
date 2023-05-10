const form = document.querySelector("#form-login");

form.addEventListener("submit", async (event) => {
	event.preventDefault();
	const tipoCuenta = form.tipoCuenta.value;
	const email = form.email.value.trim();
	const password = form.password.value.trim();

	if (!password) {
		alert("La contraseña no pueden ser espacios vacios");
		return;
	}

	const response = await fetch("/login", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ tipoCuenta, email, password }),
	});

	if (response.ok) form.submit();
	else {
		alert("Datos incorrectos");
	}
});
