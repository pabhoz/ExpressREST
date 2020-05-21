import express from "express";
import bodyParser from "body-parser";
const app = express();

const { port } = require('./conf');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

import * as GodsController from "./controllers/GodsController";

//Policies
import Policies from "./sso/policies";

app.get('/', (req, res) => {
    res.status(200).send("Esto es un área libre de llaves");
})

app.route('/gods')
    .get(GodsController.gods) // libre
    .post((req, res, next) => {
        let error = false;
        const host: string | undefined = req.headers.host;

        if (!Policies.verifyHost(host, 'localhost:3000')) {
            error = true;
            res.status(401).json({ error: true, msg: 'Not an Authorized host' });
        }

        if (!error) {
            const apiKey = req.header("Gods-Key");
            const apiKeyVerification = Policies.verifyApiKey(apiKey, "6a783bcbc9bf43ae98a31986c32026422e49594cabe74701953f14942e000bc89d535a94e4d425be2ea109fab79ea099bc7a5b4c2208aca99bfb937fcdce7c6e");
            if (apiKeyVerification.error) {
                error = true;
                res.status(apiKeyVerification.status).json({ error: true, msg: apiKeyVerification.msg });
            }
        }

        if (!error) {
            next();
        }
        
    }, GodsController.create) // Auth

app.listen(port, () => {
    console.log(`Node JS Server started at port ${port}`);
});


