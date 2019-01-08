<template>
<div>
 <p>{{makeMagic}}</p>

<ul id="scoresList"><li>Start and check your fortune level!</li></ul>

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
    bigString += `<li>${row.userID }: ${row.score} try(ies)</li>`;
    console.log(row);
  }	
  scoresList.innerHTML = bigString;}

    }
  }
  }

</script>

<style scoped>

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

