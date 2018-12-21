<template>
<<<<<<< HEAD
  <div>
    <div class="container">
    <div class="row">
      <div class="col s12 m8 offset-m2">
        <div class="login card-panel black white-text center">
          <h3>Sign Up</h3>
     
            <div class="input-field">
              <i class="material-icons prefix">email</i>
              <input type="email" id="email" v-model="email">
              <label class="white-text" for="email">Email</label>
            </div>
            <div class="input-field">
              <i class="material-icons prefix">lock</i>
              <input type="password" id="password" v-model="password">
              <label class="white-text" for="password">Password</label>
            </div>
      
          
 
      <button @click="signUp">Let´s do it!</button><br>
      <p>Tillbaka?, <router-link to="/login">Klicka här</router-link></p>
 
          </div>
      </div>
    </div>
  </div>
  </div>
    

=======
<div class="grid-container">
  <div class="item3">
  <div class="sign-up">
      <h2>Skapa ett nytt konto.</h2><br>
      <label for="email">E-Post: <input type="text" v-model="email" placeholder="exempel@onegame.se"></label><br>
      <label for="password">Lösenord: <input type="password" v-model="password" placeholder="******" @keyup.enter="login"></label><br>
     
      <button @click="signUp">Let´s do it!</button><br>
      <p>Tillbaka?, <router-link to="/login">Klicka här</router-link></p>
    </div>
    </div>
    </div>
>>>>>>> 18f9a59cf45024da73bebeafeb8cb5128acb2fb4
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
      var user = firebase.auth().currentUser;
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
input {
  padding: 5px;
  margin: 5px;
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
<<<<<<< HEAD
button{
  color: #000;
}
=======
>>>>>>> 18f9a59cf45024da73bebeafeb8cb5128acb2fb4
</style>
