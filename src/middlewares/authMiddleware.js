const jwt = require('../lib/jwt')
const { SECRET_KEY } = require('../config/config')



exports.auth = async (req, res, next) => {
    const token = req.cookies['auth']

    if (token) {
        try {
            const user = await jwt.verify(token, SECRET_KEY)
            req.user=user
            next()
        }catch (err) {
            res.clearCookie('auth')
            res.redirect('./users/login')
        }


    }else{
        next();
    }




} 