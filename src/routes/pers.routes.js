import { Router } from "express";
import { createCharacterValidation, deleteCharacterValidation, getCharacterValidation, updateCharacterValidation } from "../middlewares/validators/pers.validations.js";
import validator from "../middlewares/validator.js";
import { createCharacter, deleteCharacter, getAllCharacters, getCharacter, updateCharacter } from "../controllers/pers.controllers.js";

const characterRouter = Router();


characterRouter.post("/characters", createCharacterValidation, validator, createCharacter);
characterRouter.get("/characters", getAllCharacters);
characterRouter.get("/characters/:id", getCharacterValidation, validator, getCharacter);
characterRouter.put("/characters/:id", updateCharacterValidation, validator, updateCharacter);
characterRouter.delete("/characters/:id", deleteCharacterValidation, validator, deleteCharacter);
export default characterRouter;