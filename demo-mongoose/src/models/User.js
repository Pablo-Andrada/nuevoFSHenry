const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: String,
    vehicle: {
        type: mongoose.Schema.ObjectId,
        ref: "Vehicle",
    }
} );
// uso el metodo model de mongoose
const User = mongoose.model("User", userSchema);

module.exports = User;