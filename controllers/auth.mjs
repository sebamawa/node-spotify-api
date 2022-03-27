import { matchedData } from "express-validator";
import { compare, encrypt } from "../utils/handlePassword.mjs";
import { tokenSign, verifyToken } from "../utils/handleJWT.mjs";
import { usersModel } from "../models/index.mjs";
import { handleHttpError } from "../utils/handleError.mjs";

/**
 * Register a new user
 * @param {*} req 
 * @param {*} res 
 */
const registerController = async (req, res)=> {

    try {
        req = matchedData(req);
        const password = await encrypt(req.password); // encripto password
        const body = {...req, password };
        const dataUser = await usersModel.create(body);
        // no muestro password encriptado (aplica cuando el metodo no permite filtrado como create())
        dataUser.set("password", undefined);
    
        // generate token for user
        const data = {
            token: await tokenSign(dataUser), 
            user: dataUser   
        }
    
        res.send({data});        
    } catch (error) {
        console.log(error);
        let message = 'ERROR_REGISTER_USER';
        if (error.code === 11000) {
            message += ' - EMAIL_EXISTS';
        }
        handleHttpError(res, message, 403);
    } 
}

/**
 * Login a user
 * @param {*} req 
 * @param {*} res 
 */
const loginController = async (req, res) => {
    try {
        req = matchedData(req);
        const user = await usersModel.findOne({ email: req.email }).select('password name role email'); // select: filtro para recuperar el password q se excluye en el modelo
        if (!user) {
            handleHttpError(res, 'USER_NOT_EXISTS', 404);
            return;
        }

        const hashPassword = user.get("password");
        const check = await compare(req.password, hashPassword);
        if (!check) {
            handleHttpError(res, 'PASSWORD_INCORRECT', 401);
            return;
        }

        // quito password para la respuesta
        user.set('password', undefined);
        const data = {
            token: await tokenSign(user),
            user
        }

        res.send({ data });
    } catch (error) {
        console.log(error);
        let messages = { message1: 'ERROR_LOGIN_USER' };
        
    }
}

export { registerController, loginController };