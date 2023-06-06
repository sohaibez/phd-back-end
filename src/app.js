import express from "express";
import bodyParser from "body-parser";
import * as dotenv from 'dotenv';
import cors from "cors";

import participantsRouter from "./routes/participants/participants.router.js";
import usersRouter from "./routes/user/user.router.js";
import announceRouter from "./routes/announce/announce.router.js";
import messagesRouter from "./routes/message/message.router.js";
import specialitiesRouter from "./routes/speciality/speciality.router.js";
import modulesRouter from "./routes/module/module.router.js";
import examsRouter from "./routes/exam/exam.router.js";

dotenv.config()

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use("/participants", participantsRouter);
app.use("/users", usersRouter);
app.use("/announces", announceRouter);
app.use("/messages", messagesRouter);
app.use("/specialities", specialitiesRouter);
app.use("/modules", modulesRouter);
app.use("/exams", examsRouter);

export {
    app
};