import { handleHttpError } from "../utils/error.handle";

// IMPORTAR SERVICIO DE PROVEEDORES
import * as providerService from "../services/provider.services"

// IMPORTAR HANDLE RESPONSE HTTP 
import { handleHttpResponse } from "../utils/response.handle";


// CREAR NUEVO PROVEEDOR
const createNewProvider = async (req, res) => {
    try {
        const newProvider = await providerService.createNewProvider(req.body)

        if(!newProvider){
            return handleHttpResponse(res, 500, "ERROR_CREATE_PROVIDER")
        }

        handleHttpResponse(res, 200, newProvider)
    } catch (error) {
        handleHttpError(res, "ERROR_TO_CREATE_NEW_PROVIDER.", error)
    }
}

// GET OBTENER TODOS LOS PROVEEDORES
const getAllProviders = async (req, res) => {
    try {

        const allProviders = await providerService.getAllProviders();

        if (allProviders === "NOT_FOUND") {
            return handleHttpResponse(res, 404, "PROVIDERS_NOT_FOUND.")
        }


        handleHttpResponse(res, 200, allProviders)
        // res.send({
        //     status: "ok",
        //     providers: allProviders
        // })
    } catch (error) {
        handleHttpError(res, "ERROR_GET_PROVIDERS", error)
    }
}


export {
    createNewProvider,
    getAllProviders
}

