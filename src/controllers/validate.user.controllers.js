import { handleHttpError } from "../utils/error.handle";

// IMPORT VALIDATE SERVICE
import * as validateIdentityService from "../services/validate.user.services";

// VALIDATE IDENTITY USER REGISTERED
const validateRegisterIdentity = async (req, res) => {
    const { token } = req.params

    try {
        
        const  validateIdentity = await validateIdentityService.validateRegisterIdentity(token);

        res.send({
            status: "ok",
            response: validateIdentity
        })
    } catch (error) {
        handleHttpError(res, "ERROR_VALIDATE_IDENTITY", error)
    }
};

// PEndiente, ya que se debe enviar el email para poder reenviar el token.
// const resendToken = async(res, res) => {
    
//     try {
        
//     } catch (error) {
        
//     }
// }

export{
    validateRegisterIdentity
}