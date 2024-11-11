const validateUser = (req,res,next) => {
    const { name } = req.body;
    if (!name) {
        res.status(400).json({
            message:"Error falta el nombre del usuario a crear"
        })      
    } else {
        next();        
    }

};

module.exports = validateUser;
