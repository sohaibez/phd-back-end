import AnnounceMongo from "./Announce.mongo.js";
import announceMongo from "./Announce.mongo.js";

const getAllAnnounce = async (filteredData) => {
    try {
        const announces = announceMongo.find(filteredData);
        return announces;
    } catch (err) {
        return null;
    }
}

const addNewAnnounce = async ({ title, description, speciality, link}) => {
    let myLink = link ? link : "";
    
    try {
        const newAnnounce = new announceMongo({
            title,
            description,
            speciality,
            link: myLink
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