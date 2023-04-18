import { getConnection, sql, queries } from "../database";
import moment from "moment/moment";

export const getNegocio = async (req, res) => {
	const id = req.params.id;
	const pool = await getConnection();
	const negocio = await pool
		.request()
		.input("id", id)
		.query(queries.getNegocio);
	const servicios = await pool
		.request()
		.input("id", id)
		.query(queries.getServiciosDeNegocio);

	servicios.recordset.forEach((servicio) => {
		servicio.Fecha_creacion = moment(servicio.Fecha_creacion)
			.locale("es")
			.format("D/M/YYYY");
	});

	res.render("perfil-negocio", {
		title: negocio.recordset[0].Nombre_negocio,
		negocio: negocio.recordset[0],
		servicios: servicios.recordset,
	});
};

export const renderEditarNegocio = async (req, res) => {
	res.render("editar-perfil-negocio", { title: "Editar datos" });
};

export const renderReportarNegocio = async (req, res) => {
	const id = req.params.id;
	res.render("reportar-negocio", { title: "Reportar negocio", id });
};
