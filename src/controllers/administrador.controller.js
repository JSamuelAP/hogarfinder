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
		scripts: ["actualizarSolicitudes.js"],
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

export const putSolicitud = async (req, res) => {
	const pool = await getConnection();
	try {
		await pool
			.request()
			.input("estado", sql.Char, req.body.estado)
			.input("id", sql.Int, req.body.id)
			.query(queries.putSolicitud);

		res.status(200).json({ msg: "Solicitud actualizada con éxito" });
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: "Error al actualizar la solicitud" });
	}
};
