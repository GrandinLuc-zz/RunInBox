const dbUtil = require('../db-utils')
const express = require('express')
const router = new express.Router()
const bcrypt = require('bcrypt') 
const fs = require('fs')
const users = require('../users.json')

router.post('/read', (req, res) => {
  const body = req.body

  const username = body.username
  const password = body.password


  let tokenCorrect = false
  let usernameCorrect = true
  try{
    if(bcrypt.compareSync(password,users[username].hash)){
        console.log("correct hash")
        tokenCorrect = true
    }
    else{
        console.log("incorrect hash")
    }
  } catch (e) {
    console.log("incorrect username")
    usernameCorrect = false
  }
  res.status(203).json({
    success: true,
    tokenCorrect: tokenCorrect,
    usernameCorrect: usernameCorrect
  })
})
module.exports = router
