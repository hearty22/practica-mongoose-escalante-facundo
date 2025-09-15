import inventoryRouter from "./invent.routes.js";
import playerRouter from "./jug.routes.js";
import characterRouter from "./pers.routes.js";
import { Router } from "express";

const AllRouter = Router();

AllRouter.use(playerRouter);
AllRouter.use(characterRouter);
AllRouter.use(inventoryRouter);
export default AllRouter;