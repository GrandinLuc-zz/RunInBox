<template>
    <div class="home">
        <form @submit.prevent="signUp()" class="box" method="POST">
            <h1>Inscription</h1>
            <div>
                <input type="text" placeholder="Nom">
            </div>
            <div>
                <input type="text" placeholder="Prenom">
            </div>
            <div>
                <input type="text" id="username" v-model="username" required placeholder="Username">
            </div>
            <div>
                <input type="password" v-model="password" id="password" required placeholder="Password">
            </div>
            <button type='submit' class="btn btn-color">Sign up</button>
        </form>
    </div>
</template>

<script>
export default {
  data () {
    return {
      username: undefined,
      password: undefined,
      nom: undefined,
      prenom: undefined
    }
  },
  methods: {
    sendCredentials () {
      const login = this.username
      const password = this.password
      fetch('http://localhost:4000/api/v1/auth/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          login,
          password
        })
      })
        .then(res => res.json())
        .then(({ success, token }) => {
          if (success === true) {
            localStorage.setItem('token', token)
            localStorage.setItem('username', this.username)
            console.log('success')
            window.location.replace('/')
          }
        })
        .catch(error => { this.error = error })
    },
    signUp () {
      const login = this.username
      const password = this.password
      const firstname = this.prenom
      const lastname = this
      console.log('begining signing up')
      fetch('http://localhost:4000/api/v1/write', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          login,
          password,
          firstname,
          lastname
        })
      })
        .then(res => res.json())
        .then(({ success }) => {
          if (success) {
            this.sendCredentials()
          }
        })
        .catch(error => { this.error = error })
    }
  }
}
</script>
