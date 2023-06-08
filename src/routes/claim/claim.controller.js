import {
    getAllClaims,
    getClaimsByState,
    addClaim,
    updateClaim
} from "../../models/claim.model.js";

const httpsGetAllClaims = async (req, res) => {
    const claims = await getAllClaims();

    if (!claims) return res.status(400).json({ error: "something went wrong" });
    return res.status(200).json(claims);
}

const httpsGetClaimsByState = async (req, res) => {
    const state = req.params.state;
    const claims = await getClaimsByState(state);

    if (!claims) return res.status(400).json({ error: 'Invalid state' });
    return res.status(200).json(claims);
}

const httpsAddClaim = async (req, res) => {
    const {
        participantId,
        content
    } = req.body;

    if (!content || !participantId) return res.status(400).json({ error: "invalid data" });
    
    const claim = await addClaim(participantId, content);
    if (!claim) return res.status(400).json({ error: "something went wrong" });
    return res.status(201).json(claim);
}

const httpsUpdateClaim = async (req, res) => {
    const id = req.params.id;
    const { state } = req.body;

    if (!state) return res.status(400).json({ error: 'Invalid data' });
    const updatedClaim = await updateClaim({id, state});

    if (!updatedClaim) return res.status(400).json({ error: "something went wrong" });
    return res.status(200).json(updatedClaim);
} 

export {
    httpsGetAllClaims,
    httpsGetClaimsByState,
    httpsAddClaim,
    httpsUpdateClaim
}