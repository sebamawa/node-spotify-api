/**
 * Scanea los archivos de rutas para que se carguen desde el archivo principal
 */

import { Console } from "console";
import express from "express";
const router = express.Router();
import fs from "fs";
import { dirname } from 'path';
import { fileURLToPath } from 'url';

//const PATH_ROUTES = __dirname; // variable no definida en ES module scope
const __dirname = dirname(fileURLToPath(import.meta.url));
const PATH_ROUTES = __dirname;

// remueve extension del nombre de archivo
const removeExtension = (fileName) => {
    //TODO tracks.js [tracks, js]
    return fileName.split('.').shift(); // nombre del archivo sin extensión
                                        // shift() obtiene el primer elemento de un arreglo
}

// carga modulo ES dimamicamente
const loadModule = async (path) => {
    try {
        const module = await import(path);
        return module;
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

// https://stackoverflow.com/questions/54569588/array-data-gets-lost-in-nested-async-arrow-function-loop
const filesNames = fs.readdirSync(PATH_ROUTES);
for (let file of filesNames) {
    const fileWithOutExtension = removeExtension(file);
    // const skip = ["index"].includes(fileWithOutExtension);  
    // if (!skip) {
    if (fileWithOutExtension !== "index") {    
        const routesModule = await loadModule(`file:${PATH_ROUTES}/${file}`);
        // console.log(`modulo cargado ... ${fileWithOutExtension}`);
        router.use(`/${fileWithOutExtension}`, routesModule.default);
    }
}

export default router;