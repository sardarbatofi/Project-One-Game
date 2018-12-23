
<template>
    <div class="grid-container">


    <div class="pyro" v-if="this.win">
        <div class="before" v-if="this.win"></div>
        <div class="after" v-if="this.win"></div>
    </div>


           <div class="item1">
          <h2 v-show="game">{{questions}}</h2> <!--Sardar-->
          <br>
           <form class="form-inline" @submit.prevent="highscore"  v-if="this.win">
      <input id="bootstrap-overrides" type="text" placeholder="Add Name here..." v-model="newNameText">
      <button @click="this.$router.replace('home') ">Add to High Score</button> <!-- error fix --> 
    </form>
        </div>


        <div class="item2"></div>


            <div class="item3">
              <p id="win" v-if="this.win"> {{ this.win }} </p>
               <button @click="startGame" v-on:click="game = !game" :disabled="startBtnClosed">Start Game</button><br><br>
                <div v-show="game">
                <input id="bootstrap-overrides" v-model="userGuess" type="number" @keypress.enter="userInput" @keydown="key" min="0" :disabled="inputClosed"/>
                <button @click="userInput" :disabled="inputBtnClosed">Guess</button>
                    <div id="timer" v-show="!gameOver">
                        <span id="seconds">Seconds left:{{ seconds }}

                        </span>
                    </div>
                <p>Grinchen: {{opponent}}</p>
                <p>Krampus: {{opponent2}}</p>
                <br>
                </div>
            </div>
            <div class="item4"></div>
            <div class="item5">
               <img src="../assets/grinch.png" alt="Grinch!"></div>
            <div class="item6">
                <p>You have used {{numberOfGuess}} of 10 Guesses.</p>
                <div class="history" v-for="histor in history" :key="histor">{{ histor }}</div>
                <div id="watch-example">
                  <p>{{ answer }}</p>


                  <p id="higher">{{ this.higher }}</p>
                  <p id="loser">{{ this.loser }}</p>
                  <p id="lower">{{ this.lower }}</p>
                  <p id="gameo">{{ this.gameo }}</p>

 <router-link :to="{name:'home'}"><button @click="resetTimer()">Home page</button></router-link>
</div>


    </div>

   

      <div class="card-header" v-if="this.win" >
        <h3>Results:</h3>
        <h5>Number of guesses: </h5>

      <div class="success"
      v-for="namn in guestName" :key="namn"> <!-- error fix -->

    {{ namn }}


  </div>
    </div>


<div class="item7">
  <img src="../assets/krampus.png" alt="Krampus!">
</div>


  </div>
</template>

<script>

 const quizData = 'https://api.myjson.com/bins/hkkhs'; //sardar

