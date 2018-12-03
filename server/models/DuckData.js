const mongoose = require("mongoose");

let DuckData = mongoose.model("DuckData", {
    numberOfDucks: {
        type: Number,
        required: true
    },
    food: {
        type: String,
        required: true
    },
    timeFed: {
        type: Number,
        required: true
    }
});

module.exports = { DuckData };
