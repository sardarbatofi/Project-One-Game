<template>
  <div>
    <div class="container">
    <div class="row">
      <div class="col s12 m8 offset-m2">
        <div class="login card-panel black white-text center">
          <h3>Login</h3>
     
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
            <button v-on:click="login" class="btn btn-large btn-extended grey lighten-4 black-text">Login</button>
          <br><p>Behöver du ett konto? <router-link to="/sign-up"> Klicka här </router-link> </p>
          <p>Eller logga in med Google <br>
      <button @click="google" class="google">
          <img src="../assets/google-logo.png" alt="Google logo"></button></p>
          </div>
      </div>
    </div>
  </div>
  <social />
  </div>
    

</template>

<script>

export default {
  name: 'login',
  data() {
    return {
        email:'',
        password:''
    };
  },
  
  methods:{
      login: function(){
          var user = firebase.auth().currentUser;
          firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
              (user) => {
                  this.$router.replace('home');
              },
              function(err){
                  alert(err)
              }
          );
      },
      google(){
          const provider = new firebase.auth.GoogleAuthProvider();

          firebase.auth().signInWithPopup(provider).then((result) => {
              this.$router.replace('home');
          }).catch((err) => {
              alert(err.message)
              });
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
.google{
    width: 75px;
    background-color: white;
    padding: 10px;
    border-radius: 100%;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2);
    outline: 0;
    border: 0;
    margin: 10px;
}
.google:hover{
    box-shadow: 0 2px 4px 0 rgba(31, 255, 117, 0.4);
}
.google img {
    width: 100%;
}
input {
  padding: 5px;
  margin: 5px;
}
</style>
