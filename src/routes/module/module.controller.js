import {
    getAllModules,
    getModuleById,
    addNewModule,
} from "../../models/module.model.js";

const httpsGetAllModules = async (req, res) => {
    const modules = await getAllModules();

    if (!modules) return res.status(400).json({error: "something went wrong"});
    return res.status(200).json(modules);
}

const httpsGetModule = async (req, res) => {
    const moduleId = req.params.id;

    const module = await getModuleById(moduleId);
    if (!module) return res.status(404).json({error: "module not found"});

    return res.status(200).json(module);
}

const httpsAddNewModule = async (req, res) => {
    const { 
        name,
        speciality 
    } = req.body;

    if (!name || !speciality) return res.status(400).send({error: "invalid data"});

    const module = await addNewModule(req.body);

    if (!module) return res.status(400).json({error: "couldn't add module"});
    return res.status(201).json(module);
}

export {
    httpsGetAllModules,
    httpsGetModule,
    httpsAddNewModule,
}