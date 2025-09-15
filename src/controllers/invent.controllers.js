import { inventarioModel } from "../models/invent.model.js";

export const getAllInventories = async (req, res)=>{
    try {
        const inventarios = await inventarioModel.find().populate("personaje")
        return res.status(200).json({
            ok: true,
            msg: "inventarios obtenidos con exito",
            inventories: inventarios
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok:false, 
            msg:"error interno en obtener los inventarios"
        })
    }
};
export const getInventory = async (req, res)=>{
    try {
        const inventory = await inventarioModel.findById(req.params.id).populate("personaje");
        return res.status(200).json({
            ok: true,
            msg: "inventario obtenido correctamente",
            inventory: inventory
        })
    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg:"error interno en obtener el inventario"
        })
    }
};

export const updateInventory = async (req, res)=>{
    try {
        const {capacidad , item } = req.body;
        const inventory = await inventarioModel.findByIdAndUpdate(req.params.id,{
            capacidad: capacidad,
            $push :{ items: item}
        }, {new: true})
        return res.status(200).json({
            ok: true,
            msg: "inventario actualizado con exito",
            inventory: inventory
        })
    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg:"error interno al actualizar el inventario"
        })
    }
};