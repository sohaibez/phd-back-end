import express from "express";

import {
    httpsGetAllModules,
    httpsGetModule,
    httpsAddNewModule,
    httpsAddTeacherToModule
} from "./module.controller.js"

const modulesRouter = express.Router();

modulesRouter.get("/", httpsGetAllModules);
modulesRouter.get("/:id", httpsGetModule);
modulesRouter.post("/", httpsAddNewModule);
modulesRouter.put("/:moduleId/teachers", httpsAddTeacherToModule);

export default modulesRouter;