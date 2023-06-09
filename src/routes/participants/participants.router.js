import express from "express";
import multer from "multer";

import { 
    httpsGetAllParticipants,
    httpsAddNewParticipant,
    httpsGetParticipant,
    httpsUpdateParticipant,
    httpsUpdateParticipantsCode,
    httpsGetParticipantBySpeciality
} from "./participants.controller.js";

const participantsRouter = express.Router();

const upload = multer();

participantsRouter.get("/", httpsGetAllParticipants);
participantsRouter.get("/code", httpsUpdateParticipantsCode);
participantsRouter.get("/:id", httpsGetParticipant);
participantsRouter.get("/speciality/:speciality", httpsGetParticipantBySpeciality);
participantsRouter.post("/", upload.single("csv"), httpsAddNewParticipant);
participantsRouter.put("/:id", httpsUpdateParticipant);

export default participantsRouter;