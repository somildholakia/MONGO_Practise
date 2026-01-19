const mongoose = require("mongoose");


main()
    .then(() => {
        console.log("connection successful");
    })
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/test")
}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
});

const User = mongoose.model("User", userSchema);

User.insertMany([
    {name: "ritik", email: "riitk@gmail.com", age: 50},
    {name: "bruce", email: "bruce@gmail.com", age: 2},
    {name: "krishna", email: "krishna@gmail.com", age: 500},
]).then((res) => {
    console.log(res);
}).catch(err => {
    console.log(err);
})


// const user2 = new User({
//     name: "somil123",
//     email: "abc@gmawwwil.com",
//     age: 199,
// });

// user2.save().then((res) => {
//     console.log(res);
// }).catch(err => {
//     console.log(err)
// });