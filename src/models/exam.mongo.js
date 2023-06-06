import mongoose from "mongoose";

const ExamSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true
  },
  moduleId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Module',
    required: true
  },
  teachers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    }
  ],
  notes: {
    type: [
      {
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
        }
      }
    ],
    validate: {
      validator: function (notes) {
        const participants = new Set(notes.map(note => note.participant.toString()));
        return participants.size === 1;
      },
      message: 'All notes must have the same participant ID'
    },
    required: true,
  },
  finalNote: {
    type: Number,
    min: 0,
    max: 20
  }
});

function arrayLimit(val) {
  return val.length === 3;
}

ExamSchema.statics.needsAnotherTeacher = (notes) => {
    let difference = notes.reduce((acc, note) => acc - note);
    return difference >= 3;
}

export default mongoose.model('Exam', ExamSchema);