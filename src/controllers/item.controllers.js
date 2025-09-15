import { itemModel } from "../models/item.model.js";
//nombre, descricpion, rareza, valor, ataque, poder_magico

export const createItem = async (req, res)=>{
    try {
        const {nombre, descripcion, rareza, valor, ataque, poder_magico} = req.body
        const newItem = await itemModel.create({
            nombre,
            descripcion,
            rareza,
            valor,
            ataque,
            poder_magico
        })
        return res.status(201).json({
            ok: true,
            msg:"item creado con exito",
            item: newItem
        })
    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg:"error interno en crear el item"
        })
    }
};
export const getAllItems = async (req, res)=>{
    try {
        const items = await itemModel.find({active: true})
        return res.status(200).json(
            {
                ok:true,
                msg:"items obtenidos con exito",
                items: items
            }
        )
    } catch (error) {
        return res.status(500).json({
            ok:false,
            msg:"error interno al obtener los items"
        });
    }
};
export const getItem = async (req, res)=>{
    try {
        const item = await itemModel.findById(req.params.id, {active: true});
        return res.status(200).json({
            ok:true,
            msg:"item obtenido con exito",
            item: item
        });
    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg:"error interno en obtener el item"
        })
    }
};
//nombre, descricpion, rareza, valor, ataque, poder_magico

export const updateItem = async (req, res)=>{
    try {
        const { nombre, descripcion, rareza, valor, ataque, poder_magico} = req.body
        const item = await itemModel.findByIdAndUpdate(req.params.id, {
            nombre, descripcion, valor, rareza, ataque, poder_magico
        },{new: true});
        return res.status(200).json({
            ok: true,
            msg:"item actualizado con exito"
            ,
            item: item
        })
    } catch (error) {
        return res.status(500).json({
            ok: false, 
            msg:"error interno al actualizar el item"
        });
    }
}
export const deleteItem = async (req, res)=>{
    try {
        const item = await itemModel.findByIdAndUpdate(req.params.id,
            {
                active: false
            },{new: true}
        );
        return res.status(200).json({ok: true, msg:"item eliminado con exito", item: item})

    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg:"error interno en eliminar el item"
        });
    }
}