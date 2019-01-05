<template>
  <div class="home">
<Hem />

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