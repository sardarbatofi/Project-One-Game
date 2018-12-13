<template>
  <div class="home">

    <img alt="pepparkakshus" src="../assets/pepparkakshus.jpg">
    <Game />
    <button @click="logout">Logga ut</button>
  </div>
</template>

<script>
// @ is an alias to /src

import Game from '@/components/Game.vue'


export default {
  name: 'home',
  components: {
    Game
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
<style scoped>
img{
 width: 200px; 
}
button{
  margin: 25px;
}
</style>
