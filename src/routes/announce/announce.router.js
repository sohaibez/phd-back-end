import express from "express";

import {
    httpsGetAllAnnounces,
    httpsAddNewAnnounce
} from "./announce.controller.js";

const announceRouter = express.Router();

announceRouter.get("/", httpsGetAllAnnounces);
announceRouter.post("/", httpsAddNewAnnounce);

export default announceRouter;