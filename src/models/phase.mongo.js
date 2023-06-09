import mongoose from "mongoose";

const PhaseSchema = mongoose.Schema({
    step: {
        type: Number,
        enum: [1, 2, 3],
        default: 1
    }
});

export default mongoose.model("phase", PhaseSchema);