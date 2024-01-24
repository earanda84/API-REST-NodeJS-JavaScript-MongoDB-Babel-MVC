import { validationResult } from "express-validator";

const validateResult = (req, res, next) => { 
    try {
        console.log(validationResult(req).throw())
        validationResult(req).throw()

        return next();
    } catch (error) {
        res.status(403)
        res.send({errors: error.array()})
    }
}


export {
    validateResult
}