const users = [
    {
        name: "León",
        email:"leon@gmail.com"
    },
    {
        name: "Tati",
        email:"tati@gmail.com"
    },
    {
        name: "Pablo",
        email:"pablo@gmail.com"

    }
]
let id = 4;

module.exports = {
    getUsers: async() => {
        return users;
    },
    createUser: async (name, email) => {
        const newUser = {
            email,
            name,
        };
        //id++;
        users.push(newUser);
    }
}