import express from "express";
import { validatorLogin, validatorRegister } from "../validators/auth.mjs";
const router = express.Router();
import { registerController, loginController } from "../controllers/auth.mjs";

/**
 * Reegistra un usuario
 */
// router.post("/", validatorCreateItem, customHeader, createItem);
// TODO http://localhost:3001/api/auth/login
// TODO http://localhost:3001/api/auth/register
router.post("/register", validatorRegister, registerController);

router.post("/login", validatorLogin, loginController);

// export { router };
export default router;