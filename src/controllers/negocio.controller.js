import { getConnection, sql, queries } from "../database";
import moment from "moment/moment";

export const getNegocio = async (req, res) => {
	const id = req.params.id;
	const pool = await getConnection();
	const negocio = await pool
		.request()
		.input("id", id)
		.query(queries.getNegocio);

	if (!negocio.recordset[0]) {
		return res.status(404).render("404", { title: "Negocio no encontrado" });
	}

	const servicios = await pool
		.request()
		.input("id", id)
		.query(queries.getServiciosDeNegocio);
	const comentarios = await pool
		.request()
		.input("id", id)
		.query(queries.getComentarios);
	const puntaje = await pool
		.request()
		.input("ID_Negocio", id)
		.query(queries.getPromedioCalificaciones);

	let esFavorito = false;
	if (req.session.tipoCuenta === "cliente") {
		const pool = await getConnection();
		const favorito = await pool
			.request()
			.input("ID_Cliente", req.session.ID_Usuario)
			.input("ID_Negocio", id)
			.query(queries.getFavorito);

		if (favorito.recordset[0]) esFavorito = true;
	}

	servicios.recordset.forEach((servicio) => {
		servicio.Fecha_creacion = moment(servicio.Fecha_creacion)
			.locale("es")
			.format("D/M/YYYY");
	});

	res.render("perfil-negocio", {
		title: negocio.recordset[0].Nombre_negocio,
		negocio: negocio.recordset[0],
		servicios: servicios.recordset,
		comentarios: comentarios.recordset,
		puntaje: puntaje.recordset[0].Promedio,
		esFavorito,
		scripts: ["validar-calificacion.js", "boton-favorito.js"],
		sesion: req.session,
	});
};

export const renderEditarNegocio = async (req, res) => {
	if (req.session.tipoCuenta !== "negocio") {
		res.redirect("/");
		return;
	}

	res.render("editar-perfil-negocio", {
		title: "Editar datos",
		scripts: ["habilitar-nuevo-password.js"],
		sesion: req.session,
	});
};

export const renderReportarNegocio = async (req, res) => {
	if (req.session.tipoCuenta !== "cliente") {
		res.redirect("/");
		return;
	}

	const id = req.params.id;
	const pool = await getConnection();
	const negocio = await pool
		.request()
		.input("id", id)
		.query(queries.getNegocio);

	res.render("reportar-negocio", {
		title: "Reportar negocio",
		negocio: negocio.recordset[0],
		scripts: ["validar-reporte.js"],
		sesion: req.session,
	});
};

export const crearComentario = async (req, res) => {
	const { puntaje, comentario } = req.body;
	const id = req.params.id;

	try {
		const pool = await getConnection();
		await pool
			.request()
			.input("ID_Negocio", sql.Int, parseInt(id))
			.input("ID_Cliente", sql.Int, req.session.ID_Usuario)
			.input("Puntaje", sql.Int, puntaje)
			.input("Comentario", sql.VarChar, comentario)
			.query(queries.postCalificacion);

		res.redirect("/perfil-negocio/" + id);
	} catch (err) {
		console.log(err);
		res.status(500).send("Error al calificar negocio");
	}
};

export const crearReporte = async (req, res) => {
	const { problema } = req.body;
	const id = req.params.id;

	try {
		const pool = await getConnection();
		await pool
			.request()
			.input("ID_Cliente", sql.Int, req.session.ID_Usuario)
			.input("ID_Negocio", sql.Int, parseInt(id))
			.input("Problema", sql.VarChar, problema)
			.query(queries.postReporte);

		res.redirect("/perfil-negocio/" + id);
	} catch (err) {
		console.error(err);
		res.status(500).send("Error al reportar el negocio");
	}
};

export const marcarFavorito = async (req, res) => {
	const id = req.params.id;

	if (req.session.tipoCuenta !== "cliente" || !id) {
		res.redirect("/");
		return;
	}

	try {
		const pool = await getConnection();
		await pool
			.request()
			.input("ID_Cliente", req.session.ID_Usuario)
			.input("ID_Negocio", id)
			.query(queries.postFavorito);

		res.redirect("/perfil-negocio/" + id);
	} catch (err) {
		console.log(err);
		res.status(500).send("Error al marcar como favorito al negocio");
	}
};

export const quitarFavorito = async (req, res) => {
	const id = req.params.id;

	if (req.session.tipoCuenta !== "cliente" || !id) {
		res.redirect("/");
		return;
	}

	try {
		const pool = await getConnection();
		await pool
			.request()
			.input("ID_Cliente", req.session.ID_Usuario)
			.input("ID_Negocio", id)
			.query(queries.deleteFavorito);

		res.redirect("/perfil-negocio/" + id);
	} catch (err) {
		console.log(err);
		res.status(500).send("Error al desmarcar como favorito al negocio");
	}
};
