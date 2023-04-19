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
	const pool = await getConnection();
	const cliente = await pool
		.request()
		.input("id", id)
		.query(queries.getCliente);

	res.render("perfil", {
		title: cliente.recordset[0].Nombre,
		cliente: cliente.recordset[0],
	});
};

export const renderEditarCliente = async (req, res) => {
	res.render("editar-perfil", { title: `Editar datos` });
};
