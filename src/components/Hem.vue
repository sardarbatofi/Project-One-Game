<template>
  <div class="about">
      <h3>Hello and welcome to One Game!</h3>
      <p>Here you can play game against Grinchen and Krampus, I will ask you a question that has a numerical answer, 
      try to guess it right! pst…I’m going to help you by telling you to go higher or lower after your guess!
      You have maximun 10 guesses! Enjoy!</p>
      <router-link :to="{name:'game',params}"><button>Game</button></router-link>
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
