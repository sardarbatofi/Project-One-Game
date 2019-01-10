<template>

  <div class="över">

    <div class="snowflakes" aria-hidden="true" v-show="!game">
  <div class="snowflake" >
  ❅
  </div>
  <div class="snowflake">
  ❆
  </div>
  <div class="snowflake">
  ❅
  </div>
  <div class="snowflake">
  ❆
  </div>
  <div class="snowflake">
  ❅
  </div>
  <div class="snowflake">
  ❆
  </div>
  <div class="snowflake">
    ❅
  </div>
  <div class="snowflake">
    ❆
  </div>
  <div class="snowflake">
    ❅
  </div>
  <div class="snowflake">
    ❆
  </div>
  <div class="snowflake">
    ❅
  </div>
  <div class="snowflake">
    ❆

  </div>

</div>


  <div class="grid-container">
    <div class="pyro" v-if="this.win">
      <div class="before" v-if="this.win"></div>
      <div class="after" v-if="this.win"></div>
    </div>



    <div class="item1">
      <h2 v-show="game">{{questions}}</h2>
        <div id="watch-example">
               <p id="win" v-if="win">{{ win }}</p>
               <p id="grinch" v-if="grinch">{{ grinch }}</p>
               <p id="krampus" v-if="krampus">{{ krampus }}</p>
               <p id="gameo">{{ gameo }}</p>
               <p id="timeOut">{{ answer }}</p>
            </div>
    <div class="difficulty" v-show="!game">
      <div>Choose difficulty:</div> <!-- ändrade så att @cliack gör allt sätter antal försök, bestämmer tiden och väljer animation för tidtagarur.-->
      <button class="button" @click="tries=15, diffTime=40, easy=!easy ,startGame(), game = !game" >Easy</button>
      <button class="button" @click="tries=10, diffTime=30, medium=!medium,startGame(), game = !game">Medium</button>
      <button class="button" @click="tries=5, diffTime=15, hard=!hard,startGame(),game = !game" >Hard</button>
    </div>

      <form class="form-inline"  v-if="this.win">
   <!--      <input
          id="bootstrap-overrides"
          type="text"
          placeholder="Add Name here..."
          v-model="newNameText"
        > -->
<!--           <button>Add to High Score</button>
 -->                  <highscore></highscore>
        <router-link :to="{name:'home'}">

        </router-link>
      </form>
    </div>

    <div class="item2"></div>

    <div class="item3">
      <div v-show="game">
        <input
          id="bootstrap-overrides"
          v-model="userGuess"
          type="number"
          @keypress.enter="userInput"
          @keydown="key"
          min="0"
          :disabled="inputClosed"
        > <!-- visas när game är sant -->
        <button @click="userInput" :disabled="inputBtnClosed">Guess</button>
        <button :disabled="!inputBtnClosed" v-show="inputBtnClosed" onclick="location.reload(true)">Play Again?</button>

        <div id="timer" v-show="!gameOver">

<!-- tycker verkligen att v-if bör ha fungerar här, men icke, denna kod duger änsålänge -->

           <div v-show="easy" class="jmWatch">
              <div  class="jmTimerE">
                 <div  class="jmTickerE" ></div>
                 <div class="jmMaskE"></div>
                 <div  class="jmFace"><p><span id="seconds">{{ seconds }}</span></p></div>
              </div>
          </div>

           <div  v-show="medium" class="jmWatch">
              <div  class="jmTimerM">
                 <div  class="jmTickerM" ></div>
                 <div class="jmMaskM"></div>
                 <div  class="jmFace"><p><span id="seconds">{{ seconds }}</span></p></div>
              </div>
          </div>
             <div v-show="hard" class="jmWatch">
              <div  class="jmTimerH">
                 <div  class="jmTickerH" ></div>
                 <div class="jmMaskH"></div>
                 <div  class="jmFace"><p><span id="seconds">{{ seconds }}</span></p></div>
              </div>
          </div>



         </div>

          <p id="higher">{{ higher }}</p>
        <p id="lower">{{ lower }}</p>
      <p v-show="game">You have used {{numberOfGuess}} of {{tries}} Guesses.</p>
       <!-- <p>The Grinch: {{opponent}}</p>
        <p>Krampus: {{opponent2}}</p>-->
      </div>
    </div>
    <div class="item4"></div>
    <div class="item5" v-show="game">
   <p>The Grinch: </p> <div class="history" v-for="historG in historyGrinch" :key="historG">{{ historG }}</div>
      
      
    </div>

    <div class="item6" v-show="game">
    <p class="currentUser" v-if="isLoggedIn">{{currentUser}}:</p>  <div class="history" v-for="histor in history" :key="histor">{{ histor }}</div> <!-- föregående gissningar skrivs ut, även namnet(email) på den inloggade -->

    </div>

    <!--
      <div class="card-header" v-if="this.win" >
        <h3>Results:</h3>
        <h5>Number of guesses: </h5>
      <div class="success"
      v-for="namn in guestName" :key="namn">
    {{ namn }}
  </div>
    </div>
    -->
    <div class="item7" v-show="game">
      <p>Krampus: </p><div class="history" v-for="historK in historyKrampus" :key="historK">{{ historK }}</div>
    </div>
    <div class="item8"><img class="grinch" src="../assets/grinch.png" alt="Grinch!"><img class="krampus" src="../assets/krampus.png" alt="Krampus!">
            <router-link :to="{name:'home'}">
             <button @click="resetTimer()">Home</button>
            </router-link>
    </div>
  </div>
