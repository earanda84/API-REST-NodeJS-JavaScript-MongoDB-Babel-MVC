import * as providerData from "../database/Provider.database";


// CREAR UN NUEVO PROVEEDOR
const createNewProvider = async (provider) => {
    if(!provider){
        return "PROVIDER_DATA_NOT_SUPPLIED"
    }
    try {
        const newProvider = await providerData.createNewProvider(provider);

        return newProvider;
    } catch (error) {
        console.log(error)
        return error.message
    }
}

// OBTENER TODOS LOS PROVEEDORES
const getAllProviders = async () => {
    try {
        const providers = await providerData.getAllProviders();

        return providers;
    } catch (error) {
        console.log(error)
        return error.message;
    }
}

export {
    createNewProvider,
    getAllProviders
}