import {
    getAllGrades,
    addGrades

} from "../../models/grade.model.js";

const httpsGetAllGrades = async (req, res) => {
    const grades = await getAllGrades();

    if(!grades) return res.status(400).json({ error: "something went wrong" });
    return res.status(200).json(grades);
}

const httpsAddGrades = async (req, res) => {
    const grades = await addGrades();

    if (!grades) return res.status(400).json({ error: "something went wrong" });
    return res.status(200).json(grades);
}

export {
    httpsGetAllGrades,
    httpsAddGrades
} 