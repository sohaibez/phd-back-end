import mongoose from "mongoose";

const SpecialitySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    modules: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "module"
    }]
});

export default mongoose.model("speciality", SpecialitySchema);