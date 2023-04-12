import { getConnection, sql, queries } from "../database";

export const getSolicitudes = async (req, res) => {
	res.render("solicitudes");
};

export const getReportes = async (req, res) => {
	res.render("reportes");
};
