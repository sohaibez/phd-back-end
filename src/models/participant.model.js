import bcrypt from "bcrypt";
import { v4 as uuidv4 } from 'uuid';

import participantMongo from "./participant.mongo.js";

const getAllParticipants = async () => {
    try {
        const participants = await participantMongo.find();
        return participants;
    } catch (err) {
        return null;
    }
}

const getParticipantById = async (participantId) => {
    try {
        const participant = await participantMongo.findById(participantId);
        return participant;
    } catch (err) {
        return null;
    }
}

const addNewParticipant = async ({ firstName, lastName, firstNameArabic, lastNameArabic, email, speciality, password }) => {
    try {            
        const saltRounds = 10;
        const hashPassword = await bcrypt.hash(password, saltRounds);

        const participant = new participantMongo(
            {
                firstName,
                lastName,
                firstNameArabic,
                lastNameArabic,
                email,
                speciality,
                password: hashPassword
            }
        );
        return await participantMongo.create(participant);
    } catch (err) {
        console.log(err);
        return null;
    }
}

const updateParticipant = async (participantId, updatedParticipantData) => {
    try {
        const updatedParticipantDB = await participantMongo.findOneAndUpdate(
            { _id: participantId}, 
            updatedParticipantData,
            { new: true}
        );

        return updatedParticipantDB;
    } catch (err) {
        console.log(err);
        return null;
    }
}

const updateParticipantsCode = async () => {
    try {
        const participants = await participantMongo.find();

        const saltRounds = 10;
        for (let participant of participants) {
            const code = uuidv4().toString();
            const codeEncrypted = await bcrypt.hash(code, saltRounds);

            participant.code = code;
            participant.codeEncrypted = codeEncrypted;
            await participant.save();
        }
        
        return await participantMongo.find();
    } catch (err) {
        console.log(err);
        return null;
    }
}

const getParticipantBySpeciality = async (participantSpeciality) => {
    try {
        const participant = await participantMongo.find({ speciality: participantSpeciality });
        return participant;
    } catch (err) {
        console.log(err);
        return null;
    }
}

export {
    getAllParticipants,
    getParticipantById,
    addNewParticipant,
    updateParticipant,
    updateParticipantsCode,
    getParticipantBySpeciality
}