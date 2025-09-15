import { body, param } from "express-validator";
import { jugadorModel } from "../../models/jugador.model.js";
import { personajeModel } from "../../models/pers.model.js";
import { logroModel } from "../../models/logros.model.js";
//nombre, raza, clase, nivel, vida_actual, mana_actual, jugador, logros, inventario
export const createCharacterValidation =[
    body("nombre")
    .notEmpty().withMessage("el campo es obligatorio")
    .isString().withMessage("el campo debe de ser un string")
    ,
    body("raza")
    .notEmpty().withMessage("el campo es obligatorio")
    .isString().withMessage("el campo debe de ser un string")
    ,
    body("clase")
    .notEmpty().withMessage("el campo es obligatorio")
    .isString().withMessage("el campo debe de ser un string")
    ,
    body("nivel")
    .notEmpty().withMessage("el campo es obligatorio")
    .isInt({min:1}).withMessage("el campo debe de ser un entero positivo")
    ,
    body("vida_actual")
    .notEmpty().withMessage("el es obligatorio")
    .isInt().withMessage("el campo debe de ser un entero")
    ,
    body("mana_actual")
    .notEmpty().withMessage("el campo es obligatorio")
    .isInt().withMessage("el campo debe de ser un entero")
    ,
    body("jugador")
    .notEmpty().withMessage("el campo es obligatorio")
    .custom(async (value)=>{
        const player = await jugadorModel.findById(value);
        if(!player){
            throw new Error("el jugador no existe");
        }
    })
];

export const getCharacterValidation = [
    param("id")
    .custom(async (value)=>{
        const character = await personajeModel.findById(value);
        if(!character){
            throw new Error("el personaje no existe");
            
        }
    })
];
//nombre, raza, clase, nivel, vida_actual, mana_actual, logros
export const updateCharacterValidation = [
    body("nombre")
    .optional()
    ,
    body("raza")
    .optional()
    ,
    body("clase")
    .optional()
    ,
    body("nivel")
    .optional()
    .isInt({min:1}).withMessage("el campo debe de ser un entero positivo")

    ,
    body("vida_actual")
    .optional()
    .isInt().withMessage("el campo debe de ser un entero")

    ,
    body("mana_actual")
    .optional()
    .isInt().withMessage("el campo debe de ser un entero")
    ,
    body("logros")
    .optional()
    .custom(async (value)=>{
        const logro = await logroModel.findById(value)
        if(!logro){
            throw new Error("el logro no existe");
            
        }
    })
    ,
    param("id")
    .custom(async (value)=>{
        const character = await personajeModel.findById(value);
        if(!character){
            throw new Error("personaje no encontrado");
            
        }
    })
];
export const deleteCharacterValidation = [
    param("id")
    .custom(async (value)=>{
        const character = await personajeModel.findById(value);
        if(!character){
            throw new Error("personaje no encontrado");
            
        }
    })

];