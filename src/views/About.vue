<template>
  <div class="about">
<Hem />
  </div>
</template>
<script>
   import Hem from '@/components/Hem.vue'
import firebase from 'firebase'
 
export default {
  name: 'about',
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