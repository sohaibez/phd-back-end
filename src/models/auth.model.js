import participantMongo from "./participant.mongo.js";
import userMongo from "./user.mongo.js";

const getUserByEmail = async (email) => {
    try {
        const user = await userMongo.findOne({ email: email });
        if (user) return user;

        const participant = await participantMongo.findOne({ email, email });
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