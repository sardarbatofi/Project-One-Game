<template>
  <div class="home">
<Hem />
  <button @click="logout">Logga ut</button> 
  </div>
</template>
<script>
   import Hem from '@/components/Hem.vue'
import firebase from 'firebase'
 
export default {
  name: 'home',
  components: {
    Hem
  },
  methods: {
    logout: function(){
      firebase.auth().signOut().then(() => {
        this.$router.replace('login')
      })
    }

  }
}
</script>