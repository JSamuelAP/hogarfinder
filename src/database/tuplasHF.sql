insert into Cliente(Nombre, Apellido, Correo_Electronico, Contraseña)
	values ('Santiago','Hernández','santiago.hernandez@gmail.com','Algo_1234'),
		   ('Ana', 'García', 'ana.garcia@gmail.com', 'Algo_1234'),
		   ('Marcos', 'Ríos', 'marcos.rios@gmail.com', 'Algo_1234'),
		   ('Gabriela', 'Fernández', 'gabriela.fdez@gmail.com','Algo_1234'),
		   ('Carlos', 'Ramirez', 'carlos.ramirez@gmail.com', 'Algo_1234');


insert into Negocio (Nombre_negocio,Correo_Electronico,Contraseña, Telefono_Negocio, Domicilio, Tipo_servicio)
	values ('LimpiezaExpressHogar','limpiezaexHogar@gmail.com', 'Negocio_246', '4772930482', 'AV. J ORTIZ DE DEOMINGUEZ NO. 518', 'LIMPIEZA'),
		   ('Jardinez en orden', 'jardinezenorden@gmail.com', 'Negocio_246', '4772394819', 'HERMANOS ESCOBAR NO. 3213', 'JARDINERIA'),
		   ('ReparaYAhogar', 'repara_yahogar@gmail.com', 'Negocio_246', '4772939408', 'AV. DE LAS FUETES NO. 5500', 'REPARACIONES'),
		   ('ServiHogar', 'servihogar@gmail.com', 'Negocio_246', '4772948294', '24 A SUR 3539, SANTA MONICA', 'SERVICIOS DOMESTICOS'),
		   ('Jardineria ProHogar', 'jardineria_prohogar@gmail.com','Negocio_246', '4778029482', 'LAZARO CARDENAS NO. 2471', 'JARDINERIA');

UPDATE Negocio SET Tipo_Negocio = 'Empresa' WHERE ID_Negocio = 1;
UPDATE Negocio SET Tipo_Negocio = 'Trabajador autónomo' WHERE ID_Negocio = 2;
UPDATE Negocio SET Tipo_Negocio = 'Empresa' WHERE ID_Negocio = 3;
UPDATE Negocio SET Tipo_Negocio = 'Trabajador autónomo' WHERE ID_Negocio = 4;
UPDATE Negocio SET Tipo_Negocio = 'Empresa' WHERE ID_Negocio = 5;


insert into Administrador
	values ('Jose Samuel', 'Aldana', 'josesamuel@gmail.com', 'Admin_1234'),
		   ('Jessica', 'Jantes', 'jesicajantes@gmail.com', 'Admin_123'),
		   ('Mauricio', 'Vela', 'maurixiovela@gmail.com', 'Admin_123'),
		   ('Juan Carlos', 'Carrera', 'juancarlos@gmail.com', 'Admin_123'),
		   ('Brandon', 'Aguiñaga', 'brandonaguiñaga@gmail.com', 'Admin_123');


insert into Calificacion
	values (1, 1, 4, 'Muy buen servicio'),
		   (2,2,5, 'Cuidan bien las plantas'),
		   (3,3,3, 'el resultado fue el esperado'),
		   (4,4, 4, 'me agrado el servicio ofrecido'),
		   (5,5, 5, 'Lo volveria a contratar');


insert into Negocios_Favoritos
	values (1, 3), (2, 4), (3, 1), (4, 2), (5, 5), (1, 1), (2, 5), (3, 3), (4, 4), (5, 2);


insert into Solicitud (ID_Negocio, Estado)
	values (1, 'En revisión'), (2, 'Aceptada'), (3, 'Rechazada'), (4, 'En revisión'), (5, 'En revisión');


INSERT INTO publicacion (ID_Negocio, Titulo, Descripcion, Fecha_creacion, precio)
	VALUES (1, 'Limpieza Profunda de Hogar', 'Ofrecemos servicios de limpieza profesional para el hogar. Nos aseguramos de que cada rincón de tu casa quede impecable', '2023-02-11', 1200.00),
		   (2, 'Servicios de Jardinería', 'Realizamos servicios de jardinería profesional para mantener su jardín hermoso y cuidado. Ofrecemos mantenimiento regular o servicios de diseño y paisajismo', '2022-06-11', 2000.00),
		   (3, 'Reparación de Electrodomésticos', 'Somos especialistas en la reparación de electrodomésticos, como lavadoras, secadoras, refrigeradores, etc. Ofrecemos precios justos y servicio de calidad', '2022-02-10', 1500.00),
		   (4, 'Servicios Domésticos', 'Ofrecemos una amplia gama de servicios domésticos, desde limpieza hasta cuidado de niños y ancianos. Nos aseguramos de que tu hogar esté en buenas manos', '2020-01-24', 1800.00),
		   (5, 'Mantenimiento de Jardines', 'Ofrecemos servicios de mantenimiento de jardines y patios para mantener su espacio al aire libre limpio y bien cuidado', '2023-04-16', 1500.00);

INSERT INTO reporte
	VALUES (1, 2, 'La empresa no llego a mi domicilio y me exigio que aun así les hiciera el deposito'),
		   (5, 1, 'Robaron varias flores de mi jardín, segun ellos fue porque ya estaban marchitadas, y cuando se las pedí no me las devolvieron.'),
		   (3, 3, 'Ya va dos veces que mando a reparar mi tele y lavadora y dicen que no tiene solución, contrate a otro tecnico y me los reparo sin problemas');

SELECT * FROM Cliente;
SELECT * FROM Negocio;
SELECT * FROM Administrador;
SELECT * FROM Calificacion;
SELECT * FROM Negocios_Favoritos;
SELECT * FROM Solicitud;
SELECT * FROM publicacion;
SELECT * FROM reporte;

INSERT INTO Cliente (Nombre, Apellido, Correo_Electronico, Contraseña)
VALUES ('Jose', 'Perez', 'jose@gmail.com', 'patito26')

UPDATE Negocio SET Nombre_negocio = 'Casas y jardines' WHERE ID_Negocio = 2;

DELETE FROM Solicitud WHERE ID_Solicitud = 4

