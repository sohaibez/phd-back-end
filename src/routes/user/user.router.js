import express from "express";
import {
    httpsGetAllUsersByType,
    httpsAddNewUser,
    httpsUpdateUser,
    httpsDeleteUser
} from "./user.controller.js";

const usersRouter = express.Router();

usersRouter.get("/:type", httpsGetAllUsersByType);
usersRouter.post("", httpsAddNewUser);
usersRouter.put("/:id", httpsUpdateUser);
usersRouter.delete("/:id", httpsDeleteUser);

export default usersRouter;