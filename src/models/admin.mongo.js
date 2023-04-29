import mongoose from "mongoose";

const adminsSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        immutable: true,
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
    type: {
        type: String,
        default: "admin",
        required: true,
    }
});

export default mongoose.model("admin", adminsSchema);