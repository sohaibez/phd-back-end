import express from "express";

import {
    httpsAddNewExam
} from "./exam.controller.js";

const examsRouter = express.Router();

examsRouter.post("/", httpsAddNewExam);

export default examsRouter;