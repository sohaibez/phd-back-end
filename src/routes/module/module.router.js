import express from "express";

import {
    httpsGetAllModules,
    httpsGetModule,
    httpsAddNewModule
} from "./module.controller.js"

const modulesRouter = express.Router();

modulesRouter.get("/", httpsGetAllModules);
modulesRouter.get("/:id", httpsGetModule);
modulesRouter.post("/", httpsAddNewModule);

export default modulesRouter;