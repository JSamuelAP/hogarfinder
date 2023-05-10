import { getConnection, sql, queries } from "../database";
import moment from "moment/moment";

export const getServicios = async (req, res) => {
	const pool = await getConnection();
	const servicios = await pool.request().query(queries.getServicios);

	res.render("index", {
		title: "Inicio",
		servicios: servicios.recordset,
		sesion: req.session,
	});
};

export const renderFiltros = async (req, res) => {
	res.render("filtros", {
		title: "Filtros",
		scripts: ["filtros.js"],
		sesion: req.session,
	});
};

export const getServicio = async (req, res) => {
	const id = req.params.id;
	const pool = await getConnection();
	const servicio = await pool
		.request()
		.input("id", id)
		.query(queries.getServicio);

	// Formatear la fecha a español
	servicio.recordset[0].Fecha_creacion = moment(
		servicio.recordset[0].Fecha_creacion
	)
		.locale("es")
		.format("dddd D [de] MMMM [del] YYYY");

	res.render("servicio", {
		title: `Nombre del servicio ${id}`,
		servicio: servicio.recordset[0],
		sesion: req.session,
	});
};

export const renderCrearPublicacion = async (req, res) => {
	if (req.session.tipoCuenta !== "negocio") {
		res.redirect("/");
		return;
	}

	res.render("crear-publicacion", {
		title: "Crear publicación",
		sesion: req.session,
	});
};
