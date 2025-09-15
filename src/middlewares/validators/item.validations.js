import { body, param } from "express-validator";
import { itemModel } from "../../models/item.model.js";
//nombre, descricpion, rareza, valor, ataque, poder_magico

export const createItemValidator = [
body("nombre")
.notEmpty().withMessage("el campo es obligatorio")
.isString().withMessage("el campo debe de ser un string")
,
body("descripcion")
.notEmpty().withMessage("el campo es obligatorio")
.isString().withMessage("el campo debe de ser un string")
,
body("rareza")
.notEmpty().withMessage("el campo es obligatorio")
.isString().withMessage("el campo debe de ser un string")
,
body("valor")
.notEmpty().withMessage("el campo es obligatorio")
.isInt({min: 1}).withMessage("el campo debe de ser un entero positivo no menos que 1")
,

body("ataque")
.notEmpty().withMessage("el campo es obligatorio")
.isInt({min: 1}).withMessage("el campo debe de ser un entero positivo no menos que 1")
,
body("poder_magico")
.notEmpty().withMessage("el campo es obligatorio")
.isInt({min: 1}).withMessage("el campo debe de ser un entero positivo no menos que 1")

];
export const getItemValidation = [
    param("id")
    .custom(async (value)=>{
        const item = await itemModel.findById(value);
        if(!item){
            throw new Error("el item no existe");
        }
    })
];
export const updateItemValidation = [
    param("id")
    .custom(async (value)=>{
        const item = await itemModel.findById(value);
        if(!item){
            throw new Error("el item no existe");
        }
    }),
    body("nombre")
    .optional()
    .isString().withMessage("el campo debe de ser un string")
    ,
    body("descripcion")
    .optional()
    .isString().withMessage("el campo debe de ser un string")
    ,
    body("rareza")
    .optional()
    .isString().withMessage("el campo debe de ser un string")
    ,
    body("valor")
    .optional()
    .isInt({min: 1}).withMessage("el campo debe de ser un entero positivo no menos que 1")
    ,

    body("ataque")
    .optional()
    .isInt({min: 1}).withMessage("el campo debe de ser un entero positivo no menos que 1")
    ,
    body("poder_magico")
    .optional()
    .isInt({min: 1}).withMessage("el campo debe de ser un entero positivo no menos que 1")
];
export const deleteItemValidation = [
    param("id")
    .custom(async (value)=>{
        const item = await itemModel.find({
            _id: value,
            active: true
        })
        if(!item){throw new Error("item no encontrado");
        }
        return true;
    })
];