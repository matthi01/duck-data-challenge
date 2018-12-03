const express = require("express");
const bodyParser = require("body-parser");

let { mongoose } = require("./db/mongoose");
let { DuckData } = require("./models/DuckData");

let app = express();

app.use(bodyParser.json());

// set up routes:
// pass url and callback function with request and response object
app.post("/duckdata", (req, res) => {
    console.log(req.body);

    let newDuckData = new DuckData({
        numberOfDucks: req.body.numberOfDucks,
        food: req.body.food,
        timeFed: req.body.timeFed
    });

    newDuckData.save().then(
        doc => {
            res.send(doc);
        },
        err => {
            res.status(400).send(err);
        }
    );
});

app.listen(3000, () => {
    console.log("Server up on port 3000");
});
