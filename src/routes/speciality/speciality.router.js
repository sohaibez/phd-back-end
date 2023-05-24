import express from "express";
import { 
    httpsGetAllSpecialities,
    httpsAddNewSpeciality,
    httpsGetSpeciality,
} from "./speciality.controller.js";

const specialitiesRouter = express.Router();

specialitiesRouter.get("/", httpsGetAllSpecialities);
specialitiesRouter.get("/:id", httpsGetSpeciality);
specialitiesRouter.post("/", httpsAddNewSpeciality);

export default specialitiesRouter;