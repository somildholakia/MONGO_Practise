const mongoose = require("mongoose");
const Chat = require("./models/chat.js")

main()
    .then(res => {
        console.log("Connection successful");
    })
    .catch(err => {
        console.log(err);
    })


async function main(){
   await mongoose.connect("mongodb:127.0.0.1:27017/whatsapp");
}


let allChats = [
    {
        from: "neha",
        to: "preeti",
        message: "send me notes for the exam",
        created_at: new Date(),
    },
    {
        from: "krishna",
        to: "preeti",
        message: "Hi bro",
        created_at: new Date(),
    },
    {
        from: "ritik",
        to: "preeti",
        message: "wow",
        created_at: new Date(),
    },
    {
        from: "vivek",
        to: "preeti",
        message: "Jai hind",
        created_at: new Date(),
    }
]

chat1.save().then(res => {
    console.log(res);
});
