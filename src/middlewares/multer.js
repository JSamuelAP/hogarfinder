import multer from "multer";

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

const uploadImg = multer({ storage: storageImg });

// Configuración para el almacenamineto del pdf
const storagePdf = multer.diskStorage({
	// Donde se guardara el pdf
	destination: (req, file, cb) => cb(null, "public/pdf/"),
	// Nombre del pdf
	filename: (req, file, cb) => {
		cb(null, Date.now() + ".pdf");
	},
});

const uploadPdf = multer({ storage: storagePdf });

export { uploadImg, uploadPdf };
