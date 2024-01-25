import { handleHttpError } from "../utils/error.handle";

// IMPORT VALIDATE SERVICE
import * as validateIdentityService from "../services/validate.user.services";

// VALIDATE IDENTITY USER REGISTERED
const validateRegisterIdentity = async (req, res) => {
    const { token } = req.params

    try {
        
        const  validateIdentity = await validateIdentityService.validateRegisterIdentity(token);

        const response = validateIdentity.error ? validateIdentity.error : validateIdentity;
        
        res.send({
            status: "ok",
            response
        })
    } catch (error) {
        handleHttpError(res, "ERROR_VALIDATE_IDENTITY", error)
    }
};

// SE REUTILIZA EL METODO GETONEUSER DE LA CAPA DE ACCESO A LOS DATOS.
const resendToken = async(req, res) => {
    console.log(req.body.email)
    try {
        // SEND EMAIL TO SERVICE FOR TO VALIDATE IDENTITY AND SEND EMAIL TO EMAIL
        const revalidateIdentity = await validateIdentityService.resendToken(req.body.email);


        res.send({
            status: "ok",
            response: revalidateIdentity
        })
    } catch (error) {
        
    }
}

export{
    validateRegisterIdentity,
    resendToken
}