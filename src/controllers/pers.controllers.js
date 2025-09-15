import { inventarioModel } from "../models/invent.model.js";
import { jugadorModel } from "../models/jugador.model.js";
import { personajeModel } from "../models/pers.model.js";
//nombre, raza, clase, nivel, vida_actual, mana_actual, jugador, logros, inventario
export const createCharacter = async (req, res)=>{
    try {
        
        const {nombre, raza, clase, nivel, vida_actual, mana_actual, jugador, logros} = req.body;
        const newCharacter = await personajeModel.create({
            nombre:nombre,
            raza: raza,
            clase: clase,
            nivel: nivel,
            vida_actual: vida_actual,
            mana_actual: mana_actual,
            jugador: jugador,
            logros: logros
        });
        const inventario = await inventarioModel.create({
            capacidad: 50,
            personaje: newCharacter._id
        });
        const character = await personajeModel.findByIdAndUpdate(newCharacter._id,{
            inventario: inventario._id
        },{new: true})
        
        const {_id} = newCharacter._id;
        const jugadorExiste = await jugadorModel.findByIdAndUpdate(jugador, {
            $push: {personajes: _id}
        });
        return res.status(201).json({
            ok: true,
            msg: "personaje creado con exito",
            character: character
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg:"error interno en crear el personaje"
        })
    }
};
export const getAllCharacters = async (req, res)=>{
    try {
        const Characters = await personajeModel.find().populate("jugador").populate("inventario");
        return res.status(200).json({
            ok:true,
            msg:"personajes obtenidos con exito",
            Characters: Characters
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg:"error interno en obtener a los personajes"
        })
    }
}
export const getCharacter = async (req, res)=>{
    try {
        const character = await personajeModel.findById(req.params.id).populate("jugador").populate("inventario");
        return res.status(200).json({
            ok: true,
            msg:"personaje obtenido con exito",
            character: character
        })
    } catch (error) {
        return res.status(500).json({
            ok:false,
            msg:"error interno en obtener al personaje"
        });
    }
};

export const updateCharacter = async (req, res)=>{
    try {
        const {nombre, raza, clase, nivel, vida_actual, mana_actual, logros} = req.body;
        const character = await personajeModel.findByIdAndUpdate(req.params.id,{
            nombre: nombre, 
            raza:raza, 
            clase: clase,
            nivel: nivel,
            vida_actual: vida_actual,
            mana_actual: mana_actual,
            logros: logros,
        },{ new: true})
        return res.status(200).json({
            ok: true,
            msg:"personaje actualizado con exito",
            character: character
        })
    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg:"error interno en actualizar al personaje"
        })
    }
}

export const deleteCharacter = async (req, res)=>{
    try {
        const character = await personajeModel.findByIdAndDelete(req.params.id);
        const inventario = character.inventario;
        await inventarioModel.findByIdAndDelete(inventario);
        return res.status(200).json({
            ok: true,
            msg:"personaje eliminado con exito"
            ,
            character: character
        })
    } catch (error) {
        return res.status(500).json({
            ok:false,
            msg:"error interno al borrar el personaje"
        })
    }
};