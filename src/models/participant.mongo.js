import mongoose from "mongoose";

const participantsSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    code: {
        type: String,
        required: true,
    },
    codeEncrypted: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        default: "participant",
        required: true,
    }
});

export default mongoose.model("participant", participantsSchema);