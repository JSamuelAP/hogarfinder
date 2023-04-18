import { getConnection, sql, queries } from "../database";

export const getNegocio = async (req, res) => {
	const id = req.params.id;
	const pool = await getConnection();
	const negocio = await pool
		.request()
		.input("id", id)
		.query(queries.getNegocio);

	res.render("perfil-negocio", {
		title: negocio.recordset[0].Nombre_negocio,
		negocio: negocio.recordset[0],
	});
};

export const renderEditarNegocio = async (req, res) => {
	res.render("editar-perfil-negocio", { title: "Editar datos" });
};

export const renderReportarNegocio = async (req, res) => {
	const id = req.params.id;
	res.render("reportar-negocio", { title: "Reportar negocio", id });
};