</div>
</template>

<script>
const quizData = "https://api.myjson.com/bins/1e3s5g";
export default {
  data() {
    return {
      gameOver: false,
      easy: false,
      medium:false,
      hard:false,
      timer: null,
      totalTime: 30,
      questions: [],
      currentQuestion: Math.floor(Math.random() * 22) + 1,
      answer: "",
      opponent: 10,
      opponent2: 10,
      game: false,
      inputClosed: false,
      inputBtnClosed: false,
      startBtnClosed: false,
      numberOfGuess: 0,
      tries: 10,
      diffTime: 30,
      number: 0,
      win: "",
      grinch: "",
      krampus: "",
      higher: "",
      lower: "",
      gameo: "",
      userGuess: 0,
      newNameText: "",
      guestName: [],
      history: [],
      historyGrinch: [],
      historyKrampus: [],
      invalidChars: ["-", "+", ".", ",", "e", "E"],
      currentUser: "",
      isLoggedIn: false
    };
  },

  created() {
    fetch(quizData)
      .then(res => res.json())
      .then(res => {
        this.title = res.title;
        this.quiz = res.text;
        this.questions = res.questions[this.currentQuestion].text; // för att skriva ut frågan
        this.number = parseInt(res.questions[this.currentQuestion].answer); // för att få svaret
      });
  },

  computed: {

    minutes: function() {
      const minutes = Math.floor(this.totalTime / 60);
      return this.padTime(minutes);
    },
    seconds: function() {
      const seconds = this.totalTime - this.minutes * 60;
      return this.padTime(seconds);
    }
  },
  methods: {
    key(e) {
      if (this.invalidChars.includes(e.key)) {
        e.preventDefault();
      }
    },

    startGame: function() {
        this.answer = ""; /* tillagd, för att nollställa vid nytt spel */
        (this.opponent = 0),
        (this.opponent2 = 0),
        (this.game = false),
        (this.inputClosed = false),
        (this.inputBtnClosed = false),
        (this.startBtnClosed = false),
        (this.numberOfGuess = 0),
        (this.win = ""),
        (this.grinch = ""),
        (this.krampus = ""),
        (this.higher = ""),
        (this.lower = ""),
        (this.gameo = ""),
        (this.newNameText = ""),
        (this.userGuess = null),
        (this.history = []);
        (this.historyGrinch = []);
        (this.historyKrampus = []);
        (this.gameOver = false), (this.timer = null), (this.totalTime = this.diffTime);
        this.startTimer();
        this.isLoggedIn = true,
        this.currentUser = firebase.auth().currentUser.email+":"
       },
   /*  highscore: function() {
      this.guestName.push(this.newNameText);
      this.newNameText = "";
    }, */
    startTimer: function() {
      this.timer = setInterval(() => this.countdown(), 1000);
    },
    resetTimer: function() {
      this.totalTime = this.diffTime;
      clearInterval(this.timer);
      this.timer = null;
    },
    padTime: function(time) {
      return (time < 10 ? "0" : "") + time;
    },
    countdown: function() {
      if (this.totalTime > 1) {
        this.startBtnClosed = true;
        this.totalTime--;
      } else if (!this.gameOver) {
        // när klockan når noll, lade till else if för att koden inte ska köras om det redan är gameOver.
        this.totalTime;
        this.resetTimer();
        this.gameOver = true;
        this.answer = "Time Out! The correct answer was " + this.number;
        this.inputClosed = true;
        this.inputBtnClosed = true;
        this.timer = null;

      }

    },
    userInput: function() {
      function userGuessToMax(min, max) {
        return Math.floor(Math.random() * (max - min)) + min; // Gör botarna lite smartare, reagerar på "ledtråden"
      }
      function userGuessToMin(min, max) {
        return Math.floor(Math.random() * (max - min)) + 1;
      }
      setTimeout(() => {
        // beroende på om boten ska gissa högre eller lägre, så ringer han olika funktioner, som har lite olika inställningar.
  if (this.userGuess > this.number) {
          this.opponent = userGuessToMin(1, this.userGuess);
        } else if (this.userGuess < this.number)
          this.opponent = userGuessToMax(100, this.userGuess);
        this.historyGrinch.unshift(this.opponent);
      }, Math.floor(Math.random() * 245) + 1);
      setTimeout(() => {
        if (this.userGuess > this.number) {
          this.opponent2 = userGuessToMin(1, this.userGuess);
        } else if (this.userGuess < this.number)
          this.opponent2 = userGuessToMax(100, this.userGuess);
        this.historyKrampus.unshift(this.opponent2);
      }, Math.floor(Math.random() * 245) + 1);
      this.numberOfGuess++;
      setTimeout(() => {
        // Denna timeout behövs för att simulera betänketiden för våra motståndare
        // utan den vinner motståndarna först nästa omgång. Detta löser även higer/lower som blev problem när botarna fick fördröjningen.
        if (this.userGuess < this.number && this.numberOfGuess < this.tries) {
          if (this.opponent == this.number) {
            this.grinch =
              "Grinchen is the winner! The correct answer is " + this.number;
            this.higher = "";
            this.answer = "";
            this.lower = "";
            this.inputClosed = true;
            this.inputBtnClosed = true;
            this.gameOver = true;
            this.timer = null;

          } else if (this.opponent2 == this.number) {
            this.krampus =
              "Krampus is the winner! The correct answer is " + this.number;
            this.answer = "";
            this.higher = "";
            this.lower = "";
            this.inputClosed = true;
            this.inputBtnClosed = true;
            this.gameOver = true;
            this.timer = null;

          } else this.higher = "Wrong, guess higher!!";
          this.lower = "";
          this.answer = "";
          this.history.unshift(this.userGuess);
          this.userGuess = null;
        } else if (
          this.userGuess > this.number &&
          this.numberOfGuess < this.tries
        ) {
          if (this.opponent == this.number) {
            this.grinch =
              "Grinchen is the winner! The correct answer is " + this.number;
            this.higher = "";
            this.lower = "";
            this.answer = "";
            this.inputClosed = true;
            this.inputBtnClosed = true;
            this.gameOver = true;

          } else if (this.opponent2 == this.number) {
            this.krampus =
              "Krampus is the winner! The correct answer is " + this.number;
            this.answer = "";
            this.higher = "";
            this.lower = "";
            this.inputClosed = true;
            this.inputBtnClosed = true;
            this.gameOver = true;
            this.timer = null;

          } else this.lower = "Wrong, guess lower!!";
          this.answer = "";
          this.higher = "";
          this.history.unshift(this.userGuess);
          this.userGuess = null;
        } else if (
          this.userGuess == this.number &&
          this.numberOfGuess < this.tries
        ) {
          this.win = "WINNER!! You saved Christmas! The correct answer is " + this.number;
          this.answer = "";
          this.higher = "";
          this.lower = "";
          this.history.unshift(this.userGuess);
          this.guestName.unshift(this.numberOfGuess);
          this.inputClosed = true;
          this.inputBtnClosed = true;
          this.gameOver = true;
          this.timer = null;
        } else if (this.numberOfGuess > this.tries - 1) {
          this.gameo = "GAME OVER, The correct answer was " + this.number;
          this.answer = "";
          this.higher = "";
          this.lower = "";
          this.inputClosed = true;
          this.inputBtnClosed = true;
          this.gameOver = true;
          this.timer = null;
        }
      }, 250);

    }
  }
};
</script>

