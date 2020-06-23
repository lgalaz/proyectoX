import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
      user: null,
    },
    getters: {
        isAuthenticated (state) {
          return state.user !== null;
        }
    },
    mutations: {
        clearUser (state) {
            state.user = null;
        },
        setUser (state, user) {
            state.user = user;
        },
    }
});
