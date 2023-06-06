import mongoose from "mongoose";

const NoteSchema = new mongoose.Schema({
    examId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Exam',
        required: true
    },
    teacherId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    participantCode: {
      type: Number,
      required: true,
    },
    note: {
      type: Number,
      min: 0,
      max: 20
    }
})

export default mongoose.model('Note', NoteSchema);