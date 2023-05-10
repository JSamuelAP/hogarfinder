import { getConnection, sql, queries } from "../database";

export const getSolicitudes = async (req, res) => {
	if (req.session.tipoCuenta !== "administrador") {
		res.redirect("/");
		return;
	}

	const pool = await getConnection();
	const solicitudes = await pool.request().query(queries.getSolicitudes);

	res.render("solicitudes", {
		title: "Solicitudes",
		solicitudes: solicitudes.recordset,
		sesion: req.session,
	});
};

export const getReportes = async (req, res) => {
	if (req.session.tipoCuenta !== "administrador") {
		res.redirect("/");
		return;
	}

	const pool = await getConnection();
	const reportes = await pool.request().query(queries.getReportes);

	res.render("reportes", {
		title: "Reportes",
		reportes: reportes.recordset,
		sesion: req.session,
	});
};
