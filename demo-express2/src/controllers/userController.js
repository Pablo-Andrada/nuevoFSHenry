module.exports = {
    getAllUsers: (req,res) => {
        res.status(200).send("Acá se obtienen todos los Users")
    }
}