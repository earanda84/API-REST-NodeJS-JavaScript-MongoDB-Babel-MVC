// THIS FILE HANDLE ROUTES DYNAMICALLY FOR THIS REST API

// IMPORT ROUTER FROM EXPRESS
import { Router } from "express";

const router = Router();

// IMPORT READDIRSYNC READING
// CONTENT SOURCE SYNCHRONOUSLY READING
import { readdirSync } from "fs";

// FOLDERS PATH'S
const PATH_ROUTER = `${__dirname}`;


// FUNCTION FILENAME CLEAN
const cleanFilename = (fileName) => {
    const file = fileName.split(".").shift()

    return file;
}

// HANDLE ROUTES
readdirSync(PATH_ROUTER).filter((fileName) => {

    const cleanName = cleanFilename(fileName)
    console.log("ARCHIVOS_TIPO_RUTA => ", cleanName)
    
    if(cleanName !== "index"){
        import(`./${cleanName}`).then((moduleRouter) => {
            console.log(`Se esta cargando la ruta ${cleanName}`);
            router.use(`/api/v1/${cleanName}`, moduleRouter.router)
        })
    }
})


export {
    router
};
