const fetch = require('isomorphic-fetch')
const express = require('express')

const authRoutes = require('./auth-routes.js')
const verifyRoutes = require('./verify-route.js')
const writeRoutes = require('./write-route.js')
const readRoutes = require('./read-route.js')

const router = new express.Router()

router.use('/auth', authRoutes)
router.use('/verify', verifyRoutes)
router.use('/', writeRoutes)
router.use('/', readRoutes)

module.exports = router