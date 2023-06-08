import mongoose from "mongoose";

const ClaimSchema = mongoose.Schema({
    content: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ["pending", "treated", "refused"],
        default: "pending"
    },
    participantId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "participant",
        required: true
    }
});

export default mongoose.model("claim", ClaimSchema);