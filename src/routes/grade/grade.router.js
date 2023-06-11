import express from "express";

import {
    httpsGetAllGrades,
    httpsAddGrades,
    httpsGetGradesBySpeciality
} from "./grade.controller.js";

const gradesRouter = express.Router();

gradesRouter.get("/", httpsGetAllGrades);
gradesRouter.post("/", httpsAddGrades);
gradesRouter.get("/:speciality", httpsGetGradesBySpeciality);

export default gradesRouter;