export default {
    data() {
        return{
            timer: null,
        totalTime: (30),

        questions:[], //sardar
       currentQuestion:Math.floor(Math.random() * 8)+1, //sardar
    answer: '',
  opponent: 10,
  opponent2: 10,
  game: false,
  inputClosed: false,
  inputBtnClosed: false,
  startBtnClosed: false,
  numberOfGuess: 0,
  number:0,
  win: '',
  loser: '',
  higher: '',
  lower: '',
  gameo: '',
  userGuess:0,
  newNameText: '',
  guestName: [],
  history: [],
  
  invalidChars: [
      "-",
                  "+",
                  ".",
                  "e",
                  "E"
                ],
    }
},

//Sardar lagt till fetchar api
 created() {
   fetch(quizData)
    .then(res => res.json())
    .then(res => {
      this.title = res.title;
      this.quiz = res.text;
    this.questions =  res.questions[this.currentQuestion].text; 
    this.number = res.questions[this.currentQuestion].answer; 
    
    })
    },
    computed: {
      minutes: function() {
        const minutes = Math.floor(this.totalTime / 60);
        return this.padTime(minutes);
        },
        seconds: function() {
          const seconds = this.totalTime - (this.minutes * 60);
        return this.padTime(seconds);
        }
      },


      methods: {
        
        key(e){
          if (this.invalidChars.includes(e.key)) {
            e.preventDefault();
            }
        },

      startGame: function(){
        this.answer = ''   /* tillagd, för att nollställa vid nytt spel */
          this.opponent= 0,
          this.opponent2= 0,
          this.game= false,
          this.inputClosed= false,
          this.inputBtnClosed= false,
           this.startBtnClosed= false,
          this.numberOfGuess= 0,
          this.win= '',
          this.loser= '',
          this.higher= '',
          this.lower= '',
          this.gameo= '',
          this.newNameText = '',
          this.userGuess=null,
          this.history= []
          
          this.gameOver = false,
          this.timer= null,
          this.totalTime= (30)
          this.startTimer ()
      },

      highscore: function() {

        this.guestName.push(this.newNameText)
        this.newNameText = ''

      },

        startTimer: function() {
            this.timer = setInterval(() => this.countdown(), 1000);
          },
          resetTimer: function() {
              this.totalTime = (30);
          clearInterval(this.timer);
          this.timer = null;
          },
          padTime: function(time) {
              return (time < 10 ? '0' : '') + time;
          },
          countdown: function() {
              if(this.totalTime > 1){
                this.startBtnClosed= true
                  this.totalTime--;
          } else if (!this.gameOver){ // när klockan når noll, lade till else if för att koden inte ska köras om det redan är gameOver.
            this.totalTime ;
            this.resetTimer()

            this.gameOver = true
            this.answer = 'Time Out!, The correct answer was ' + this.number ;
                this.inputClosed = true
                this.inputBtnClosed = true
                this.timer = null
                    setTimeout( () => {
           this.$router.replace('home')   // TEST*****
                              }, 5000);



          }

          },


      userInput: function() {

              setTimeout( () => {
             this.opponent =  Math.floor(Math.random() * 100)+1;
               this.history.push(this.opponent)
       }, Math.floor(Math.random() * 400)+1)

             setTimeout( () => {
             this.opponent2 =  Math.floor(Math.random() * 100)+1;
               this.history.push(this.opponent2)
       }, Math.floor(Math.random() * 400)+1)

          this.numberOfGuess++;
         if(this.userGuess < this.number && this.numberOfGuess < 10 ){
             if (this.opponent == this.number){
                 this.loser = 'Grinchen is the winner! The correct answer is ' + this.number;
                 this.higher = ''
                 this.answer = ''
                 this.lower = ''
                 this.inputClosed = true
                  this.inputBtnClosed = true
                   this.gameOver = true
                   this.timer = null
                    setTimeout( () => {
                           this.$router.replace('home')   // TEST*****
                       }, 5000);

             }
                  else if(this.opponent2 == this.number){
                      this.loser = 'Krampus is the winner! The correct answer is ' + this.number;
                          this.answer = ''
                          this.higher = ''
                          this.lower = ''
                          this.inputClosed = true
                           this.inputBtnClosed = true
                         this.gameOver = true
                            this.timer = null
                                                           setTimeout( () => {
                                      this.$router.replace('home')   // TEST*****
                                  }, 5000);

                                   }
        else
          this.higher = 'Wrong, guess higher!!'
          this.lower = ''
          this.answer = ''
          this.history.push(this.userGuess)
        }
          else if (this.userGuess > this.number && this.numberOfGuess < 10 ){
              if (this.opponent == this.number){
                  this.loser = 'Grinchen is the winner! The correct answer is ' + this.number;
                      this.higher = ''
                      this.lower = ''
                     this.answer = ''
                      this.inputClosed = true
                       this.inputBtnClosed = true
                           this.gameOver = true
                                                          setTimeout( () => {
                                      this.$router.replace('home')   // TEST*****
                                  }, 5000);

                                       }
                      else if(this.opponent2 == this.number){
                          this.loser = 'Krampus is the winner! The correct answer is ' + this.number;
                             this.answer = ''
                              this.higher = ''
                              this.lower = ''
                              this.inputClosed = true
                               this.inputBtnClosed = true
                                   this.gameOver = true
                                        this.timer = null
                                                                       setTimeout( () => {
                                      this.$router.replace('home')   // TEST*****
                                  }, 5000);

                                                   }
                              else
                              this.lower = 'Wrong guess lower'
                              this.answer = ''
                              this.higher = ''
                              this.history.push(this.userGuess)
           }
                      else if (this.userGuess == this.number && this.numberOfGuess < 10 ){
                          this.win = 'WINNER.... The correct answer is ' + this.number;
                             this.answer = ''
                              this.higher = ''
                              this.lower = ''
                              this.history.push(this.userGuess)
                              this.guestName.push(this.numberOfGuess)
                              this.inputClosed = true
                               this.inputBtnClosed = true
                                    this.gameOver = true
                                        this.timer = null
                              /*    setTimeout( () => {
                                      this.$router.replace('home')   // TEST*****
                                  }, 5000); */

                                                   }
                              else if (this.numberOfGuess > 9){
                                  this.gameo = 'GAME OVER, The correct answer was ' + this.number;
                                       this.answer = ''
                                       this.higher = ''
                                       this.lower = ''
                                       this.inputClosed = true
                                        this.inputBtnClosed = true
                                        this.gameOver = true
                                        this.timer = null
                                          setTimeout( () => {
                                      this.$router.replace('home')   // TEST*****
                                  }, 5000);

               }
      }
    }
}
</script>

