<template>
  <div class="hello">
     <input type="text" placeholder="Lägg till önskan..." v-model="wish" @keyup.enter="addWish">
   <h3>Önskelista</h3>
     <ul>
       <li v-for="(wishName,key) in wishes" :key="key">
         <h4>- {{wishName.name}} -</h4>
         <button @click="show = !show" >Edit</button>
         <button @click="deleteWish(key)">Delete</button>
       
         <input v-show="show" type="text" placeholder="ändra..." v-model="editWishProp[key]"  @keyup.enter="editWish(key)">
     

       </li>
     </ul>


  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'OneGame',
  data(){
    return{
    wish:null,
    wishes: [],
    editWishProp: [],
    show: false
  }
},
methods:{
    editWish(key){
    firebase.database().ref('wishes/' + key).set({
      name:this.editWishProp[key]
    });
    this.editWishProp= []
  },
  deleteWish(key){
    firebase.database().ref('wishes/' + key).remove();
    
  },
  addWish(){
    firebase.database().ref('wishes').push({name:this.wish})
   this.wish=null
  
  }
    
} ,
  created(){
    firebase.database().ref('wishes').on('value', (snapshot) =>{
      this.wishes=snapshot.val();
    });
}
}
</script>

<style scoped>
.hello{
  width: 20%;
  margin: auto;
}
h3 {
  margin: 30px;
}
ul {
}
h4{
  color: white;
}
li {
  background-color: red;
  border-radius: 5px;
  list-style-type: none;
  padding: 5px;
  margin: 5px 0;
}
input{
  margin-top: 30px;
  font-size: 24px;
}
</style>