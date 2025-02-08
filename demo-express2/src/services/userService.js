module.exports = {
    getUsers: async () => {
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
        return users;
    }
}