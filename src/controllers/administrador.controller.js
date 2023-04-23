import { getConnection, sql, queries } from "../database";

export const getSolicitudes = async (req, res) => {
	const pool = await getConnection();
	const solicitudes = await pool.request().query(queries.getSolicitudes);

	res.render("solicitudes", {
		title: "Solicitudes",
		solicitudes: solicitudes.recordset,
	});
};

export const getReportes = async (req, res) => {
	const pool = await getConnection();
	const reportes = await pool.request().query(queries.getReportes);

	res.render("reportes", { title: "Reportes", reportes: reportes.recordset });
};
