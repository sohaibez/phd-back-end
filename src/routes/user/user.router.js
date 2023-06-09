import express from "express";
import {
    httpsGetAllUsersByType,
    httpsAddNewUser,
    httpsUpdateUser,
    httpsDeleteUser,
    httpsGetUserById
} from "./user.controller.js";

const usersRouter = express.Router();

usersRouter.get("/type/:type", httpsGetAllUsersByType);
usersRouter.get("/:id", httpsGetUserById);
usersRouter.post("", httpsAddNewUser);
usersRouter.put("/:id", httpsUpdateUser);
usersRouter.delete("/:id", httpsDeleteUser);

export default usersRouter;