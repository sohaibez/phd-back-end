import mongoose from "mongoose";

const participantsSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    firstNameArabic: {
        type: String,
    },
    lastNameArabic: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: v => v.length >= 10
        }
    },
    password: {
        type: String,
        required: true,
    },
    code: {
        type: String,
    },
    codeEncrypted: {
        type: String,
    },
    type: {
        type: String,
        default: "participant",
        required: true,
    }
});

export default mongoose.model("participant", participantsSchema);