import csv from "csv-parser";
import { Readable } from "stream";

import {
    getAllParticipants,
    getParticipantById,
    addNewParticipant,
    updateParticipant
} from "../../models/participant.model.js";

const httpsGetAllParticipants = async (req, res) => {
    const participants = await getAllParticipants();

    if (!participants) return res.status(400).json({error: "something went wrong"});
    return res.status(200).json(participants);
}

const httpsGetParticipant = async (req, res) => {
    const participantId = req.params.id;

    const participant = await getParticipantById(participantId);
    if (!participant) return res.status(404).json({error: "participant not found"});

    return res.status(200).json(participant);
}

const checkParticipantsDataIsValid = ({ firstName, lastName, email, password, code }) => {
    if (firstName &&
        lastName &&
        email &&
        password &&
        code
    ) {
        return true;
    }
    return false;
}

const addParticipantFromForm = async (req, res) => {
    const participantDataIsValid = checkParticipantsDataIsValid(req.body);
    if (!participantDataIsValid) return res.status(400).send({error: "invalid data"});
    
    const participant = await addNewParticipant(req.body);

    if (participant === "user already Existed") return res.status(400).json({error: "user already exists"});
    
    if (!participant) return res.status(400).json({error: "couldn't add participant"});
    return res.status(201).json(participant);
}

const addParticipantFromCsv = async (req, res) => {
    const csvFile = req.file;
    const participants = [];

    const bufferData = csvFile.buffer.toString();
    const readStream = Readable.from(bufferData);

    readStream
        .pipe(csv())
        .on("data", (data) => participants.push(data))
        .on('end', async () => {
            for (const participant of participants) {
                const participantDataIsValid = checkParticipantsDataIsValid(req.body);
                if (!participantDataIsValid) return res.status(400).send({error: "invalid data"});
                    
                const participantDb = await addNewParticipant(participant);
    
                if (!participantDb) return res.status(400).json({error: "couldn't add participant"});
            }
            return res.status(201).json(participants);
        }
    );
}

const httpsAddNewParticipant = async (req, res) => {
    if (!req.file) {
        return await addParticipantFromForm(req, res);
    } else {
        return await addParticipantFromCsv(req, res);
    }
}

const httpsUpdateParticipant = async (req, res) => {
    const participantId = req.params.id;
    const updatedParticipantData = req.body;
    
    const participantDb = await updateParticipant(participantId, updatedParticipantData);

    if (!participantDb) return res.status(404).json({error: "participant not found"});   

    return res.status(200).json(participantDb);
}

export {
    httpsGetAllParticipants,
    httpsAddNewParticipant,
    httpsGetParticipant,
    httpsUpdateParticipant
}