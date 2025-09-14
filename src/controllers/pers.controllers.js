import { personajeModel } from "../models/pers.model.js";
//nombre, raza, clase, nivel, vida_actual, mana_actual, jugador, logros, inventario
export const createPersonaje = async (req, res)=>{
    try {
        const {nombre, raza, clase, nivel, vida_actual, mana_actual, jugador, logros, inventario} = req.body;
        const newPersonaje = await personajeModel.create({
            nombre:nombre,
            raza: raza,
            clase: clase,

        })
    } catch (error) {
        
    }
};