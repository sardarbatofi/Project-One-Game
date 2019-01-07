<template>
<div>
 <p>{{makeMagic}}</p>

<ul id="scoresList"><li>No data yet!</li></ul>

</div>
</template>



<script>

import firebase from "firebase";

import { fb, db } from "../../firebase-config";

export default {
  data() {
    return {
    };
  },

  computed: {
    makeMagic() {
      firebase
        .database()
        .ref("scores2")
        .on("value", dataChanged);

     function dataChanged(data){
  let obj = data.val();
  console.log(obj);
 let bigString="";
  for (let key in obj){   // use for..in to interate through object keys
    let row = obj[key];
    bigString += `<li>${row.userID } :  ${row.score}</li>`;
    console.log(row);
  }	
  scoresList.innerHTML = bigString;}

    }
  }
  }

</script>

