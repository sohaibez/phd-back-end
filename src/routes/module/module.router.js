import express from "express";

import {
    httpsGetAllModules,
    httpsGetModule,
    httpsAddNewModule,
    httpsUpdateModule
} from "./module.controller.js"

const modulesRouter = express.Router();

modulesRouter.get("/", httpsGetAllModules);
modulesRouter.get("/:id", httpsGetModule);
modulesRouter.post("/", httpsAddNewModule);
modulesRouter.put("/:id", httpsUpdateModule);

export default modulesRouter;