import playerRouter from "./jug.routes.js";
import characterRouter from "./pers.routes.js";
import { Router } from "express";

const AllRouter = Router();

AllRouter.use(playerRouter);
AllRouter.use(characterRouter);

export default AllRouter;