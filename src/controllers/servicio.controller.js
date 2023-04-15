import { getConnection, sql, queries } from "../database";

export const getServicios = async (req, res) => {
	//const pool = await getConnection();
	//const result = await pool.request().query(queries.getClientes);

	//res.json(result.recordset);
	res.render("index", { title: "Inicio" });
};

export const renderFiltros = async (req, res) => {
	res.render("filtros", { title: "Filtros" });
};

export const getServicio = async (req, res) => {
	const id = req.params.id;
	res.render("servicio", { title: `Nombre del servicio ${id}`, id });
};

export const renderCrearPublicacion = async (req, res) => {
	res.render("crear-publicacion", { title: "Crear publicación" });
};
