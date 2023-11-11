const jwt = require("../lib/jwt")
const { SECRET } = require("../configs/SuperSecret")

exports.auth = async (req, res, next) => {
    const token = req.cookies['auth']

    if(token){
        try{
            const decodedToken = await jwt.verify(token, SECRET);

            req.user = decodedToken
            res.locals.user = decodedToken
            res.locals.isAuthenticated = true
            next()
        }catch(err){
            res.status(401).json({
                message: "you are not authorized!"
            })
        }
    }else{
        next()
    }
}   