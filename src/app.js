import express from "express";
import config from "./config";
import clientesRoutes from "./routes/cliente.routes";

const app = express();

// Configuraciones
app.set("port", config.port);

// Middlewares
// Antes de que se lleguen a las rutas
app.use(express.json());
app.use(express.urlencoded({ extended: false })); // Para poder recibir datos de formularios HTML

app.use(clientesRoutes);

export default app;