<style scoped>

.grid-container {
  background-color: #fff0db;
}
h2 {
  font-size: 1.3em;
  font-weight: bold;
  margin: 1.5% 2% 0% 2%;
}
@media screen and (max-width: 721px){
.grinch{
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 15%;
  animation: fade 10s;
  animation-fill-mode: forwards;
  float: left;
}
@keyframes fade {
  0%   {opacity: 0;}
  50%  {opacity: 50;}
  100% {opacity: 100;}
    }
}   
@media screen and (min-width: 721px){
.grinch {
  width: 18%;
  animation: grinch2 2s;
  position: absolute;
  left:0%; 
  bottom:0%;
  animation-fill-mode: forwards;
}
@keyframes grinch2 {
  0%   {left:-20%; bottom:0%;}
  100% {left:0%; bottom:0%;}
        }
}
@media screen and (max-width: 721px){
.krampus {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 18%;
  float: right;
  animation: krampus1 10s;
  animation-fill-mode: forwards;
    }

@keyframes krampus1 {
  0%   {opacity: 0;}
  50%  {opacity: 50;}
  100% {opacity: 100;}
    }
}
@media screen and (min-width: 721px){
.krampus {
  width: 23%;
  animation: krampus2 2s;
  position: absolute;
  right:0%; 
  bottom:-2%;
  animation-fill-mode: forwards;
}

@keyframes krampus2 {
  0%   {right:-20%; bottom:-2%;}
  100%  {right:0%; bottom:-2%;}
}
    }
