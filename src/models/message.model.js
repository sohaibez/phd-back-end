import mongoose from "mongoose";
import messageMongo from "./message.mongo.js";

const getAllMessages = async () => {
    try {
        const messages = await messageMongo.find();
        return messages;
    } catch (err) {
        console.log(err);
        return null;
    }
}

const getMessagesByReceiver = async (receiverId) => {
    try {
        const messages = await messageMongo.find({ receiver: receiverId });
        return messages;
    } catch (err) {
        console.log(err);
        return null;
    }
}

const sendNewMessage = async ({sender, receiver, content}) => {
    try {
        const message = new messageMongo({
            sender,
            receiver,
            content
        });

        return await messageMongo.create(message);
    } catch (err) {
        return null;
    }
} 

export {
    getAllMessages,
    getMessagesByReceiver,
    sendNewMessage
}