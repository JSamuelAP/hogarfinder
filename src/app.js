import express from "express";
import session from "express-session";
import config from "./config";
import authRoutes from "./routes/auth.routes";
import clienteRoutes from "./routes/cliente.routes";
import negocioRoutes from "./routes/negocio.routes";
import servicioRoutes from "./routes/servicio.routes";
import adminRoutes from "./routes/administrador.routes";

const app = express();

// Configuraciones
app.set("port", config.port);
app.set("views", "./src/views");
app.set("view engine", "pug");

// Middlewares
// Antes de que se lleguen a las rutas
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false })); // Para poder recibir datos de formularios HTML
app.use(
	session({
		secret: "mysecretkey_hogarfinder",
		resave: false,
		saveUninitialized: false,
	})
);

app.use(authRoutes);
app.use(clienteRoutes);
app.use(negocioRoutes);
app.use(servicioRoutes);
app.use(adminRoutes);
app.use(function (req, res, next) {
	res.status(404).render("404", { title: "Página no encontrada" });
});

export default app;
