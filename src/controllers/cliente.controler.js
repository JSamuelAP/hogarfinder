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
	res.render("perfil", { title: `Nombre del cliente ${id}`, id });
};

export const renderEditarCliente = async (req, res) => {
	res.render("editar-perfil", { title: `Editar datos` });
};
