import express from "express";

import {
    httpsLoginHandler
} from "./auth.controller.js";

const authRouter = express.Router();

authRouter.post("/login", httpsLoginHandler);

export default authRouter;