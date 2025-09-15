import { Router } from "express";
import { createItemValidator, deleteItemValidation, getItemValidation, updateItemValidation } from "../middlewares/validators/item.validations.js";
import validator from "../middlewares/validator.js";
import { createItem, deleteItem, getAllItems, getItem, updateItem } from "../controllers/item.controllers.js";

const itemRouter = Router();
itemRouter.post("/items", createItemValidator, validator, createItem);
itemRouter.get("/items", getAllItems);
itemRouter.get("/items/:id", getItemValidation, validator, getItem)
itemRouter.put("/items/:id", updateItemValidation, validator, updateItem);
itemRouter.delete("/items/:id", deleteItemValidation, validator, deleteItem);

export default itemRouter;