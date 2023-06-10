import express from "express";

import {
    httpsGetAllGrades,
    httpsAddGrades
} from "./grade.controller.js";

const gradesRouter = express.Router();

gradesRouter.get("/", httpsGetAllGrades);
gradesRouter.post("/", httpsAddGrades);

export default gradesRouter;