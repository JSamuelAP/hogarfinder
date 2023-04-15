import { getConnection, sql, queries } from "../database";

export const renderLogin = async (req, res) => {
	res.render("login", { title: "Iniciar sesión" });
};

export const renderSignup = async (req, res) => {
	res.render("signup", { title: "Crear cuenta" });
};
