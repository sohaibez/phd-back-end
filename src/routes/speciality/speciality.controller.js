import {
    getAllSpecialities,
    getSpecialityById,
    addNewSpeciality
} from "../../models/speciality.model.js";

const httpsGetAllSpecialities = async (req, res) => {
    const specialities = await getAllSpecialities();

    if (!specialities) return res.status(400).json({error: "something went wrong"});
    return res.status(200).json(specialities);
}

const httpsGetSpeciality = async (req, res) => {
    const specialityId = req.params.id;

    const speciality = await getSpecialityById(specialityId);
    if (!speciality) return res.status(404).json({error: "speciality not found"});

    return res.status(200).json(speciality);
}

const httpsAddNewSpeciality = async (req, res) => {
    const { 
        name
    } = req.body;

    if (!name) return res.status(400).send({error: "invalid data"});

    const speciality = await addNewSpeciality(req.body);

    if (!speciality) return res.status(400).json({error: "couldn't add speciality"});
    return res.status(201).json(speciality);
}

export {
    httpsGetAllSpecialities,
    httpsAddNewSpeciality,
    httpsGetSpeciality
}