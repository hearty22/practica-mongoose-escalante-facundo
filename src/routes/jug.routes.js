import { Router } from "express";
import { createPlayer, deletePlayer, getallPlayers, getPlayer, updatePlayer } from "../controllers/jugador.controllers.js";
import { createPlayerValidator, getPlayerValidation, updatePlayerValidation } from "../middlewares/validators/jugador.validations.js";
import validator from "../middlewares/validator.js";

const playerRouter = Router();

playerRouter.post("/players", createPlayerValidator, validator, createPlayer);
playerRouter.get("/players", getallPlayers );
playerRouter.get("/players/:id", getPlayerValidation, validator ,getPlayer);
playerRouter.put("/players/:id", updatePlayerValidation, validator, updatePlayer);
playerRouter.delete("/players/:id", getPlayerValidation, validator, deletePlayer);
export default playerRouter;