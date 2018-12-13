
<template>
  <div id="app">

      <p>We have selected a random number between 1 and 100. See if you can guess it in 10 turns or fewer. We'll tell you if your guess was too high or too low.</p>
       <button @click="startGame" v-on:click="game = !game"> Start Game</button><br>
     <div v-show="game">
       <input v-model="userGuess" type="number" @keypress.enter = "userInput" :disabled="inputClosed"/>
       <button @click="userInput" :disabled="inputBtnClosed">Guess</button>
       <p>Rick: {{opponent}}</p>
       <p>Marty: {{opponent2}}</p>
       <br>
       <p>You have uesed {{numberOfGuess}} of 10 Guesses.</p>

      <div class="history" v-for="histor in history" :key="histor">{{ histor }}</div>
    </div>

    <div id="watch-example">
  <p>
  </p>
  <p>{{ answer }}</p>
</div>

  </div>
</template>

<script>
export default {
   data() {
     return{
       question: '',
    answer: 'May the force be with you!',
  opponent: 10,
  opponent2: 10,
  game: false,
  inputClosed: false,
  inputBtnClosed: false,
  numberOfGuess: 0,
  number:0,
  userGuess:0,
  history: [],

     }
},

watch: {
    // whenever question changes, this function will run
    question: function (newQuestion, oldQuestion) {
      this.answer = 'Waiting for you to stop typing...'
      this.debouncedGetAnswer()
    }
  },

      methods: {
      startGame: function(){
          this.opponent= 0,
          this.opponent2= 0,
          this.game= false,
          this.inputClosed= false,
          this.inputBtnClosed= false,
          this.numberOfGuess= 0,
          this.number=0,
          this.userGuess =0,
          this.history= []
          this.number = 2/*Math.floor(Math.random() * 100)+1;*/
      },
      userInput: function() {

         if(this.userGuess < this.number && this.numberOfGuess < 10 ){
            if (this.opponent == this.number || this.opponent2 == this.number){
          alert('Opponent Win')
          this.inputClosed = true
          this.inputBtnClosed = true
        } else
        this.answer = 'Wrong, guess higher!!'
          this.opponent = Math.floor(Math.random() * 100)+1;
          this.opponent2 = Math.floor(Math.random() * 100)+1;
          this.numberOfGuess++;
          this.history.push(this.userGuess)
          this.history.push(this.opponent)
          this.history.push(this.opponent2)

        }
        else if (this.userGuess > this.number && this.numberOfGuess < 10 ){
             if (this.opponent == this.number || this.opponent2 == this.number){
          this.answer = 'oponent win'
          this.inputClosed = true
          this.inputBtnClosed = true
        } else
          this.answer = 'Wrong guess lower'
          this.opponent -= 1;
          this.opponent2 += 11;
          this.numberOfGuess++;
          this.history.push(this.userGuess)
          this.history.push(this.opponent)
          this.history.push(this.opponent2)
        }
        else if (this.userGuess == this.number && this.numberOfGuess < 10 ){
             if (this.opponent == this.number || this.opponent2 == this.number){
          this.answer = 'oponent win'
          this.inputClosed = true
          this.inputBtnClosed = true
        } else

          this.answer = 'WINNER.... the correct answere is ' + this.number;
          this.numberOfGuess++;
          this.inputClosed = true
          this.inputBtnClosed = true
        }
        else if (this.numberOfGuess > 9){
          this.answer = 'GAME OVER'

          this.inputClosed = true
          this.inputBtnClosed = true
        }
      }
    }
}
</script>

<style scoped>
.history{
  background-color: peachpuff;
  display: inline-block;
  padding: 0.5%;
  border: 1px solid #cccccc;
}


</style>
