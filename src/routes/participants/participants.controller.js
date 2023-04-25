const httpsGetAllParticipants = (req, res) => {
    return res.status(200).json([
        {name: "sohaibe"},
        {name: "reda"}
    ]);
}

export {
    httpsGetAllParticipants
}