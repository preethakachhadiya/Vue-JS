<template>
  <base-container title="Vuex" v-if="isAuth">
    <the-counter></the-counter>
    <hr>
    <favourite-value></favourite-value>
    <change-counter></change-counter>
    <button @click="addOne">Add 10</button>
  </base-container>
  <base-container title="Auth">
    <user-auth></user-auth>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import FavouriteValue from './components/FavouriteValue.vue';
import UserAuth from './components/UserAuth.vue';

export default {
  components: {
    BaseContainer,
    TheCounter, 
    ChangeCounter,
    FavouriteValue,
    UserAuth
  },
  methods: {
    addOne() {
      // this.$store.commit('increaseCounter', {value: 10})
      this.$store.dispatch({
        type: 'numbers/increaseCounter',
        value: 10
      });
    }
  },
  computed: {
    isAuth() {
      return this.$store.getters.userIsAuthenticated;
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
