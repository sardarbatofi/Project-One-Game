<template>
  <div class="home">
    <Hem/>
    <social/>
  </div>
</template>
<script>
import Hem from "@/components/Hem.vue";
import Highscore from "@/components/Highscore.vue";
import Admin from "@/components/Admin.vue";

import firebase from "firebase";

export default {
  name: "home",
  components: {
    Hem
  },
  methods: {
    logout: function() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace("login");
        });
    }
  }
};
</script>