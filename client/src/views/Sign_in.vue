<template>
    <div>
        <form class="box" @submit.prevent="sendCredential">
            <h1>Connection</h1>
            <p>
                <input type="email" name="email" required placeholder="E-mail">
            </p>
            <p>
                <input type="password" name="pwd" required placeholder="Mot de passe">
            </p>
            <button class="btn btn-color" type="submit" >Se connecter</button>
        </form>
        <div>
            <p>
                Username :
                {{ username }}
            </p>
            <p>
                Password :
                {{ password }}
            </p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'sign_in',
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

      fetch('/api/v1/auth/token', {
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
        .then(({ success, token, message }) => {
          localStorage.setItem('token', token)
        })
        .catch(error => { this.error = error })
    }
  }
}
</script>

<style>

</style>
