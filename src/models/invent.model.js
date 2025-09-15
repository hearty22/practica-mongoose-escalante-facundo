import { model, Model, Schema } from "mongoose";

const inventarioSchema = new Schema({
    personaje_id:{ type: Schema.Types.ObjectId, ref: "personaje"},
    capacidad: { type: Number},
    objetos:[{
        objeto_id: {type: Schema.Types.ObjectId, ref: "item"}
    }]
})
export const inventarioModel = model("inventarios", inventarioSchema);
