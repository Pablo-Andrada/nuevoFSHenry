// const users = [
//     {
//         name: "León",
//         email:"leon@gmail.com"
//     },
//     {
//         name: "Tati",
//         email:"tati@gmail.com"
//     },
//     {
//         name: "Pablo",
//         email:"pablo@gmail.com"

//     }
// ]
// let id = 4;
const User = require("../models/User");


module.exports = {
    getUsers: async () => {
        const users = await User.find();
        return users;
    },
    getUserById: async (id) => {
        const user = await User.findById(id);
        return user;
    },
    findUserByName: async (name) => {
        const user = await User.findOne({ name });
        return user;
    },

    createUser: async (user) => {
        const newUser = await User.create(user);
        return newUser;
    }
}