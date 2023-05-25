import {
    getAllAnnounce,
    addNewAnnounce
} from "../../models/Announce.model.js"

import { getSpecialityByName } from "../../models/speciality.model.js";

const httpsGetAllAnnounces = async (req, res) => {
    const announces = await getAllAnnounce();

    if (!announces) return res.status(400).json({error: "something went wrong"});
    return res.status(200).json(announces);
}

const httpsAddNewAnnounce = async (req, res) => {
    const {
        title,
        description,
        speciality
    } = req.body;

    if (!title || !description) return res.status(400).send({error: "invalid data"});
    let specialityDb = await getSpecialityByName(speciality);
    const specialityId = specialityDb?._id;

    const specialityNotEmpty = speciality === "";
    if (!specialityNotEmpty && !specialityId) return res.status(404).json({error: "speciality not found"});
    
    const announce = await addNewAnnounce({ title, description, speciality});

    if (!announce) return res.status(400).json({error: "couldn't add speciality"});
    return res.status(201).json(announce);
}

export {
    httpsGetAllAnnounces,
    httpsAddNewAnnounce
}