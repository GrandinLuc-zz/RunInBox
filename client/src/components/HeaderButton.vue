<template>
    <div>
        <button v-if='user' @click='logout'>
            Se déconnecter
        </button>
        <button v-else @click='login'>
            Se connecter
        </button>
    </div>
</template>

<script>
export default {
  name: 'HeaderButton',
  methods: {
    logout () {
      this.$store.commit('resetUser')
    },
    login () {
      this.$store.dispatch('login', { login, password })
    }
  },
  computed: {
    user () {
      return this.$store.state.user
    }
  }

}
</script>
