INSERT INTO Cliente (Nombre, Apellido, Correo_Electronico, Contraseña)
	VALUES ('Santiago','Hernández','santiago.hernandez@gmail.com','Algo_1234'),
		   ('Ana', 'García', 'ana.garcia@gmail.com', 'Algo_1234'),
		   ('Marcos', 'Ríos', 'marcos.rios@gmail.com', 'Algo_1234'),
		   ('Gabriela', 'Fernández', 'gabriela.fdez@gmail.com','Algo_1234'),
		   ('Carlos', 'Ramirez', 'carlos.ramirez@gmail.com', 'Algo_1234');


INSERT INTO Negocio
	(Nombre_negocio, Correo_Electronico, Contraseña, Telefono_Negocio, Domicilio, Tipo_Negocio, Tipo_servicio)
	VALUES
		('Limpieza Express Hogar','limpiezaexpress@gmail.com', 'Negocio_246', '4772930482', 'AV. J ORTIZ DE DEOMINGUEZ NO. 518', 'Empresa', 'Limpieza'),
		('Jardines en orden', 'jardinezenorden@gmail.com', 'Negocio_246', '4772394819', 'HERMANOS ESCOBAR NO. 3213', 'Empresa', 'Jardineria'),
		('Repara y Ahorra', 'reparayahorra@gmail.com', 'Negocio_246', '4772939408', 'AV. DE LAS FUENTES NO. 5500', 'Trabajador autonómo', 'Reparacion'),
		('Super Bros Plomeria', 'mario@gmail.com', 'Negocio_246', '4772948294', '24 A SUR 3539, Brooklyn', 'Empresa', 'Plomeria'),
		('Juan Electrico', 'juan@gmail.com','Negocio_246', '4778029482', 'LAZARO CARDENAS NO. 2471', 'Trabajador autonómo', 'Electricidad'),
		('Gepetto', 'gepetto@gmail.com','Negocio_246', '4778029482', 'LAZARO CARDENAS NO. 2471, LAZIO', 'Trabajador autonómo', 'Carpinteria'),
		('Pinturas Leonardo Da Vinci', 'leonardopinturas@gmail.com','Negocio_246', '4778029482', 'LA TOSCANA NO. 1941, Florencia', 'Empresa', 'Pintura'),
		('Servicio de niñera Vicky', 'vicky@gmail.com','Negocio_246', '4778029482', 'Calle Magica NO. 12, Dimmsdale', 'Trabajador autonómo', 'Niñeras');


INSERT INTO Administrador
	VALUES ('Samuel', 'Aldana', 'josesamuel@gmail.com', 'Admin_1234'),
		   ('Jessica', 'Jantes', 'jesicajantes@gmail.com', 'Admin_123'),
		   ('Mauricio', 'Vela', 'maurixiovela@gmail.com', 'Admin_123'),
		   ('Carlos', 'Carrera', 'juancarlos@gmail.com', 'Admin_123');


INSERT INTO Calificacion
	VALUES (1, 1, 4, 'Muy buen servicio'),
		   (2, 1, 5, 'Cuidan bien las plantas'),
		   (3, 2, 1, 'Cobran demasiado y no reparan bien'),
		   (4, 2, 2, 'Dejaron un desastre en mi baño'),
		   (5, 3, 3, 'Cobra un poco caro pero cumple con su trabajo'),
		   (6, 4, 4, 'Hace trabajos hermosos, con mucho detalle y dedicación'),
		   (7, 4, 5, 'Trabaja rapido y muy bien, me agrada'),
		   (8, 5, 5, 'Muy confiable, trata bien a los niños');


INSERT INTO Negocios_Favoritos
	VALUES (1, 1), (1, 2), (2, 4), (2, 5), (3, 1), (3, 7), (4, 6), (4, 7), (5, 8), (5, 2);


