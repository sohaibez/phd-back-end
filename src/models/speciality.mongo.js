import mongoose from "mongoose";

const SpecialitySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});

export default SpecialitySchema;