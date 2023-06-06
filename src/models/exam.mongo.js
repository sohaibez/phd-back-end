import mongoose from "mongoose";

const ExamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  moduleId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Module',
    required: true
  },
  notes: {
    type: [
      {
        teacher: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User',
          required: true
        },
        participant: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Participant',
          required: true
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
    // validate: [arrayLimit, '{PATH} exceeds the limit of 3'] // check if the notes array has exactly 3 items
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

// ExamSchema.statics.isAllowedToAssignNote = (teacherId) => {
// }

// ExamSchema.methods.allTeacherAssignNote = (idExam, notes) => {
//     return notes.length >= 2;
// }

ExamSchema.statics.needsAnotherTeacher = (notes) => {
    let difference = notes.reduce((acc, note) => acc - note);
    return difference >= 3;
}

export default mongoose.model('Exam', ExamSchema);