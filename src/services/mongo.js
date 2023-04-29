import mongoose from "mongoose";

const MONGO_URL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@phd-db.k2amqe6.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connection.once("open", () => {
    console.log("MongoDB connection is Ready");
});

mongoose.connection.on("error", (err) => {
    console.log(err);
});

const mongoConnect = async () => {
    mongoose.set("strictQuery", false);
    await mongoose.connect(MONGO_URL);
}

const mongoDisconnect = async () => {
    await mongoose.disconnect();
}

export {
    mongoConnect,
    mongoDisconnect
};