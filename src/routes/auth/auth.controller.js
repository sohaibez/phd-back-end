import bcrypt from 'bcrypt';

import {
    getUserByEmail
} from "../../models/auth.model.js";

const httpsLoginHandler = async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    
    const userOrParticipant = getUserByEmail(email);

    if (!userOrParticipant) return res.status(404).json({ error: "user not found" });

    const isPasswordValid = await bcrypt.compare(password, userOrParticipant.password);

    if (!isPasswordValid) return null;
    return res.status(200).json(userOrParticipant);
}

export {
    httpsLoginHandler
}