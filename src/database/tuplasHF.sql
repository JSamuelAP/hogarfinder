insert into Cliente(ID_Cliente,Nombre, Apellido,Correo_Electronico,Contraseña) values (
1, 'Santiago','Hernández','santiago.hernandez@gmail.com','Algo_1234')
insert into Cliente (ID_Cliente,Nombre, Apellido,Correo_Electronico,Contraseña)values(
2, 'Ana', 'García', 'ana.garcia@gmail.com', 'Algo_1234')
insert into Cliente(ID_Cliente,Nombre, Apellido,Correo_Electronico,Contraseña) values(
3, 'Marcos', 'Ríos', 'marcos.rios@gmail.com', 'Algo_1234')
insert into Cliente (ID_Cliente,Nombre, Apellido,Correo_Electronico,Contraseña)values(
4, 'Gabriela', 'Fernández', 'gabriela.fdez@gmail.com','Algo_1234')
insert into Cliente(ID_Cliente,Nombre, Apellido,Correo_Electronico,Contraseña) values(
5, 'Carlos', 'Ramirez', 'carlos.ramirez@gmail.com', 'Algo_1234')


insert into Negocio (ID_Negocio,Nombre_negocio,Correo_Electronico,Contraseña, Telefono_Negocio, Domicilio, Tipo_servicio) values(
1, 'LimpiezaExpressHogar','limpiezaexHogar@gmail.com', 'Negocio_246', '4772930482', 'AV. J ORTIZ DE DEOMINGUEZ NO. 518', 'LIMPIEZA')
insert into Negocio (ID_Negocio,Nombre_negocio,Correo_Electronico, Contraseña, Telefono_Negocio, Domicilio, Tipo_servicio) values(
2, 'Jardinez en orden', 'jardinezenorden@gmail.com', 'Negocio_246', '4772394819', 'HERMANOS ESCOBAR NO. 3213', 'JARDINERIA')
insert into Negocio (ID_Negocio,Nombre_negocio,Correo_Electronico, Contraseña, Telefono_Negocio, Domicilio, Tipo_servicio) values(
3, 'ReparaYAhogar', 'repara_yahogar@gmail.com', 'Negocio_246', '4772939408', 'AV. DE LAS FUETES NO. 5500', 'REPARACIONES')
insert into Negocio (ID_Negocio,Nombre_negocio,Correo_Electronico, Contraseña, Telefono_Negocio, Domicilio, Tipo_servicio) values(
4, 'ServiHogar', 'servihogar@gmail.com', 'Negocio_246', '4772948294', '24 A SUR 3539, SANTA MONICA', 'SERVICIOS DOMESTICOS')
insert into Negocio (ID_Negocio,Nombre_negocio,Correo_Electronico, Contraseña, Telefono_Negocio, Domicilio, Tipo_servicio) values(
5, 'Jardineria ProHogar', 'jardineria_prohogar@gmail.com','Negocio_246', '4778029482', 'LAZARO CARDENAS NO. 2471', 'JARDINERIA')


insert into Administrador values(1, 'Jose Samuel', 'Aldana', 'josesamuel@gmail.com', 'Admin_1234')
insert into Administrador values(2, 'Jessica', 'Jantes', 'jesicajantes@gmail.com', 'Admin_123')
insert into Administrador values(3, 'Mauricio', 'Vela', 'maurixiovela@gmail.com', 'Admin_123')
insert into Administrador values(4, 'Juan Carlos', 'Carrera', 'juancarlos@gmail.com', 'Admin_123')
insert into Administrador values(5, 'Brandon', 'Aguiñaga', 'brandonaguiñaga@gmail.com', 'Admin_123')


insert into Calificacion values (1, 1, 1, 4, 'Muy buen servicio')
insert into Calificacion values (2,2,2,5, 'Cuidan bien las plantas')
insert into Calificacion values(3,3,3,3, 'el resultado fue el esperado')
insert into Calificacion values (4,4,4, 4, 'me agrado el servicio ofrecido')
insert into Calificacion values(5,5,5, 5, 'Lo volveria a contratar')


insert into Negocios_Favoritos values(1,3)
insert into Negocios_Favoritos values(2,4)
insert into Negocios_Favoritos values(3,1)
insert into Negocios_Favoritos values(4, 2)
insert into Negocios_Favoritos values(5, 5)


insert into Solicitud (ID_solicitud,ID_Negocio,Estado) values(1,1, 'PENDIENDTE')
insert into Solicitud (ID_solicitud,ID_Negocio,Estado) values(2,2, 'APROBADO')
insert into Solicitud (ID_solicitud,ID_Negocio,Estado) values(3,3, 'PENDIENDTE')
insert into Solicitud (ID_solicitud,ID_Negocio,Estado) values(4,4, 'APROBADO')
insert into Solicitud (ID_solicitud,ID_Negocio,Estado) values(5,5, 'PENDIENDTE')


INSERT INTO publicacion (ID_Post, ID_Negocio, Titulo, Descripcion, Fecha_creacion, precio) VALUES
(1, 1, 'Limpieza Profunda de Hogar', 'Ofrecemos servicios de limpieza profesional para el hogar. Nos aseguramos de que cada rincón de tu casa quede impecable', '2023-02-11', 1200.00),
(2, 2, 'Servicios de Jardinería', 'Realizamos servicios de jardinería profesional para mantener su jardín hermoso y cuidado. Ofrecemos mantenimiento regular o servicios de diseño y paisajismo', '2022-06-11', 2000.00),
(3, 3, 'Reparación de Electrodomésticos', 'Somos especialistas en la reparación de electrodomésticos, como lavadoras, secadoras, refrigeradores, etc. Ofrecemos precios justos y servicio de calidad', '2022-02-10', 1500.00),
(4, 4, 'Servicios Domésticos', 'Ofrecemos una amplia gama de servicios domésticos, desde limpieza hasta cuidado de niños y ancianos. Nos aseguramos de que tu hogar esté en buenas manos', '2020-01-24', 1800.00),
(5, 5, 'Mantenimiento de Jardines', 'Ofrecemos servicios de mantenimiento de jardines y patios para mantener su espacio al aire libre limpio y bien cuidado', '2023-04-16', 1500.00);


SELECT * FROM Cliente;
SELECT * FROM Negocio;
SELECT * FROM Administrador;
SELECT * FROM Calificacion;
SELECT * FROM Negocios_Favoritos;
SELECT * FROM Solicitud;
SELECT * FROM publicacion;