import mongoose from "mongoose";

const ModuleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    speciality: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Speciality',
        required: true
    },
    teachers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "teacher"
    }]
});

export default mongoose.model("module", ModuleSchema);