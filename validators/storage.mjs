import { check } from "express-validator";
import { validationResults } from "../utils/handleValidator.mjs";

// no es necesario validar al crear pues ya se esta haciendo uso del middleware de multer
// const validatorCreateItem = [
// ];

const validatorGetItem = [
    check("id")
    .exists()
    .notEmpty()
    .isMongoId(),
    (req, res, next) => {
        return validationResults(req, res, next);
    }
];

export { validatorGetItem };