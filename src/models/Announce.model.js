import announceMongo from "./Announce.mongo.js";

const getAllAnnounce = async () => {
    try {
        const announces = announceMongo.find();
        return announces;
    } catch (err) {
        return null;
    }
}

const addNewAnnounce = async ({ title, description, speciality, image}) => {
    try {
        const newAnnounce = new announceMongo({
            title,
            description,
            speciality
        });

        return await announceMongo.create(newAnnounce);
    } catch (err) {
        console.log(err);
        return null;
    }
}

export {
    getAllAnnounce,
    addNewAnnounce
}