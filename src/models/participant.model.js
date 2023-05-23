import bcrypt from "bcrypt";

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

const addNewParticipant = async ({ firstName, lastName, email, password, code }) => {
    const reqCode = code;
    try {            
        const saltRounds = 10;
        const hashPassword = await bcrypt.hash(password, saltRounds);
        const hashCode = await bcrypt.hash(code.toString(), saltRounds);

        const isParticipantExisted = await participantMongo.exists({code: reqCode});

        if (isParticipantExisted) return "user already Existed";

        const participant = new participantMongo(
            {
                firstName,
                lastName,
                email,
                password: hashPassword,
                code,
                codeEncrypted: hashCode
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

export {
    getAllParticipants,
    getParticipantById,
    addNewParticipant,
    updateParticipant
}