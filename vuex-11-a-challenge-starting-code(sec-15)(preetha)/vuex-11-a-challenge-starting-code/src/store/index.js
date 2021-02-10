import {createStore} from 'vuex';

import rootActions from './actions.js';
import rootMutations from './mutations.js';
import rootGetters from './getters.js';
import cartModule from './modules/cart.js';
import productsModule from './modules/products.js';

const store = createStore({
  modules: {
    cart: cartModule,
    products: productsModule
  },
  state() {
    return {
      isLoggedIn: false,
    };
  },
  mutations: rootMutations,
  actions: rootActions,
  getters: rootGetters
});

export default store;