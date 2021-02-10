export default {
  incrementCounter(state) {
    state.counter += 2;
  },
  increaseCounter(state, payload) {
    state.counter += payload.value;
  }
};
