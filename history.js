new Vue({
    el: "app",
    data: {
        turns: []
    },
    methods:
    {
        startGame(){
            //Alexandra's code
            this.turn=[];
        },
        
        playerGuess: function () {
            //Louise' code about making a guess

            //add a guess as a first item in an array
            this.turns.unshift({
                // var guess
                isPlayer: true,
                text: "Your lastest guess is: " + guess
            });

            //Louise' code about checking higher/lower
        },

        botGuess: function () {
            //Louise' code about making a guess

            //add a guess as a first item in an array
            this.turns.unshift({
                //var guessC
                isPlayer: false,
                text: "Computer's lastest guess is: " + guessC
            });

            //Louise' code about checking higher/lower
        }
    }
})
