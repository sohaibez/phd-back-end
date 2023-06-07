import FinaleNoteMongo from "./finaleNote.mongo.js";
import examMongo from "./exam.mongo.js";

const assignNote = async (examId, note) => {
    try {
        const examDb = await examMongo.findById(examId);
        if (examDb) return null;

        const finaleNoteDb = new FinaleNoteMongo({examId, note});
        return await FinaleNoteMongo.create(note);
    } catch (err) {
        console.log(err);
        return null;
    }
}

export {
    assignNote
}