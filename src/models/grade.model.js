import gradeMongo from "./grade.mongo.js";
import noteMongo from "./note.mongo.js";
import participantMongo from "./participant.mongo.js";

const getAllGrades = async () => {
    try {
        const grades = await gradeMongo.find();
        return grades;
    } catch (err) {
        console.log(err);
        return null;
    }
}

const calculateGrade = async (participantCode) => {
    try {
        const notes = await noteMongo.find({ participantCode });
        let grade = 0;
        for (let note of notes) {
            grade += note.finaleNote;
        }
        grade /= notes.length;
        return grade;
    } catch (err) {
        console.log(err);
        return null;
    }
}

const addGrades = async () => {
    try {
        const participants = await participantMongo.find();
        for (let participant of participants) {
            let participantCode = participant.code;
            await calculateGrade(participantCode);
        }

        return getAllGrades();
    } catch (err) {
        console.log(err);
        return null;
    }
}

const getGradeBySpeciality = async (speciality) => {
    try {
        let returnedGrades = [];
        const grades = await getAllGrades();
        if (!grades) return null;

        for (let grade of grades) {
            let participant = await participantMongo.findById(grade.participantId);
            if (!participant) return null;
            if (participant.speciality === speciality) returnedGrades.push(grade);
        }

        return returnedGrades.sort((a, b) => a.grade - b.grade);
    } catch (err) {
        console.log(err);
        return null;
    }
}

export {
    getAllGrades,
    addGrades,
    getGradeBySpeciality
}