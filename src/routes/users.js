import { Router } from "express";

const router = Router();

// IMPORT USER VALIDATOR
import * as validateCreate from "../validators/users.validators"

// IMPORT USER CONTROLLERS
import * as userController from "../controllers/user.controller"

router.get('/', userController.getAllUsers,);
router.get('/:idUser', userController.getOneUser,);
router.post('/', validateCreate.validateCreateUserSchema, userController.createNewUser,);
router.put('/:idUser', userController.updateOneUser);
router.delete('/:idUser', userController.deleteOneUser);


export {
    router
}