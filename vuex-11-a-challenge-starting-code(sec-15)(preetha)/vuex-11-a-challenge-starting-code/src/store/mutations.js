const rootMutations = {
  login(state) {
    state.isLoggedIn = true;
  },
  logout(state) {
    state.isLoggedIn = false;
  },
}

export default rootMutations;