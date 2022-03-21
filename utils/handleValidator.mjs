import { validationResult } from "express-validator";

const validationResults = (req, res, next) => {
    try {
        validationResult(req).throw(); // valida el request. Si hay errores, lanza un error
        return next();
    } catch (err) {
        res.status(403);
        res.send({errors: err.array()});
    }    
}

export { validationResults };