import { Router } from "express";

const router = Router();

// IMPORT USER VALIDATOR
import * as userValidate from "../validators/users.validators"

// IMPORT USER CONTROLLERS
import * as userController from "../controllers/user.controller"

router.get('/', userController.getAllUsers,);
router.get('/:idUser', userController.getOneUser,);
router.post('/', userValidate.validateCreateUserSchema, userController.createNewUser,);
router.put('/:idUser', userValidate.validateUpdateUserSchema, userController.updateOneUser);
router.delete('/:idUser', userController.deleteOneUser);


export {
    router
}