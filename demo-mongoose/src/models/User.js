const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
    vehicle: {
        type: mongoose.Schema.ObjectId,
        ref: "Vehicle",
    }
});

const User = mongoose.model("User", userSchema);

module.exports = User;