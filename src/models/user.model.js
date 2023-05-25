import bcrypt from "bcrypt";

import userMongo from "./user.mongo.js";

const getUsersByRole = async (type) => {
    try {
        const users = await userMongo.find({type: type});
        return users;
    } catch (err) {
        console.log(err);
        return null;
    }
}

const getUserById = async (id) => {
    try {
        const user = await userMongo.findById(id);
        return user;
    } catch (err) {
        console.log(err);
        return null;
    }
}

const addNewUser = async ({firstName, lastName, email, password, type}) => {
    
    try {            
        const saltRounds = 10;
        const hashPassword = await bcrypt.hash(password, saltRounds);

        const isUserExisted = await userMongo.exists({email: email});

        if (isUserExisted) return "user already Existed";

        const user = new userMongo(
            {
                firstName,
                lastName,
                email,
                password: hashPassword,
                type
            }
        );
        return await userMongo.create(user);
    } catch (err) {
        console.log(err);
        return null;
    }
}

const updateUser = async (userId, updatedUserData) => {
    try {
        const updatedUserDB = await userMongo.findOneAndUpdate(
            { _id: userId}, 
            updatedUserData,
            { new: true}
        );

        return updatedUserDB;
    } catch (err) {
        console.log(err);
        return null;
    }
}

const deleteUser = async (id) => {
    try {
        const deletedUser = await userMongo.findByIdAndDelete(id);
        return deleteUser; 
    } catch (err) {
        return null;
    }
}

export {
    getUsersByRole,
    getUserById,
    addNewUser,
    updateUser,
    deleteUser
}