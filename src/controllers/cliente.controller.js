import { getConnection, sql, queries } from "../database";

export const getClientes = async (req, res) => {
	// Obtener el cliente que puede realizar consultas
	const pool = await getConnection();
	// Cuando se obtenga el resultado de la consulta, guardarla
	const result = await pool.request().query(queries.getClientes);

	res.json(result.recordset);
	// res.json("clientes");
};
