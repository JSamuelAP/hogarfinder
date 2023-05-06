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
			res.status(500).send("Error al crear el cliente");
		}
	} else if (tipoCuenta == "negocio") {
		const {
			nombreNegocio,
			tipoNegocio,
			tipoServicio,
			telefonoNegocio,
			domicilioNegocio,
			emailNegocio,
			passwordNegocio,
		} = req.body;

		try {
			const pool = await getConnection();
			const nuevoNegocio = await pool
				.request()
				.input("Nombre_negocio", sql.Char, nombreNegocio)
				.input("Correo_Electronico", sql.Char, emailNegocio)
				.input("Contraseña", sql.Char, passwordNegocio)
				.input("Telefono_Negocio", sql.VarChar, telefonoNegocio)
				.input("Domicilio", sql.Char, domicilioNegocio)
				.input("Tipo_Negocio", sql.Char, tipoNegocio)
				.input("Tipo_servicio", sql.Char, tipoServicio)
				.query(queries.postNegocio);

			res.redirect("/perfil-negocio/" + nuevoNegocio.recordset[0].ID_Negocio);
		} catch (err) {
			console.error(err);
			res.status(500).send("Error al crear el negocio");
		}
	}
};
