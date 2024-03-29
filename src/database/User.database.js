import UserModel from "../models/User.model";

// IMPORT BCRYPTJS
import {
    comparePassword,
    encryptPassword
} from "../utils/hash.handle";


// GET ALL USERS FROM DATABASE
const getAllUsers = async () => {
    try {
        return await UserModel.find({}).sort({ name: 1 });
    } catch (error) {
        return error.message
    }
}

// GET ONE USER
const getOneUser = async (id, email) => {
    if(!id && !email){
        throw new Error("ALMOST_ONE_PARAMETER_IS_REQUIRED_ID_OR_EMAIL.")
    }
    try {
        const query = id ? { _id: id } : email ? { email: email } : null;

        if(id && email){
            throw new Error("ONLY_ONE_PARAMETER_IT'S_REQUIRED_ID_OR_EMAIL.")
        }
        
        return await UserModel.findOne(query);
    } catch (error) {
        return error.message
    }
}

// CREATE NEW USER
const createNewUser = async (user) => {

    try {
        // CHECK IF USER EXISTS
        const checkUserInDb = await UserModel.findOne({ email: user.email });

        if (checkUserInDb) return { error: "USER_ALREADY_EXISTS" };

        // HASH PASSWORD
        const hashPassword = await encryptPassword(user.password);

        const newUser = await UserModel.create({ ...user, password: hashPassword });

        return newUser;
    } catch (error) {
        return error.message;
    }
};

// UPDATE USER
const updateOneUser = async (reqBody, idUser) => {

    try {
        // UPDATE WITH QUERY TO DATABASE
        const checkUserAndUpdate = await UserModel.findOneAndUpdate({ _id: idUser }, reqBody, { new: true });

        return checkUserAndUpdate;
    } catch (error) {
        return error.message
    }
}

// DELETED USER
const deleteOneUser = async (idUser) => {
    try {
        const checkUserAndDelete = await UserModel.findByIdAndDelete(idUser);

        return checkUserAndDelete;
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