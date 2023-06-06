import examMongo from "./exam.mongo.js";
import moduleMongo from "./module.mongo.js";

const assignModuleToTeacher = async (moduleId, teacherId) => {
    
}

const addExam = async ({ moduleId }) => {
    try {
        const module = await moduleMongo.findOne({ _id: moduleId });

        if(!module) return null;

        const newExam = new examMongo({
            moduleId,
            teachers: [],
        });

        return await examMongo.create(newExam);
    } catch (err) {
        console.log(err);
        return null;
    }
}

export {
    addExam,
};