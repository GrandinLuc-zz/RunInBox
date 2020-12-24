const jwt = require('jsonwebtoken')

const options = {
    expiresIn: '1h',
}

module.exports = {
    createToken (payload) {
        const secret = '53CR37!'
        const token = jwt.sign(payload, secret, options)
        return token
    },
    checkToken (token) {
        const secret = '53CR37!'
        return jwt.verify(token, secret)
    }
}