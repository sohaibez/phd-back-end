import specialityMongo from "./speciality.mongo.js";
import SpecialityMongo from "./speciality.mongo.js";

const getAllSpecialities = async () => {
    try {
        const specialities = await SpecialityMongo.find();
        console.log(`speciality ${specialities}`);
        return specialities;
    } catch (err) {
        return null;
    }
}

const getSpecialityByName = async (name) => {
    try {
        const speciality = await specialityMongo.findOne({ name: name });
        return speciality;
    } catch (err) {
        return null;
    } 
}

const getSpecialityById = async (specialityId) => {
    try {
        const speciality = await SpecialityMongo.findById(specialityId);
        return speciality;
    } catch (err) {
        return null;
    }
}

const addNewSpeciality = async ({name}) => {
    try {
        const isSpecialityExisted = await SpecialityMongo.exists({name: name});

        if (isSpecialityExisted) return "speciality already Existed";
        const newSpeciality = new SpecialityMongo({
            name: name
        });

        return await SpecialityMongo.create(newSpeciality);
    } catch (err) {
        console.log(err);
        return null;
    }
}

export {
    getAllSpecialities,
    getSpecialityById,
    getSpecialityByName,
    addNewSpeciality
};