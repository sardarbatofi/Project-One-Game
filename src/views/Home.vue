<template>
  <div class="home">
    <img alt="pepparkakshus" src="../assets/pepparkakshus.jpg">
    <Game />
  </div>
</template>

<script>
// @ is an alias to /src
import Game from '@/components/Game.vue'

export default {
  name: 'home',
  components: {
    Game
  }
}
</script>
<style scoped>
img{
 width: 200px; 
}
</style>
