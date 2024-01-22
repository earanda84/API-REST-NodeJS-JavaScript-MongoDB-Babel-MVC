import { handleHttpError } from "../utils/error.handle"

// SERVICE IMPORTS
import * as userService from "../services/user.services"


// GET => ALL USERS
const getAllUsers = async (req, res) => {
    try {
        const allUsers = await userService.getAllUsers();

        if(allUsers.length < 1){
            return res.send("USERS_NOT_FOUND")
        }

        res.send({
            message: "SUCCESS_GET_USERS",
            users: allUsers
        })
    } catch (error) {
        handleHttpError(res, "ERROR_GET_USERS", error)
    }
}

// GET => USER BY ID
const getOneUser = async (req, res) => {
    try {
        const user = await userService.getOneUser(req.params.idUser)

        if(!user){
            return res.send({message: "USER_NOT_FOUND"})
        }

        res.send({
            message: "SUCCESS_GET_USER",
            user,
        })
    } catch (error) {
        handleHttpError(res, "ERROR_GET_USER", error)
    }
}

// POST => CREATE USER
const createNewUser = async (req, res) => {
    try {
        const password = req.body.password;

        const createdUser = await userService.createNewUser(req.body, password);

        res.send({
            message: "SUCCESS_CREATE_USER",
            user_created: createdUser
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
            message: "SUCCESS_UPDATE_USER",
            user_updated: updatedUser
        })
    } catch (error) {
        handleHttpError(res, "ERROR_UPDATE_USER", error)
    }
}

// DELETE => DELETE USER BY ID
const deleteOneUser = async (req, res) => {
    try {
        const deletedUser = await userService.deleteOneUser(req.params.idUser);

        res.send("SUCCESS_DELETE_USER")
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