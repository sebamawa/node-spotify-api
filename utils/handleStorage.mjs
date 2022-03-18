import multer from "multer";
import { dirname } from 'path';
import { fileURLToPath } from 'url';

// configuracion de multer
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        const __dirname = dirname(fileURLToPath(import.meta.url));
        const pathStorage = `${__dirname}/../storage`; // destino para almacenar files
        cb(null, pathStorage); // primer argumento: error al guardar el archivo
    },
    filename: function(req, file, cb) {
        //TODO: mi-cv.pdf mi-foto.png mi-video.mp4
        const ext = file.originalname.split(".").pop(); // obtiene la extensión del archivo
        // genera un nombre de archivo aleatorio
        const fileName = `file-${Date.now()}.${ext}`; // nombre del archivo
        cb(null, fileName);   
    }
});

// multer se usa en un middleware
const uploadMiddleware = multer({ storage });

export { uploadMiddleware };