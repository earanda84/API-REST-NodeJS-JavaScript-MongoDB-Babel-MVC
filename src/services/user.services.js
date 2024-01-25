import * as User from "../database/User.database"
import { comparePassword, encryptPassword } from "../utils/hash.handle";
import { generateToken } from "../utils/jwt.handle";

// IMPORT SEND MAILER
import { sendMailer } from "../utils/sendmail.handle";


// GET ALL USERS
const getAllUsers = async () => {
    try {
        const allUsers = await User.getAllUsers();

        return allUsers;
    } catch (error) {
        return error.message
    }
};

// GET ONE USER
const getOneUser = async (id) => {

    try {
        const user = await User.getOneUser(id);

        return user;
    } catch (error) {
        return error.message
    }
}

// CREATE NEW USER
const createNewUser = async (reqBody) => {
    try {
        const createdUser = await User.createNewUser(reqBody);

        if (createdUser !== "USER_ALREADY_EXISTS") {
            // GENERATE TOKEN REGISTER VALIDATE IDENTITY
            const token = generateToken(createdUser._id);
            // SENT MAIL
            await sendMailer(reqBody.email, reqBody.name, reqBody.lastname, token)
        }

        return createdUser;
    } catch (error) {
        return error.message
    }
}

// UPDATE ONE USER
const updateOneUser = async (user, idUser) => {

    try {

        // CHECK USER IF EXISTS
        const userIndDb = await User.getOneUser(idUser);

        if (!userIndDb) return "USER_NOT_FOUND";

        const verifyPasswords = userIndDb && user.password ? await comparePassword(user.password, userIndDb.password) : null;

        if (verifyPasswords) {
            return "THE_PASSWORD_MUST_BE_DIFFERENTE_FROM_THE_PREVIOUS_ONE."
        }

        if (user.password) user.password = await encryptPassword(user.password, 10);

        const updatedUser = await User.updateOneUser(user, idUser);

        return updatedUser;

    } catch (error) {
        console.log(error)
        return error.message
    }
}

// DELETE ONE USER
const deleteOneUser = async (idUser) => {
    try {
        const deletedUser = await User.deleteOneUser(idUser);

        if (!deletedUser) return "USER_NOT_FOUND";

        return deletedUser;
    } catch (error) {
        return error.message;
    }
}


export {
    getAllUsers,
    getOneUser,
    createNewUser,
    updateOneUser,
    deleteOneUser
}