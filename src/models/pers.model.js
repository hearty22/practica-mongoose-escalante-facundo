import { Schema, model } from "mongoose";
//nombre, raza, clase, nivel, vida_actual, mana_actual, jugador, logros, inventario
const personajeSchema = new Schema({
    nombre:{ type: String, required: true},
    raza: { type: String, required: true},
    clase: { type: String, required: true},
    nivel: { type: Number, required: true},
    vida_actual: { type: Number, required: true},
    mana_actual: { type: Number, required: true},
    jugador:{ type: Schema.Types.ObjectId, ref: "jugadores"},
    inventario: {type: Schema.Types.ObjectId, ref: "inventarios"}

})

export const personajeModel = model("personajes", personajeSchema);