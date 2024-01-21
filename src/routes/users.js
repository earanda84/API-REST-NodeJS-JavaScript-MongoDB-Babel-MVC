import { Router } from "express";

const router = Router();

import {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} from "../controllers/user.controller"

router.get('/', getUsers);
router.get('/:idUser', getUserById);
router.post('/', createUser);
router.put('/:idUser', updateUser);
router.delete('/:idUser', deleteUser);


export {
    router
}