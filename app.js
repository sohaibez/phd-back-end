import express from "express";
import * as dotenv from 'dotenv';

import participantsRouter from "./src/routes/participants/participants.router.js";

dotenv.config()

const app = express();

app.use("/participants", participantsRouter);

export default app;