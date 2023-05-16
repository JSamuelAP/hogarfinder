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

export const getServiciosFiltrados = async (req, res) => {
	const {
		checkboxNombre,
		nombre,
		checkboxPrecio,
		precioMinimo,
		precioMaximo,
		checkboxUbicacion,
		ubicacion,
	} = req.body;
	let consulta = queries.getServicios + " WHERE ";

	if (checkboxNombre) {
		consulta += queries.getServiciosByNombre;
		if (checkboxPrecio) consulta += " AND " + queries.getServiciosByPrecio;
		if (checkboxUbicacion)
			consulta += " AND " + queries.getServiciosByDomicilio;
	} else if (checkboxPrecio) {
		consulta += queries.getServiciosByPrecio;
		if (checkboxUbicacion)
			consulta += " AND " + queries.getServiciosByDomicilio;
	} else if (checkboxUbicacion) consulta += queries.getServiciosByDomicilio;

	const pool = await getConnection();
	const servicios = await pool
		.request()
		.input("Titulo", sql.Char, nombre)
		.input("Descripcion", sql.Char, nombre)
		.input("precioMinimo", sql.Decimal, precioMinimo)
		.input("precioMaximo", sql.Decimal, precioMaximo)
		.input("Domicilio", sql.Char, ubicacion)
		.query(consulta);

	res.render("index", {
		title: "Inicio",
		servicios: servicios.recordset,
		sesion: req.session,
	});
};

export const getServiciosPorCategoria = async (req, res) => {
	const consulta =
		queries.getServicios + " WHERE " + queries.getServiciosByCategoria;
	const pool = await getConnection();
	const servicios = await pool
		.request()
		.input("categoria", req.params.categoria)
		.query(consulta);

	res.render("index", {
		title: "Inicio",
		servicios: servicios.recordset,
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

	if (!servicio.recordset[0]) {
		return res.status(404).render("404", { title: "Servicio no encontrado" });
	}

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
		scripts: ["validar-publicacion.js"],
		sesion: req.session,
	});
};

export const postPublicacion = async (req, res) => {
	const { titulo, descripcion, precio } = req.body;
	console.log(req.file, req.body);

	try {
		const pool = await getConnection();
		const nuevoPost = await pool
			.request()
			.input("ID_Negocio", sql.Int, req.session.ID_Usuario)
			.input("Titulo", sql.Char, titulo)
			.input("Descripcion", sql.Char, descripcion)
			.input("Precio", sql.Decimal, precio)
			.query(queries.postServicio);

		res.redirect("/servicio/" + nuevoPost.recordset[0].ID_Post);
	} catch (err) {
		console.log(err);
		res.status(500).send("Error al crear la publicacion");
	}
};
