<template>
  <div id="app">
     <transition name="fade"><router-view/></transition>
  </div>
</template>

<style>
* {
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  font-family: arial;
}

    body{
        overflow: scroll;
        background-color: lightgrey;
        max-width: 900px;
        width: 90%;
        margin: 0 auto;
        padding: 5%;
    }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;

}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.fade-enter-active, .fade-leave-active {
 transition-property: opacity;
 transition-duration: .25s;
}

.fade-enter-active {
 transition-delay: .25s;
}

.fade-enter, .fade-leave-active {
 opacity: 0
}
.item5 {
background-color: red;
height: 175px;
}
.item6 {
background-color: green;
height: 175px;
}
.item7 {
background-color: red;
height: 175px;
}

/*- CSS Grid för hela projektet -*/

* {
    box-sizing: border-box;
}
.grid-container {
  display: grid;
  grid-template-columns: 30% 40% 30%;
  grid-gap: 10px;
}
.item1{
grid-column: 1 / 4;
}
.item2{
grid-column: 1 / 2;
}
.item3{
grid-column: 2 / 3;
}
.item4{
grid-column: 3 / 4;
}

.item5{
grid-column: 1 / 2;
}
.item6{
grid-column: 2 / 3;
}
.item7{
grid-column: 3 / 4;
}
.item8{
grid-column: 1 / 4;
}

 .mobile {
   display: none;
 }
  .img-responsive {
    display: inline-block;
  }
@media (max-width: 721px){
  .item1, .item2, .item3, .item4, .item5, .item6, .item7
  {
grid-column: 1/4;
  }

  .img-responsive {
    display: none;
  }
  .mobile {
   display: inline-block;
  }
} 

</style>
