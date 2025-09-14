import mongoose from "mongoose";

export const dbConect = async ()=>{
    try {
        await mongoose.connect(process.env.DATABASE);
        console.log(`servidor conectado con la base de datos`);
    } catch (error) {
        console.log("coneccion con la base de datos fallida")
    }
};