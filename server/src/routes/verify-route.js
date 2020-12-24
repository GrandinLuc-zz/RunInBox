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

    const tokenWorking = tokenUtils.checkToken(body.token)
    res.status(202).json({
        success: true,
        toCheck: tokenWorking
    })
})

module.exports = router