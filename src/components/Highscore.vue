<template>
  <div>
    <p>Enter your name
      <input type="text" v-model="nameField">
    </p>
    <p>Enter your score
      <input type="number" v-model="score">
    </p>

    <button @click="saveScoreButton">Save High Score</button>
  </div>
</template>

<script>
import firebase from "firebase";

import { fb, db } from "../../firebase-config";

export default {
  data() {
    return {
      score: "",
      nameField: ""
    };
  },

  firebase: {
    scores: db.ref("scores")
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
