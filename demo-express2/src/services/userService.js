const users = [{
    id: 1,
    name: "Pablo"
},
{
    id: 2,
    name: "León"
},
{
    id: 3,
    name: "Tati"
}
]
let id = 4;

module.exports = {
    getUsers: async () => {
        return users;
    },

    createUser: async (name) => {
        const newUser = {
            id,
            name
        };
        id++;
        users.push(newUser);
    }
}