.item5, .item7{
  border-radius: 15px;
  color: #decdc3;
  background-color: #990000;
  height: 100px;
  margin: 0% 2% 2% 2%;  /* Ta bort om ej behövs */
  display: table;
}
.item6 {
  border-radius: 15px;
  background-color: #74b49b;
  margin: 0% 2% 2% 2%;
  height: 100px;
  display: table;
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
  color: black;
  background-color: white;
  box-shadow: 1px 1px 1px black;
}
/*Bootstap/jQuary-killer*/
img {
  width: 30%;
}
#gameo, #timeOut{
    color: #990000;
    font-size: 1.2em;
    font-weight: bold;
    }
#grinch, #krampus{
  animation-duration: 2s;
  animation-name: opponentWin;
  font-size: 1em;
  animation-fill-mode: both;
  color: #990000;
  font-weight: bold;
}
@keyframes opponentWin {
  0% {
    transform: scale(0.1);
    opacity: 0;
  }
  60% {
    transform: scale(2);
    opacity: 1;
  }
  100% {
    transform: scale(1);
  }
}

#higher, #lower {
  color: #990000;
  font-weight: bold;
}
.clicked {
  background-color: red;
}
.history {
  font-size: calc(0.5em + 5px);
  margin: 3px;
  display: block;
  padding: 0.5%;
}
#timer {
  font-size: 20px;
}
#seconds {
  color: rgb(235, 54, 30);
}


.jmFace {
  border-radius: 100%;
    width: 22px;
    height: 20px;
    position: absolute;
    left: 24.5%;
    top: 26.5%;
    background-color: #ffffff;
    z-index: 2;
}

.jmFace p {
    position: absolute;
    top: -3px;
    left: 0px;
    right: 0;
    text-align: center;
    font-size: 8px;
}

.jmTimerE, .jmTickerE, .jmMaskE {
  width:100px;
  height:100px;
  background-color:#00703c;
  position:relative;
}

.jmTimerE {
    border-radius: 100%;
    width: 40px;
    height: 41px;
    overflow: hidden;
    border: 1px solid #999999;
    transform: scale(2,2);
    position: absolute;
    left: 38px;
    top: 72px;
    opacity: 0.5;
}
.jmTickerE, .jmMaskE {
  position:absolute;
  width:50%;
  height:50%;
}
.jmTickerE {
  animation: jm-cycle 40s 1 linear; /*en för 40 och en för 15*/
  background-color:#b7d035;
  bottom:50%;
  left:50%;
  border-top-right-radius: 100%;
  transform-origin:0 100%;
  transform:rotate(-90deg);
  z-index:1;
}
.jmMaskE {
  animation: jm-cycle-jmMask 40s 1 linear; /*en för 40 och en för 15*/
  animation: jm-cycle-jmMask 40s 10 linear; /*en för 40 och en för 15*/
  border-top-left-radius: 50px;
  background-color:#00703c;
  bottom:50%;
  left:0;
  z-index:1;
}

.jmTimerM, .jmTickerM, .jmMaskM {
  width:100px;
  height:100px;
  background-color:#00703c;
  position:relative;
}

.jmTimerM {
    border-radius: 100%;
    width: 40px;
    height: 41px;
    overflow: hidden;
    border: 1px solid #999999;
    transform: scale(2,2);
    position: absolute;
    left: 38px;
    top: 72px;
    opacity: 0.5;
}
.jmTickerM, .jmMaskM {
  position:absolute;
  width:50%;
  height:50%;
}
.jmTickerM {
  animation: jm-cycle 30s 1 linear; /*en för 40 och en för 15*/
  background-color:#b7d035;
  bottom:50%;
  left:50%;
  border-top-right-radius: 100%;
  transform-origin:0 100%;
  transform:rotate(-90deg);
  z-index:1;
}
.jmMaskM {
  animation: jm-cycle-jmMask 30s 1 linear; /*en för 40 och en för 15*/
  animation: jm-cycle-jmMask 30s 10 linear; /*en för 40 och en för 15*/
  border-top-left-radius: 50px;
  background-color:#00703c;
  bottom:50%;
  left:0;
  z-index:1;
}
.jmTimerH, .jmTickerH, .jmMaskH {
  width:100px;
  height:100px;
  background-color:#00703c;
  position:relative;
}

