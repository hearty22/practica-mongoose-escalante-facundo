import { jugadorModel } from "../models/jugador.model.js";

export const createPlayer = async (req, res)=>{
    try {
        const {username, email, contraseña, nivel, personajes} = req.body;
        const newPlayer = await jugadorModel.create({
            username: username, 
            email: email,
            contraseña: contraseña,
            nivel: nivel, 
            personajes: personajes
        });
        return res.status(201).json({
            ok: true,
            msg: "jugador creado",
            player: newPlayer
        })
    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg: "error al crear el jugador",
            error: error
        })
    }
};
export const getallPlayers = async (req, res)=>{
    try {
        const players = await jugadorModel.find().populate();
        return res.status(200).json({
            ok: true,
            msg: "jugadores obtenidos con exito",
            players: players
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg:"error interno en obtener a los jugadores "
        })
    }
};
export const getPlayer = async (req, res)=>{
    try {
        const player = await jugadorModel.findById(req.params.id);
        return res.status(200).json({
            ok: true,
            msg: "jugador encontrado con exito",
            player: player
        })
    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg:"error interno en obtener al jugador"
        })
    }
};

export const updatePlayer = async (req, res)=>{
    try {
        const {username, email, contraseña, nivel, personajes} = req.body;
        const player = await jugadorModel.findByIdAndUpdate(req.params.id,{
            username: username,
            email: email,
            contraseña: contraseña,
            nivel: nivel,
            personajes: personajes
        },{new: true});
        return res.status(200).json({
            ok: true,
            msg: "jugador actualizado con exito",
            player: player
        })
    } catch (error) {
        return res.status(500).json({
            ok: false,
            mgs:"error interno en actualizar el personaje"
        })
    }
};
export const deletePlayer = async (req, res)=>{
    try {
        const player = await jugadorModel.findByIdAndDelete(req.params.id)
        return res.status(200).json({
            ok: true,
            msg: "jugador eliminado con exito",
            player: player
        })
    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg: "error interno en eliminar al jugador"
        })
    }
};
