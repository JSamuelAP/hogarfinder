import express from "express";
import config from "./config";
import cuentaRoutes from "./routes/cuenta.routes";
import servicioRoutes from "./routes/servicio.routes";

const app = express();

// Configuraciones
app.set("port", config.port);
app.set("views", "./src/views");
app.set("view engine", "pug");

// Middlewares
// Antes de que se lleguen a las rutas
app.use(express.json());
app.use(express.urlencoded({ extended: false })); // Para poder recibir datos de formularios HTML

app.use(cuentaRoutes);
app.use(servicioRoutes);

export default app;
