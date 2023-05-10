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
	getSolicitudes:
		"SELECT n.Nombre_negocio, n.Telefono_Negocio, n.Domicilio, n.Tipo_Negocio, s.INE, s.RFC, s.Comprobante_domicilio, TRIM(s.Estado) Estado FROM [HogarFinder].[dbo].[Solicitud] s INNER JOIN [HogarFinder].[dbo].[Negocio] n ON s.ID_Negocio = n.ID_Negocio ORDER BY CASE WHEN s.Estado = 'En revisión' THEN 1 ELSE 4 END;",
	getReportes:
		"SELECT CONCAT(TRIM(c.Nombre), ' ', c.Apellido) AS nombre_cliente, c.Correo_Electronico, n.ID_Negocio, n.Nombre_Negocio, r.problema FROM [HogarFinder].[dbo].[reporte] r INNER JOIN [HogarFinder].[dbo].[Cliente] c ON r.ID_Cliente = c.ID_Cliente INNER JOIN [HogarFinder].[dbo].[Negocio] n ON n.ID_Negocio = r.ID_Negocio;",
	postCalificacion:
		"INSERT INTO [HogarFinder].[dbo].[Calificacion] VALUES (@ID_Negocio, @ID_Cliente, @Puntaje, @Comentario);",
	postServicio:
		"INSERT INTO [HogarFinder].[dbo].[Publicacion] (ID_Negocio, Titulo, Descripcion, Fecha_creacion, precio) OUTPUT INSERTED.ID_Post VALUES (@ID_Negocio, @Titulo, @Descripcion, GETDATE(), @precio);",
	postReporte:
		"INSERT INTO [HogarFinder].[dbo].[reporte] VALUES (@ID_Cliente, @ID_Negocio, @problema);",
	postCliente:
		"INSERT INTO [HogarFinder].[dbo].[Cliente] (Nombre, Apellido, Correo_Electronico, Contraseña) OUTPUT INSERTED.ID_Cliente VALUES (@Nombre, @Apellido, @Correo_Electronico, @Contraseña);",
	postNegocio:
		"INSERT INTO [HogarFinder].[dbo].[Negocio] (Nombre_negocio, Correo_Electronico, Contraseña, Telefono_Negocio, Domicilio, Tipo_Negocio, Tipo_servicio) OUTPUT INSERTED.ID_Negocio VALUES (@Nombre_negocio, @Correo_Electronico, @Contraseña, @Telefono_Negocio, @Domicilio, @Tipo_Negocio, @Tipo_servicio);",
	getClienteSesion:
		"SELECT ID_Cliente FROM [HogarFinder].[dbo].[Cliente] WHERE Correo_Electronico = @email AND Contraseña = @password;",
	getNegocioSesion:
		"SELECT ID_Negocio FROM [HogarFinder].[dbo].[Negocio] WHERE Correo_Electronico = @email AND Contraseña = @password;",
	getAdministradorSesion:
		"SELECT ID_Administrador FROM [HogarFinder].[dbo].[Administrador] WHERE Correo_Electronico = @email AND Contraseña = @password;",
};
