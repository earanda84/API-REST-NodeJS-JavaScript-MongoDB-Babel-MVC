import { check, checkSchema } from "express-validator";

// IMPORT VALIDATION RESULT HELPER
import * as validateHelper from "../helpers/validate.helper"

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

// VALIDATION WITH SCHEMA
const validateCreateUserSchema = [
    checkSchema({
        name: {
            in: ["body"],
            trim: true,
            notEmpty: {
                errorMessage: "El campo nombre es requerido."
            },
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
            isLength: {
                errorMessage: "La contraseña debe ser estar entre 8 y 15 caracteres.",
                options: { min: 8, max: 15 }
            },
            isStrongPassword: {
                errorMessage: "Debe ser una contraseña que contenga al menos un caracter, una mayúscula y un número."
            }
        },
        role: {
            default: "user",
        }
    }),
    (req, res, next) => {
        validateHelper.validateResult(req, res, next)
    }
]

export {
    validateCreateUserSchema
}