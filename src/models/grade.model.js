import gradeMongo from "./grade.mongo.js";

const getAllGrades = async () => {
    try {
        const grades = await gradeMongo.find();
        return grades;
    } catch (err) {
        console.log(err);
        return null;
    }
}

const addGrades = async () => {
    try {
        
    } catch (err) {
        console.log(err);
        return null;
    }
}

export {
    getAllGrades
}