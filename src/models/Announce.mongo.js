import mongoose from "mongoose";

const AnnounceSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    speciality: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false
    }
});

export default AnnounceSchema;