import phaseMongo from "./phase.mongo.js";

const getPhase = async () => {
    try {
        const phase = await phaseMongo.find();
        return phase;
    } catch (err) {
        console.log(err);
        return null;
    }
}

const addPhase = async (step) => {
    try {
        const phase = await phaseMongo.create({step: step});
        return phase;
    } catch (err) {
        console.log(err);
        return null;
    }
}

const updatePhase = async ({id, step}) => {
    try {
        const phase = await phaseMongo.findOneAndUpdate(
            { _id: id}, 
            {step: step},
            { new: true}
        )

        return phase;
    } catch (err) {
        console.log(err);
        return null;
    }
}

export {
    getPhase,
    addPhase,
    updatePhase
}