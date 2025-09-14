import { Schema, model } from "mongoose";

const itemSchema = new Schema({
    nombre:{type: String},
    descripcion:{type: String},
    tipo:{type: String},
    rareza:{type: String},
    valor:{type: Number},
    estadisticas:{
        ataque: {type: Number},
        poder_magico: {type: Number}
    }
});
export const itemModel = model("items", itemSchema);