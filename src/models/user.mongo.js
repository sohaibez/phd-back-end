import mongoose from "mongoose";

const participantsSchema = new mongoose.Schema({
    firstName: {
        type: String,
        trim: true,
        required: true,
    },
    lastName: {
        type: String,
        trim: true,
        required: true,
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        required: true,
        validate: {
            validator: v => v.length >= 10
        }
    },
    password: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        enum: ["CFD", "viceDean", "admin", "teacher"],
        required: true,
    }
});

export default mongoose.model("participant", participantsSchema);