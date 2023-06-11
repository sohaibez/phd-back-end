import mongoose from "mongoose";

const GradeSchema = mongoose.Schema({
    participantId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    grade: {
        type: Number,
        required: true
    }
});

export default mongoose.model("grade", GradeSchema);