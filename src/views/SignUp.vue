<template>
  <div class="sign-up">
      <h2>Skapa ett nytt konto.</h2><br>
     <p>E-Post: </p> <input type="text" v-model="email" placeholder="exempel@onegame.se"><br>
      <p>Lösenord:  </p><input type="password" v-model="password" placeholder="******"><br>
      <button @click="signUp">Let´s do it!</button><br>
      <p>Tillbaka?, <router-link to="/login">Klicka här</router-link></p>
    </div>
</template>

<script>

export default {
  name: 'signUp',
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods:{
    signUp: function(){
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password). then(
        (user) => {
          this.$router.replace('home')
        },
        function(err){
          alert( err.message )
        }
      );
    }
  }
}
</script>

<style scoped>
h2 {
    margin: 5% 0 3% 0%;
}
.sign-up{
  margin: 0 10%;
  padding: 1%;
  border-radius: 5px;
  background-color: #cccccc;
}
p{
    display: inline-block;
    padding:0 5px 0 0;
    font-size: 1em;
    margin: 2%
}
button, a {
cursor: pointer;
}
</style>
