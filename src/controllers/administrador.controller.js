import { getConnection, sql, queries } from "../database";

export const getSolicitudes = async (req, res) => {
	res.render("solicitudes", { title: "Solicitudes" });
};

export const getReportes = async (req, res) => {
	res.render("reportes", { title: "Reportes" });
};
