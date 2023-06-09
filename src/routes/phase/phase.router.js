import express from "express";

import {
    httpsGetPhase,
    httpsAddPhase,
    httpsUpdatePhase
} from "./phase.controller.js";

const phasesRouter = express.Router();

phasesRouter.get("/", httpsGetPhase);
phasesRouter.post("/", httpsAddPhase);
phasesRouter.put("/:id", httpsUpdatePhase);

export default phasesRouter;