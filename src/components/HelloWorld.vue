
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
  
  <p>{{history}}</p>
</div>
  </div>
</template>

<script>
export default {
   data() {
     return{
  opponent: 0,
  opponent2: 0,
  game: false,
  inputClosed: false,
  inputBtnClosed: false,
  numberOfGuess: 0,
  number:0,
  userGuess:0,
  history: [] 
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
          this.number = Math.floor(Math.random() * 100)+1;
      },
      userInput: function(userGuess, number) {
        if(this.userGuess < this.number /*&& numberOfGuess < 11 */){
          alert("Wrong, guess higher!")
          this.opponent +=7;
          this.opponent2 +=19;
          this.numberOfGuess++;
          this.history.push('userGuess')
          this.history.push('opponent')
          this.history.push('opponent2')
          
        }
        else if (this.userGuess > this.number /*&& numberOfGuess < 11 */){
          alert("Wrong, guess lower!")
          this.opponent -= 1;
          this.opponent2 += 11;
          this.numberOfGuess++;
          this.history.push('userGuess')
          this.history.push('opponent')
          this.history.push('opponent2')
        }
        else if (this.userGuess == this.number /*&& numberOfGuess < 11 */){
          alert("Yes sir, The Answere is " + this.number);
          this.numberOfGuess++;
          this.inputClosed = true
          this.inputBtnClosed = true 
          
        }
        else /*if (numberOfGuess >= 10)*/{
          alert('You have uesd all your guesses, GAME OVER');
       
          this.inputClosed = true
          this.inputBtnClosed = true 
        }
      }
    }
}
</script>

<style scoped>

</style>