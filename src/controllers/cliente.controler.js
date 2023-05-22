import { getConnection, sql, queries } from "../database";

export const getClientes = async (req, res) => {
	// Obtener el cliente que puede realizar consultas
	const pool = await getConnection();
	// Cuando se obtenga el resultado de la consulta, guardarla
	const result = await pool.request().query(queries.getClientes);

	res.json(result.recordset);
	// res.json("clientes");
};

export const getCliente = async (req, res) => {
	if (req.session.tipoCuenta !== "cliente") {
		res.redirect("/");
		return;
	}

	const id = req.session.ID_Usuario;
	const pool = await getConnection();
	const cliente = await pool
		.request()
		.input("id", id)
		.query(queries.getCliente);
	const negociosFavoritos = await pool
		.request()
		.input("id", id)
		.query(queries.getNegociosFavoritos);

	res.render("perfil", {
		title: cliente.recordset[0].Nombre,
		cliente: cliente.recordset[0],
		negociosFavoritos: negociosFavoritos.recordset,
		sesion: req.session,
	});
};

export const getDatosCliente = async (req, res) => {
	if (req.session.tipoCuenta !== "cliente") {
		res.redirect("/");
		return;
	}

	const id = req.session.ID_Usuario;
	const pool = await getConnection();
	const cliente = await pool
		.request()
		.input("id", id)
		.query(queries.getDatosCliente);

	res.render("editar-perfil", {
		title: "Editar datos",
		datos: cliente.recordset[0],
		sesion: req.session,
		scripts: [
			"habilitar-nuevo-password.js",
			"actualizarPerfilCliente.js",
			"eliminar-cuenta-cliente.js",
		],
	});
};

export const putCliente = async (req, res) => {
	const id = req.session.ID_Usuario;
	const { nombre, apellido, correo, pass, hiddenPass, hiddenFoto } = req.body;

	try {
		const pool = await getConnection();
		await pool
			.request()
			.input("nombre", sql.Char, nombre)
			.input("apellido", sql.Char, apellido)
			.input("correo", sql.Char, correo)
			.input("foto", sql.Char, (req.file && req.file.filename) || hiddenFoto)
			.input("contraseña", sql.Char, pass || hiddenPass)
			.input("id", id)
			.query(queries.putCliente);

		res.redirect("/perfil");
	} catch (error) {
		console.log(error);
	}
};

export const deleteCliente = async (req, res) => {
	const id = req.session.ID_Usuario;

	try {
		const pool = await getConnection();
		await pool
			.request()
			.input("id", id)
			.query(queries.deleteCalificacionByCliente);
		await pool
			.request()
			.input("id", id)
			.query(queries.deleteNegocioFavoritoByCliente);
		await pool.request().input("id", id).query(queries.deleteReporteByCliente);
		const cliente = await pool
			.request()
			.input("id", id)
			.query(queries.deleteCliente);

		res.redirect("/logout");
	} catch (error) {
		console.log(error);
	}
};
