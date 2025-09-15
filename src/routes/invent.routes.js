import { Router } from "express";
import { getAllInventories, getInventory, updateInventory } from "../controllers/invent.controllers.js";
import { getInventoryValidation, updateInventoryValidation } from "../middlewares/validators/invent.validations.js";
import validator from "../middlewares/validator.js";
const inventoryRouter = Router();

inventoryRouter.get("/inventories", getAllInventories);
inventoryRouter.get("/inventories/:id", getInventoryValidation, validator ,getInventory);
inventoryRouter.put("/inventories/:id", updateInventoryValidation, validator, updateInventory);
export default inventoryRouter;