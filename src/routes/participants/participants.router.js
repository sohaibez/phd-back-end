import express from "express";
import { httpsGetAllParticipants } from "./participants.controller.js";

const participantsRouter = express.Router();

participantsRouter.get("/", httpsGetAllParticipants);

export default participantsRouter;