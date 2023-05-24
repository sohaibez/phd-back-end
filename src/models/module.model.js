import moduleMongo from "./module.mongo.js";
import specialityMongo from "./speciality.mongo.js";

const getAllModules = async () => {
    try {
        const modules = await moduleMongo.find();
        return modules;
    } catch (err) {
        return null;
    }
}

const getModuleById = async (moduleId) => {
    try {
        const module = await moduleMongo.findById(moduleId);
        return module;
    } catch (err) {
        return null;
    }
}

const getModuleByName = async (name) => {
    try {
        const module = moduleMongo.findOne({ name: name });
        return module;
    } catch (err) {
        return null;
    }
}

const checkSpecialityExist = async (specialityId) => {
    try {
        const speciality = await specialityMongo.findById(specialityId);
        return speciality ? true : false; 
    } catch (err) {
        return false;
    }
}

const addNewModule = async ({name, speciality}) => {
    const isSpecialityExist = await checkSpecialityExist(speciality);
    const isModuleExist =  await getModuleByName(name);
    if (!isSpecialityExist || isModuleExist) return null;
    try {            
        const module = new moduleMongo(
            {
                name,
                speciality,
            }
        );
        return await moduleMongo.create(module);
    } catch (err) {
        console.log(err);
        return null;
    }
}

export {
    getAllModules,
    getModuleById,
    addNewModule
}