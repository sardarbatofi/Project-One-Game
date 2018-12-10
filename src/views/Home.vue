<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <OneGame/>
    <button @click="logout">Logga ut</button>
  </div>
</template>

<script>
// @ is an alias to /src
import OneGame from '@/components/OneGame.vue'

export default {
  name: 'home',
  components: {
    OneGame
  },
  methods: {
    logout: function(){
      firebase.auth().signOut().then(() => {
        this.$router.replace('login')
      })
    }
  }
}
</script>
