import mongoose from "mongoose";

const NoteSchema = new mongoose.Schema({
    examId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Exam',
        required: true
    },
    teacher: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    participant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Participant',
    },
    note: {
      type: Number,
      min: 0,
      max: 20
    },
    finalNote: {
        type: Number,
        min: 0,
        max: 20
    }
})

export default mongoose.model('Note', NoteSchema);