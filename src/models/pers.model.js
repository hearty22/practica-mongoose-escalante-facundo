import { Schema, model } from "mongoose";

const personajeSchema = new Schema({
    nombre:{ type: String, required: true},
    raza: { type: String, required: true},
    clase: { type: String, required: true},
    nivel: { type: Number, required: true},
    vida_actual: { type: Number, required: true},
    mana_actual: { type: Number, required: true},
    jugador:{ type: Schema.Types.ObjectId, ref: "player"},
    logros: {type: Schema.Types.ObjectId, ref: "logro"},
    inventario: {type: Schema.Types.ObjectId, ref: "inventario"}

})

export const personajeModel = model("personajes", personajeSchema);