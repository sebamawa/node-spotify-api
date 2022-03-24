import dotenv from 'dotenv';
import fs from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { matchedData } from 'express-validator';
dotenv.config();
import storageModel from '../models/nosql/storage.mjs';
import { handleHttpError } from '../utils/handleError.mjs';

const PUBLIC_URL = process.env.PUBLIC_URL;
const __dirname = dirname(fileURLToPath(import.meta.url));
const MEDIA_PATH = `${__dirname}/../storage`;

/**
 * Obtener lista de la base de datos
 * @param {*} req
 * @param {*} res
 */
const getItems = async (req, res) => {
    try {
        const data = await storageModel.find({});
        // const data = ["tema1", "tema2", "tema3"];
        res.send({data});
    } catch (e) {
        handleHttpError(res, 'ERROR_GET_ITEMS', 403);
    }
}

/**
 * Obtener un detalle
 * @param {*} req
 * @param {*} res
 */
 const getItem = async (req, res) => {
    try {
        const { id } = matchedData(req);
        const data = await storageModel.findById(id);//({ _id: id });
        res.send({ data }); 
    } catch (e) {
        console.log(e);
        handleHttpError(res, "ERROR_GET_ITEM", 403);
    }
 }

/**
 * Insertar un registro
 * @param {*} req
 * @param {*} res
 */
const createItem = async (req, res) => {
    try {
        const { body, file } = matchedData(req);
        const fileData = {
            filename: file.filename,
            url: `${PUBLIC_URL}/${file.filename}`
        }
        // console.log(fileData);
        const data = await storageModel.create(fileData);
        res.send({data});        
    } catch (e) {
        console.log(e);
        handleHttpError(res, 'ERROR_CREATE_ITEM', 403);
    }
}

/**
 * Actualizar un registro
 * @param {*} req
 * @param {*} res
 */
// const updateItem = async (req, res) => {} // para el uso de multimedia no se usa (flujo: crear - borrar)

/**
 * Eliminar un registro
 * @param {*} req
 * @param {*} res
 */
const deleteItem = async (req, res) => {
    try {
        const { id } = matchedData(req);
        const dataFile = await storageModel.findById(id); //({ _id: id });
        //elimina registro de la bd
        // await storageModel.delete({ _id: id }); // borrado logico
        await storageModel.deleteOne({_id: id}); // borrado fisico de registro
        // borra archivo fisicamente (se le pasa como argumeto la ruta absoluta del archivo)
        const { filename } = dataFile;
        const filePath = `${MEDIA_PATH}/${filename}`;
        fs.unlinkSync(filePath);
        const data = {
            filePath,
            deleted: 1
        }
        res.send({ data }); 
    } catch (e) {
        console.log(e);
        handleHttpError(res, "ERROR_DELETE_ITEM", 403);
    }    
}

export { getItems, getItem, createItem, deleteItem };