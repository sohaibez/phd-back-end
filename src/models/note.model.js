import noteMongo from "./note.mongo.js";
import examMongo from "./exam.mongo.js";
import participantMongo from "./participant.mongo.js";

import {
    assignNote
} from "./finaleNote.model.js";

import {
    getUsersByRole
} from "./user.model.js";

const addNote = async (examId, teacherId, participantCode, note) => {
    try {
        const previousNote = await noteMongo.find({examId});

        const exam = await examMongo.findById(examId);
        if (!exam) return null;
        
        const teacher = await userMongo.findById(teacherId);
        if (!teacher) return null;
        if (!isTeacherAllowedToAssignNote(examId, teacherId)) return null;
        
        const participant = await participantMongo.find({code: participantCode});
        if (!participant) return null;
                
        const noteDb = new noteMongo({
            examId,
            teacherId,
            participantCode,
            note
        });
        const savedNote = await participantMongo.create(noteDb);

        let finaleNote;
        if (previousNote.length === 1) {
            if (previousNote[0].note - note < 3) {
                finaleNote = (previousNote[0].note + note)/ 2;
                await assignNote(examId, finaleNote);
                return Object.assign(finaleNote, savedNote);
            } else {
                const teacherId = await addThirdTeacher(examId);
            }
        } else if (previousNote.length === 2) {
            const note1 = previousNote[0].note;
            const note2 = previousNote[1].note;
            const note3 = previousNote[2].note;
            if (note1 - note3 < note2 - note3) {
                finaleNote = (note3 + note1) / 2;
            } else {
                finaleNote = (note3 + note2) / 2;
            }
            await assignNote(examId, finaleNote);
            return Object.assign(finaleNote, savedNote);
        }

        return savedNote;
    } catch (err) {
        console.log(err);
        return null;
    }
}

const isTeacherAllowedToAssignNote = async (examId, teacherId) => {
    try {
        const exam = await examMongo.findOne(
            { 
                _id: examId, 
                teachers: { 
                    $in: [teacherId] 
                } 
            }
        );

        return !!exam;
    } catch (err) {
        console.log(err);
        return null;
    }
}

const addThirdTeacher = async (examId) => {
    const teacher = await getAnotherTeacher(examId);
    if (!teacher) return null;

    try {
        const exam = await examMongo.findById(examId);
        if (!exam) return null;
        
        exam.teachers.push(teacher._id); 
        await exam.save();
    
        return teacher._id;
      } catch (error) {
        console.error(error);
        return null;
      }
}

const getAnotherTeacher = async (examId) => {
    const allTeachers = await getUsersByRole("teacher");
    if (!allTeachers) return null;

    try {
        const exam = await examMongo.findById(examId).populate('teachers');
        if (!exam) return null;
    } catch (err) {
        console.log(err);
        return null;
    }

    const teachers = exam.teachers;

    for (let teacher of allTeachers) {
        if (!teachers.includes(teacher._id)) return teacher; 
    }
    return null;
}

export {
    addNote
}