import UserModel from "../models/User.model";

// IMPORT BCRYPTJS
import {
    comparePassword,
    encryptPassword
} from "../utils/hash.handle";


// GET ALL USERS FROM DATABASE
const getAllUsers = async () => {

    return await UserModel.find({}).sort({ name: 1 });
}

// GET ONE USER
const getOneUser = async (id) => {

    return await UserModel.findOne({ _id: id });
}

// CREATE NEW USER
const createNewUser = async (user, password) => {

    // HASH PASSWORD
    const hashPassword = await encryptPassword(password);

    const newUser = await UserModel.create({ ...user, password: hashPassword });

    return newUser;
};

// UPDATE USER
const updateOneUser = async (reqBody, idUser) => {

    try {
        // VALIDATE IF USER EXISTS
        const userExists = await UserModel.findById(idUser);

        // USER NOT FOUND
        if(reqBody.password && userExists){
            const verifyPassword = await comparePassword(reqBody.password, userExists.password)

            if(verifyPassword) userExists.password = userExists.password
        }

        if(reqBody.password){

        }

        return userExists;
    } catch (error) {
        console.log(error)
        return error.message
    }
}


export {
    getAllUsers,
    getOneUser,
    createNewUser,
    updateOneUser
}