<style scoped>


/*BootstapjQuary-killer*/
:disabled {
  color: gray;
  text-decoration: line-through;
  cursor: not-allowed;
}

#bootstrap-overrides {
margin: 10px;
 width: 150px;
 border: 1px solid black;
 height: 25px;
 border-bottom: 1px solid black;
  box-shadow: 2px 2px 2px grey;
 background-color: white;
 border-radius: 5px;
 padding: 2px 5px;
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
  color:black;
  background-color: white;
  box-shadow: 1px 1px 1px black;
}
/*Bootstap/jQuary-killer*/


img {
  width: 30%;
}

.history{
    background-color: peachpuff;
  display: inline-block;
  padding: 0.5%;
  border: 1px solid #cccccc;
}


    #higher {

      color: red;
    }

    #lower {

      color: red;
    }

    #timer {
  font-size: 20px;
}

#seconds { /* added for future work with the timer, Rebeckas JulAfton är räddad! */
   /*30sek*/ color: rgb(26, 153, 15);
    /*20sek*/color: rgb(255, 233, 37);
    /*10sek*/color: rgb(235, 54, 30);
}



    #win {

        animation-duration: 2s;
        animation-name: bounceIn;
        font-size: 40px;
        animation-fill-mode:both;
      }

      @keyframes bounceIn {
    0% {
      transform: scale(0.1);
      opacity: 0;
    }
    60% {
      transform: scale(1.2);
      opacity: 1;
    }
    100% {
      transform: scale(0.6);
    }
  }

      .pyro > .before, .pyro > .after {
          position: absolute;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          box-shadow: -120px -218.66667px blue, 248px -16.66667px #00ff84, 190px 16.33333px #002bff, -113px -308.66667px #ff009d, -109px -287.66667px #ffb300, -50px -313.66667px #ff006e, 226px -31.66667px #ff4000, 180px -351.66667px #ff00d0, -12px -338.66667px #00f6ff, 220px -388.66667px #99ff00, -69px -27.66667px #ff0400, -111px -339.66667px #6200ff, 155px -237.66667px #00ddff, -152px -380.66667px #00ffd0, -50px -37.66667px #00ffdd, -95px -175.66667px #a6ff00, -88px 10.33333px #0d00ff, 112px -309.66667px #005eff, 69px -415.66667px #ff00a6, 168px -100.66667px #ff004c, -244px 24.33333px #ff6600, 97px -325.66667px #ff0066, -211px -182.66667px #00ffa2, 236px -126.66667px #b700ff, 140px -196.66667px #9000ff, 125px -175.66667px #00bbff, 118px -381.66667px #ff002f, 144px -111.66667px #ffae00, 36px -78.66667px #f600ff, -63px -196.66667px #c800ff, -218px -227.66667px #d4ff00, -134px -377.66667px #ea00ff, -36px -412.66667px #ff00d4, 209px -106.66667px #00fff2, 91px -278.66667px #000dff, -22px -191.66667px #9dff00, 139px -392.66667px #a6ff00, 56px -2.66667px #0099ff, -156px -276.66667px #ea00ff, -163px -233.66667px #00fffb, -238px -346.66667px #00ff73, 62px -363.66667px #0088ff, 244px -170.66667px #0062ff, 224px -142.66667px #b300ff, 141px -208.66667px #9000ff, 211px -285.66667px #ff6600, 181px -128.66667px #1e00ff, 90px -123.66667px #c800ff, 189px 70.33333px #00ffc8, -18px -383.66667px #00ff33, 100px -6.66667px #ff008c;
          animation: 1s bang ease-out infinite backwards, 1s gravity ease-in infinite backwards, 5s position linear infinite backwards; }


  @keyframes bang {
    from {
      box-shadow: 0 0 white; } }


  @keyframes gravity {
    to {
      transform: translateY(200px);
      opacity: 0; } }


  @keyframes position {
    0%, 19.9% {
      margin-top: 10%;
      margin-left: 40%; }

    20%, 39.9% {
      margin-top: 40%;
      margin-left: 30%; }

    40%, 59.9% {
      margin-top: 20%;
      margin-left: 70%; }

    60%, 79.9% {
      margin-top: 30%;
      margin-left: 20%; }

    80%, 99.9% {
      margin-top: 30%;
      margin-left: 80%; } }

      .success {


      color: white;
        background: purple;

        display: inline-block;
        margin: 10px;
        padding: 10px;
        width: 30px;



      }

      .card-header {
        background: rgba(150, 0, 90, 0.1);
        height: 350px;
        padding: 15px;
        width: 140px;
        margin: auto;
        margin-top: 20px;

      }

      #score {

        margin-top: 30px;
      }






</style>
