import { handleHttpError } from "../utils/error.handle"

// GET => ALL USERS
const getUsers = async (req, res) => {
    try {
        res.send("SUCCESS_GET_USERS")
    } catch (error) {
        handleHttpError(res, "ERROR_GET_USERS", error)
    }
}

// GET => USER BY ID
const getUserById = async (req, res) => {
    try {
        res.send("SUCCESS_GET_USER")
    } catch (error) {
        handleHttpError(res, "ERROR_GET_USER", error)
    }
}

// POST => CREATE USER
const createUser = async (req, res) => {
    try {
        res.send("SUCCESS_CREATE_USER")
    } catch (error) {
        handleHttpError(res, "ERROR_CREATE_USER", error)
    }
}

// PUT => UPDATE USER BY ID
const updateUser = async (req, res) => { 
    try {
        res.send("SUCCESS_UPDATE_USER")
    } catch (error) {
        handleHttpError(res, "ERROR_UPDATE_USER", error)
    }
}

// DELETE => DELETE USER BY ID
const deleteUser = async(req,res) => {
    try {
        res.send("SUCCESS_DELETE_USER")
    } catch (error) {
        handleHttpError(res, "ERROR_DELETE_USER", error)
    }
}


export {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}