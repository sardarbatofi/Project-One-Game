<template>
         
<div class="container"> 
<div>
<ul class="social-nav model-0">
  <li><a href="https://twitter.com/mytweetbex" class="twitter"><i class="fa fa-twitter"></i></a></li>
  <li><a href="https://www.facebook.com/louise.backstrom.3?_rdr" i class="facebook"> <i class="fa fa-facebook"></i></a>
  <li><a href="https://www.plus.google.com/+JimmySvensson" class="google-plus"><i class="fa fa-google-plus"></i></a></li>
  <li><a href="https://www.linkedin.com/in/troinicz/" class="linkedin"><i class="fa fa-linkedin"></i></a></li>
  <li><a href="https://github.com/one-awesome-game/Project-One-Game" class="github"><i class="fa fa-github"></i></a></li>

</ul>
</div>
  <br>
    <div class="row">
    
      <div class="col s12 m8 offset-m2">
        <div class="loginbox">
          
  <h3>Contact Us</h3>
        <div class="input-field">
        <form action="https://formspree.io/rongemattias@gmail.com" method="POST">
       
 <div class="input-field">
<label class="black-text" for="email">Name</label>
  <input type="text" name="name">
  </div>

 <div class="input-field">
<label class="black-text" for="email">Email</label>
  <input type="email" name="_replyto">
  </div>
<br>
<h6> Write you message:</h6>
<br>
  <textarea rows="10" name="message"> </textarea>
<br>
<input type="submit" value="Send">

<br>
<br>

<router-link to="/login">Login Page</router-link>
</form>
  </div>
    </div>
      </div>    
        </div>  
 </div>
      


</template>

<script>


</script>

<style scoped>
.loginbox{
        display: table;
        background: white;
        padding: 5%;
        border-radius: 10px;
        margin: 7%;
        width: 80%;
    }

    .social-nav a {
      display: inline-block;
      float: left;
      width: 48px;
      height: 48px;
      font-size: 20px;
      color: #FFF;
      text-decoration: none;
      cursor: pointer;
      text-align: center;
      line-height: 48px;
      background: #000;
      position: relative;
      transition: 0.5s;
    }
    .social-nav {
      padding: 0;
      list-style: none;
      display: inline-block;
      margin: 200px auto;
    }
    .social-nav li {
      display: inline-block;
    }
    .model-0 {
      position: absolute;
      transition: 0.5s;
      left: 0;
      top: 50px;
    }
    .model-0 li {
      float: none;
      display: block;
    }
    .model-0 a:hover {
      padding-left: 20px;
      width: 65px;
    }

.model-0 .twitter {
  background: #00ACED;
}
.model-0 .facebook {
  background: #3B579D;
}
.fa-google-plus:before{content:"\f0d5"}

.model-0 .google-plus {
  background: #DD4A3A;
}
.model-0 .linkedin {
  background: #007BB6;
}
.model-0 .github {
  background: rgb(0, 0, 0);
}

#textarea1 {
  height: 100px;
}

</style>

