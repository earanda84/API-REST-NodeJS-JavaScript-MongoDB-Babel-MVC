import * as User from "../database/User.database"

// GET ALL USERS
const getAllUsers = async () => {
    const allUsers = await User.getAllUsers();

    return allUsers;

};

// GET ONE USER
const getOneUser = async (id) => {

    const getUser = await User.getOneUser(id);

    return getUser;
}

// CREATE NEW USER
const createNewUser = async (reqBody, password) => {
    const createdUser = await User.createNewUser(reqBody, password);

    return createdUser;
}

// UPDATE ONE USER
const updateOneUser = async (user, idUser) => {

    const updatedUser = await User.updateOneUser(user, idUser);

    return updatedUser;
}

// DELETE ONE USER
const deleteOneUser = async () => { return; }


export {
    getAllUsers,
    getOneUser,
    createNewUser,
    updateOneUser,
    deleteOneUser
}