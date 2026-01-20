const mongoose = require("mongoose");


const chatSchama = new mongoose.Schema({
    from: {
        type: String,
        required: true,
    },
    to: {
        type: String,
        required: true,
    },
    msg: {
        type: String,
        maxLength: 50,
    },
    created_at: {
        type: new Date(),
        required: true,
    },
});

const Chat = mongoose.model("Chat",chatSchama);

module.exports = Chat;

