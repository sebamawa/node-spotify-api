import express from "express";
const router = express.Router();
import { getItems, getItem, createItem, updateItem, deleteItem } from "../controllers/tracks.mjs";
import { validatorCreateItem, validatorGetItem } from "../validators/tracks.mjs";
import { authJWTMiddleware } from "../middleware/sessionJWT.mjs";
import { checkRol } from "../middleware/rol.mjs";

//TODO http://localhost:3000/tracks GET, POST, DELETE, PUT

/**
 * Lista los items
 */
router.get("/",  authJWTMiddleware, getItems);

/**
 * Obtener detalle de item
 */
router.get("/:id", validatorGetItem, getItem);

/**
 * Crea un registro
 */
// router.post("/", validatorCreateItem, customHeader, createItem);
router.post("/", 
    authJWTMiddleware, // primero verifico el token de sesion
    checkRol(["admin"]), // verifico el rol del usuario. Debe ser admin para esta ruta
    validatorCreateItem, 
    createItem);

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