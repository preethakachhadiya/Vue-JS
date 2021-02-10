export default {
  incrementCounter(context) {
    setTimeout(() => {
      context.commit('incrementCounter');
    }, 200);
  },
  increaseCounter(context, payload) {
    console.log(context); 
    setTimeout(() => {
      context.commit('increaseCounter', payload)
    }, 200);
  },
}