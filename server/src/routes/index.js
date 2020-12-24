const fetch = require('isomorphic-fetch')
const express = require('express')

const authRoutes = require('./auth-routes.js')
const verifyRoutes = require('./verify-route.js')

const router = new express.Router()

router.use('/auth', authRoutes)
router.use('/verify', verifyRoutes)

module.exports = router