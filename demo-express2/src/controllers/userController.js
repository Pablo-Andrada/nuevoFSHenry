module.exports = {
    getAllUsers: async (req, res) => {
        try {
            const users = await userService.getUsers();
            res.status(200).json(users);            
        } catch (error) {
            res.status(500).json({
                error:"Error interno del servidor"
            })
        }
    }
}