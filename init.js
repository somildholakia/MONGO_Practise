const mongoose = require("mongoose");
const Chat = require("./models/chat.js");


main()
    .then(() => {
        console.log("Connection successful")
    })
    .catch(err => {
        console.log(err);
    })


async function main(){
   await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let allChats = [
    {
        from: "somil",
        to: "krishna",
        msg: "hello bro",
        created: new Date(),
    },
      {
        from: "ritk",
        to: "shivam",
        msg: "good night bro",
        created: new Date(),
    },
      {
        from: "vivek",
        to: "krishna",
        msg: "good night",
        created: new Date(),
    },
      {
        from: "somil",
        to: "krishna",
        msg: "hello bro send  the notes",
        created: new Date(),
    },

];
 
Chat.insertMany(allChats);