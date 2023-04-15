import { getConnection, sql, queries } from "../database";

export const getNegocio = async (req, res) => {
	const id = req.params.id;
	res.render("perfil-negocio", { id });
};

export const renderEditarNegocio = async (req, res) => {
	res.render("editar-perfil-negocio");
};

export const renderReportarNegocio = async (req, res) => {
	const id = req.params.id;
	res.render("reportar-negocio", {id});
}
