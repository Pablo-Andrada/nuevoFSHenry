const users = [
    {
        id: 1,
        name: "León"
    },
    {
        id: 2,
        name: "Tati"
    },
    {
        id: 3,
        name: "Pablo"
    }
]
let id = 4;

module.exports = {
    getUsers: async() => {
        return users;
    },
    createUser: async (name) => {
        const newUser = {
            id,
            name,
        };
        id++;
        users.push(newUser);
    }
}