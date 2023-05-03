import { getConnection, sql, queries } from "../database";

export const renderLogin = async (req, res) => {
	res.render("login", { title: "Iniciar sesión" });
};

export const renderSignup = async (req, res) => {
	res.render("signup", { title: "Crear cuenta", scripts: ["signup.js"] });
};

export const postCuenta = async (req, res) => {
	const { tipoCuenta } = req.body;

	if (tipoCuenta == "cliente") {
		const { nombreCliente, apellidoCliente, emailCliente, passwordCliente } =
			req.body;

		try {
			const pool = await getConnection();
			const nuevoCliente = await pool
				.request()
				.input("Nombre", sql.VarChar, nombreCliente)
				.input("Apellido", sql.VarChar, apellidoCliente)
				.input("Correo_Electronico", sql.VarChar, emailCliente)
				.input("Contraseña", sql.VarChar, passwordCliente)
				.query(queries.postCliente);

			res.redirect("/perfil/" + nuevoCliente.recordset[0].ID_Cliente);
		} catch (err) {
			console.error(err);
			res.status(500).send("Error al reportar el negocio");
		}
	} else if (tipoCuenta == "negocio") {
	}
};
