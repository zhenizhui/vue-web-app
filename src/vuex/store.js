import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  currentSeller: {},
  shopCart: []
};

const mutations = {
  SET_CURRENT_SELLER (state, seller) {
    state.currentSeller = seller;
  },
  GET_CURRENT_SELLER (state) {
    return state.currentSeller;
  }
};

export default new Vuex.Store({
  state,
  mutations
});
