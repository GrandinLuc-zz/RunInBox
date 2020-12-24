const express = require('express')

const tokenUtils = require('../utils/token-utils.js')

const router = new express.Router()

const login = 'joe'
const password = 'smith'

router.post('/token', (req, res) => {
    const authorizedLogin = login
    const authorizedPasswd = password

    const body = req.body

    if (!body || !body.login || !body.password) {
        res.json({
            success: false,
            message: 'Login and password are required'
        })
        return
    }

    if (body.password !== authorizedPasswd || body.login !== authorizedLogin) {
        res.json({
            success: false,
            message: 'Invalid credentials'
        })
        return
    }

    const payload = {
        login: body.login,
    }

    const token = tokenUtils.createToken(payload)

    res.status(201).json({
        success: true,
        token
    })
    //localStorage.setItem('token', token)
})

module.exports = router