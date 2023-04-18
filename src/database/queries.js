// Consultas que hará la aplicación a la BD
export const queries = {
	getServicios:
		"SELECT s.*, n.Nombre_negocio FROM [HogarFinder].[dbo].[publicacion] s INNER JOIN [HogarFinder].[dbo].[Negocio] n ON s.ID_Negocio = n.ID_Negocio",
	getServicio:
		"SELECT s.*, n.Nombre_negocio, n.Telefono_Negocio FROM [HogarFinder].[dbo].[publicacion] s INNER JOIN [HogarFinder].[dbo].[Negocio] n ON s.ID_Negocio = n.ID_Negocio WHERE ID_Post = @id",
	getNegocio:
		"SELECT * FROM [HogarFinder].[dbo].[Negocio] WHERE ID_Negocio = @id",
};
