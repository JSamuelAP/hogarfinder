import { getConnection, sql, queries } from "../database";

export const getServicios = async (req, res) => {
	const pool = await getConnection();
	const result = await pool.request().query(queries.getClientes);

	//res.json(result.recordset);
	res.render("index", { title: "SQL Server" });
};
