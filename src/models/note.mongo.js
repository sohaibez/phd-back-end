import mongoose from "mongoose";

const NoteSchema = new mongoose.Schema({
    participantCode: {
        type: String,
        required: true
    },
    moduleId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'module',
    },
    notes: { 
      type: [
        {
          type: Number,
          min: 0,
          max: 20,
          required: true,
        }
      ],
      validate: {
        validator: function (notes) {
          return notes.length <= 3;
        },
        message: "Maximum of 3 notes allowed",
      },
    },
    FinaleNote: {
      type: Number,
      min: 0,
      max: 20
    }
})

export default mongoose.model('Note', NoteSchema);