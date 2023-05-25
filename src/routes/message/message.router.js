import express from "express";

import {
    httpsGetAllMessages,
    httpsGetMessageByReceiver,
    httpsSendMessage
} from "./message.controller.js";

const messagesRouter = express.Router();

messagesRouter.get("/", httpsGetAllMessages);
messagesRouter.get("/:receiver", httpsGetMessageByReceiver);
messagesRouter.post("/", httpsSendMessage);

export default messagesRouter;