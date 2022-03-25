import express from "express";
import { matchedData } from "express-validator";
import { validatorRegister } from "../validators/auth.mjs";
const router = express.Router();
import { encrypt, compare } from "../utils/handlePassword.mjs";
import { usersModel } from "../models/index.mjs";

/**
 * Crea un registro
 */
// router.post("/", validatorCreateItem, customHeader, createItem);
// TODO http://localhost:3001/api/auth/login
// TODO http://localhost:3001/api/auth/register
router.post("/register", validatorRegister, async (req, res) => {
    req = matchedData(req);
    const password = await encrypt(req.password);
    const body = {...req, password };
    // registrar usuario
    const data = await usersModel.create(body);
    // no muestra password encriptado (aplica cuando el metodo no permite filtrado como create())
    data.set("password", undefined);
    res.send({data});
});

// export { router };
export default router;