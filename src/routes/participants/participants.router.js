import express from "express";
import { 
    httpsGetAllParticipants,
    httpsAddNewParticipant,
    httpsGetParticipant,
    httpsUpdateParticipant
} from "./participants.controller.js";

const participantsRouter = express.Router();

participantsRouter.get("/", httpsGetAllParticipants);
participantsRouter.get("/:id", httpsGetParticipant);
participantsRouter.post("/", httpsAddNewParticipant);
participantsRouter.put("/:id", httpsUpdateParticipant);

export default participantsRouter;