import express from "express";
import {
    httpsGetAllUsersByType,
    httpsAddNewUser,
    httpsUpdateUser,
    httpsAddNoteToParticipant,
    httpsDeleteUser,
    httpsGetUserById,
    httpsGetModulesOfTeacher
} from "./user.controller.js";

const usersRouter = express.Router();

usersRouter.get("/type/:type", httpsGetAllUsersByType);
usersRouter.get("/:id", httpsGetUserById);
usersRouter.post("", httpsAddNewUser);
usersRouter.post("/:id/notes", httpsAddNoteToParticipant);
usersRouter.put("/:id", httpsUpdateUser);
usersRouter.delete("/:id", httpsDeleteUser);
usersRouter.get("/teacher/:id/modules", httpsGetModulesOfTeacher);

export default usersRouter;