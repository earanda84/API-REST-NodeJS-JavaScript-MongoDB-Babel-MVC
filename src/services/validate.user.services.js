// IMPORT GET ONE USER FROM DATABASES FROM USER DATABASE
import * as UserData from "../database/User.database";

// IMPORT TOKEN VERIFY
import { verifyToken } from "../utils/jwt.handle";

// VALIDATE IDENTITY USER REGISTERED
const validateRegisterIdentity = async (token) => {
    // VERIFY TOKEN
    const validateToken = verifyToken(token);

    try {
        const validateUserInDb = await UserData.updateOneUser({ role: "user" }, validateToken.id);

        if(!validateUserInDb) return "ERROR_TOKEN_IDENTITY.";

        return "VALIDATION_SUCCESSFULLY.";
    } catch (error) {
        return error.message
    }
};

// RESEND TOKEN => pendiente, ya que se debe enviar el email para poder reenviar el token
// const resendToken = async(idUser) => {
//     try {
//         const responseUserInDb = await UserData.getOneUser(idUser);

//         if(!responseUserInDb) return "USER_NOT_FOUND."

//         return responseUserInDb;
//     } catch (error) {
//         return error.message;
//     }
// }


export {
    validateRegisterIdentity,
    resendToken
}