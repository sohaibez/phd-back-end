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
        const hash = await bcrypt.hash(password, saltRounds);

        const isParticipantExisted = await participantMongo.exists({code: reqCode});

        if (isParticipantExisted) return null;

        const participant = new participantMongo(
            {
                firstName,
                lastName,
                email,
                password: hash,
                code
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
        const updatedParticipant = await participantMongo.findOneAndUpdate(
            { _id: participantId}, 
            updatedParticipantData,
            { new: true }
        );

        return updatedParticipant;
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