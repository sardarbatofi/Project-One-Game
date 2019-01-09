<template>
  <div id="app">
     <transition name="fade"><router-view/></transition>
  </div>
</template>
<script>

export default {
  
}
</script>

<style>
* {
  box-sizing: border-box;
  
}
p {
  font-size: 0.95em;
}

    body{
        overflow: scroll;
        background-color: #28544b;
        max-width: 900px;
        width: 100%;
        margin: 0 auto;
    }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;


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


/*- CSS Grid för hela projektet -*/

* {
    box-sizing: border-box;
}
.grid-container {
  display: grid;
  grid-template-columns: 30% 40% 30%;
  border-radius: 10px;
  padding: 2%;
  margin: 4%;
 
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

  .img-responsive {
    display: inline-block;
  }
@media (max-width: 721px){
  .item1, .item2, .item3, .item4, 
  {
grid-column: 1/4;
  }

} 

</style>
