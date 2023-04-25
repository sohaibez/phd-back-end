import https from "https";
import fs from "fs";
import app from "./app.js";

const PORT = process.env.PORT || 3000;

const options = {
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
}

const server = https.createServer(options, app);

server.listen(PORT, () => {
    console.log(`server is up and running ${PORT}`);
});