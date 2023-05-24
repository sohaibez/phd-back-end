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
});

export default mongoose.model("module", ModuleSchema);