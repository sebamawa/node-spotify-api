import express from "express";
const router = express.Router();
//TODO http://localhost:3001/api/storage
import { uploadSingleFileMiddleware } from "../utils/handleStorage.mjs";
import { getItems, getItem, createItem, deleteItem } from "../controllers/storage.mjs";	
import { validatorGetItem } from "../validators/storage.mjs";

/**
 * Crear un item
 */
// router.post("/", createItem);
router.post("/", uploadSingleFileMiddleware.single("myFile"), createItem);

/**
 * Lista de items
 */
router.get("/", getItems);

/**
 * Detalle de item
 */
router.get("/:id", validatorGetItem, getItem);

/**
 * Eliminar item
 */
router.delete("/:id", validatorGetItem, deleteItem);

//export { router };
export default router;