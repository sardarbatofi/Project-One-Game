<template>
  <div class="about">
      <p>Välkommen!</p>
      <router-link :to="{name:'game',params}"><button>Spel</button></router-link>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
    
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
