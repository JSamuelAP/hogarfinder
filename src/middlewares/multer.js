import multer from "multer";

// Configuración para el almacenamineto de la imagen
const storage = multer.diskStorage({
	// Donde se guardara la imagen
	destination: (req, file, cb) => cb(null, "public/images/"),
	// Nombre de la imagen
	filename: (req, file, cb) => {
		const ext = file.originalname.split(".").pop();
		cb(null, `${Date.now()}.${ext}`);
	},
});

const upload = multer({ storage: storage });

export default upload;
