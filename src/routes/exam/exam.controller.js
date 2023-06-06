import {
    addExam
} from "../../models/exam.model.js";

const httpsAddNewExam = async (req, res) => {
    const {
        moduleId
    } = req.body;

    const exam = await addExam({moduleId});

    if (!exam) return res.status(400).json({error: "invalid data"});
    return res.status(200).json(exam);
}

export {
    httpsAddNewExam,
}