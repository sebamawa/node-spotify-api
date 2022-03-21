import { matchedData } from 'express-validator';
import trackModel from '../models/nosql/track.mjs';
import { handleHttpError } from '../utils/handleError.mjs';

/**
 * Obtener lista de la base de datos
 * @param {*} req
 * @param {*} res
 */
const getItems = async (req, res) => {

    try {
        const data = await trackModel.find({});
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
 const getItem = (req, res) => {

 }

/**
 * Insertar un registro
 * @param {*} req
 * @param {*} res
 */
const createItem = async (req, res) => {

    try {
        const body = matchedData(req); // metodo de express-validator que elimina datos extra enviados por el cliente no validados   
        const data = await trackModel.create(body);
        res.send({data});     
    } catch (e) {
        handleHttpError(res, 'ERROR_CREATE_ITEM', 403);
    }
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