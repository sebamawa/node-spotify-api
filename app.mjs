import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

// import { router } from './routes/tracks.mjs';
import router from './routes/index.mjs';

import dbConnect from './config/mongo.mjs';

const app = express();

app.use(cors());
app.use(express.json()); // permite recibir jsons
app.use(express.static("storage")); // deja publicos los recursos en la carpeta storage   

const port = process.env.PORT || 3000;

/**
 * Importación de rutas
 */
//TODO: localhost/api/...
app.use("/api", router);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

dbConnect();