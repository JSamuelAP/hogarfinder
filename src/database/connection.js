import sql from "mssql";
import config from "../config";

// Configuraciones para la conexción a la BD
const dbSettings = {
	user: config.dbUser,
	password: config.dbPassword,
	server: config.dbServer,
	dtabase: config.dbName,
	options: {
		encrypt: true, // Para Azure
		trustServerCertificate: true, // true para desarrollo local
	},
};

// Obtener la conexión a la BD
export async function getConnection() {
	try {
		const pool = await sql.connect(dbSettings);
		return pool;
	} catch (error) {
		console.error(error);
	}
}

export { sql };
