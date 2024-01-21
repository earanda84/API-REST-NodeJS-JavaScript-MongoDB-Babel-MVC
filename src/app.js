import "dotenv/config";
import express from "express";
import cors from "cors";

// ROUTING IMPORT
import { router } from "./routes";

// PORT
const PORT = process.env.PORT || 5000;

// EXPRESS SERVICE
const app = express();

// CORS
app.use(cors({ origin: "*" }));

// FORMATS DATA REQUEST
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ROUTING TEST
// app.get("/", (req, res) => res.send("RUTA_GET_API"))

// ROUTING USE
app.use(router);


// SERVER LISTENING
app.listen(PORT, () => console.log(`Listen on PORT: ${PORT}`))