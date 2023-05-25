# HogarFinder 🏡

![Captura de pantalla del index](public/images/captura.png)

## Descripción 🏝️

HogarFinder es una aplicación web que le ofrece a las empresas pequeñas y emprendimientos de León Guanajuato la oportunidad de ampliar su visibilidad y promover sus servicios domesticos de manera efectiva. Nuestro objetivo es proporcionar una plataforma intuitiva y fácil de usar donde las empresas y personas puedan mostrar su información de contacto y servicios, permitiendo así conectar de manera directa con sus potenciales clientes.

Entre las carácteristicas de esta aplicación se encuentra:

- Creación de cuentas de usuario para cientes, negocios y administradores
- Publicación de servicios
- Caja de comentarios para calificar negocios
- Reportes a negocios
- Filtrado de servicios

Este proyecto fue desarrollado para la asignatura de Ingeniería de Software, de la carrera de Ingeniería en Sistemas Computacionales del Técnológico Nacional de México Campus León.

## Tecnologías 🤖

- Node.js
- Express
- Pug
- Bootstrap 6
- SQL Server 2022
- Multer
- Moment.js

## Autores ✒️

- **JSamuel**

  - [LinkeIn](https://www.linkedin.com/in/jsamuelap/)
  - [Twitter](https://twitter.com/JSamuelAP)
  - [GitHub](https://github.com/JSamuelAP)
  - [Portafolio 💼](https://jsamuelap.github.io/)
  - [Email 📧](mailto:sp4619168@gmail.com)

- **Juan Carlos**
- **Mauricio Vela**
- **Jesica Abigail**

## Ver ejemplo en vivo 👀

Este proyecto no cuenta con una demostración pública en internet. Si se desea probar se tiene que descargar el proyecto y seguir los pasos de la instalación.

## Instalación y uso 💻

Es necesario tener instalado Node para ejecutar los siguientes comandos en una terminal:

```bash
npm install
npm run dev
```

También es importante mencionar que en un archivo `.env` se declaran las variables de entorno:

```
PORT = 3000
DB_USER = tu usuario de SQL Server
DB_PASSWORD = contraseña del usuario
DB_SERVER = localhost
DB_DATABASE = HogarFinder
```

Y que la base de datos debe estar configurado para aceptar conexiones en el puerto TCP/IP 1433.

Si todo sale bien, se puede acceder al programa en [localhost:3000](localhost:3000)