INSERT INTO Solicitud (ID_Negocio, Comprobante_domicilio, INE, RFC, Estado)
	VALUES (1, 'comprobante.pdf', 'ine.pdf', 'rfc.pdf', 'En revisión'),
		   (2, 'comprobante.pdf', 'ine.pdf', 'rfc.pdf', 'En revisión'),
		   (3, 'comprobante.pdf', 'ine.pdf', 'rfc.pdf', 'En revisión'),
		   (4, 'comprobante.pdf', 'ine.pdf', 'rfc.pdf', 'En revisión'),
		   (5, 'comprobante.pdf', 'ine.pdf', 'rfc.pdf', 'En revisión'),
		   (6, 'comprobante.pdf', 'ine.pdf', 'rfc.pdf', 'En revisión'),
		   (7, 'comprobante.pdf', 'ine.pdf', 'rfc.pdf', 'En revisión'),
		   (8, 'comprobante.pdf', 'ine.pdf', 'rfc.pdf', 'En revisión');


INSERT INTO publicacion (ID_Negocio, Titulo, Descripcion, Fecha_creacion, precio, foto)
	VALUES
		(1, 'Limpieza Profunda de Hogar', 'Ofrecemos servicios de limpieza profesional para el hogar. Nos aseguramos de que cada rincón de tu casa quede impecable', '2023-02-11', 1200.00, 'productos-limpieza.jpg'),
		(2, 'Servicios de Jardinería', 'Realizamos servicios de jardinería profesional para mantener su jardín hermoso y cuidado.', '2022-06-11', 2000.00, 'jardin.jpg'),
 	    (3, 'Reparación de Electrodomésticos', 'Somos especialistas en la reparación de electrodomésticos, como lavadoras, secadoras, refrigeradores, etc.', '2022-02-10', 1500.00, 'reparaciones.jpg'),
 	    (4, 'Reparación de tuberías', '¿Tiene fugas de agua en su baño o cocina? Los super hermanos Mario y Luiggi a su disposición para tratar cualquier problema de plomería.', '2020-01-24', 1800.00, 'plomeria.jpg'),
		(5, 'Electrico', 'más de 10 años de experiencia, doy solución a problemas de electricidad de su hogar siguiendo protocolos de seguridad en tiempo record.', '2022-05-11', 850.00, 'electricidad.jpg'),
		(6, 'Muebles de madera', 'Buenos días comunidad, ofrezco mis servicios de carpinteriá, realizo sillas, mesas y cualquier acabado de madera, garantizo alta calidad.', '2023-04-16', 900.00, 'carpinteria.jpg'),	
		(7, 'Pintura y decoración de fachadas', 'Pintamos todo tipo de fachadas con materiales de calidad, mi equipo se encargara de dejar su hogar bonito y duradero.', '2021-03-15', 500.00, 'pintura.jpg'),
		(8, 'Servicio de niñera', 'Cuido niños por las tardes, se cocinar y doy clases de matematicas e inglés para sus pequeños.', '2023-05-04', 300.00, 'niñera.jpg');

INSERT INTO reporte
	VALUES
		(1, 2, 'La empresa no llego a mi domicilio y me exigio que aun así les hiciera el deposito'),
		(2, 2, 'Robaron varias flores de mi jardín, segun ellos fue porque ya estaban marchitadas, y cuando se las pedí no me las devolvieron.'),
		(3, 3, 'Ya va dos veces que mando a reparar mi tele y lavadora y dicen que no tiene solución, contrate a otro tecnico y me los reparo sin problemas'),
		(4, 1, 'Utilizaron productos dañinos para mi piso de madera y no quieren pagar su tratamiento'),
		(1, 8, 'No hace bien su trabajo, no cuida a los niños y solo ve la tele y agarra comida de mi cocina');

SELECT * FROM Cliente;
SELECT * FROM Negocio;
SELECT * FROM Administrador;
SELECT * FROM Calificacion;
SELECT * FROM Negocios_Favoritos;
SELECT * FROM Solicitud;
SELECT * FROM publicacion;
SELECT * FROM reporte;

-- Pruebas revisadas en clase, no ejecutar
INSERT INTO Cliente (Nombre, Apellido, Correo_Electronico, Contraseña)
OUTPUT INSERTED.ID_Cliente
VALUES ('Jose', 'Perez', 'jose1@gmail.com', 'patito26')

UPDATE Negocio SET Nombre_negocio = 'Casas y jardines' WHERE ID_Negocio = 2;

DELETE FROM Solicitud WHERE ID_Solicitud = 4

