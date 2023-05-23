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

const httpsAddNewParticipant = async (req, res) => {
    const { 
        firstName, 
        lastName, 
        email, 
        password, 
        code 
    } = req.body;

    if (!firstName ||
        !lastName ||
        !email ||
        !password ||
        !code
    ) {
        return res.status(400).send({error: "invalid data"});
    }

    const participant = await addNewParticipant(req.body);

    if (!participant) return res.status(400).json({error: "couldn't add participant"});
    return res.status(201).json(participant);
}

const httpsUpdateParticipant = async (req, res) => {
    const participantId = req.params.id;
    const updatedParticipantData = req.body;
    
    const participantDb = await updateParticipant(participantId, updatedParticipantData);

    if (!participantDb) return res.status(404).json({error: "participant not found"});   

    return res.status(200).json({message: participantDb});
}

export {
    httpsGetAllParticipants,
    httpsAddNewParticipant,
    httpsGetParticipant,
    httpsUpdateParticipant
}