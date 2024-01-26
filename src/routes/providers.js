import { Router } from "express";

const router = Router();

// IMPORTAR CONTROLADOR DE PROVEEDOR
import * as providerController from "../controllers/provider.controller";

router.post("/", providerController.createNewProvider);
router.get("/", providerController.getAllProviders)




export {
    router
};