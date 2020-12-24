<template>
    <div class="home">
        <form @submit.prevent="sendCredentials()" class="box">
            <h1>Connection</h1>
            <div>
                <input id="username" v-model="username" required placeholder="Username">
            </div>
            <div>
                <input type="password" v-model="password" id="password" required placeholder="Password">
            </div>
            <button type='submit' class="btn btn-color" >Log in</button>
        </form>
    </div>
</template>

<script>
export default {
  name: 'Sign in',
  data () {
    return {
      username: undefined,
      password: undefined
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
          localStorage.setItem('token', token)
          localStorage.setItem('username', this.username)
          if (success === true) {
            console.log('success')
            window.location.replace('/')
          }
        })
        .catch(error => { this.error = error })
    }
  }
}
</script>
