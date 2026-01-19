const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
    .then(res => {
        console.log("Connection successful")
    })
    .catch(err => {
        console.log(err);
    })

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}



let chat1 = new Chat({
    from: "somil",
    to: "krishna",
    msg: "Send the notes bro",
    created_at: new Date(),
});

chat1.save().then(res => {
    console.log(res);
});




app.use(express.urlencoded({extended: true}));
app.use(express.json());


app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));

const port = 8080;

app.listen(port,() => {
    console.log(`Listening at port: ${port}`)
})

app.get("/",(req,res) => {
    res.send("Server working");
})