import express from "express";
import "dotenv/config";
import cors from "cors";
import { dbConect } from "./src/config/database.js";

import AllRouter from "./src/routes/routes.js";

const app = express();
const PORT = process.env.PORT
app.use(express.json());
app.use(cors());

app.use("/api", AllRouter)

app.listen(PORT, async ()=>{
    await dbConect();
    console.log(`servidor escuchando en http://localhost:${PORT}`);
})