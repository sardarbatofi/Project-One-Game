<template>

  <div class="item3">
    <p>Enter your name: </p> 
      <input id="bootstrap-overrides"  type="text" v-model="nameField">
    
    
    <p>Enter number of tries: </p>
      <input id="bootstrap-overrides" type="number" v-model="score">
    
<br>
    <button id="hsBtn" @click="saveScoreButton">Save to Highscore</button>
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
#hsBtn {
  margin: 1.5em;
}
#small{
  max-height: 15%;
}
p{
  text-align: center;
}

/*BootstapjQuary-killer*/
:disabled {
  color: gray;
  text-decoration: line-through; /* FÖR ATT VI KAN */
  cursor: not-allowed;
}
#bootstrap-overrides {
  margin: 10px;
  width: 110px;
  border: 1px solid black;
  height: 25px;
  border-bottom: 1px solid black;
  box-shadow: 2px 2px 2px grey;
  background-color: white;
  border-radius: 5px;
  padding: 2px 5px;
}*
#bootstrap-overrides:focus {
  padding: 2px 5px;
  margin: 10px;
  width: 110px;
  border: 1px solid black;
  height: 25px;
  border-bottom: 1px solid black;
  box-shadow: 2px 2px 2px grey;
  background-color: white;
  border-radius: 5px;
  transform:scale(1.1);
}
button {
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
   border-radius: 5px;
color:black;
}
/*Bootstap/jQuary-killer*/
@media screen and (max-width: 770px){
    
    #bootstrap-overrides{
      width: 75px;
    }
    #bootstrap-overrides:focus{
       width: 75px;
    }
}
</style>
