const tokenUtils = require('../utils/token-utils.js')

function verifyToken (req, res, next) {
    try {
        const token = req.header('Authorization').replace('Bearer ', '')
        tokenUtils.checkToken(token) // [1]
        next() // [2]
    } catch (error) {
        res
          .status(401) // [3]
          .json({
              success: false,
              message: 'Invalid token' // [4]
          })        
    }
}

module.exports = verifyToken
