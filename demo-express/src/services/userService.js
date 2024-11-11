module.exports = {
    getUsers: async() => {
        const users = [
            {
                id: 1,
                name: "Leon"
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