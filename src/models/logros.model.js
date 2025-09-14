import { model, Model, Schema } from "mongoose";

const logroSchema = new Schema({
    nombre:{type: String},
    descripcion:{type: String},
    jugador_id:{type: Schema.Types.ObjectId, ref: "jugadores"}
});
export const logroModel = model("logros", logroSchema);