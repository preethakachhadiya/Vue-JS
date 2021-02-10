<template>
  <button @click="increment">Add 2</button>
  <button @click="increase({value: 11})">Add 11</button>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    // addOne() {
    //   this.$store.dispatch('incrementCounter');
    // }
    // ...mapActions(['incrementCounter', 'increaseCounter'])
    ...mapActions('numbers', {
      'increment': 'incrementCounter',
      'increase': 'increaseCounter',
    })
  }
}
</script>