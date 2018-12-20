<template>
  <div class="game">
          <Game />
              <button @click="logout">Logga ut</button> 
 </div>
 </template>

<script>
// @ is an alias to /src

import Game from '@/components/Game.vue'
import firebase from 'firebase'


export default {
  name: 'game',
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
.col {
    
}
</style>
