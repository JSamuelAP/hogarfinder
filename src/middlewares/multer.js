import multer from "multer";
const path = require("path");

// Configuración para el almacenamineto de la imagen
const storageImg = multer.diskStorage({
	// Donde se guardara la imagen
	destination: (req, file, cb) => cb(null, "public/images/"),
	// Nombre de la imagen
	filename: (req, file, cb) => {
		const ext = file.originalname.split(".").pop();
		cb(null, `${Date.now()}.${ext}`);
	},
});

const uploadImg = multer({
	storage: storageImg,
	limits: { fileSize: 2000000 }, // 2MB maximo
	fileFilter: (req, file, cb) => {
		const filetypes = /jpeg|jpg|png|gif/; // tipos de imagenes permitidas
		const mimetype = filetypes.test(file.mimetype); // tipo de archivo recibido
		const extname = filetypes.test(path.extname(file.originalname)); // extensión del archivo
		if (mimetype && extname) return cb(null, true);
		cb(`Error: ${file.originalname} no es una imágen válida`);
	},
});

// Configuración para el almacenamineto del pdf
const storagePdf = multer.diskStorage({
	// Donde se guardara el pdf
	destination: (req, file, cb) => cb(null, "public/pdf/"),
	// Nombre del pdf
	filename: (req, file, cb) => {
		cb(null, Date.now() + ".pdf");
	},
});

const uploadPdf = multer({
	storage: storagePdf,
	limits: { fileSize: 5000000 }, // 5MB maximo
	fileFilter: (req, file, cb) => {
		const filetypes = /pdf/; // tipos de imagenes permitidas
		const mimetype = filetypes.test(file.mimetype); // tipo de archivo recibido
		const extname = filetypes.test(path.extname(file.originalname)); // extensión del archivo
		if (mimetype && extname) return cb(null, true);
		cb(`Error: ${file.originalname} no es un PDF válido`);
	},
});

export { uploadImg, uploadPdf };
