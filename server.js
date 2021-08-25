const express = require("express");
const request = require("request");
const { json } = require("body-parser");
const { host, token } = require("./config.json");
const app = express();

app.use(express.static("app"));
app.use(json());

app.use(["/location/", "/meter/", "/data/"], function(req, res, next) {

    request("https://" + host + "/v1" + req.originalUrl, {

        headers: { "Authorization": "Bearer " + token },
        rejectUnauthorized: false

    }, function(err, status, body){

        if(err){

            console.error(err);
            body = "";
        }

        res.send(body);
    });
});

app.listen(80, function(err){

    if(err) throw err;

    console.info("Server@" + process.pid + " listening on http://localhost");
});
