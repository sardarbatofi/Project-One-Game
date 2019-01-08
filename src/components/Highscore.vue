<template>
<div class="grid-container">
  <div class="item1" ></div>
  <div class="ite2" ></div>
  <div class="item3">
    <p>Enter your name: </p>
      <input id="bootstrap-overrides"  type="text" v-model="nameField">
    
    
    <p>Enter your lucky guess number
      <input id="bootstrap-overrides" type="number" v-model="score">
    </p>

    <button @click="saveScoreButton">Save to Highscore</button>
  </div>
  <div class="item4" ></div>
  <div class="item5" ></div>
  <div class="item6" ></div>
  </div>
</template>

<script>
import firebase from "firebase";
import numberOfGuess from '@/components/Game.vue';
import { fb, db } from "../../firebase-config";

export default {
  data() {
    return {
      score: "",
      nameField: ""
    };
  },

  firebase: {
    score: db.ref("scores")
  },

  methods: {
    /*    saveScoreButton() {
	firebase.database().ref('scores').push({
		userID: this.nameField,
		score: this.score
	});
} */

    //rewrite the last score
    saveScoreButton() {
      let path = "scores2/" + this.nameField;
      fb
        .database()
        .ref(path)
        .set({
          // over-writes old values
          userID: this.nameField,
          score: this.score
        });
    }
  }
};
</script>
<style scoped>
p{
  text-align: center;
}

/*BootstapjQuary-killer*/

h2 {
  font-size: 2em;
}
h2 {
  font-size: 1.7em;
}
:disabled {
  color: gray;
  text-decoration: line-through;
  cursor: not-allowed;
}

#bootstrap-overrides {
   padding: 2px 5px;
margin: 10px;
 width: 150px;
 border: 1px solid black;
 height: 25px;
 border-bottom: 1px solid black;
  box-shadow: 2px 2px 2px grey;
 background-color: white;
 border-radius: 5px;
}
#bootstrap-overrides:focus{
   padding: 2px 5px;
margin: 10px;
 width: 150px;
 border: 1px solid black;
 height: 25px;
 border-bottom: 1px solid black;
 box-shadow: 2px 2px 2px grey;
 background-color: white;
 border-radius: 5px;
} 
button{
  border-radius: 5px;
  border: 1px solid black;
  color: black;
   background-color: white;
}
button:active {
  border-radius: 5px;
  border: 1px solid black;
  background-color: white;
  box-shadow: 1px 1px 1px black;
    color: white;                  
  border-radius: 15px;   

}
/*Bootstap/jQuary-killer*/
</style>
