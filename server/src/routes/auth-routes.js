const express = require('express')

const tokenUtils = require('../utils/token-utils.js')

const router = new express.Router()

const users = require('../users.json')

router.post('/token', (req, res) => {

    const body = req.body

    if (!body || !body.login || !body.password) {
        res.json({
            success: false,
            message: 'Login and password are required'
        })
        return
    }

    const payload = {
        login: body.login,
    }

    const token = tokenUtils.createToken(payload)
    console.log('token')
    res.status(201).json({
        success: true,
        token
    })
    //localStorage.setItem('token', token)
})

module.exports = router