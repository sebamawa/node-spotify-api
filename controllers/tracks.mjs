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
 const getItem = async (req, res) => {
    try {
        req = matchedData(req); // filtro el id
        const data = await trackModel.findById(req.id);
        res.send({data});
    } catch (e) {
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
const updateItem = async (req, res) => {

    try {
        const {id, ...body} = matchedData(req); // extrae el id y el resto se guarda en body
        const data = await trackModel.findOneAndUpdate(id, body);  //(req.params.id, body);
        res.send({data});     
    } catch (e) {
        handleHttpError(res, 'ERROR_UPDATE_ITEM', 403);
    }    
}

/**
 * Eliminar un registro
 * @param {*} req
 * @param {*} res
 */
const deleteItem = async (req, res) => {
    try {
        req = matchedData(req); // filtro el id
        const {id} = req;
        // const data = await trackModel.deleteOne({_id: id}); // borrado fisico de mongoose
        const data = await trackModel.delete({_id: id}); // borrado logico de mongoose-delete
        res.send({data});
    } catch (e) {
        handleHttpError(res, "ERROR_DELETE_ITEM", 403);
    }    
}

export { getItems, getItem, createItem, updateItem, deleteItem };