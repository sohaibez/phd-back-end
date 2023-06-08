import claimMongo from "./claim.mongo.js";

const getAllClaims = async () => {
    try {
        const claims = await claimMongo.find();
        return claims;
    } catch (err) {
        console.log(err);
        return null;
    }
}

const getClaimsByState = async (state) => {
    try {
        const claims = await claimMongo.find({status: state});
        return claims;
    } catch (err) {
        console.log(err);
        return null;
    }
}

const addClaim = async (participantId, content) => {
    try {
        const claim = new claimMongo({
            content,
            participantId,
        });

        return await claimMongo.create(claim);
    } catch (err) {
        console.log(err);
        return null;
    }
}

const updateClaim = async ({id, state}) => {
    try {
        const updatedClaimDb = await claimMongo.findOneAndUpdate(
            { _id: id}, 
            {status: state},
            { new: true}
        );

        return updatedClaimDb;
    } catch (err) {
        console.log(err);
        return null;
    }
} 

export {
    getAllClaims,
    getClaimsByState,
    addClaim,
    updateClaim
}