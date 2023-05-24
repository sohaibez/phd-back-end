import moduleMongo from "./module.mongo.js";

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

const addNewModule = async ({name, speciality}) => {
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

const updateModule = async () => {

}

export {
    getAllModules,
    getModuleById,
    addNewModule,
    updateModule
}