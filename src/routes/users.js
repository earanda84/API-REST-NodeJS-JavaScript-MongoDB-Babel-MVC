import { Router } from "express";

const router = Router();

import * as userController from "../controllers/user.controller"

router.get('/', userController.getAllUsers,);
router.get('/:idUser', userController.getOneUser,);
router.post('/', userController.createNewUser,);
router.put('/:idUser', userController.updateOneUser,);
router.delete('/:idUser', userController.deleteOneUser);


export {
    router
}