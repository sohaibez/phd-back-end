import examMongo from "./exam.mongo.js";
import moduleMongo from "./module.mongo.js";
import userMongo from "./user.mongo.js";

const addExam = async ({ moduleId }) => {
    try {
        const module = await moduleMongo.findOne({ _id: moduleId });
        if(!module) return null;

        const exam = await examMongo.findOne({ moduleId });
        if (exam) return null;

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

const assignTeacherToExam = async (examId, teacherId) => {
    try {
        const exam = await examMongo.findOne({ _id: examId });
        if (!exam) return null;
        
        const teacher = await userMongo.findOne({ _id: teacherId, type: 'teacher' });
        if (!teacher) return null;

        exam.teachers.push(teacherId);

        const updatedExam = await exam.save();
        return updatedExam;
    } catch (err) {
        console.log(err);
        return null;
    }
}

export {
    addExam,
    assignTeacherToExam,
};