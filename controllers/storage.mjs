import dotenv from 'dotenv';
dotenv.config();
import storageModel from '../models/nosql/storage.mjs';
const PUBLIC_URL = process.env.PUBLIC_URL;

/**
 * Obtener lista de la base de datos
 * @param {*} req
 * @param {*} res
 */
const getItems = async (req, res) => {
    const data = await storageModel.find({});
    // const data = ["tema1", "tema2", "tema3"];
    res.send({data});
}

/**
 * Obtener un detalle
 * @param {*} req
 * @param {*} res
 */
 const getItem = (req, res) => {

 }

/**
 * Insertar un registro
 * @param {*} req
 * @param {*} res
 */
const createItem = async (req, res) => {
    const { body, file } = req;
    const fileData = {
        fileName: file.filename,
        url: `${PUBLIC_URL}/${file.filename}`
    }
    console.log(fileData);
    const data = await storageModel.create(fileData);
    res.send({data});
}

/**
 * Actualizar un registro
 * @param {*} req
 * @param {*} res
 */
const updateItem = (req, res) => {}

/**
 * Eliminar un registro
 * @param {*} req
 * @param {*} res
 */
const deleteItem = (req, res) => {}

export { getItems, getItem, createItem, updateItem, deleteItem };