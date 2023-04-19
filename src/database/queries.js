// Consultas que hará la aplicación a la BD
export const queries = {
	getServicios:
		"SELECT s.*, n.Nombre_negocio FROM [HogarFinder].[dbo].[publicacion] s INNER JOIN [HogarFinder].[dbo].[Negocio] n ON s.ID_Negocio = n.ID_Negocio",
	getServiciosDeNegocio:
		"SELECT ID_Post, Titulo, foto, Fecha_creacion FROM  [HogarFinder].[dbo].[publicacion] where ID_Negocio = @id",
	getServicio:
		"SELECT s.*, n.Nombre_negocio, n.Telefono_Negocio FROM [HogarFinder].[dbo].[publicacion] s INNER JOIN [HogarFinder].[dbo].[Negocio] n ON s.ID_Negocio = n.ID_Negocio WHERE ID_Post = @id",
	getNegocio:
		"SELECT * FROM [HogarFinder].[dbo].[Negocio] WHERE ID_Negocio = @id",
	getComentarios:
		"SELECT c.*, u.foto, CONCAT(TRIM(u.Nombre), ' ', u.Apellido) AS nombre_cliente FROM [HogarFinder].[dbo].[Calificacion] c INNER JOIN [HogarFinder].[dbo].[Cliente] u ON c.ID_Cliente = u.ID_Cliente WHERE c.ID_Negocio = @id;",
	getCliente:
		"SELECT ID_Cliente, Correo_Electronico, foto, CONCAT(TRIM(Nombre), ' ', Apellido) AS Nombre FROM [HogarFinder].[dbo].[Cliente] WHERE ID_Cliente = @id;",
	getNegociosFavoritos:
		"SELECT nf.ID_Negocio, n.Nombre_negocio, n.foto FROM [HogarFinder].[dbo].[Negocios_Favoritos] nf INNER JOIN [HogarFinder].[dbo].[Negocio] n ON nf.ID_Negocio = n.ID_Negocio WHERE ID_Cliente = @id;",
};
