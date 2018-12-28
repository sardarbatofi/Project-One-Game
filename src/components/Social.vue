
<template>
<div>
<ul class="social-nav model-0">
  <li><a href="https://twitter.com/mytweetbex" class="twitter"><i class="fa fa-twitter"></i></a></li>
  <li><a href="https://www.facebook.com/louise.backstrom.3?_rdr" i class="facebook"> <i class="fa fa-facebook"></i></a>
  <li><a href="https://www.plus.google.com/+JimmySvensson" class="google-plus"><i class="fa fa-google-plus"></i></a></li>
  <li><a href="https://www.linkedin.com/in/troinicz/" class="linkedin"><i class="fa fa-linkedin"></i></a></li>
  <li><a href="https://github.com/one-awesome-game/Project-One-Game" class="github"><i class="fa fa-github"></i></a></li>
  
</ul>
</div>
</template>

<script>
export default{
 
}

</script>

<style scoped>
* {
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  font-family: arial;
}

body {
  background: #404040;
  padding: 0;
  margin: 0;
  text-align: center;
  font-family: arial;
  color: #fff;
}

/*=====================*/
.social-nav {
  padding: 0;
  list-style: none;
  display: inline-block;
  margin: 10px auto;
}
.social-nav li {
  display: inline-block;
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
  -moz-transition: 0.5s;
  -o-transition: 0.5s;
  -webkit-transition: 0.5s;
  transition: 0.5s;
}

.model-0 {
  position: absolute;
  -moz-transition: 0.5s;
  -o-transition: 0.5s;
  -webkit-transition: 0.5s;
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
.model-0 .google-plus {
  background: #DD4A3A;
}
.model-0 .linkedin {
  background: #007BB6;
}
.model-0 .github {
  background: rgb(0, 0, 0);
}
</style>