import bcrypt from "bcryptjs/dist/bcrypt.js";

/**
 * Contraseña sin encriptar
 * @param {*} passwordPlain 
 * @returns 
 */
const encrypt = async (passwordPlain) => {
    try {
        // const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(passwordPlain, 10);
        return hash;
    } catch (error) {
        console.error(error);
    }
}

/**
 * Contraseña en texto plano
 * @param {*} passwordPlain 
 * Hash de contraseña
 * @param {*} hashPassword 
 */
const compare = async (passwordPlain, hashPassword) => {
    try {
        return await bcrypt.compare(passwordPlain, hashPassword);
    } catch (error) {
        console.log(error);
    }
}

export { encrypt, compare };