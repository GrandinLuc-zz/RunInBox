<template>
    <div>
        <form class="box" @submit.prevent=createUser()>
            <h1>Inscription</h1>
            <div>
                <input type="text" placeholder="Nom">
            </div>
            <div>
                <input type="text" placeholder="Prenom">
            </div>
            <div>
                <input type="email" name="email" required placeholder="E-mail">
            </div>
            <div>
                <input type="password" required placeholder="Mot de passe">
            </div>
            <button class="btn btn-color">S'inscrire</button>
        </form>
    </div>
</template>

<script>
export default {
  name: 'sign_up',
  data () {
    return {
      firstname: undefined,
      lastname: undefined,
      email: undefined,
      password: undefined
    }
  },
  methods: {
    createUserJSON () {
      const firstname = this.firstname
      const lastname = this.lastname
      const email = this.email
      const bcrypt = require('bcrypt')
      const saltRounds = 10

      const salt = bcrypt.genSaltSync(saltRounds)
      const hash = bcrypt.hashSync(this.password, salt)
      const fs = require('fs')
      const user = {
        Firstname: firstname,
        Lastname: lastname,
        Email: email,
        Password: hash
      }
      const data = JSON.stringify(user)
      fs.writeFile('users.json', data, function (erreur) {
        if (erreur) {
          console.log(erreur)
        }
      })
    },
    createUserSQL () {
      const sqlite3 = require('sqlite3')
      const db = new sqlite3.Database('main.db', err => {
        if (err) {
          throw err
        }
        console.log('Database started on main.db')
      })
      db.close(err => {
        if (err) {
          throw err
        }
        console.log('Database closed.')
      })
    }
  }
}
</script>
