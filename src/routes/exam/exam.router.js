import express from "express";

import {
    httpsAddNewExam,
    httpsAssignTeacherToExam
} from "./exam.controller.js";

const examsRouter = express.Router();

examsRouter.post("/", httpsAddNewExam);
examsRouter.put("/:id/teachers", httpsAssignTeacherToExam)

export default examsRouter;