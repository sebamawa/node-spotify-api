import { handleHttpError } from '../utils/handleError.mjs';
import { verifyToken } from "../utils/handleJWT.mjs";
import { usersModel } from "../models/index.mjs";

const authJWTMiddleware = async (req, res, next) => {
    try {
        
        if (!req.headers.authorization) {
            handleHttpError(res, "MISSING_TOKEN", 401);
            return;
        }
        const token = req.headers.authorization.split(" ").pop(); // Bearear X5FKQ..."
        const dataToken = await verifyToken(token);

        if (!dataToken._id) {
            handleHttpError(res, "INVALID_TOKEN", 401);
            return;
        }

        // buscar el usuario en la base de datos 
        const user = await usersModel.findById(dataToken._id);
        req.user = user; // guardar el usuario en el request
        // para llevar registro de quien hace los requests

        next();
    } catch (error) {
        console.log(error);
        handleHttpError(res, 'ERROR_SESSION_TOKEN', 401);
    }
}

export { authJWTMiddleware };