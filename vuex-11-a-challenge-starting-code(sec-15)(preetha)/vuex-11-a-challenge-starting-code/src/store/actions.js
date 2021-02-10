const rootActions = {
  login(context) {
    context.commit('login');
  },
  logout(context) {
    context.commit('logout');
  }
};

export default rootActions;