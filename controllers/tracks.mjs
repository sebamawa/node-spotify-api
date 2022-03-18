import trackModel from '../models/nosql/track.mjs';

/**
 * Obtener lista de la base de datos
 * @param {*} req
 * @param {*} res
 */
const getItems = async (req, res) => {
    const data = await trackModel.find({});
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
    // const body = req.body;
    const { body } = req;
    console.log(body); 
    const data = await trackModel.create(body);
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