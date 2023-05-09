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

const addNewSpeciality = async (specialityName) => {
    try {
        const isSpecialityExisted = await SpecialityMongo.exists({name: specialityName});

        if (!isSpecialityExisted) return "speciality already Existed";
        const newSpeciality = new SpecialitySchema({
            name: specialityName
        });

        return await SpecialityMongo.create(newSpeciality);
    } catch (err) {
        console.log(err);
        return null;
    }
}