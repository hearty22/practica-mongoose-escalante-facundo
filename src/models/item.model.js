import { Schema, model } from "mongoose";
//nombre, descricpion, rareza, valor, ataque, poder_magico
const itemSchema = new Schema({
    nombre:{type: String},
    descripcion:{type: String},
    rareza:{type: String},
    valor:{type: Number},
    ataque: {type: Number},
    poder_magico: {type: Number},
    active:{type: Boolean, default: true}
});
export const itemModel = model("items", itemSchema);