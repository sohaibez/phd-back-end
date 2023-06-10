import noteMongo from "./note.mongo.js";
import userMongo from "./user.mongo.js";
import moduleMongo from "./module.mongo.js";
import participantMongo from "./participant.mongo.js";
import mongoose from "mongoose";

const getNoteByModuleIdAndParticipantCode = async (participantCode, moduleId) => {
    try {
        const note = await noteMongo.find({
            participantCode,
            moduleId
        });
        return note;
    } catch (err) {
        console.log(err);
        return null;
    }
}

const addNoteToParticipantHelper = async (participantCode, moduleId, note) => {
    try {
        const noteDb = new noteMongo({
            participantCode,
            moduleId,
        });
        
        noteDb.notes.push(note);
        await noteDb.save();

        return noteDb;
    } catch (err) {
        console.error(err);
        return null;
    }
}

const addNoteToParticipant = async (teacherId, participantCode, moduleId, note) => {
    try {
        const teacherDb = await userMongo.findById(teacherId);
        const moduleDb = await moduleMongo.findById(moduleId);
        const participantDb = await participantMongo.find({ code: participantCode });

        if (!teacherDb || !moduleDb || !participantDb) return null;

        if (!moduleDb.teachers.includes(teacherId)) return null;
        
        const noteDb = await getNoteByModuleIdAndParticipantCode(participantCode, moduleId);
        const existingNote = noteDb[0];
        // if (!existingNote.finaleNote || existingNote.notes.length === 3) return null;

        // check if we already have a note in the database
        if (!existingNote) {
            const noteDb = addNoteToParticipantHelper(participantCode, moduleId, note);
            if (!noteDb) return null;
            return noteDb;
        } else if (existingNote.notes.length === 1) {
            existingNote.notes.push(note);

            const difference = Math.abs(existingNote.notes[0] - existingNote.notes[1]);
            const sum = existingNote.notes[0] + existingNote.notes[1];
            if (difference <= 3) {
                existingNote.finaleNote = sum / 2;
                await existingNote.save();
            }    
        } else if (existingNote.notes.length === 2) {
            existingNote.notes.push(note);

            const difference = Math.min(
                Math.abs(existingNote.notes[0] - note), 
                Math.abs(existingNote.notes[1] - note), 
            );
            existingNote.finaleNote = (note - difference) / 2;
            await existingNote.save();
        }

        return existingNote;
    } catch (err) {
        console.log(err);
        return null;
    }
}

export {
    addNoteToParticipant
}