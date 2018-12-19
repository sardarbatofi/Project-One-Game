
<template>
  <div id="app">
    <div class="container-fluid">
        <div class="row">
           <div class="col"> 
          <p>We have selected a random number between 1 and 100. See if you can guess it in 10 turns or fewer. We'll tell you if your guess was too high or too low.</p>
        </div>
            <div class="col">
               <button @click="startGame" v-on:click="game = !game">Start Game</button><br><br>
                <div v-show="game">
                <input v-model="userGuess" type="number" @keypress.enter = "userInput" :disabled="inputClosed"/>
                <button @click="userInput" :disabled="inputBtnClosed">Guess</button>
                <p>Grinchen: {{opponent}}</p>
                <p>Krampus: {{opponent2}}</p>
                <br>
                </div>
            </div>
            <div class="col">
                <p>You have used {{numberOfGuess}} of 10 Guesses.</p>
                <div class="history" v-for="histor in history" :key="histor">{{ histor }}</div>
                <div id="watch-example">
                  <p></p>
                  <p>{{ answer }}</p>
                </div>
            </div>
            <router-link :to="{name:'home',params}"><button>Home page</button></router-link>
        </div>
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


      methods: {
        
      startGame: function(){
          this.answer = ''   /* tillagd, för att nollställa vid nytt spel */ 
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
      
      userInput: function() {
          this.opponent =  Math.floor(Math.random() * 100)+1;
          this.opponent2 =  Math.floor(Math.random() * 100)+1;
          this.numberOfGuess++;
         if(this.userGuess < this.number && this.numberOfGuess < 10 ){
            if (this.opponent == this.number){
                 this.answer = 'Grinchen is the winner! The correct answer is ' + this.number;
                 this.inputClosed, this.inputBtnClosed = true
             }
                  else if(this.opponent2 == this.number){
                          this.answer = 'Krampus is the winner! The correct answer is ' + this.number;
                          this.inputClosed, this.inputBtnClosed = true
                  }
        else 
          this.answer = 'Wrong, guess higher!!'
          this.history.push(this.userGuess, this.opponent, this.opponent2)
        }
          else if (this.userGuess > this.number && this.numberOfGuess < 10 ){
                  if (this.opponent == this.number){
                      this.answer = 'Grinchen is the winner! The correct answer is ' + this.number;
                      this.inputClosed, this.inputBtnClosed = true
                  }
                      else if(this.opponent2 == this.number){
                              this.answer = 'Krampus is the winner! The correct answer is ' + this.number;
                              this.inputClosed, this.inputBtnClosed = true
                      }
                              else
                              this.answer = 'Wrong guess lower'
                              this.history.push(this.userGuess, this.opponent, this.opponent2)
           }
                      else if (this.userGuess == this.number && this.numberOfGuess < 10 ){   
                              this.answer = 'WINNER.... The correct answer is ' + this.number;
                              this.inputClosed, this.inputBtnClosed = true
                      }
                              else if (this.numberOfGuess > 9){
                                       this.answer = 'GAME OVER, The correct answer was ' + this.number;   /* ändrar/ tillagd för att jag är nyfiken */
                                       this.inputClosed, this.inputBtnClosed = true
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
    .col {
        
    }

</style>
