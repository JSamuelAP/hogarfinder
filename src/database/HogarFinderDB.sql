create database HogarFinder
use HogarFinder


create table Cliente
(ID_Cliente int identity(1,1), 
Nombre char(30) not null,
Apellido char(30) not null,
Correo_Electronico char(40) not null,
Contraseña char(30) not null,
foto varbinary,
primary key ( ID_Cliente ))

ALTER TABLE Cliente ADD CONSTRAINT UQ_Correo UNIQUE (Correo_Electronico);


create table Negocio
(ID_Negocio int identity(1,1),
Nombre_negocio char (40) not null,
Correo_Electronico char(40)not null,
Contraseña char (40) not null,
Telefono_Negocio varchar(10) not null,
Domicilio char (40) not null,
Tipo_Negocio char (40),
Tipo_servicio char (40),
foto varbinary,
primary key (ID_Negocio))

ALTER TABLE Negocio ADD CONSTRAINT UQ_CorreoNegocio UNIQUE (Correo_Electronico);
ALTER TABLE Negocio ALTER COLUMN foto char(25);

create table Administrador
(ID_Administrador int identity(1,1),
Nombre char (30) not null,
Apellido char (30) not null,
Correo_Electronico char(40) not null,
Contraseña char (30) not null,
primary key (ID_Administrador))

ALTER TABLE Administrador ADD CONSTRAINT UQ_CorreoAdmin UNIQUE (Correo_Electronico);

create table Calificacion
(Id_Calificacion int identity(1,1),
ID_Negocio int not null,
ID_Cliente int not null,
Puntaje int,
Comentario varchar(max),
primary key (id_calificacion),
Foreign key (ID_Negocio) references Negocio (ID_Negocio),
Foreign Key (ID_Cliente) references Cliente (ID_Cliente))


create table Negocios_Favoritos
(ID_Cliente int not null,
ID_Negocio int not null,
Foreign key (ID_Negocio) references Negocio (ID_Negocio),
Foreign Key (ID_Cliente) references Cliente (ID_Cliente))

ALTER TABLE Negocios_Favoritos ADD CONSTRAINT UQ_Favorito UNIQUE (ID_Cliente, ID_Negocio);

create table Solicitud
(ID_solicitud int identity(1,1),
ID_Negocio int not null,
Comprobante_domicilio varbinary,
INE varbinary,
RFC varbinary,
Estado char(30),
primary key (ID_solicitud),
Foreign key (ID_Negocio) references Negocio (ID_Negocio))

ALTER TABLE Solicitud ADD CONSTRAINT UQ_Solicitud UNIQUE (ID_Negocio);


create table publicacion
(ID_Post int identity(1,1),
ID_Negocio int not null,
Titulo char(50),
Descripcion char (200),
foto varbinary,
Fecha_creacion date,
precio decimal,
primary key (ID_Post),
Foreign key (ID_Negocio) references Negocio (ID_Negocio))

ALTER TABLE publicacion ALTER COLUMN foto char(25);


create table reporte (
	ID_Cliente int not null,
	ID_Negocio int not null,
	problema varchar(200) not null,
	Foreign key (ID_Negocio) references Negocio (ID_Negocio),
	Foreign Key (ID_Cliente) references Cliente (ID_Cliente)
)
