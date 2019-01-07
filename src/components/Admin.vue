<template>
<div>
<h1>High Scores</h1>
<p>{{makeMagic}}</p>
<ul id="scoresList"><li>No data yet!</li></ul>
</div>
</template>



<script>
import firebase from "firebase";

import { fb, db } from "../../firebase-config";

export default {
  data() {
    return {}
  },

  computed: {
 makeMagic(){
      
  firebase.database().ref("scores2").on("value", dataChanged, firebaseError);
	
  function dataChanged(data){
   // console.log(data.val());
  let obj = data.val();
  console.log(obj);
  let bigString="";
  for (let key in obj){   // use for..in to interate through object keys
 // for (let key of Object.keys(obj)){ // use for..of to interate through object keys
    let row = obj[key];
    bigString += `<li>${row.userID } :  ${row.score}</li>`;
    console.log(row);
  }	
  scoresList.innerHTML = bigString;
}
	
  function firebaseError(error){
    console.log(error);
  }
  }
  }
}

  </script>

