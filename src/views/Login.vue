<template>
  <div class="login">
      <h2>Logga in</h2>
     <p>E-Post: </p> <input type="text" placeholder="exempel@onegame.se"><br>
      <p>Lösenord:  </p><input type="text" placeholder="******"><br>
      <button @click="login">Logga in</button><br>
      <p>Behöver du ett konto? <router-link to="/sign-up"> Klicka här </router-link> </p>
    </div>
</template>

<script>

export default {
  name: 'login',
  data() {
    return {};
  },
  methods:{
      login: function(){
          this.$router.replace('home');
      }
  }
}
</script>

<style scoped>
h2 {
    margin: 5% 0 3% 0%;
}
.login{
  margin: 0 10%;
  padding: 1%;
  border-radius: 5px;
  background-color: #cccccc;
}
p{
    display: inline-block;
    padding:0 5px 0 0;
    font-size: 1em;

}
button, a {
cursor: pointer;
}
</style>
