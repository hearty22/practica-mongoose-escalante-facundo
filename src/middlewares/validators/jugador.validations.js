import { body, param } from "express-validator";
import { jugadorModel } from "../../models/jugador.model.js";
//username, email, contraseñam nivel, personajes
export const createPlayerValidator = [
    body("username")
    .notEmpty().withMessage("el campo username es obligatorio")
    .isString().withMessage("el campo username debe ser un string")
    .custom(async (value)=>{
        const player = await jugadorModel.findOne({username: value});
        if(player){
            throw new Error("el username ya existe");
        }
    })
    ,
    body("email")
    .notEmpty().withMessage("el campo email es obligatorio")
    .isString().withMessage("el campo email debe ser un string")
    .isEmail().withMessage("el email debe de ser valido")
    .custom(async (value)=>{
        const email = await jugadorModel.findOne({email: value});
        if(email){
            throw new Error("el email ya existe");
            
        }
    })
    ,
    body("contraseña")
    .notEmpty().withMessage("el campo contraseña es obligatorio")
    .isString().withMessage("el campo contraseña debe ser un string")
    .isStrongPassword().withMessage("la contraseña debe de ser una fuerte")
    ,
    body("nivel")
    .notEmpty().withMessage("el nivel es obligatorio")
    .isInt({ min: 1 }).withMessage("el campo nivel debe de ser un entero positivo")
    ,
    body("personajes")
    .optional()
    .isArray().withMessage("el campo personajes debe ser un array")
];

export const getPlayerValidation = [
    param("id")
    .custom(async (value)=>{
        const player = await jugadorModel.findById(value)
        if(!player){
            throw new Error("jugador no encontrado");
        }
    })
];

export const updatePlayerValidation = [
    param("id")
    .custom(async (value)=>{
        const player = await jugadorModel.findById(value)
        if(!player){
            throw new Error("jugador no encontrado");
        }
    }),
    body("username")
    .optional()
    .isString().withMessage("el campo username debe ser un string")
    .custom(async (value, {req})=>{
        const player = await jugadorModel.findOne({username: value, _id: {$ne:req.params.id}});
        if(player){
            throw new Error("el username ya existe");
        }
    })
    ,
    body("email")
    .optional()
    .isEmail().withMessage("el email debe de ser valido")
    .custom(async (value, {req})=>{
        const email = await jugadorModel.findOne({email: value, _id: {$ne:req.params.id} });
        if(email){
            throw new Error("el email ya existe");
            
        }
    })
    ,
    body("contraseña")
    .optional()
    .isString().withMessage("el campo contraseña debe ser un string")
    .isStrongPassword().withMessage("la contraseña debe de ser una fuerte")
    ,
    body("nivel")
    .optional()
    .isInt({ min: 1 }).withMessage("el campo nivel debe de ser un entero positivo")
    ,
    body("personajes")
    .optional()
    .isArray().withMessage("el campo personajes debe ser un array")
];
