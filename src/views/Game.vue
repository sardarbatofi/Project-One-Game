<template>
  <div class="game">
     <div class="container-fluid">
        <div class="row">
            <div class="col"> 
                <img alt="pepparkakshus" src="../assets/pepparkakshus.jpg">
            </div>
            <div class="col">   
                <Game />
                <button @click="logout">Logga ut</button>
            </div>
        </div>
    </div>
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
