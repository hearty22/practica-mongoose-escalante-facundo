import { validationResult } from "express-validator";


const validator = (req, res, next)=>{
    const result = validationResult(req);
    if(!result.isEmpty()){return res.status(400).json({
        error: result.mapped()
    })};
    next();
};
export default validator;