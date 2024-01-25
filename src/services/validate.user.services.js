// IMPORT GET ONE USER FROM DATABASES FROM USER DATABASE
import * as UserData from "../database/User.database";

// IMPORT TOKEN VERIFY
import { generateToken, verifyToken } from "../utils/jwt.handle";
import { sendMailer } from "../utils/sendmail.handle";

// VALIDATE IDENTITY USER REGISTERED
const validateRegisterIdentity = async (token) => {
    // VERIFY TOKEN
    const validateToken = verifyToken(token);

    if (validateToken.error) {

        return validateToken;
    }

    try {
        // VALIDATE USER IN DB
        const validateUserInDb = await UserData.updateOneUser({ role: "user" }, validateToken.id);

        if (!validateUserInDb) return "USER_NOT_FOUND.";

        return "VALIDATION_SUCCESSFULLY.";
    } catch (error) {
        return error.message
    }
};

// RESEND TOKEN => pendiente, ya que se debe enviar el email para poder reenviar el token
const resendToken = async (email) => {
    try {
        // VERIFY USER IN DB
        // SE ENVIA NULL EN EL PRIMER PARAMETRO, YA QUE LA FUNCION ACEPTA 2 PARAMETROS (ID OR EMAIL), COMO EN ESTE CASO SE ENVIA SOLO EMAIL, EL PRIMERO SE DEFINE COMO NULL.
        const responseUserInDb = await UserData.getOneUser(null, email);

        // GENERATE TOKEN
        const payload = {
            id: responseUserInDb._id,
            email: responseUserInDb.email
        };

        const token = generateToken(payload);

        console.log("EL TOKEN => ", token)

        // SEND EMAIL WITH NEW TOKEN
        const sendMail = await sendMailer(responseUserInDb.email, responseUserInDb.name, responseUserInDb.lastname, token);


        return sendMail;
    } catch (error) {
        return error.message;
    }
}


export {
    validateRegisterIdentity,
    resendToken
}