.jmTimerH {
    border-radius: 100%;
    width: 40px;
    height: 41px;
    overflow: hidden;
    border: 1px solid #999999;
    transform: scale(2,2);
    position: absolute;
    left: 38px;
    top: 72px;
    opacity: 0.5;
}
.jmTickerH, .jmMaskH {
  position:absolute;
  width:50%;
  height:50%;
}
.jmTickerH {
  animation: jm-cycle 15s 1 linear; /*en för 40 och en för 15*/
  background-color:#b7d035;
  bottom:50%;
  left:50%;
  border-top-right-radius: 100%;
  transform-origin:0 100%;
  transform:rotate(-90deg);
  z-index:1;
}
.jmMaskH {
  animation: jm-cycle-jmMask 15s 1 linear; /*en för 40 och en för 15*/
  animation: jm-cycle-jmMask 15s 10 linear; /*en för 40 och en för 15*/
  border-top-left-radius: 50px;
  background-color:#00703c;
  bottom:50%;
  left:0;
  z-index:1;
}

@keyframes jm-cycle-jmMask {
   0% {
    border-top-right-radius:0;
    border-top-left-radius: 100px;
    transform: rotate(0deg);
    transform-origin:100% 100%;
    background-color:#00703c;
    width:50%;
    bottom:50%;
    left:0;
    z-index:1;
  }


   50% {
    border-top-right-radius:0;
    border-top-left-radius: 100px;
    transform: rotate(0deg);
    transform-origin:100% 100%;
    background-color:#00703c;
    width:50%;
    bottom:50%;
    left:0;
    z-index:1;
  }

  50.01% {
    border-top-right-radius:0px;
    border-top-left-radius: 100px;
    transform: rotate(90deg);
    transform-origin:100% 100%;
    background-color:#b7d035;
    width:50%;
    bottom:50%;
    left:0;
    z-index:0;
  }

  75% {
    border-top-right-radius:0px;
    border-top-left-radius: 100px;
    transform: rotate(90deg);
    transform-origin:100% 100%;
    background-color:#b7d035;
    width:50%;
    bottom:50%;
    left:0;
  }

  75.01% {
    border-top-right-radius:100px;
    border-top-left-radius: 100px;
    transform: rotate(90deg);
    transform-origin:50% 100%;
    background-color:#b7d035;
    width:100%;
    bottom:50%;
    left:0;
  }

  100% {
    border-top-right-radius:100px;
    border-top-left-radius: 100px;
    transform: rotate(90deg);
    transform-origin:50% 100%;
    background-color:#b7d035;
    width:100%;
    bottom:50%;
    left:0;
  }
}

@keyframes jm-cycle {
  0% {
    border-top-right-radius: 100px;
    border-top-left-radius: 0;
    transform: rotate(-90deg);
    transform-origin:0 100%;
    width:50%;
  }

  25%  {
    border-top-right-radius: 100px;
    border-top-left-radius: 0;
    transform: rotate(0deg);
    transform-origin:0 100%;
    width:50%;
    left:50%;
  }

  25.01%  {
    border-top-right-radius: 100px;
    border-top-left-radius: 100px;
    transform: rotate(0deg);
    transform-origin:50% 100%;
    width:100%;
    left:0;
  }

  100% {
    border-top-right-radius: 100px;
    border-top-left-radius: 100px;
    transform: rotate(270deg);
    transform-origin:50% 100%;
    width:100%;
    left:0;
  }
}


.jmWatch {
  background-image:url('../assets/timer.png');
  /* mix-blend-mode:multiply; för att få bilden att smällt in mer i backgrunden */
  background-repeat: no-repeat;
  background-size: 120px;
  background-position: 0 0;
  width: 122px;
  height: 161px;
  position: relative;
  margin: 0 auto;
}

#linkage {
  position:fixed;
  top:145px;
  left:0px;
  background-color:#3d3d3d;
  color:#ffffff;
  text-decoration:none;
  padding:5px;
  width:10%;
}

