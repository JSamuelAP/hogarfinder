// Consultas que hará la aplicación a la BD
export const queries = {
	getServicios:
		"SELECT s.*, n.Nombre_negocio FROM [HogarFinder].[dbo].[publicacion] s INNER JOIN [HogarFinder].[dbo].[Negocio] n ON s.ID_Negocio = n.ID_Negocio",
	getServiciosDeNegocio:
		"SELECT ID_Post, Titulo, foto, Fecha_creacion FROM  [HogarFinder].[dbo].[publicacion] where ID_Negocio = @id",
	getServicio:
		"SELECT s.*, n.Nombre_negocio, n.Telefono_Negocio FROM [HogarFinder].[dbo].[publicacion] s INNER JOIN [HogarFinder].[dbo].[Negocio] n ON s.ID_Negocio = n.ID_Negocio WHERE ID_Post = @id",
	getNegocio:
		"SELECT n.*, TRIM(s.Estado) Estado FROM [HogarFinder].[dbo].[Negocio] n INNER JOIN [HogarFinder].[dbo].[Solicitud] s ON n.ID_Negocio = s.ID_Negocio WHERE n.ID_Negocio = @id",
	getDatosNegocio:
		"SELECT Nombre_negocio, Correo_Electronico, Telefono_Negocio, Domicilio, Contraseña, foto FROM [HogarFinder].[dbo].[Negocio] WHERE ID_Negocio= @id;",
	getComentarios:
		"SELECT c.*, u.foto, CONCAT(TRIM(u.Nombre), ' ', u.Apellido) AS nombre_cliente FROM [HogarFinder].[dbo].[Calificacion] c INNER JOIN [HogarFinder].[dbo].[Cliente] u ON c.ID_Cliente = u.ID_Cliente WHERE c.ID_Negocio = @id;",
	getCliente:
		"SELECT ID_Cliente, Correo_Electronico, foto, CONCAT(TRIM(Nombre), ' ', Apellido) AS Nombre FROM [HogarFinder].[dbo].[Cliente] WHERE ID_Cliente = @id;",
	getDatosCliente:
		"SELECT Nombre, Apellido, Correo_Electronico, Contraseña, foto FROM [HogarFinder].[dbo].[Cliente] WHERE ID_Cliente = @id;",
	getNegociosFavoritos:
		"SELECT nf.ID_Negocio, n.Nombre_negocio, n.foto FROM [HogarFinder].[dbo].[Negocios_Favoritos] nf INNER JOIN [HogarFinder].[dbo].[Negocio] n ON nf.ID_Negocio = n.ID_Negocio WHERE ID_Cliente = @id;",
	getSolicitudes:
		"SELECT s.ID_solicitud, n.Nombre_negocio, n.Telefono_Negocio, n.Domicilio, n.Tipo_Negocio, s.INE, s.RFC, s.Comprobante_domicilio, TRIM(s.Estado) Estado FROM [HogarFinder].[dbo].[Solicitud] s INNER JOIN [HogarFinder].[dbo].[Negocio] n ON s.ID_Negocio = n.ID_Negocio ORDER BY CASE WHEN s.Estado = 'En revisión' THEN 1 ELSE 4 END;",
	getReportes:
		"SELECT CONCAT(TRIM(c.Nombre), ' ', c.Apellido) AS nombre_cliente, c.Correo_Electronico, n.ID_Negocio, n.Nombre_Negocio, r.problema FROM [HogarFinder].[dbo].[reporte] r INNER JOIN [HogarFinder].[dbo].[Cliente] c ON r.ID_Cliente = c.ID_Cliente INNER JOIN [HogarFinder].[dbo].[Negocio] n ON n.ID_Negocio = r.ID_Negocio;",
	postCalificacion:
		"INSERT INTO [HogarFinder].[dbo].[Calificacion] VALUES (@ID_Negocio, @ID_Cliente, @Puntaje, @Comentario);",
	getPromedioCalificaciones:
		"SELECT AVG(Puntaje) Promedio FROM [HogarFinder].[dbo].[Calificacion] WHERE ID_Negocio = @ID_Negocio;",
	postServicio:
		"INSERT INTO [HogarFinder].[dbo].[Publicacion] (ID_Negocio, Titulo, Descripcion, Fecha_creacion, precio, foto) OUTPUT INSERTED.ID_Post VALUES (@ID_Negocio, @Titulo, @Descripcion, GETDATE(), @precio, @foto);",
	postReporte:
		"INSERT INTO [HogarFinder].[dbo].[reporte] VALUES (@ID_Cliente, @ID_Negocio, @problema);",
	postCliente:
		"INSERT INTO [HogarFinder].[dbo].[Cliente] (Nombre, Apellido, Correo_Electronico, Contraseña) OUTPUT INSERTED.ID_Cliente VALUES (@Nombre, @Apellido, @Correo_Electronico, @Contraseña);",
	postNegocio:
		"INSERT INTO [HogarFinder].[dbo].[Negocio] (Nombre_negocio, Correo_Electronico, Contraseña, Telefono_Negocio, Domicilio, Tipo_Negocio, Tipo_servicio) OUTPUT INSERTED.ID_Negocio VALUES (@Nombre_negocio, @Correo_Electronico, @Contraseña, @Telefono_Negocio, @Domicilio, @Tipo_Negocio, @Tipo_servicio);",
	PostSolicitud:
		"INSERT INTO [HogarFinder].[dbo].[Solicitud] (ID_Negocio, Comprobante_domicilio, INE, RFC, Estado) VALUES (@ID_Negocio, @Comprobante, @INE, @RFC, 'En revisión');",
	getClienteSesion:
		"SELECT ID_Cliente FROM [HogarFinder].[dbo].[Cliente] WHERE Correo_Electronico = @email AND Contraseña = @password;",
	getNegocioSesion:
		"SELECT n.ID_Negocio, TRIM(s.Estado) Estado FROM [HogarFinder].[dbo].[Negocio] n INNER JOIN [HogarFinder].[dbo].[Solicitud] s ON n.ID_Negocio = s.ID_Negocio WHERE n.Correo_Electronico = @email AND n.Contraseña = @password;",
	getAdministradorSesion:
		"SELECT ID_Administrador FROM [HogarFinder].[dbo].[Administrador] WHERE Correo_Electronico = @email AND Contraseña = @password;",
	postFavorito:
		"INSERT INTO [HogarFinder].[dbo].[Negocios_Favoritos] VALUES (@ID_Cliente, @ID_Negocio);",
	deleteFavorito:
		"DELETE FROM [HogarFinder].[dbo].[Negocios_Favoritos] WHERE ID_Cliente = @ID_Cliente AND ID_Negocio = @ID_Negocio;",
	getFavorito:
		"SELECT * FROM [HogarFinder].[dbo].[Negocios_Favoritos] WHERE ID_Cliente = @ID_Cliente AND ID_Negocio = @ID_Negocio;",
	getServiciosByNombre:
		"(s.Titulo LIKE '%' + @Titulo + '%' OR s.Descripcion LIKE '%' + @Descripcion + '%')",
	getServiciosByPrecio: "s.precio BETWEEN @precioMinimo AND @precioMaximo",
	getServiciosByDomicilio: "n.Domicilio LIKE '%' + @Domicilio + '%'",
	getServiciosByCategoria: "n.Tipo_servicio = @categoria",
	putSolicitud:
		"UPDATE [HogarFinder].[dbo].[Solicitud] SET Estado = @estado WHERE ID_solicitud = @id;",
	putCliente:
		"UPDATE [HogarFinder].[dbo].[Cliente] SET Nombre = @nombre, Apellido = @apellido, Correo_Electronico = @correo, foto = @foto, Contraseña = @contraseña WHERE ID_Cliente = @id;",
	putNegocio:
		"UPDATE [HogarFinder].[dbo].[Negocio] SET Nombre_negocio = @nombre, Telefono_Negocio = @telefono, Domicilio = @domicilio, Correo_Electronico = @correo, foto = @foto, Contraseña = @contraseña WHERE ID_Negocio= @id;",
	deleteCalificacionByCliente:
		"DELETE FROM [HogarFinder].[dbo].[Calificacion] WHERE ID_Cliente = @id;",
	deleteNegocioFavoritoByCliente:
		"DELETE FROM [HogarFinder].[dbo].[Negocios_Favoritos] WHERE ID_Cliente = @id;",
	deleteReporteByCliente:
		"DELETE FROM [HogarFinder].[dbo].[reporte] WHERE ID_Cliente = @id;",
	deleteCliente:
		"DELETE FROM [HogarFinder].[dbo].[Cliente] WHERE ID_Cliente = @id;",
};
