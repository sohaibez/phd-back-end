import {
    getUsersByRole,
    addNewUser,
    updateUser,
    deleteUser
} from "../../models/user.model.js";

const httpsGetAllUsersByType = async (req, res) => {
    const type = req.params.type;
    const users = await getUsersByRole(type);

    if (!users) return res.status(400).json({error: "something went wrong"});
    return res.status(200).json(users);
}

const httpsAddNewUser = async (req, res) => {
    const { 
        firstName, 
        lastName, 
        email, 
        password, 
        type
    } = req.body;

    if (!firstName ||
        !lastName ||
        !email ||
        !password ||
        !type
    ) {
        return res.status(400).send({error: "invalid data"});
    }

    const user = await addNewUser(req.body);

    if (!user) return res.status(400).json({error: "couldn't add user"});
    return res.status(201).json(user);
}

const httpsUpdateUser = async (req, res) => {
    const userId = req.params.id;
    const updatedUserData = req.body;
    
    const userDb = await updateUser(userId, updatedUserData);

    if (!userDb) return res.status(404).json({error: "user not found"});
    return res.status(200).json(userDb);
}

const httpsDeleteUser = async (req, res) => {
    const userId = req.params.id;
    const deletedUser = await deleteUser(userId);

    if (!deletedUser) return res.status(404).json({ error: 'User not found.' });
    return res.status(200).json({ message: "User deleted successfully." });
}

export {
    httpsGetAllUsersByType,
    httpsAddNewUser,
    httpsUpdateUser,
    httpsDeleteUser
}