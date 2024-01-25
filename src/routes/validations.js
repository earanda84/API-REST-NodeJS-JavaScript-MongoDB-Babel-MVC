import { Router } from "express";

const router = Router();

// IMPORT VALIDATIONS CONTROLLERS
import * as validateIdentityController from "../controllers/validate.user.controllers"

router.get('/:token', validateIdentityController.validateRegisterIdentity);
// Pendiente, ya que se tiene que enviar el emial para poder validar al usuario y reenviar un token
// router.post("/:idUser")


export {
    router
}