import { check, checkSchema } from "express-validator";

// IMPORT VALIDATION RESULT HELPER
import * as validateHelper from "../helpers/validate.helper"
import { isValidObjectId } from "mongoose";

// VALIDATION WITH LITERAL
const validateCreateUser = [
    check("name")
        .exists()
        .isString()
        .trim()
        .not()
        .isEmpty(),
    check("lastname")
        .exists()
        .isString()
        .trim()
        .not()
        .isEmpty(),
    check("email")
        .exists()
        .isEmail()
        .trim(),
    check("password")
        .exists()
        .not()
        .trim()
        .isStrongPassword()
        .isLength(6),
    check("phoneNumber")
        .exists()
        .not()
        .isEmpty()
        .trim()
        .isLength(9),
    (req, res, next) => {
        validateHelper.validateResult(req, res, next);
    }
];

// SANITIZER SPACE BETWEEN STRING
const sanitizerString = (value) => {
    return value.replace(/\s/g, '');
}


// VALIDATION CREATE USER WITH SCHEMA
const validateCreateUserSchema = [
    checkSchema({
        name: {
            in: ["body"],
            trim: true,
            notEmpty: {
                errorMessage: "El campo nombre es requerido."
            },
            customSanitizer: { options: sanitizerString },
            isLength: {
                errorMessage: "El nombre debe contener a lo menos 3 caracteres.",
                options: { min: 3 }
            }
        },
        lastname: {
            in: ["body"],
            trim: true,
            notEmpty: {
                errorMessage: "El campo apellido es requerido."
            },
            customSanitizer: { options: sanitizerString },
            isLength: {
                errorMessage: "El apellido debe contener a lo menos 3 caracteres",
                options: { min: 3 }
            }
        },
        email: {
            in: ["body"],
            trim: true,
            notEmpty: {
                errorMessage: "El email es requerido."
            },
            customSanitizer: { options: sanitizerString },
            isEmail: {
                errorMessage: "Debe ser un format válido."
            }
        },
        password: {
            in: ["body"],
            trim: true,
            notEmpty: {
                errorMessage: "Debes proporcionar una contraseña."
            },
            customSanitizer: { options: sanitizerString },
            isLength: {
                errorMessage: "La contraseña debe ser estar entre 8 y 15 caracteres.",
                options: { min: 8, max: 15 }
            },
            isStrongPassword: {
                errorMessage: "Debe ser una contraseña que contenga al menos un caracter, una mayúscula y un número."
            }
        },
        phoneNumber: {
            in: ["body"],
            trim: true,
            customSanitizer: { options: sanitizerString },
            isLength: {
                options: { min: 9, max: 9 },
                errorMessage: "Para el teléfono deben ser 9 dígitos."
            },
            matches: {
                options: /^[0-9]+$/,
                errorMessage: "El número de teléfono, solo debe contener caracteres númericos."
            }
        },
        role: {
            in: ["body"],
            trim: true,
            optional: true,
            isIn: {
                options: [["admin", "invitado"]],
                errorMessage: 'El rol puede ser "admin" o "invitado".'
            }
        }
    }),
    (req, res, next) => {
        validateHelper.validateResult(req, res, next)
    }
];


// SANITIZER MONGO OBJECT ID
const sanitizerObjectIdMongo = (value) => {
    if (!isValidObjectId(value)) {
        throw new Error("Formato id inválido.")
    }
    return value;
}

// VALIDATION UPDATE USER
const validateUpdateUserSchema = [
    checkSchema({
        idUser: {
            in: ["params"],
            trim: true,
            notEmpty: {
                errorMessage: "Debes proporcionar el id del usuario."
            },
            notEmpty: {
                errorMessage: "El id es requerido."
            },
            customSanitizer: { options: sanitizerObjectIdMongo }
        },
        name: {
            in: ["body"],
            optional: true,
            trim: true,
            customSanitizer: { options: sanitizerString },
            isLength: {
                errorMessage: "El nombre debe contener a lo menos 3 caracteres.",
                options: { min: 3 }
            }
        },
        lastname: {
            in: ["body"],
            optional: true,
            trim: true,
            customSanitizer: { options: sanitizerString },
            isLength: {
                errorMessage: "El apellido debe contener a lo menos 3 caracteres.",
                options: { min: 3 }
            }
        },
        email: {
            in: ["body"],
            optional: true,
            trim: true,
            customSanitizer: { options: sanitizerString },
            isEmail: {
                errorMessage: "Debe ser un format válido."
            }
        },
        password: {
            in: ["body"],
            optional: true,
            trim: true,
            customSanitizer: { options: sanitizerString },
            isLength: {
                errorMessage: "La contraseña debe ser estar entre 8 y 15 caracteres.",
                options: { min: 8, max: 15 }
            },
            isStrongPassword: {
                errorMessage: "Debe ser una contraseña que contenga al menos un caracter, una mayúscula y un número."
            }
        },
        phoneNumber: {
            in: ["body"],
            optional: true,
            trim: true,
            customSanitizer: { options: sanitizerString },
            isLength: {
                options: { min: 9, max: 9 },
                errorMessage: "El número de teléfono deben ser 9 dígitos."
            },
            matches: {
                options: /^[0-9]+$/,
                errorMessage: "El número de teléfono, solo debe contener caracteres númericos."
            }
        },
        role: {
            in: ["body"],
            trim: true,
            optional: true,
            isIn: {
                options: [["admin", "user", "invitado"]],
                errorMessage: 'El rol puede ser "admin" 0 "user" o "invitado".'
            }
        }
    }),
    (req, res, next) => {
        validateHelper.validateResult(req, res, next)
    }
];

export {
    validateCreateUserSchema,
    validateUpdateUserSchema
}