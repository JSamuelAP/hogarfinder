import { getConnection, sql, queries } from "../database";

export const renderLogin = async (req, res) => {
	if (req.session.logged) res.redirect("/");
	else res.render("login", { title: "Iniciar sesión", scripts: ["login.js"] });
};

export const renderSignup = async (req, res) => {
	res.render("signup", { title: "Crear cuenta", scripts: ["signup.js"] });
};

export const iniciarSesion = async (req, res) => {
	const { tipoCuenta, email, password } = req.body;

	try {
		const pool = await getConnection();

		if (tipoCuenta == "cliente") {
			const cliente = await pool
				.request()
				.input("email", sql.Char, email)
				.input("password", sql.Char, password)
				.query(queries.getClienteSesion);

			if (cliente.recordset[0]) {
				req.session.logged = true;
				req.session.tipoCuenta = "cliente";
				req.session.ID_Usuario = cliente.recordset[0].ID_Cliente;
				res.redirect("/");
			} else res.status(404).send("Datos incorrectos");
		} else if (tipoCuenta == "negocio") {
			const negocio = await pool
				.request()
				.input("email", sql.Char, email)
				.input("password", sql.Char, password)
				.query(queries.getNegocioSesion);

			if (negocio.recordset[0]) {
				req.session.logged = true;
				req.session.tipoCuenta = "negocio";
				req.session.ID_Usuario = negocio.recordset[0].ID_Negocio;
				req.session.estadoCuenta = negocio.recordset[0].Estado;
				res.redirect("/perfil-negocio/" + req.session.ID_Usuario);
			} else res.status(404).send("Datos incorrectos");
		} else if (tipoCuenta == "administrador") {
			const admin = await pool
				.request()
				.input("email", sql.Char, email)
				.input("password", sql.Char, password)
				.query(queries.getAdministradorSesion);

			if (admin.recordset[0]) {
				req.session.logged = true;
				req.session.tipoCuenta = "administrador";
				req.session.ID_Usuario = admin.recordset[0].ID_Administrador;
				res.redirect("/solicitudes/");
			} else res.status(404).send("Datos incorrectos");
		}
	} catch (err) {
		res.status(500).send("Ocurrio un error al consultar el usuario");
	}
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

			const solicitud = await pool
				.request()
				.input("ID_Negocio", sql.Int, nuevoNegocio.recordset[0].ID_Negocio)
				.input("INE", sql.Char, req.files["ine"][0].filename)
				.input("RFC", sql.Char, req.files["rfc"][0].filename)
				.input("Comprobante", sql.Char, req.files["comprobante"][0].filename)
				.query(queries.PostSolicitud);

			res.redirect("/perfil-negocio/" + nuevoNegocio.recordset[0].ID_Negocio);
		} catch (err) {
			console.error(err);
			res.status(500).send("Error al crear el negocio");
		}
	}
};

export const cerrarSesion = async (req, res) => {
	req.session.logged = false;
	req.session.tipoCuenta = undefined;
	req.session.ID_Usuario = undefined;
	res.redirect("/");
};
