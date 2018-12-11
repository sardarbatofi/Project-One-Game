<template>
  <div class="about">

  </div>
</template>
<script>
    
export default{
  name: 'About',
  data() {
    return{
        userInput: 0,
    }
},
    
  methods: {
    randomNumber(){
      return Math.floor(Math.random() * 10 + 1);
    } 
},
    
  computed: {
    message(){
      if (this.userInput == this.randomNumber()) {
        return 'Correct answer!';
      } else if (this.userInput < this.randomNumber()){
        return 'Higher!';
      } else if (this.userInput > this.randomNumber()){
        return 'Lower!';
      } 
        return this.message;
    }
  }
}
</script>