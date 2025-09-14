import { Schema, model } from "mongoose";

const playerSchema = new Schema({
    username: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    contraseña: {type: String, required: true},
    nivel: {type: Number, required: false, default: 1},
    personajes: [{type: Schema.Types.ObjectId, ref: "personajes"}]
});
export const jugadorModel = model("jugadores", playerSchema);