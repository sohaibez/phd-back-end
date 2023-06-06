import mongoose from "mongoose";

const FinaleNoteSchema = new mongoose.Schema({
    examId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Exam",
        required: true
    },
    note: {
        type: Number,
        min: 0,
        max: 20,
        required: true
    }
})

export default mongoose.model("FinaleNote", FinaleNoteSchema);