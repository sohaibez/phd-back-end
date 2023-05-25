import {
    getAllMessages,
    getMessagesByReceiver,
    sendNewMessage
} from "../../models/message.model.js";

import {
    getUserById
} from "../../models/user.model.js";

const httpsGetAllMessages = async (req, res) => {
    const messages = await getAllMessages();

    if (!messages) return res.status(404).json({ error: "something went wrong" });
    res.status(200).json(messages);
}

const httpsGetMessageByReceiver = async (req, res) => {
    const messages = await getMessagesByReceiver(req.params.receiver);

    if (!messages) return res.status(400).json({ error: "something went wrong" });
    return res.status(200).json(messages);
}

const httpsSendMessage = async (req, res) => {
    const {
        sender,
        receiver,
        content
    } = req.body;

    const isSenderExist = await getUserById(sender);
    if (!isSenderExist) return res.status(404).json({ error: "sender doesn't exist"});
    
    const isReceiverExist = await getUserById(receiver);
    if (!isReceiverExist) return res.status(404).json({ error: "receiver doesn't exist"});

    const message = await sendNewMessage({
        sender,
        receiver,
        content
    });

    if (!message) return res.status(400).json({ error: "couldn't add message" });
    return res.status(201).json(message);
}

export {
    httpsGetAllMessages,
    httpsGetMessageByReceiver,
    httpsSendMessage
}