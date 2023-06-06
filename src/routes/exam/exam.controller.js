import {
    addExam,
    assignTeacherToExam
} from "../../models/exam.model.js";

const httpsAddNewExam = async (req, res) => {
    const {
        moduleId
    } = req.body;

    const exam = await addExam({moduleId});

    if (!exam) return res.status(400).json({error: "invalid data"});
    return res.status(200).json(exam);
}

const httpsAssignTeacherToExam = async (req, res) => {
    const {
        id
    } = req.params;

    const {
        teacherId
    } = req.body;
    
    const examDb = await assignTeacherToExam(id, teacherId);

    if (!examDb) return res.status(404).json({error: "invalid data"});
    return res.status(200).json(examDb);
}

export {
    httpsAddNewExam,
    httpsAssignTeacherToExam
}