#win {
  animation-duration: 2s;
  animation-name: bounceIn;
  font-size: 1em;
  animation-fill-mode: both;
  color: #28544b;
  font-weight: bold;
}
@keyframes bounceIn {
  0% {
    transform: scale(0.1);
    opacity: 0;
  }
  60% {
    transform: scale(2);
    opacity: 1;
  }
  100% {
    transform: scale(1);
  }
}
.pyro > .before,
.pyro > .after {
  position: absolute;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  box-shadow: -120px -218.66667px blue, 248px -16.66667px #00ff84,
    190px 16.33333px #002bff, -113px -308.66667px #ff009d,
    -109px -287.66667px #ffb300, -50px -313.66667px #ff006e,
    226px -31.66667px #ff4000, 180px -351.66667px #ff00d0,
    -12px -338.66667px #00f6ff, 220px -388.66667px #99ff00,
    -69px -27.66667px #ff0400, -111px -339.66667px #6200ff,
    155px -237.66667px #00ddff, -152px -380.66667px #00ffd0,
    -50px -37.66667px #00ffdd, -95px -175.66667px #a6ff00,
    -88px 10.33333px #0d00ff, 112px -309.66667px #005eff,
    69px -415.66667px #ff00a6, 168px -100.66667px #ff004c,
    -244px 24.33333px #ff6600, 97px -325.66667px #ff0066,
    -211px -182.66667px #00ffa2, 236px -126.66667px #b700ff,
    140px -196.66667px #9000ff, 125px -175.66667px #00bbff,
    118px -381.66667px #ff002f, 144px -111.66667px #ffae00,
    36px -78.66667px #f600ff, -63px -196.66667px #c800ff,
    -218px -227.66667px #d4ff00, -134px -377.66667px #ea00ff,
    -36px -412.66667px #ff00d4, 209px -106.66667px #00fff2,
    91px -278.66667px #000dff, -22px -191.66667px #9dff00,
    139px -392.66667px #a6ff00, 56px -2.66667px #0099ff,
    -156px -276.66667px #ea00ff, -163px -233.66667px #00fffb,
    -238px -346.66667px #00ff73, 62px -363.66667px #0088ff,
    244px -170.66667px #0062ff, 224px -142.66667px #b300ff,
    141px -208.66667px #9000ff, 211px -285.66667px #ff6600,
    181px -128.66667px #1e00ff, 90px -123.66667px #c800ff,
    189px 70.33333px #00ffc8, -18px -383.66667px #00ff33,
    100px -6.66667px #ff008c;
  animation: 1s bang ease-out infinite backwards,
    1s gravity ease-in infinite backwards, 5s position linear infinite backwards;
}
@keyframes bang {
  from {
    box-shadow: 0 0 white;
  }
}
@keyframes gravity {
  to {
    transform: translateY(200px);
    opacity: 0;
  }
}
@keyframes position {
  0%,
  19.9% {
    margin-top: 10%;
    margin-left: 40%;
  }
  20%,
  39.9% {
    margin-top: 40%;
    margin-left: 30%;
  }
  40%,
  59.9% {
    margin-top: 20%;
    margin-left: 70%;
  }
  60%,
  79.9% {
    margin-top: 30%;
    margin-left: 20%;
  }
  80%,
  99.9% {
    margin-top: 30%;
    margin-left: 80%;
  }
}
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
.difficulty {
  width: 200px;
  margin: 0 auto;
/*  margin-left: 130%;
  text-align: center;
  display: inline-block;*/
}
.img-responsive.mobile {
  display: none;
}

.difficulty :focus {
  background-color: red;
}
@media screen and (max-width: 721px){
    .currentUser{
        font-size: 10px;
    }
    #bootstrap-overrides{
      width: 75px;
    }
    #bootstrap-overrides:focus{
       width: 75px;
    }
    .item5, .item6, .item7 {
        font-size: 10px;
    }
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


button{
  margin: 15px;
}


