import participantMongo from "./participant.mongo.js";
import userMongo from "./user.mongo.js";

const getUserByEmail = async (email) => {
    try {
        const user = await userMongo.find({ email });
        if (user) return user;

        const participant = await participantMongo.find({ email });
        if (participant) return participant;

        return null;
    } catch (err) {
        console.log(err);
        return null;
    }
}

export {
    getUserByEmail
}