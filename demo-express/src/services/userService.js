module.exports = {
    getUsers: async() => {
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
        return users;
    }
}