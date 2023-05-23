import SpecialityMongo from "./speciality.mongo.js";

const getAllSpecialities = async () => {
    try {
        const specialities = await SpecialityMongo.find();
        return specialities;
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

        if (!isSpecialityExisted) return "speciality already Existed";
        const newSpeciality = new SpecialitySchema({
            name: name
        });

        return await SpecialityMongo.create(newSpeciality);
    } catch (err) {
        console.log(err);
        return null;
    }
}

const updateSpeciality = async (specialityId, updatedSpecialityData) => {
    try {
        const updatedSpecialityDB = await SpecialityMongo.findOneAndUpdate(
            { _id: specialityId}, 
            updatedSpecialityData,
            { new: true}
        );

        return updatedSpecialityDB;
    } catch (err) {
        console.log(err);
        return null;
    }
}

export {
    getAllSpecialities,
    getSpecialityById,
    addNewSpeciality,
    updateSpeciality
};