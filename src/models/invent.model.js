import { model, Model, Schema } from "mongoose";

const inventarioSchema = new Schema({
    personaje:{ type: Schema.Types.ObjectId, ref: "personajes"},
    capacidad: { type: Number},
    items:[{type: Schema.Types.ObjectId, ref: "items"}]
})
export const inventarioModel = model("inventarios", inventarioSchema);
