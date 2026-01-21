const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const Chat = require("./models/chat.js");
const methodOverride = require("method-override");


main()
    .then(() => {
        console.log("connection Successful");
    })
    .catch(err => {
        console.log(err);
    });



async function main(){
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}


const port = 8080;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(methodOverride("_method"));


app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));


app.listen(port, () => {
    console.log(`Listening at port:${port}`);
})

app.get("/chats", async (req,res) => {
    let chats = await Chat.find();
    // console.log(chats);
    res.render("index.ejs",{chats});
})

app.get("/chats/new", (req,res) => {
    res.render("new.ejs")
})

app.post("/chats",(req,res) => {
    let {from, to, msg} = req.body;
    let newChat = new Chat({
        from: from,
        to: to,
        msg: msg,
        created: new Date(),
    });
    newChat.save().then((res) => {
        console.log("chat is saved")
    })
    .catch(err => {
        console.log(err);
    })
    res.redirect("/chats");
})

app.get("/chats/:id/edit", async (req,res) => {
    let {id} = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs", {chat});
})

app.put("/chats/:id", async (req,res) => {
    let {id} = req.params;
    let {msg}  = req.body;
    console.log(msg);
    let updatedChat = await Chat.findByIdAndUpdate(id,{msg: msg}, {runValidators: true, new: true});
    console.log(updatedChat);
    res.redirect("/chats");
})