.button {
display: inline-block;
min-width:100px;
padding: 22px 33px;
font-family: 'Lobster', cursive;
font-size: 26px;
line-height: 26px;
text-decoration: none;
color: #FFF;
text-shadow: 0 1px 2px rgba(0,0,0,0.75);
background: #5e0d0c;
outline: none;
border-radius: 15px;
border: 1px solid #4c0300;
box-shadow:
inset 1px 1px 0px rgba(255,255,255,0.25), /* highlight */
inset 0 0 6px #a23227, /* inner glow */
inset 0 80px 80px -40px #ac3223, /* gradient */
1px 1px 3px rgba(0,0,0,0.75); /* shadow */
position: relative;
overflow: visible; /* IE9 & 10 */
      transition: 500ms linear;
}
.button::before {
content: '';
display: block;
position: absolute;
top: -7px;
left: -3px;
right: 0;
height: 23px;
background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAAXCAYAAACS5bYWAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABFpJREFUeNrUV0tIo1cUvpkYjQ4xxSA6DxuNqG0dtaUKOgs3s6i0dFd3pSsXdjeIixakiGA34sZuXCkoONLFwJTK4GMYLYXg29gatTpiXurkbd7vv9/5ub+IxuhA7eiFQ5Kbc8/57ne/e87/ywRBYLdl3GG3aNwqsLJ0k0tLS+fmcnNzWUVFBVMoFGx2djarvLxcm5OTw+bm5iytra2xc4ExNjY27iqVyvvwK6CpeDzuCYVC1urq6qDA9UcfPp+PHR4esmAwKK6tr68/l5/8rgQ2Ozub1dbWyiYmJooaGxt/VqvV38jlchX9l0qlwoFA4DWS/RKLxRxFRUVf5+XlPcaaT2AP0sVPJBL2SCRiAPBpu93+vKamZo/Ae71eZjabWV1dXVqw7CKwp43ksrCw8Bhg7MJ/PLDZ5PHx8cz29vYT5JGD/bSYLgTrcDgYdk6siSc6NjZWDaAe4ZoHQL+cmZnRpZPnhWDpD8kw7uKo9ML/NMCsd2tr61vkzboMrEyv138M7TyLRqMWMBsX3sMgaZhMpp+AR5EJrCocDpuEGzKg4x8khs+CVWxubvZfR9JkMik4nU7BarUKLpeLmLsKuwIqTLynp4fqmIzASrqQT09Pf1VVVfX0KsWZ6uHBwQHTaDSsoKAgo6/H4xHLEcrVyRwuEisrKzs5XrrIVAVwiUVDKRRrL+YI32ewdVhMApuHWvcj6vids6J2u90MF4yBHUZNgKoEBaRBQalJqFSqtJfUYrGIlQX+ydXVVTN+u0tKSjQNDQ1axJVl2iTypebn55d7e3v/kqoDgZU1NTU9LCws/Py0M+2ekuGincxJ3yF+18jIyHJLS0slQJUWFxczrBeBE0vE5tHRkbixlZWVfSR8gTX/0P5gH7S1tX3Z3t7+BW8qAvwSfr8/jA0EIRM/qoFtampqbW9vTw+XA+ojUruVd3Z2tvb19T2TQFEim81GgVJoCvvj4+NLOJZgaWmpemdn5y3a6BbcnJDAw8HBwac6ne6eqCW5XDwB3qVSqM9/DAwMUNy/eVLabT7sI25qwgujThCBhWE+mAt2yNc4SQKSZrOQQE1HS22VJkmPAGTr7+//fX19fRk+Zgq0trbGeFAKEAQT98BSqKOj47vm5uaa/Px8JeIk4GcaHh6eWlxcfAU/A8xG67BxAX3fwdcbYUpSDJ06Z49Ak8ZC3OL8f3YiA4PBYKdLQ2AJ9OTk5GpXV9cQiCVh79M94QtlPLDUE/1gPNrd3f0W33W4cBoco48zQuy/IZYAMnGqlSc4c66L9JruQUaSARXeT8HGKzxAqFBekni6+h46+pMzGiJGMgTOJh1yU/KNEGDvZWvfBawkA9ppwGg0mrRa7SOI2g+gxOgbJIpdFpj72PnxSnPX8vqRxTURgBQWKisrH+GThOm+CtAzoK/9/Uiqq/6hoaHfdnd3jaOjo7/yY7yxbwqkWy3sQzpS2C6YirwvUJk0y7hurfyGRrnduPGvAAMASmo8wzeVwfsAAAAASUVORK5CYII=) no-repeat 0 0,
url(data:image/png;base64,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) no-repeat 50% 0,
url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAXCAYAAACFxybfAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAodJREFUeNrsVb1rWlEUv2pN/GqspKRSKFYXWzEloIWif0Fn6dJChQ7OQil0qd3EzcEpg0OgdHDr4CQODk7VRlLMEIVqApX4We0zflR9/Z1Ui4T34ksaaAYP/Hzc673n/M6550PG8zz73yKjn0wm83fDYDAwo9HINBrNnwOQg4MDs0ql2lQqlfdAWont7ng8Pjw+Ps44nc4G1pI9EXWaSOzt7TGO42aH5Pv7+08ajUZ0MBiUeXEZd7vdL5VK5fX29rZ+5tQiEmdxKrlcjsEYczgcynK5/BKKv/IXFNz/XiqVXkHdjUuRIA9SqdRD8or/R8Ez9fr9fqHVakUR4c2z0REjIQuHw2ZcrPBXLCA0RHTezEdHjIQqkUhEr9I4HOILhQLf6/VoOUFEvDMiQiToDx1Cdz+bzZ6bUFarlel0OkkVUK/XWbvdPoVer5fh3ntsfwJ+CJ2XA4p0Op1bpBgJyxDehQQ6nQ5DZXHBYDBZq9V+EhFUndnr9drEqoc2bwJbwGPgtohuVSwWe2Gz2TZMJpNgRKi6qtUqg2EWj8dTgUDgo0KhWPN4PC70EvXOzs67fD6/S6kiRIKeZA1YJ2MiJNbdbvfTUCjkV6vVK2hcDF8GI2w0GrGTkxM2HA5PDxaLxSOfz/cWEfk81X0XIMMFgJJ/srBjCgk8IdcfuVyuZ36//7nFYtkQyAMumUzuRiKRD0jMFLa+AZOpYwqgB/ziBVqmVBKUO7eAB/R0WG/Z7XaTVqtdbTabHJL6EK2djBaBPHA0NSqpbUsiMUeEBgpF4Q5AbZrmSJ/yEWgBTaBNHl9kdkgmMUeG7qwAq9PqovceTA3zlxlgsuswyuXsGsiSxJLEkoSY/BZgAEjRodi+uBruAAAAAElFTkSuQmCC) no-repeat 100% 0;
}
.button:hover {
background: #a61715;
text-shadow: 0 1px 2px rgba(0,0,0,0.75), 0 0 40px #FFF;
box-shadow:
inset 1px 1px 0px rgba(255,255,255,0.25), /* highlight */
inset 0 0 6px #da3b2c, /* inner glow */
inset 0 80px 80px -40px #dd4330, /* gradient */
1px 1px 3px rgba(0,0,0,0.75); /* shadow */
}

