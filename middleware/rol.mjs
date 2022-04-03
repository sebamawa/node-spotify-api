import { handleHttpError } from "../utils/handleError.mjs";

/**
 * Verifica rol de usuario
 * @param {*} rol // Array con los roles permitidos
 * @returns 
 */
const checkRol = (roles) => (req, res, next) => {
    try {
        const { user } = req;
        console.log(user);
        const rolesByUser = user.role;
        
        const checkValueRol = roles.some(rolSingle => rolesByUser.includes(rolSingle)); // True or false
        if (!checkValueRol) {
            handleHttpError(res, "USER_HAS_NOT_ROL", 403);
            return;
        } 
        next();
    } catch (error) {
        console.log(error);
        handleHttpError(res, 'ERROR_ROL_PERMISSIONS', 403);
    }
        
}

export { checkRol };