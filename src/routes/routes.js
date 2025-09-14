import playerRouter from "./jug.routes.js";
import { Router } from "express";

const AllRouter = Router();

AllRouter.use(playerRouter);

export default AllRouter;