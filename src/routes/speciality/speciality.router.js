import express from "express";
import { 
    httpsGetAllSpecialities,
    httpsAddNewSpeciality,
    httpsGetSpeciality,
    httpsUpdateSpeciality
} from "./speciality.controller.js";

const specialitiesRouter = express.Router();

specialitiesRouter.get("/", httpsGetAllSpecialities);
specialitiesRouter.get("/:id", httpsGetSpeciality);
specialitiesRouter.post("/", httpsAddNewSpeciality);
specialitiesRouter.put("/:id", httpsUpdateSpeciality);

export default specialitiesRouter;