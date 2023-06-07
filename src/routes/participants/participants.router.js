import express from "express";
import multer from "multer";

import { 
    httpsGetAllParticipants,
    httpsAddNewParticipant,
    httpsGetParticipant,
    httpsUpdateParticipant,
    httpsUpdateParticipantsCode
} from "./participants.controller.js";

const participantsRouter = express.Router();

const upload = multer();

participantsRouter.get("/", httpsGetAllParticipants);
participantsRouter.get("/:id", httpsGetParticipant);
participantsRouter.post("/", upload.single("csv"), httpsAddNewParticipant);
participantsRouter.put("/code", httpsUpdateParticipantsCode);
participantsRouter.put("/:id", httpsUpdateParticipant);

export default participantsRouter;