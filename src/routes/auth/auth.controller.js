import bcrypt from 'bcrypt';

import {
    getUserByEmail
} from "../../models/auth.model.js";

const httpsLoginHandler = async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    const userOrParticipant = await getUserByEmail(email);

    if (!userOrParticipant) return res.status(404).json({ error: "user not found" });

    const isPasswordValid = bcrypt.compare(password, userOrParticipant.password, (error, isValid) => {
        if (error) return res.status(400).json({ error: "something went wrong" });

        if (!isValid) return res.status(400).json({ error: "invalid data" });
        return res.status(200).json(userOrParticipant);
    });

}

export {
    httpsLoginHandler
}