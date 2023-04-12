import { getConnection, sql, queries } from "../database";

export const getClientes = async (req, res) => {
	// Obtener el cliente que puede realizar consultas
	const pool = await getConnection();
	// Cuando se obtenga el resultado de la consulta, guardarla
	const result = await pool.request().query(queries.getClientes);

	res.json(result.recordset);
	// res.json("clientes");
};

export const getCliente = async (req, res) => {
	const id = req.params.id;
	res.render("perfil", { id });
};

export const renderLogin = async (req, res) => {
	res.render("login");
};

export const renderSignup = async (req, res) => {
	res.render("signup");
};

export const getNegocio = async (req, res) => {
	const id = req.params.id;
	res.render("perfil-negocio", { id });
};

export const renderEditarNegocio = async (req, res) => {
	res.render("editar-perfil-negocio");
};

export const renderEditarCliente = async (req, res) => {
	res.render("editar-perfil");
};

export const renderSolicituded = async (req, res) => {
	res.render("solicitudes");
};
