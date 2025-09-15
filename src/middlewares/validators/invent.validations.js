import { body, param } from "express-validator";
import { inventarioModel } from "../../models/invent.model.js";
import { itemModel } from "../../models/item.model.js";


export const getInventoryValidation = [
    param("id")
    .custom(async (value)=>{
        const inventory = await inventarioModel.findById(value);
        if(!inventory){
            throw new Error("inventario no econtrado");
            
        }
        return true;
    })
];

export const updateInventoryValidation = [
    body("capacidad")
    .optional()
    .isInt({min: 50}).withMessage("el inventario debe de ser un entero positivo y no menos que 50")
    ,
    body("item")
    .optional()
    .custom(async (value, {req})=>{
        const item = await itemModel.findById(value);
        if(!item){
            throw new Error("el item que desea ingresar no existe");
        }
        else{
            const inventory = await inventarioModel.findByIdAndUpdate(req.params.id,
                {
                    $inc :{capacidad: -1}
                }
            )
        }
    })
    ,
    param("id")
    .custom(async (value)=>{
        const inventory = await inventarioModel.findById(value);
        if(!inventory){
            throw new Error("inventario no econtrado");
            
        }
        return true;
    })

];