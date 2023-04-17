create database HogarFinder
use HogarFinder


create table Cliente
(ID_Cliente int not null, 
Nombre char(30) not null,
Apellido char(30) not null,
Correo_Electronico char(40) not null,
Contrase�a char(30) not null,
foto varbinary,
primary key ( ID_Cliente ))


create table Negocio
(ID_Negocio int not null,
Nombre_negocio char (40) not null,
Correo_Electronico char(40)not null,
Contrase�a char (40) not null,
Telefono_Negocio varchar(10) not null,
Domicilio char (40) not null,
Tipo_Negocio char (40),
Tipo_servicio char (40),
foto varbinary,
primary key (ID_Negocio))


create table Administrador
(ID_Administrador int not null,
Nombre char (30) not null,
Apellido char (30) not null,
Correo_Electronico char(40) not null,
Contrase�a char (30) not null,
primary key (ID_Administrador))


create table Calificacion
(Id_Calificacion int not null,
ID_Negocio int not null,
ID_Cliente int not null,
Puntaje int,
Comentario char(60),
primary key (id_calificacion),
Foreign key (ID_Negocio) references Negocio (ID_Negocio),
Foreign Key (ID_Cliente) references Cliente (ID_Cliente))


create table Negocios_Favoritos
(ID_Cliente int not null,
ID_Negocio int not null,
Foreign key (ID_Negocio) references Negocio (ID_Negocio),
Foreign Key (ID_Cliente) references Cliente (ID_Cliente))


create table Solicitud
(ID_solicitud int not null,
ID_Negocio int not null,
Comprobante_domicilio varbinary,
INE varbinary,
RFC varbinary,
Estado char(30),
primary key (ID_solicitud),
Foreign key (ID_Negocio) references Negocio (ID_Negocio))


create table publicacion
(ID_Post int not null,
ID_Negocio int not null,
Titulo char(50),
Descripcion char (200),
foto varbinary,
Fecha_creacion date,
precio decimal,
primary key (ID_Post),
Foreign key (ID_Negocio) references Negocio (ID_Negocio))