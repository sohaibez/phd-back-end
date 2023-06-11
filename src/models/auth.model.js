import participantMongo from "./participant.mongo";
import userMongo from "./user.mongo";

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