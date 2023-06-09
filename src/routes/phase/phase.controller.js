import {
    getPhase,
    addPhase,
    updatePhase
} from "../../models/phase.model.js";

const httpsGetPhase = async (req, res) => {
    const phase = await getPhase();

    if (!phase) return res.status(400).json({ error: "something went wrong" });
    return res.status(200).json(phase);
}

const httpsAddPhase = async (req, res) => {
    const { step } = req.body;

    if (!step) return res.status(400).json({ error: "invalid data" });

    const phaseDb = await addPhase(step);
    if (!phaseDb) return res.status(400).json({ error: "something went wrong" });
    return res.status(201).json(phaseDb);
}

const httpsUpdatePhase = async (req, res) => {
    const id = req.params.id;
    const { step } = req.body;

    if (!step) return res.status(400).json({ error: "invalid data" });
    
    const updatedPhaseDb = await updatePhase({id, step});
    if (!updatedPhaseDb) return res.status(400).json({ error: "something went wrong" });
    return res.status(200).json(updatedPhaseDb);
}

export {
    httpsGetPhase,
    httpsAddPhase,
    httpsUpdatePhase
}