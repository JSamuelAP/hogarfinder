CREATE DATABASE HogarFinder
USE HogarFinder

CREATE TABLE Cliente (
	ID_Cliente int identity(1,1), 
	Nombre char(30) NOT NULL,
	Apellido char(30) NOT NULL,
	Correo_Electronico char(40) UNIQUE NOT NULL,
	Contraseña char(30) NOT NULL,
	foto char(25),
	primary key ( ID_Cliente )
);


CREATE TABLE Negocio (
	ID_Negocio int identity(1,1),
	Nombre_negocio char (40) NOT NULL,
	Correo_Electronico char(40) UNIQUE NOT NULL,
	Contraseña char (40) NOT NULL,
	Telefono_Negocio varchar(10) NOT NULL,
	Domicilio char (40) NOT NULL,
	Tipo_Negocio char (40),
	Tipo_servicio char (40),
	foto char(25),
	primary key (ID_Negocio)
);


CREATE TABLE Administrador (
	ID_Administrador int identity(1,1),
	Nombre char (30) NOT NULL,
	Apellido char (30) NOT NULL,
	Correo_Electronico char(40) UNIQUE NOT NULL,
	Contraseña char (30) NOT NULL,
	primary key (ID_Administrador)
);


CREATE TABLE Calificacion (
	Id_Calificacion int identity(1,1),
	ID_Negocio int NOT NULL,
	ID_Cliente int NOT NULL,
	Puntaje int,
	Comentario varchar(max),
	primary key (id_calificacion),
	Foreign key (ID_Negocio) references Negocio (ID_Negocio),
	Foreign Key (ID_Cliente) references Cliente (ID_Cliente)
);


CREATE TABLE Negocios_Favoritos (
	ID_Cliente int NOT NULL,
	ID_Negocio int NOT NULL,
	Foreign key (ID_Negocio) references Negocio (ID_Negocio),
	Foreign Key (ID_Cliente) references Cliente (ID_Cliente),
	CONSTRAINT UQ_Favorito UNIQUE (ID_Cliente, ID_Negocio)
);


CREATE TABLE Solicitud (
	ID_solicitud int identity(1,1),
	ID_Negocio int UNIQUE NOT NULL,
	Comprobante_domicilio char(25),
	INE char(25),
	RFC char(25),
	Estado char(30),
	primary key (ID_solicitud),
	Foreign key (ID_Negocio) references Negocio (ID_Negocio)
);


CREATE TABLE publicacion (
	ID_Post int identity(1,1),
	ID_Negocio int NOT NULL,
	Titulo char(50),
	Descripcion char (200),
	foto char(25),
	Fecha_creacion date,
	precio decimal,
	primary key (ID_Post),
	Foreign key (ID_Negocio) references Negocio (ID_Negocio)
);


CREATE TABLE reporte (
	ID_Cliente int NOT NULL,
	ID_Negocio int NOT NULL,
	problema varchar(200) NOT NULL,
	Foreign key (ID_Negocio) references Negocio (ID_Negocio),
	Foreign Key (ID_Cliente) references Cliente (ID_Cliente)
);
