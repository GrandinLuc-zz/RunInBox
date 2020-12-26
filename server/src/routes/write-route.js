const dbUtil = require('../db-utils')
const express = require('express')
const router = new express.Router()
const bcrypt = require('bcrypt')
const fs = require('fs')
const users = require('../users.json')

router.post('/write', (req, res) => {
  const body = req.body

  const firstname = body.firstname
  const lastname = body.lastname
  const username = body.username
  const password = body.password

  let hash = ''
  hash = bcrypt.hashSync(password, saltRounds=10)
  // fonction de hashage du mot de passe

  const user = JSON.stringify( {
    "firstname": firstname, 
    "lastname": lastname, 
    "hash": hash
  })
  
  let data = users
  data[username] = user
  
  //console.log('write-route')
  /*
  We tried to write on the file but we couldn't

  fs.writeFile('../user.json', data, (err) => {
    if (err) {
        throw err;
    }
    console.log("JSON data is saved.");
  });
  */
  res.status(203).json({
    success: true
  })
})

module.exports = router
