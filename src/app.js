import express from "express";
import bodyParser from "body-parser";
import * as dotenv from 'dotenv';

import participantsRouter from "./routes/participants/participants.router.js";
import usersRouter from "./routes/user/user.router.js";
import announceRouter from "./routes/announce/announce.router.js";
import specialitiesRouter from "./routes/speciality/speciality.router.js";
import modulesRouter from "./routes/module/module.router.js";

dotenv.config()

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use("/participants", participantsRouter);
app.use("/users", usersRouter);
app.use("/announces", announceRouter);
app.use("/specialities", specialitiesRouter);
app.use("/modules", modulesRouter);

export {
    app
};