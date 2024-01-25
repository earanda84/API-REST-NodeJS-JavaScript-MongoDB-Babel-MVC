import { handleHttpError } from "../utils/error.handle"

// SERVICE IMPORTS
import * as userService from "../services/user.services"


// GET => ALL USERS
const getAllUsers = async (req, res) => {
    try {
        const allUsers = await userService.getAllUsers();

        const response = allUsers.length > 0 ? allUsers : "USERS_NOT_FOUND";

        res.send({
            status: "ok",
            response
        })
    } catch (error) {
        handleHttpError(res, "ERROR_GET_USERS", error)
    }
}

// GET => USER BY ID
const getOneUser = async (req, res) => {
    try {
        const user = await userService.getOneUser(req.params.idUser)

        const response = user ? user : "USER_NOT_FOUND";

        res.send({
            status: "ok",
            response
        })
    } catch (error) {
        handleHttpError(res, "ERROR_GET_USER", error)
    }
}

// POST => CREATE USER
const createNewUser = async (req, res) => {
    try {

        // CREATE NEW USER
        const createdUser = await userService.createNewUser(req.body);

        res.send({
            status: "ok",
            response: createdUser
        })
    } catch (error) {
        handleHttpError(res, "ERROR_CREATE_USER", error)
    }
}

// PUT => UPDATE USER BY ID
const updateOneUser = async (req, res) => {

    try {
        const updatedUser = await userService.updateOneUser(req.body, req.params.idUser)

        res.send({
            status: "ok",
            updatedUser
        })
    } catch (error) {
        handleHttpError(res, "ERROR_UPDATE_USER", error)
    }
}

// DELETE => DELETE USER BY ID
const deleteOneUser = async (req, res) => {
    try {
        const deletedUser = await userService.deleteOneUser(req.params.idUser);

        res.send({
            status: "ok",
            user_deleted: deletedUser
        })
    } catch (error) {
        handleHttpError(res, "ERROR_DELETE_USER", error)
    }
}


export {
    getAllUsers,
    getOneUser,
    createNewUser,
    updateOneUser,
    deleteOneUser
}