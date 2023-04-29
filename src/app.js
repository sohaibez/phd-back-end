import express from "express";
import bodyParser from "body-parser";
import * as dotenv from 'dotenv';

import participantsRouter from "./routes/participants/participants.router.js";

dotenv.config()

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use("/participants", participantsRouter);

export {
    app
};