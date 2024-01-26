import ProviderModel from "../models/Provider.model";

// CREAR UN NUEVO PROVEEDOR
const createNewProvider = async(provider) => {
    if(!provider){
        return "PROVIDER_DATA_NOT_SUPPLIED"
    }

    try {
        const newProvider = await ProviderModel.create(provider);

        return newProvider;
    } catch (error) {
        console.log(error.message)
        return error.message;
    }
};

// OBTENER TODOS LOS USUARIOS
const getAllProviders = async () => {
    try {
        const providers = await ProviderModel.find({}).sort({ name: 1 });
        
        if(providers.length < 1){
            return "NOT_FOUND";
        }

        return providers;
    } catch (error) {
        console.log(error.message)
        return error.message;
    }
};


export {
    createNewProvider,
    getAllProviders
}