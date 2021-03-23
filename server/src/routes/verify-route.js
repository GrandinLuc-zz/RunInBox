const express = require('express')

const tokenUtils = require('../utils/token-utils.js')

const router = new express.Router()

router.post('/token', (req, res) => {

    const body = req.body

    if (!body || !body.token) {
        res.json({
            success: false,
            message: 'No token'
        })
        return
    }

    const token = {
        token: body.token,
    }
    try{const tokenWorking = tokenUtils.checkToken(body.token)
        res.status(202).json({
            success: true,
            toCheck: tokenWorking
        })}
    
    catch(error){
        res.status(401).json({
            success: false,
            message: 'Token not valid'
        })
    }
})

module.exports = router