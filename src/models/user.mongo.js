import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
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
    },
    modules: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "module",
        }
    ]
});

export default mongoose.model("user", userSchema);