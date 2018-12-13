<template>
  <div class="home">
    <img alt="pepparkakshus" src="../assets/pepparkakshus.jpg">
    <HelloWorld />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
<style scoped>
img{
 width: 200px; 
}
</style>