.button:active {
box-shadow:
inset 1px 1px 0px rgba(255,255,255,0.25), /* highlight */
inset 0 0 6px #da3b2c, /* inner glow */
inset 0 80px 80px -40px #dd4330, /* gradient */
0px 1px 0px rgba(255,255,255,0.25); /* shadow */
      transition: 50ms linear;

      }

.snowflake {
  color: #fff;
  font-size: 3em;
  font-family: Arial, sans-serif;
  text-shadow: 0 0 5px #000;
}

@-webkit-keyframes snowflakes-fall{0%{top:-10%}100%{top:100%}}@-webkit-keyframes snowflakes-shake{0%,100%{-webkit-transform:translateX(0);transform:translateX(0)}50%{-webkit-transform:translateX(80px);transform:translateX(80px)}}@keyframes snowflakes-fall{0%{top:-10%}100%{top:100%}}@keyframes snowflakes-shake{0%,100%{transform:translateX(0)}50%{transform:translateX(80px)}}.snowflake{position:fixed;top:-10%;z-index:9999;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default;-webkit-animation-name:snowflakes-fall,snowflakes-shake;-webkit-animation-duration:10s,3s;-webkit-animation-timing-function:linear,ease-in-out;-webkit-animation-iteration-count:infinite,infinite;-webkit-animation-play-state:running,running;animation-name:snowflakes-fall,snowflakes-shake;animation-duration:10s,3s;animation-timing-function:linear,ease-in-out;animation-iteration-count:infinite,infinite;animation-play-state:running,running}.snowflake:nth-of-type(0){left:1%;-webkit-animation-delay:0s,0s;animation-delay:0s,0s}.snowflake:nth-of-type(1){left:10%;-webkit-animation-delay:1s,1s;animation-delay:1s,1s}.snowflake:nth-of-type(2){left:20%;-webkit-animation-delay:6s,.5s;animation-delay:6s,.5s}.snowflake:nth-of-type(3){left:30%;-webkit-animation-delay:4s,2s;animation-delay:4s,2s}.snowflake:nth-of-type(4){left:40%;-webkit-animation-delay:2s,2s;animation-delay:2s,2s}.snowflake:nth-of-type(5){left:50%;-webkit-animation-delay:8s,3s;animation-delay:8s,3s}.snowflake:nth-of-type(6){left:60%;-webkit-animation-delay:6s,2s;animation-delay:6s,2s}.snowflake:nth-of-type(7){left:70%;-webkit-animation-delay:2.5s,1s;animation-delay:2.5s,1s}.snowflake:nth-of-type(8){left:80%;-webkit-animation-delay:1s,0s;animation-delay:1s,0s}.snowflake:nth-of-type(9){left:90%;-webkit-animation-delay:3s,1.5s;animation-delay:3s,1.5s}.snowflake:nth-of-type(10){left:25%;-webkit-animation-delay:2s,0s;animation-delay:2s,0s}.snowflake:nth-of-type(11){left:65%;-webkit-animation-delay:4s,2.5s;animation-delay:4s,2.5s}


</style>
