import express from "express";
import { getItems, getItem, createItem, updateItem, deleteItem } from "../controllers/tracks.mjs";
const router = express.Router();
import { validatorCreateItem, validatorGetItem } from "../validators/tracks.mjs";
import { customHeader } from "../middleware/customHeader.mjs";

//TODO http://localhost:3000/tracks GET, POST, DELETE, PUT

/**
 * Lista los items
 */
router.get("/", getItems);

/**
 * Obtener detalle de item
 */
router.get("/:id", validatorGetItem, getItem);

/**
 * Crea un registro
 */
// router.post("/", validatorCreateItem, customHeader, createItem);
router.post("/", validatorCreateItem, createItem);

/**
 * Actualiza item
 */
 router.put("/:id", validatorGetItem, validatorCreateItem, updateItem);

/**
 * Elimina un registro
 */
router.delete("/:id", validatorGetItem, deleteItem);

// export { router };
export default router;