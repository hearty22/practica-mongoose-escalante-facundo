import { Schema, model } from "mongoose";

const playerSchema = new Schema({
    username: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    constraseña: {type: String, required: true},
    nivel: {type: Number, required: true},
    personajes: [{type: Schema.Types.ObjectId, ref: "personaje"}]
});

export const playerModel = model("jugador", playerSchema);